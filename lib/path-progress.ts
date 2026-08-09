import { LearningPath } from "@/data/types";
import { ProgressState } from "./progress";

export function pathLessonIds(path: LearningPath): string[] {
  return path.modules.flatMap((m) => m.lessons.map((l) => l.id));
}

export function pathPercentComplete(path: LearningPath, state: ProgressState): number {
  const ids = pathLessonIds(path);
  if (ids.length === 0) return 0;
  const done = ids.filter((id) => state.completedLessons.includes(id)).length;
  return Math.round((done / ids.length) * 100);
}

export function findNextLesson(path: LearningPath, state: ProgressState) {
  for (const mod of path.modules) {
    for (const lesson of mod.lessons) {
      if (!state.completedLessons.includes(lesson.id)) {
        return { module: mod, lesson };
      }
    }
  }
  return null;
}
