import type { LearningPath, Module, Lesson } from "../types";
import fullStackPath from "./full-stack-web-development";
import aiPath from "./ai-machine-learning-engineering";
import pythonPath from "./complete-python";
import javascriptPath from "./complete-javascript";
import webBasicsPath from "./web-development-basics";

// Adding a new course = add a new file here (copy the shape of an existing
// one) and add it to this array. Nothing else in the app needs to change —
// paths listing, dashboard, search and routing all derive from this array.
// Ordered easiest-first (by `level`) so anyone browsing paths for the first
// time sees the right starting point before the harder tracks.
export const learningPaths: LearningPath[] = [
  webBasicsPath,
  pythonPath,
  javascriptPath,
  fullStackPath,
  aiPath,
];

// Dev-time guard: a duplicate path/module/lesson slug across course files
// wouldn't be caught by TypeScript (each file is independently well-typed)
// but would silently break routing (generateStaticParams, getPathBySlug).
if (process.env.NODE_ENV !== "production") {
  const seenPathSlugs = new Set<string>();
  for (const path of learningPaths) {
    if (seenPathSlugs.has(path.slug)) {
      throw new Error(`Duplicate learning path slug: "${path.slug}"`);
    }
    seenPathSlugs.add(path.slug);

    const seenLessonSlugs = new Set<string>();
    for (const mod of path.modules) {
      for (const lesson of mod.lessons) {
        const key = `${mod.slug}/${lesson.slug}`;
        if (seenLessonSlugs.has(key)) {
          throw new Error(
            `Duplicate (moduleSlug, lessonSlug) within path "${path.slug}": "${key}"`
          );
        }
        seenLessonSlugs.add(key);
      }
    }
  }
}

export function getPathBySlug(slug: string): LearningPath | undefined {
  return learningPaths.find((p) => p.slug === slug);
}

export function getAllLessonsFlat(): { path: LearningPath; module: Module; lesson: Lesson }[] {
  const out: { path: LearningPath; module: Module; lesson: Lesson }[] = [];
  for (const path of learningPaths) {
    for (const mod of path.modules) {
      for (const lesson of mod.lessons) {
        out.push({ path, module: mod, lesson });
      }
    }
  }
  return out;
}
