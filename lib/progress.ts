"use client";

export interface Badge {
  id: string;
  title: string;
  titleUrdu: string;
  description: string;
  icon: string;
  earned: boolean;
}

export interface QuizResult {
  score: number;
  total: number;
  date: string; // yyyy-mm-dd
}

export interface ChallengeAttempt {
  passed: boolean;
  attempts: number;
}

export interface TopicStat {
  correct: number;
  total: number;
}

export interface DailyChallengeCompletion {
  taskId: string;
  xpAwarded: number;
}

export interface ProgressState {
  completedLessons: string[]; // lesson ids
  completedProjects: string[]; // module ids
  lastActiveDate: string | null; // yyyy-mm-dd
  streak: number;
  xp: number;
  // CodeDNA + gamification (additive — old localStorage blobs default these
  // in via loadProgress()'s merge below, no migration needed)
  quizResults: Record<string, QuizResult>; // keyed by lesson id
  challengeAttempts: Record<string, ChallengeAttempt>; // keyed by lesson id
  topicStats: Record<string, TopicStat>; // keyed by TopicTag
  dailyChallengeCompletions: Record<string, DailyChallengeCompletion>; // keyed by yyyy-mm-dd
  seenBadges: string[]; // badge ids already celebrated, so the reveal animation doesn't replay on refresh
}

const STORAGE_KEY = "codeduniya_progress_v1";

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string) {
  const d1 = new Date(a).getTime();
  const d2 = new Date(b).getTime();
  return Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
}

export function getDefaultProgress(): ProgressState {
  return {
    completedLessons: [],
    completedProjects: [],
    lastActiveDate: null,
    streak: 0,
    xp: 0,
    quizResults: {},
    challengeAttempts: {},
    topicStats: {},
    dailyChallengeCompletions: {},
    seenBadges: [],
  };
}

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return getDefaultProgress();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProgress();
    const parsed = JSON.parse(raw);
    return { ...getDefaultProgress(), ...parsed };
  } catch {
    return getDefaultProgress();
  }
}

export function saveProgress(state: ProgressState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// Wipes all local progress (completed lessons/projects, streak, XP, quiz
// history, badges) and starts fresh. There's no server account behind this —
// progress lives entirely in this browser's localStorage — so this is the
// only way to reset it.
export function resetProgress(): ProgressState {
  if (typeof window !== "undefined") window.localStorage.removeItem(STORAGE_KEY);
  return getDefaultProgress();
}

// Call whenever the student does something (visits a lesson, completes a task)
// to keep the streak counter accurate.
export function touchStreak(state: ProgressState): ProgressState {
  const today = todayStr();
  if (state.lastActiveDate === today) return state;

  let streak = state.streak;
  if (!state.lastActiveDate) {
    streak = 1;
  } else {
    const diff = daysBetween(state.lastActiveDate, today);
    if (diff === 1) streak = streak + 1;
    else if (diff > 1) streak = 1;
  }
  return { ...state, streak, lastActiveDate: today };
}

// Diffs computeBadges() against seenBadges, fires one celebrate() per newly
// earned badge (never more than one at a time is visible — toast.tsx queues
// them), and marks them seen so a refresh doesn't replay the reveal.
function celebrateNewBadges(state: ProgressState): ProgressState {
  const newlyEarned = computeBadges(state).filter((b) => b.earned && !state.seenBadges.includes(b.id));
  if (newlyEarned.length === 0) return state;
  for (const badge of newlyEarned) {
    celebrate(`Naya badge mila: ${badge.titleUrdu} 🏅`);
  }
  return markBadgesSeen(state, newlyEarned.map((b) => b.id));
}

export function completeLesson(state: ProgressState, lessonId: string): ProgressState {
  if (state.completedLessons.includes(lessonId)) return touchStreak(state);
  const updated = {
    ...state,
    completedLessons: [...state.completedLessons, lessonId],
    xp: state.xp + 20,
  };
  celebrate("Lesson mukammal! Shabash 🎉");
  return celebrateNewBadges(touchStreak(updated));
}

export function completeProject(state: ProgressState, moduleId: string): ProgressState {
  if (state.completedProjects.includes(moduleId)) return touchStreak(state);
  const updated = {
    ...state,
    completedProjects: [...state.completedProjects, moduleId],
    xp: state.xp + 50,
  };
  celebrate("Mini project complete! Zabardast 🚀");
  return celebrateNewBadges(touchStreak(updated));
}

// Records a quiz attempt and folds each answered question into per-topic
// stats (lib/codedna.ts reads topicStats to find weak/strong topics).
export function recordQuizResult(
  state: ProgressState,
  lessonId: string,
  result: { score: number; total: number; topicTags?: string[] }
): ProgressState {
  const topicStats = { ...state.topicStats };
  for (const tag of result.topicTags ?? []) {
    const prev = topicStats[tag] ?? { correct: 0, total: 0 };
    topicStats[tag] = {
      correct: prev.correct + result.score,
      total: prev.total + result.total,
    };
  }
  const updated: ProgressState = {
    ...state,
    quizResults: {
      ...state.quizResults,
      [lessonId]: { score: result.score, total: result.total, date: todayStr() },
    },
    topicStats,
    xp: state.xp + result.score * 5,
  };
  celebrate(
    result.score === result.total
      ? "Shabash! Poora quiz sahi kiya 🔥"
      : `Quiz mukammal — ${result.score}/${result.total} sahi!`
  );
  return celebrateNewBadges(touchStreak(updated));
}

export function recordChallengeAttempt(
  state: ProgressState,
  lessonId: string,
  passed: boolean
): ProgressState {
  const prev = state.challengeAttempts[lessonId] ?? { passed: false, attempts: 0 };
  const updated: ProgressState = {
    ...state,
    challengeAttempts: {
      ...state.challengeAttempts,
      [lessonId]: { passed: prev.passed || passed, attempts: prev.attempts + 1 },
    },
    xp: state.xp + (passed && !prev.passed ? 30 : 0),
  };
  if (passed && !prev.passed) celebrate("Challenge complete ho gaya 😎");
  return celebrateNewBadges(touchStreak(updated));
}

export function completeDailyChallenge(
  state: ProgressState,
  taskId: string,
  xpAwarded = 25
): ProgressState {
  const today = todayStr();
  if (state.dailyChallengeCompletions[today]) return touchStreak(state);
  const updated: ProgressState = {
    ...state,
    dailyChallengeCompletions: {
      ...state.dailyChallengeCompletions,
      [today]: { taskId, xpAwarded },
    },
    xp: state.xp + xpAwarded,
  };
  celebrate("Shabash! Aaj ka challenge complete 🔥");
  return celebrateNewBadges(touchStreak(updated));
}

export function markBadgesSeen(state: ProgressState, badgeIds: string[]): ProgressState {
  const merged = new Set([...state.seenBadges, ...badgeIds]);
  return { ...state, seenBadges: Array.from(merged) };
}

export interface Level {
  name: string;
  nameUrdu: string;
  minXp: number;
}

// Named thresholds, not a formula — easy to see/tune, and the "next level"
// gap is simple to compute for a progress bar.
const LEVELS: Level[] = [
  { name: "Beginner", nameUrdu: "Shuruati", minXp: 0 },
  { name: "Learner", nameUrdu: "Seekhne Wala", minXp: 100 },
  { name: "Builder", nameUrdu: "Banane Wala", minXp: 300 },
  { name: "Coder", nameUrdu: "Coder", minXp: 700 },
  { name: "Pro", nameUrdu: "Pro", minXp: 1500 },
];

export function getLevel(xp: number): { level: Level; index: number; next: Level | null; xpToNext: number | null } {
  let index = 0;
  for (let i = 0; i < LEVELS.length; i++) {
    if (xp >= LEVELS[i].minXp) index = i;
  }
  const level = LEVELS[index];
  const next = LEVELS[index + 1] ?? null;
  return { level, index, next, xpToNext: next ? next.minXp - xp : null };
}

// Celebration hook: a safe no-op until Increment 2 wires a real toast. Pages
// call this after completeLesson/completeProject/completeDailyChallenge or a
// newly-earned badge so the UI layer can react without progress.ts importing
// any UI component.
type CelebrationListener = (message: string) => void;
let celebrationListener: CelebrationListener | null = null;

export function onCelebrate(listener: CelebrationListener | null) {
  celebrationListener = listener;
}

export function celebrate(message: string) {
  celebrationListener?.(message);
}

export function computeBadges(state: ProgressState): Badge[] {
  const lessonsCount = state.completedLessons.length;
  const projectsCount = state.completedProjects.length;
  return [
    {
      id: "first-step",
      title: "First Step",
      titleUrdu: "Pehla Qadam",
      description: "Completed your very first lesson.",
      icon: "Footprints",
      earned: lessonsCount >= 1,
    },
    {
      id: "on-a-roll",
      title: "On a Roll",
      titleUrdu: "Roll Par Ho",
      description: "3-day learning streak.",
      icon: "Flame",
      earned: state.streak >= 3,
    },
    {
      id: "week-warrior",
      title: "Week Warrior",
      titleUrdu: "Hafta Champion",
      description: "7-day learning streak.",
      icon: "CalendarCheck",
      earned: state.streak >= 7,
    },
    {
      id: "builder",
      title: "Builder",
      titleUrdu: "Builder",
      description: "Completed your first mini project.",
      icon: "Hammer",
      earned: projectsCount >= 1,
    },
    {
      id: "five-lessons",
      title: "Momentum",
      titleUrdu: "Momentum",
      description: "Completed 5 lessons.",
      icon: "Rocket",
      earned: lessonsCount >= 5,
    },
  ];
}
