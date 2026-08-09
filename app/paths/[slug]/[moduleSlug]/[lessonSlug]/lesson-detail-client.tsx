"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock,
  Globe,
  Lightbulb,
  ListChecks,
  ListOrdered,
  MessageCircleQuestion,
  Route,
  Sparkles,
  Target,
  Wand2,
} from "lucide-react";
import { LearningPath, Module, Lesson } from "@/data/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { CodePlayground } from "@/components/code-playground";
import { Quiz } from "@/components/quiz";
import {
  loadProgress,
  saveProgress,
  completeLesson,
  recordQuizResult,
  recordChallengeAttempt,
  ProgressState,
} from "@/lib/progress";
import { useSetYaarContext } from "@/lib/codeyaar-context";

interface LessonDetailClientProps {
  path: LearningPath;
  mod: Module;
  lesson: Lesson;
  prev?: { mod: Module; lesson: Lesson };
  next?: { mod: Module; lesson: Lesson };
}

export function LessonDetailClient({ path, mod, lesson, prev, next }: LessonDetailClientProps) {
  const router = useRouter();
  const [progress, setProgress] = React.useState<ProgressState | null>(null);

  useSetYaarContext({ lessonTitle: lesson.title, pathTitle: path.title });

  React.useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const isDone = progress?.completedLessons.includes(lesson.id) ?? false;

  function markComplete() {
    const current = progress ?? loadProgress();
    const updated = completeLesson(current, lesson.id);
    saveProgress(updated);
    setProgress(updated);
  }

  function markCompleteAndNext() {
    markComplete();
    if (next) {
      router.push(`/paths/${path.slug}/${next.mod.slug}/${next.lesson.slug}`);
    }
  }

  function handleQuizComplete(result: { score: number; total: number }) {
    const current = progress ?? loadProgress();
    const updated = recordQuizResult(current, lesson.id, { ...result, topicTags: lesson.topicTags });
    saveProgress(updated);
    setProgress(updated);
  }

  function handleChallengeAttempt(passed: boolean) {
    const current = progress ?? loadProgress();
    const updated = recordChallengeAttempt(current, lesson.id, passed);
    saveProgress(updated);
    setProgress(updated);
  }

  return (
    <div className="container max-w-3xl py-10">
      <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
        <Link
          href={`/paths/${path.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink/60 hover:text-rani dark:text-cream/60 dark:hover:text-saffron"
        >
          <ArrowLeft className="h-4 w-4" /> {path.title}
        </Link>
        {prev && (
          <Link
            href={`/paths/${path.slug}/${prev.mod.slug}/${prev.lesson.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink/50 hover:text-rani dark:text-cream/50 dark:hover:text-saffron"
          >
            <ArrowLeft className="h-4 w-4" /> Peechay: {prev.lesson.title}
          </Link>
        )}
      </div>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        <Badge variant="outline">{mod.title}</Badge>
        <span className="flex items-center gap-1 text-xs text-ink/50 dark:text-cream/50">
          <Clock className="h-3.5 w-3.5" /> ~{lesson.estMinutes} min
        </span>
        {isDone && (
          <span className="flex items-center gap-1 text-xs font-semibold text-teal">
            <CheckCircle2 className="h-3.5 w-3.5" /> Mukammal
          </span>
        )}
      </div>

      <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl font-extrabold leading-tight">
        {lesson.title}
      </motion.h1>
      <p className="mt-1 text-base font-semibold text-ink/50 dark:text-cream/50">{lesson.titleUrdu}</p>

      {!lesson.hasFullContent ? (
        <ComingSoon
          summaryEn={lesson.summaryEn}
          summaryUr={lesson.summaryUr}
          analogyTitle={lesson.analogyTitle}
          analogyEn={lesson.analogyEn}
          analogyUr={lesson.analogyUr}
        />
      ) : (
        <div className="mt-6 space-y-6">
          {/* Explanation with EN/UR toggle */}
          <Card className="p-5">
            <SectionHeading icon={Lightbulb} title="Samjho / Understand" color="text-rani-dark dark:text-rani" />
            <Tabs defaultValue="ur" className="mt-3">
              <TabsList>
                <TabsTrigger value="ur">Roman Urdu</TabsTrigger>
                <TabsTrigger value="en">English</TabsTrigger>
              </TabsList>
              <TabsContent value="ur">
                <p className="text-sm leading-relaxed text-ink/80 dark:text-cream/80">{lesson.explanationUr}</p>
              </TabsContent>
              <TabsContent value="en">
                <p className="text-sm leading-relaxed text-ink/80 dark:text-cream/80">{lesson.explanationEn}</p>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Analogy */}
          {lesson.analogyUr && (
            <Card className="phool-edge border-2 border-teal/25 bg-teal-soft p-5 text-ink dark:border-teal/30 dark:bg-teal/10 dark:text-cream">
              <SectionHeading icon={Sparkles} title={`Desi Analogy: ${lesson.analogyTitle}`} color="text-teal-dark dark:text-teal" />
              <Tabs defaultValue="ur" className="mt-3">
                <TabsList>
                  <TabsTrigger value="ur">Roman Urdu</TabsTrigger>
                  <TabsTrigger value="en">English</TabsTrigger>
                </TabsList>
                <TabsContent value="ur">
                  <p className="text-sm leading-relaxed">{lesson.analogyUr}</p>
                </TabsContent>
                <TabsContent value="en">
                  <p className="text-sm leading-relaxed">{lesson.analogyEn}</p>
                </TabsContent>
              </Tabs>
            </Card>
          )}

          {/* Code example */}
          {lesson.codeExample && (
            <Card className="p-5">
              <SectionHeading icon={Wand2} title="Code Example" color="text-rani-dark dark:text-rani" />
              <div className="mt-3">
                <CodeBlock language={lesson.codeExample.language} code={lesson.codeExample.code} />
              </div>
            </Card>
          )}

          {/* Live Playground */}
          {lesson.codeExample && ["html", "css", "javascript", "js", "jsx", "python"].includes(
            lesson.codeExample.language.toLowerCase()
          ) && (
            <Card className="p-5">
              <SectionHeading icon={Wand2} title="Live Playground — Khud Try Karo" color="text-rani-dark dark:text-rani" />
              <p className="mt-1 mb-3 text-xs text-ink/55 dark:text-cream/55">
                Code edit karo, Run dabao, output yahin dekho. Reset se original wapas aa jayega.
              </p>
              <CodePlayground
                language={lesson.codeExample.language}
                initialCode={lesson.codeExample.code}
                storageKey={`example-${lesson.id}`}
              />
            </Card>
          )}

          {/* Line by line */}
          {lesson.lineByLine && lesson.lineByLine.length > 0 && (
            <Card className="p-5">
              <SectionHeading icon={ListOrdered} title="Yeh Line Kyun Likhi Hai?" color="text-rani-dark dark:text-rani" />
              <div className="mt-3 space-y-3">
                {lesson.lineByLine.map((l, i) => (
                  <div key={i} className="rounded-xl border border-ink/10 p-3 dark:border-cream/10">
                    <code className="block overflow-x-auto rounded-md bg-ink/5 px-2 py-1 font-mono text-xs dark:bg-cream/10">
                      {l.line}
                    </code>
                    <p className="mt-2 text-sm text-ink/75 dark:text-cream/75">{l.explanationUr}</p>
                    <p className="mt-1 text-xs text-ink/45 dark:text-cream/45">{l.explanationEn}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Why it works */}
          <Card className="p-5">
            <SectionHeading icon={MessageCircleQuestion} title="Kyun Yeh Kaam Karta Hai?" color="text-rani-dark dark:text-rani" />
            <Tabs defaultValue="ur" className="mt-3">
              <TabsList>
                <TabsTrigger value="ur">Roman Urdu</TabsTrigger>
                <TabsTrigger value="en">English</TabsTrigger>
              </TabsList>
              <TabsContent value="ur">
                <p className="text-sm leading-relaxed text-ink/80 dark:text-cream/80">{lesson.whyItWorksUr}</p>
              </TabsContent>
              <TabsContent value="en">
                <p className="text-sm leading-relaxed text-ink/80 dark:text-cream/80">{lesson.whyItWorksEn}</p>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Try it yourself */}
          <Card className="border-2 border-rani/25 bg-rani-soft p-5 dark:border-rani/30 dark:bg-rani/10">
            <SectionHeading icon={Sparkles} title="Try It Yourself" color="text-rani-dark dark:text-rani" />
            <p className="mt-2 text-sm leading-relaxed text-ink/80 dark:text-cream/80">{lesson.tryItYourselfUr}</p>
            <p className="mt-1 text-xs text-ink/50 dark:text-cream/50">{lesson.tryItYourself}</p>
          </Card>

          {/* Real-life example */}
          {lesson.realLifeExampleUr && (
            <Card className="p-5">
              <SectionHeading icon={Globe} title="Real-Life Mein Kahan Milta Hai?" color="text-rani-dark dark:text-rani" />
              <p className="mt-2 text-sm leading-relaxed text-ink/80 dark:text-cream/80">{lesson.realLifeExampleUr}</p>
              <p className="mt-1 text-xs text-ink/50 dark:text-cream/50">{lesson.realLifeExampleEn}</p>
            </Card>
          )}

          {/* Common mistakes */}
          {lesson.commonMistakesUr && (
            <Card className="p-5">
              <SectionHeading icon={AlertTriangle} title="Aam Ghaltiyan / Common Mistakes" color="text-rani-dark dark:text-rani" />
              <p className="mt-2 text-sm leading-relaxed text-ink/80 dark:text-cream/80">{lesson.commonMistakesUr}</p>
              <p className="mt-1 text-xs text-ink/50 dark:text-cream/50">{lesson.commonMistakesEn}</p>
            </Card>
          )}

          {/* Dry run */}
          {lesson.dryRun && lesson.dryRun.length > 0 && (
            <Card className="p-5">
              <SectionHeading icon={Route} title="Dry Run — Code Kaise Chalta Hai" color="text-rani-dark dark:text-rani" />
              <ol className="mt-3 space-y-2">
                {lesson.dryRun.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-soft text-[11px] font-bold text-teal-dark dark:bg-teal/15 dark:text-teal">
                      {i + 1}
                    </span>
                    <span className="text-ink/80 dark:text-cream/80">
                      {step.stepUr}
                      <span className="mt-0.5 block text-xs text-ink/45 dark:text-cream/45">{step.stepEn}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Card>
          )}

          {/* Cheat sheet */}
          {lesson.cheatSheetUr && (
            <Card className="p-5">
              <SectionHeading icon={ClipboardList} title="Cheat Sheet" color="text-rani-dark dark:text-rani" />
              <p className="mt-2 text-sm leading-relaxed text-ink/80 dark:text-cream/80">{lesson.cheatSheetUr}</p>
              <p className="mt-1 text-xs text-ink/50 dark:text-cream/50">{lesson.cheatSheetEn}</p>
            </Card>
          )}

          {/* Quiz */}
          {lesson.quiz && lesson.quiz.length > 0 && (
            <Card className="p-5">
              <SectionHeading icon={ListChecks} title="Quiz — Apna Aap Test Karo" color="text-rani-dark dark:text-rani" />
              <div className="mt-3">
                <Quiz questions={lesson.quiz} onComplete={handleQuizComplete} />
              </div>
            </Card>
          )}

          {/* Coding challenge */}
          {lesson.codingChallenge && (
            <Card className="p-5">
              <SectionHeading icon={Target} title="Coding Challenge" color="text-rani-dark dark:text-rani" />
              <p className="mt-2 text-sm leading-relaxed text-ink/80 dark:text-cream/80">{lesson.codingChallenge.promptUr}</p>
              <p className="mt-1 text-xs text-ink/50 dark:text-cream/50">{lesson.codingChallenge.promptEn}</p>
              <div className="mt-3">
                <CodePlayground
                  language={lesson.codingChallenge.language}
                  initialCode={lesson.codingChallenge.starterCode}
                  storageKey={`challenge-${lesson.id}`}
                />
              </div>
              {lesson.codingChallenge.hints.length > 0 && (
                <details className="mt-3 text-sm">
                  <summary className="cursor-pointer font-semibold text-ink/70 dark:text-cream/70">Hints dekho</summary>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-ink/65 dark:text-cream/65">
                    {lesson.codingChallenge.hints.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </details>
              )}
              <Button
                size="sm"
                variant={progress?.challengeAttempts[lesson.id]?.passed ? "outline" : "secondary"}
                className="mt-3"
                onClick={() => handleChallengeAttempt(true)}
              >
                {progress?.challengeAttempts[lesson.id]?.passed ? "Challenge Mukammal ✅" : "Maine Complete Kar Liya"}
              </Button>
            </Card>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-6 dark:border-cream/10">
        {prev ? (
          <Button asChild variant="outline">
            <Link href={`/paths/${path.slug}/${prev.mod.slug}/${prev.lesson.slug}`}>
              <ArrowLeft className="h-4 w-4" /> Peechay Jao
            </Link>
          </Button>
        ) : (
          // First lesson in the path — no previous lesson to go back to, so
          // fall back to the path overview instead of leaving no way back at all.
          <Button asChild variant="outline">
            <Link href={`/paths/${path.slug}`}>
              <ArrowLeft className="h-4 w-4" /> {path.title}
            </Link>
          </Button>
        )}
        {!isDone ? (
          <Button onClick={markComplete}>
            <CheckCircle2 className="h-4 w-4" /> Lesson Mukammal Karo
          </Button>
        ) : (
          <Button variant="outline" disabled>
            <CheckCircle2 className="h-4 w-4 text-teal" /> Mukammal Ho Chuka
          </Button>
        )}
        {next && (
          <Button variant="secondary" onClick={markCompleteAndNext}>
            Agla Lesson <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}

function SectionHeading({
  icon: Icon,
  title,
  color,
}: {
  icon: React.ElementType;
  title: string;
  color: string;
}) {
  return (
    <div className={`flex items-center gap-2 font-display text-base font-bold ${color}`}>
      <Icon className="h-4 w-4" /> {title}
    </div>
  );
}

function ComingSoon({
  summaryEn,
  summaryUr,
  analogyTitle,
  analogyEn,
  analogyUr,
}: {
  summaryEn: string;
  summaryUr: string;
  analogyTitle?: string;
  analogyEn?: string;
  analogyUr?: string;
}) {
  return (
    <div className="mt-6 space-y-6">
      <Card className="p-5">
        <p className="text-sm leading-relaxed text-ink/80 dark:text-cream/80">{summaryUr}</p>
        <p className="mt-2 text-xs text-ink/50 dark:text-cream/50">{summaryEn}</p>
      </Card>
      {analogyUr && (
        <Card className="phool-edge border-2 border-teal/25 bg-teal-soft p-5 text-ink dark:border-teal/30 dark:bg-teal/10 dark:text-cream">
          <SectionHeading icon={Sparkles} title={`Desi Analogy: ${analogyTitle}`} color="text-teal-dark dark:text-teal" />
          <p className="mt-2 text-sm leading-relaxed">{analogyUr}</p>
          <p className="mt-1 text-xs opacity-70">{analogyEn}</p>
        </Card>
      )}
      <Card className="border-2 border-dashed border-ink/15 p-5 text-center dark:border-cream/20">
        <p className="text-sm text-ink/60 dark:text-cream/60">
          Is lesson ka full content jald aa raha hai. Tab tak upar wala roadmap topic samajh lo, ya CodeYaar se
          seedha pooch lo — woh abhi bata dega! 👇
        </p>
      </Card>
    </div>
  );
}
