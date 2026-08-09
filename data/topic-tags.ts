// Namespaced topic tags used by CodeDNA (lib/codedna.ts) to track per-topic
// quiz/challenge performance. Namespaced (e.g. "js.loops" not "loops") so tags
// from different future courses never collide, and typed so a typo in a
// lesson's `topicTags` is a compile error instead of a silently-orphaned tag
// that never accumulates stats.
export const TOPIC_TAGS = [
  "html.structure",
  "html.tags",
  "css.selectors",
  "css.box-model",
  "js.variables",
  "js.data-types",
  "js.functions",
  "js.arrow-functions",
  "js.arrays",
  "js.array-methods",
  "js.dom",
  "js.conditionals",
  "js.async",
  "python.variables",
  "python.print",
  "python.conditionals",
  "python.functions",
  "python.lists",
  "python.loops",
  "python.pandas",
  "python.ml-basics",
  "react.components",
  "react.props",
  "react.state",
  "react.context",
  "backend.express",
  "backend.rest-apis",
  "git.basics",
  "git.branching",
] as const;

export type TopicTag = (typeof TOPIC_TAGS)[number];
