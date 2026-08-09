// CodeDNA — deterministic personalization engine (product spec section 9:
// "Do NOT over-engineer machine learning for this initially. Start with
// deterministic scoring/rules."). Every export here is a pure function of
// ProgressState + the course catalog, so a real ML scorer could replace the
// internals of getTopicMastery() later without touching any call site.

import { LearningPath } from "@/data/types";
import { ProgressState } from "./progress";
import { findNextLesson } from "./path-progress";

// Below MIN_ATTEMPTS a topic isn't scored at all — a single wrong answer
// can't permanently brand a topic "weak". Three tiers mirror the
// needs-review/consolidating/mastered split common in mastery-learning
// heuristics, which is the honest justification available for a v1 rule.
export const MIN_ATTEMPTS = 3;
export const WEAK_THRESHOLD = 0.6;
export const STRONG_THRESHOLD = 0.85;

export type MasteryLevel = "weak" | "developing" | "strong";

export interface TopicMastery {
  topic: string;
  accuracy: number;
  attempts: number;
  level: MasteryLevel;
}

export function getTopicMastery(state: ProgressState): TopicMastery[] {
  return Object.entries(state.topicStats)
    .filter(([, stat]) => stat.total >= MIN_ATTEMPTS)
    .map(([topic, stat]) => {
      const accuracy = stat.total > 0 ? stat.correct / stat.total : 0;
      const level: MasteryLevel =
        accuracy < WEAK_THRESHOLD ? "weak" : accuracy >= STRONG_THRESHOLD ? "strong" : "developing";
      return { topic, accuracy, attempts: stat.total, level };
    });
}

export function getWeakTopics(state: ProgressState): TopicMastery[] {
  return getTopicMastery(state)
    .filter((t) => t.level === "weak")
    .sort((a, b) => a.accuracy - b.accuracy);
}

export function getStrongTopics(state: ProgressState): TopicMastery[] {
  return getTopicMastery(state).filter((t) => t.level === "strong");
}

// Layers weak-topic prioritization on top of the existing naive
// "first incomplete lesson" recommendation: if any not-yet-completed lesson
// in the path is tagged with a weak topic, recommend that one first.
export function recommendNextLesson(path: LearningPath, state: ProgressState) {
  const base = findNextLesson(path, state);
  const weakTopicSet = new Set(getWeakTopics(state).map((t) => t.topic));
  if (weakTopicSet.size === 0) return base;

  for (const mod of path.modules) {
    for (const lesson of mod.lessons) {
      if (state.completedLessons.includes(lesson.id)) continue;
      if (lesson.topicTags?.some((t) => weakTopicSet.has(t))) {
        return { module: mod, lesson };
      }
    }
  }
  return base;
}

export function recommendRevisionTopics(state: ProgressState, limit = 3): TopicMastery[] {
  return getWeakTopics(state).slice(0, limit);
}

export interface RoadmapStep {
  path: LearningPath;
  moduleSlug: string;
  lessonSlug: string;
  reason: "weak-topic-revision" | "next-in-path";
}

// A simple ordered plan: weak-topic lessons first (across all in-progress
// paths), then each path's normal next lesson. Not exhaustive — it's meant
// as a "what should I do today" list, not a full curriculum planner.
export function generateRoadmap(state: ProgressState, paths: LearningPath[], limit = 5): RoadmapStep[] {
  const steps: RoadmapStep[] = [];
  const weakTopicSet = new Set(getWeakTopics(state).map((t) => t.topic));

  if (weakTopicSet.size > 0) {
    for (const path of paths) {
      for (const mod of path.modules) {
        for (const lesson of mod.lessons) {
          if (state.completedLessons.includes(lesson.id)) continue;
          if (lesson.topicTags?.some((t) => weakTopicSet.has(t))) {
            steps.push({ path, moduleSlug: mod.slug, lessonSlug: lesson.slug, reason: "weak-topic-revision" });
          }
        }
      }
    }
  }

  for (const path of paths) {
    const next = findNextLesson(path, state);
    if (next) {
      steps.push({ path, moduleSlug: next.module.slug, lessonSlug: next.lesson.slug, reason: "next-in-path" });
    }
  }

  return steps.slice(0, limit);
}
