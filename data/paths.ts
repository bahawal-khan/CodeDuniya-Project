// Content now lives in data/courses/ — one file per learning path, so adding
// a new course is an additive change instead of an edit to a single monolith.
// This file only re-exports, so existing `@/data/paths` imports keep working.
export { learningPaths, getPathBySlug, getAllLessonsFlat } from "./courses/index";
