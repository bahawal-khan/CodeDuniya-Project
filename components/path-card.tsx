"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Layers as LayersIcon } from "lucide-react";
import { LearningPath } from "@/data/types";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { getIcon, THEME_CLASSES } from "@/lib/icon-map";
import { loadProgress } from "@/lib/progress";
import { pathPercentComplete } from "@/lib/path-progress";
import { Skeleton, useHasMounted } from "@/components/ui/skeleton";

export function PathCard({
  path,
  index = 0,
  recommended = false,
}: {
  path: LearningPath;
  index?: number;
  recommended?: boolean;
}) {
  const Icon = getIcon(path.icon);
  const theme = THEME_CLASSES[path.theme];
  const [percent, setPercent] = React.useState(0);
  const hasMounted = useHasMounted();

  React.useEffect(() => {
    setPercent(pathPercentComplete(path, loadProgress()));
  }, [path]);

  return (
    <Reveal delay={index * 0.07}>
      <Link href={`/paths/${path.slug}`} className="block h-full">
        <TiltCard glowClassName={theme.glow} className="h-full">
        <Card
          className={`group relative h-full overflow-hidden transition-shadow duration-300 hover:shadow-card-hover dark:hover:shadow-card-hover-dark ${
            recommended ? "border-2 border-rani/40 dark:border-rani/40" : "border-ink/6 dark:border-cream/8"
          }`}
        >
          {/* Subtle top accent bar */}
          <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.gradient || "from-saffron via-rani to-teal"} opacity-80`} />

          <div className="p-5 pt-6">
            <div className="mb-4 flex items-start justify-between">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${theme.soft} transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className={`h-6 w-6 ${theme.text}`} />
              </span>
              {recommended ? (
                <Badge className="bg-rani text-[11px] font-semibold text-white hover:bg-rani">Yahan Se Shuru Karo</Badge>
              ) : (
                <Badge variant="outline" className="text-[11px] font-semibold">
                  {path.level}
                </Badge>
              )}
            </div>

            <h3 className="font-display text-xl font-bold leading-snug tracking-tight">
              {path.title}
            </h3>
            <p className="mt-0.5 text-sm font-medium text-ink/45 dark:text-cream/45">
              {path.titleUrdu}
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-ink/65 dark:text-cream/65 line-clamp-2">
              {path.description}
            </p>

            <div className="mt-4 flex items-center gap-4 text-xs font-medium text-ink/50 dark:text-cream/50">
              <span className="flex items-center gap-1.5">
                <LayersIcon className="h-3.5 w-3.5" />
                {path.modules.length} modules
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                ~{path.estWeeks} weeks
              </span>
            </div>

            {hasMounted ? (
              <div className="mt-5">
                <div className="mb-1.5 flex items-center justify-between text-xs font-semibold">
                  <span className="text-ink/60 dark:text-cream/60">Progress</span>
                  <span className={theme.text}>{percent}%</span>
                </div>
                <Progress value={percent} className="h-2" />
              </div>
            ) : (
              <Skeleton className="mt-5 h-2" />
            )}

            <div
              className={`mt-4 flex items-center gap-1.5 text-sm font-bold ${theme.text} transition-all`}
            >
              {hasMounted && percent > 0 ? "Jari Rakho" : "Shuru Karo"}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </div>
        </Card>
        </TiltCard>
      </Link>
    </Reveal>
  );
}
