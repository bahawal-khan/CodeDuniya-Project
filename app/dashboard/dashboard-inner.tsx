"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Flame,
  Hammer,
  Medal,
  RotateCcw,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { learningPaths } from "@/data/paths";
import {
  loadProgress,
  saveProgress,
  resetProgress,
  computeBadges,
  completeDailyChallenge,
  getLevel,
  ProgressState,
} from "@/lib/progress";
import { pathPercentComplete, findNextLesson } from "@/lib/path-progress";
import { getIcon, getBadgeIcon, THEME_CLASSES } from "@/lib/icon-map";
import { getTodaysChallenge } from "@/lib/daily-challenge";
import { cn } from "@/lib/utils";
import { CertificateCard } from "@/components/certificate-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useMotionVariants } from "@/lib/motion";

export function DashboardInner() {
  const [progress, setProgress] = React.useState<ProgressState | null>(null);
  const { scaleIn } = useMotionVariants();

  React.useEffect(() => {
    setProgress(loadProgress());
  }, []);

  if (!progress) {
    return (
      <div className="container py-10" role="status" aria-label="Dashboard load ho raha hai">
        <Skeleton className="mb-2 h-9 w-64" />
        <Skeleton className="mb-8 h-4 w-80" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-28" />
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Skeleton className="h-40" />
            <Skeleton className="h-32" />
          </div>
          <Skeleton className="h-64" />
        </div>
      </div>
    );
  }

  const totalLessons = learningPaths.flatMap((p) => p.modules.flatMap((m) => m.lessons)).length;

  const badges = computeBadges(progress);

  // find the path with the most recent activity (or first path with progress > 0, else first path)
  const inProgressPath =
    learningPaths.find((p) => pathPercentComplete(p, progress) > 0 && pathPercentComplete(p, progress) < 100) ??
    learningPaths[0];
  const recommendation = findNextLesson(inProgressPath, progress);
  const todaysChallenge = getTodaysChallenge();
  const todayKey = new Date().toISOString().slice(0, 10);
  const dailyChallengeDone = !!progress.dailyChallengeCompletions[todayKey];
  const { level } = getLevel(progress.xp);

  function markDailyChallengeDone() {
    if (!todaysChallenge) return;
    const updated = completeDailyChallenge(progress!, todaysChallenge.task.id);
    saveProgress(updated);
    setProgress(updated);
  }

  function handleResetProgress() {
    const confirmed = window.confirm(
      "Sara progress reset karna hai? Completed lessons, streak, XP aur badges — sab zero ho jayenge. Yeh wapas nahi ho sakta."
    );
    if (!confirmed) return;
    setProgress(resetProgress());
  }

  return (
    <div className="container py-10">
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-extrabold">Tumhara Dashboard</h1>
          <p className="mt-1 text-sm text-ink/60 dark:text-cream/60">Har roz ka thora sa progress, badi tabdeeli laata hai.</p>
        </div>
        <Button variant="outline" size="sm" onClick={handleResetProgress} className="gap-1.5 text-ink/60 dark:text-cream/60">
          <RotateCcw className="h-3.5 w-3.5" /> Progress Reset Karo
        </Button>
      </div>

      {/* Top stats */}
      <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <RevealItem>
          <StatCard
            icon={Flame}
            color="text-saffron-dark dark:text-saffron"
            bg="bg-saffron-soft dark:bg-saffron/15"
            bar="bg-saffron"
            glow="bg-saffron/25"
            label="Current Streak"
            labelUr="Streak"
            value={`${progress.streak} din`}
          />
        </RevealItem>
        <RevealItem>
          <StatCard
            icon={BookOpen}
            color="text-rani-dark dark:text-rani"
            bg="bg-rani-soft dark:bg-rani/15"
            bar="bg-rani"
            glow="bg-rani/25"
            label="Lessons Complete"
            labelUr="Lessons"
            value={`${progress.completedLessons.length}`}
          />
        </RevealItem>
        <RevealItem>
          <StatCard
            icon={Hammer}
            color="text-teal-dark dark:text-teal"
            bg="bg-teal-soft dark:bg-teal/15"
            bar="bg-teal"
            glow="bg-teal/25"
            label="Mini Projects"
            labelUr="Projects"
            value={`${progress.completedProjects.length}`}
          />
        </RevealItem>
        <RevealItem>
          <StatCard
            icon={Trophy}
            color="text-truckblue dark:text-truckblue"
            bg="bg-truckblue-soft dark:bg-truckblue/15"
            bar="bg-truckblue"
            glow="bg-truckblue/25"
            label="Total XP"
            labelUr="XP"
            value={`${progress.xp}`}
          />
        </RevealItem>
        <RevealItem>
          <StatCard
            icon={Medal}
            color="text-rani-dark dark:text-rani"
            bg="bg-rani-soft dark:bg-rani/15"
            bar="bg-rani"
            glow="bg-rani/25"
            label="Level"
            labelUr={level.nameUrdu}
            value={level.name}
          />
        </RevealItem>
      </RevealGroup>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Left: recommended + daily task */}
        <div className="space-y-6 lg:col-span-2">
          <Reveal>
          {recommendation ? (
            <Card className="phool-edge border-2 border-rani/20 p-6 text-rani dark:border-rani/25 dark:text-saffron">
              <div className="flex items-center gap-2 text-sm font-bold text-rani dark:text-saffron">
                <Sparkles className="h-4 w-4" /> Recommended Next Lesson
              </div>
              <h3 className="mt-2 font-display text-xl font-bold text-ink dark:text-cream">
                {recommendation.lesson.title}
              </h3>
              <p className="text-sm font-semibold text-ink/50 dark:text-cream/50">{recommendation.lesson.titleUrdu}</p>
              <p className="mt-2 text-sm text-ink/70 dark:text-cream/70">{recommendation.lesson.summaryUr}</p>
              <Button asChild className="mt-4">
                <Link href={`/paths/${inProgressPath.slug}/${recommendation.module.slug}/${recommendation.lesson.slug}`}>
                  Shuru Karo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Card>
          ) : (
            <Card className="p-6 text-center">
              <p className="font-display text-lg font-bold">Mashallah, sab lessons mukammal! 🎉</p>
              <p className="mt-1 text-sm text-ink/60 dark:text-cream/60">Ab ek naya path try karo ya purane projects revise karo.</p>
            </Card>
          )}
          </Reveal>

          {todaysChallenge && (
            <Reveal delay={0.06}>
            <Card className="p-6">
              <div className="flex items-center gap-2 text-sm font-bold text-teal-dark dark:text-teal">
                <Sparkles className="h-4 w-4" /> Aaj Ka Yaar Challenge
              </div>
              <h3 className="mt-2 font-display font-bold">{todaysChallenge.task.title}</h3>
              <p className="text-xs font-semibold text-ink/45 dark:text-cream/45">{todaysChallenge.task.titleUrdu}</p>
              <p className="mt-2 text-sm text-ink/70 dark:text-cream/70">{todaysChallenge.task.description}</p>
              {dailyChallengeDone ? (
                <Button variant="outline" disabled className="mt-3">
                  <CheckCircle2 className="h-4 w-4 text-teal" /> Aaj Mukammal Ho Chuka
                </Button>
              ) : (
                <Button size="sm" variant="secondary" className="mt-3" onClick={markDailyChallengeDone}>
                  Mark Complete
                </Button>
              )}
            </Card>
            </Reveal>
          )}

          <Reveal delay={0.1}>
            <CertificateCard
              completedCount={progress.completedLessons.length}
              totalCount={totalLessons}
              streak={progress.streak}
            />
          </Reveal>

          {/* Paths overview */}
          <Reveal delay={0.14}>
          <Card className="p-6">
            <h3 className="font-display font-bold">Tumhare Paths</h3>
            <div className="mt-4 space-y-4">
              {learningPaths.map((p) => {
                const percent = pathPercentComplete(p, progress);
                const theme = THEME_CLASSES[p.theme];
                const Icon = getIcon(p.icon);
                return (
                  <Link
                    key={p.id}
                    href={`/paths/${p.slug}`}
                    className="flex items-center gap-4 rounded-xl border border-ink/10 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/20 hover:bg-ink/5 hover:shadow-soft dark:border-cream/10 dark:hover:border-cream/20 dark:hover:bg-cream/5"
                  >
                    <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl2", theme.soft)}>
                      <Icon className={cn("h-5 w-5", theme.text)} />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{p.title}</p>
                      <Progress value={percent} className="mt-1.5 h-1.5" />
                    </div>
                    <span className="text-sm font-bold">{percent}%</span>
                  </Link>
                );
              })}
            </div>
          </Card>
          </Reveal>
        </div>

        {/* Right: badges */}
        <Reveal delay={0.08} className="h-fit">
        <Card className="h-fit p-6">
          <div className="flex items-center gap-2 font-display font-bold">
            <Award className="h-5 w-5 text-saffron-dark dark:text-saffron" /> Badges
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {badges.map((b, i) => {
              const BIcon = getBadgeIcon(b.icon);
              return (
                <motion.div
                  key={b.id}
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  className={cn(
                    "flex flex-col items-center gap-1.5 rounded-xl2 border p-3 text-center",
                    b.earned
                      ? cn("border-saffron/40 bg-saffron-soft dark:border-saffron/30 dark:bg-saffron/15", b.earned && "glow-saffron")
                      : "border-ink/10 bg-ink/[0.03] opacity-50 dark:border-cream/10 dark:bg-cream/[0.03]"
                  )}
                >
                  <BIcon className={cn("h-6 w-6", b.earned ? "text-saffron-dark dark:text-saffron" : "text-ink/40 dark:text-cream/40")} />
                  <p className="text-xs font-bold leading-tight">{b.title}</p>
                  <p className="text-[10px] text-ink/45 dark:text-cream/45">{b.titleUrdu}</p>
                </motion.div>
              );
            })}
          </div>
        </Card>
        </Reveal>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  color,
  bg,
  bar,
  glow,
  label,
  labelUr,
  value,
}: {
  icon: React.ElementType;
  color: string;
  bg: string;
  bar: string;
  glow: string;
  label: string;
  labelUr: string;
  value: string;
}) {
  return (
    <TiltCard glowClassName={glow} className="h-full">
      <Card className="relative h-full overflow-hidden p-5 transition-shadow duration-300 hover:shadow-card-hover dark:hover:shadow-card-hover-dark">
        <div className={cn("absolute inset-x-0 top-0 h-1", bar)} />
        <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl2", bg)}>
          <Icon className={cn("h-5 w-5", color)} />
        </span>
        <p className={cn("mt-3 font-display text-2xl font-extrabold", color)}>{value}</p>
        <p className="text-xs font-semibold text-ink/50 dark:text-cream/50">
          {label} · {labelUr}
        </p>
      </Card>
    </TiltCard>
  );
}
