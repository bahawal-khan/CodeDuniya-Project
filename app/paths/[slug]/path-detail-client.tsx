"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  Clock,
  Hammer,
  ListChecks,
  Sparkles,
} from "lucide-react";
import { LearningPath } from "@/data/types";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getIcon, THEME_CLASSES } from "@/lib/icon-map";
import { loadProgress, saveProgress, completeProject, ProgressState } from "@/lib/progress";
import { pathPercentComplete } from "@/lib/path-progress";
import { useSetYaarContext } from "@/lib/codeyaar-context";
import { cn } from "@/lib/utils";

export function PathDetailClient({ path }: { path: LearningPath }) {
  const [progress, setProgress] = React.useState<ProgressState | null>(null);
  const [openModule, setOpenModule] = React.useState<string | null>(path.modules[0]?.id ?? null);

  useSetYaarContext({ pathTitle: path.title });

  React.useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const Icon = getIcon(path.icon);
  const theme = THEME_CLASSES[path.theme];
  const percent = progress ? pathPercentComplete(path, progress) : 0;

  function markProjectDone(moduleId: string) {
    const current = progress ?? loadProgress();
    const updated = completeProject(current, moduleId);
    saveProgress(updated);
    setProgress(updated);
  }

  return (
    <div className="container py-10">
      {/* Header */}
      <div className={cn("rounded-xl2 border p-6 md:p-8", theme.soft, theme.border)}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className={cn("flex h-14 w-14 items-center justify-center rounded-xl2 bg-white/70 dark:bg-black/20")}>
              <Icon className={cn("h-7 w-7", theme.text)} />
            </span>
            <div>
              <h1 className="font-display text-2xl font-extrabold md:text-3xl">{path.title}</h1>
              <p className="text-sm font-semibold text-ink/50 dark:text-cream/50">{path.titleUrdu}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70 dark:text-cream/70">
                {path.description}
              </p>
            </div>
          </div>
          <Badge variant="outline">{path.level}</Badge>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl2 bg-white/70 p-4 dark:bg-black/20">
            <div className="mb-1.5 flex items-center justify-between text-sm font-semibold">
              <span>Tumhari Progress</span>
              <span>{percent}%</span>
            </div>
            <Progress value={percent} />
          </div>
          <div className="flex items-center gap-4 rounded-xl2 bg-white/70 p-4 text-sm dark:bg-black/20">
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> ~{path.estWeeks} weeks</span>
            <span className="flex items-center gap-1.5"><ListChecks className="h-4 w-4" /> {path.modules.length} modules</span>
          </div>
        </div>
      </div>

      {/* Daily tasks */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {path.dailyTasks.map((t) => (
          <Card key={t.title} className="p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-rani-dark dark:text-rani">
              <Sparkles className="h-4 w-4" /> Aaj Ka Task
            </div>
            <h3 className="mt-1 font-display font-bold">{t.title}</h3>
            <p className="text-xs font-semibold text-ink/45 dark:text-cream/45">{t.titleUrdu}</p>
            <p className="mt-1 text-sm text-ink/65 dark:text-cream/65">{t.description}</p>
          </Card>
        ))}
      </div>

      {/* Roadmap */}
      <div className="mt-10">
        <h2 className="font-display text-xl font-bold">Roadmap</h2>
        <div className="mt-4 space-y-4">
          {path.modules.map((mod, idx) => {
            const isOpen = openModule === mod.id;
            const doneCount = mod.lessons.filter((l) => progress?.completedLessons.includes(l.id)).length;
            const projectDone = progress?.completedProjects.includes(mod.id);

            return (
              <Card key={mod.id} className="overflow-hidden">
                <button
                  onClick={() => setOpenModule(isOpen ? null : mod.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                        theme.soft,
                        theme.text
                      )}
                    >
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="font-display font-bold leading-tight">{mod.title}</h3>
                      <p className="text-xs font-semibold text-ink/45 dark:text-cream/45">{mod.titleUrdu}</p>
                      <p className="mt-1 text-sm text-ink/65 dark:text-cream/65">{mod.description}</p>
                      <p className="mt-1 text-xs text-ink/45 dark:text-cream/45">
                        {doneCount}/{mod.lessons.length} lessons complete
                        {projectDone && " · Mini project ✅"}
                      </p>
                    </div>
                  </div>
                  <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform", isOpen && "rotate-180")} />
                </button>

                {isOpen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="border-t border-ink/10 px-5 pb-5 dark:border-cream/10">
                    <div className="mt-4 space-y-2">
                      {mod.lessons.map((lesson) => {
                        const done = progress?.completedLessons.includes(lesson.id);
                        return (
                          <Link
                            key={lesson.id}
                            href={`/paths/${path.slug}/${mod.slug}/${lesson.slug}`}
                            className="flex items-center gap-3 rounded-xl border border-ink/10 p-3 text-sm transition-colors hover:bg-ink/5 dark:border-cream/10 dark:hover:bg-cream/5"
                          >
                            {done ? (
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                            ) : (
                              <Circle className="h-4 w-4 shrink-0 text-ink/25 dark:text-cream/25" />
                            )}
                            <span className="flex-1">
                              <span className="font-medium">{lesson.title}</span>
                              <span className="ml-2 text-ink/45 dark:text-cream/45">{lesson.titleUrdu}</span>
                            </span>
                            {!lesson.hasFullContent && (
                              <Badge variant="outline" className="shrink-0">
                                Roadmap
                              </Badge>
                            )}
                          </Link>
                        );
                      })}
                    </div>

                    {mod.miniProject && (
                      <div className="mt-4 rounded-xl2 border border-dashed border-ink/20 p-4 dark:border-cream/20">
                        <div className="flex items-center gap-2 text-sm font-bold">
                          <Hammer className="h-4 w-4 text-rani-dark dark:text-rani" /> Mini Project: {mod.miniProject.title}
                        </div>
                        <p className="text-xs font-semibold text-ink/45 dark:text-cream/45">{mod.miniProject.titleUrdu}</p>
                        <p className="mt-2 text-sm text-ink/70 dark:text-cream/70">{mod.miniProject.description}</p>
                        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-ink/65 dark:text-cream/65">
                          {mod.miniProject.requirements.map((r) => (
                            <li key={r}>{r}</li>
                          ))}
                        </ul>
                        <Button
                          size="sm"
                          variant={projectDone ? "outline" : "secondary"}
                          className="mt-3"
                          onClick={() => markProjectDone(mod.id)}
                        >
                          {projectDone ? "Project Mukammal ✅" : "Mark as Done"}
                        </Button>
                      </div>
                    )}
                  </motion.div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
