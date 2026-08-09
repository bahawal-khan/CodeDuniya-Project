// A single shared "Aaj ka Challenge" across all students and paths — picked
// deterministically by day-of-year, reusing existing dailyTasks content
// (no new authoring). Avoids needing per-student "which path are you
// focused on today" state, which would be ambiguous for anyone with
// multiple in-progress paths.
import { LearningPath, DailyTask } from "@/data/types";
import { learningPaths } from "@/data/paths";

function dayOfYear(date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function flattenAllDailyTasks(paths: LearningPath[] = learningPaths): { path: LearningPath; task: DailyTask }[] {
  return paths.flatMap((path) => path.dailyTasks.map((task) => ({ path, task })));
}

export function getTodaysChallenge(paths: LearningPath[] = learningPaths) {
  const all = flattenAllDailyTasks(paths);
  if (all.length === 0) return null;
  return all[dayOfYear() % all.length];
}
