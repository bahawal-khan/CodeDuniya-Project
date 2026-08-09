import type { TopicTag } from "./topic-tags";

export interface LineExplanation {
  line: string;
  explanationUr: string;
  explanationEn: string;
}

export interface CodeExample {
  language: string;
  code: string;
}

export interface DryRunStep {
  stepEn: string;
  stepUr: string;
}

export interface QuizQuestion {
  question: string;
  questionUr: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CodingChallenge {
  promptEn: string;
  promptUr: string;
  starterCode: string;
  language: string;
  hints: string[];
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  titleUrdu: string;
  estMinutes: number;
  summaryEn: string;
  summaryUr: string;
  explanationEn: string;
  explanationUr: string;
  codeExample?: CodeExample;
  lineByLine?: LineExplanation[];
  whyItWorksEn: string;
  whyItWorksUr: string;
  tryItYourself: string;
  tryItYourselfUr: string;
  analogyTitle?: string;
  analogyUr?: string;
  analogyEn?: string;
  hasFullContent: boolean;
  // Practice/Build/Debug layer (section 6 of the product spec) — all optional
  // so the 39 existing lessons keep working untouched while new ones opt in.
  realLifeExampleEn?: string;
  realLifeExampleUr?: string;
  commonMistakesEn?: string;
  commonMistakesUr?: string;
  dryRun?: DryRunStep[];
  cheatSheetEn?: string;
  cheatSheetUr?: string;
  quiz?: QuizQuestion[];
  codingChallenge?: CodingChallenge;
  // CodeDNA reads this to build per-topic mastery stats — see lib/codedna.ts.
  topicTags?: TopicTag[];
}

export interface MiniProject {
  title: string;
  titleUrdu: string;
  description: string;
  requirements: string[];
}

export interface Module {
  id: string;
  slug: string;
  title: string;
  titleUrdu: string;
  description: string;
  topics: string[];
  lessons: Lesson[];
  miniProject?: MiniProject;
}

export type PathTheme = "saffron" | "rani" | "teal" | "truckblue";

export interface DailyTask {
  id: string;
  title: string;
  titleUrdu: string;
  description: string;
}

export interface LearningPath {
  id: string;
  slug: string;
  title: string;
  titleUrdu: string;
  description: string;
  descriptionUr: string;
  theme: PathTheme;
  icon: string;
  level: string;
  estWeeks: number;
  modules: Module[];
  dailyTasks: DailyTask[];
}
