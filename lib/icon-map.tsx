import {
  Layers,
  BrainCircuit,
  Code2,
  Braces,
  Globe,
  Footprints,
  Flame,
  CalendarCheck,
  Hammer,
  Rocket,
  Award,
  LucideIcon,
} from "lucide-react";
import { PathTheme } from "@/data/types";

export const ICONS: Record<string, LucideIcon> = {
  Layers,
  BrainCircuit,
  Code2,
  Braces,
  Globe,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? Code2;
}

// Badge icons used by lib/progress.ts's computeBadges() — kept as an explicit
// map (instead of `import * as` on the whole icon library) to keep bundles small.
export const BADGE_ICONS: Record<string, LucideIcon> = {
  Footprints,
  Flame,
  CalendarCheck,
  Hammer,
  Rocket,
};

export function getBadgeIcon(name: string): LucideIcon {
  return BADGE_ICONS[name] ?? Award;
}

export const THEME_CLASSES: Record<
  PathTheme,
  { bg: string; soft: string; text: string; border: string; gradient: string; glow: string }
> = {
  saffron: {
    bg: "bg-saffron",
    soft: "bg-saffron-soft dark:bg-saffron/15",
    text: "text-saffron-dark dark:text-saffron",
    border: "border-saffron/30",
    gradient: "from-saffron to-saffron-dark",
    glow: "bg-saffron/30",
  },
  rani: {
    bg: "bg-rani",
    soft: "bg-rani-soft dark:bg-rani/15",
    text: "text-rani-dark dark:text-rani",
    border: "border-rani/30",
    gradient: "from-rani to-rani-dark",
    glow: "bg-rani/30",
  },
  teal: {
    bg: "bg-teal",
    soft: "bg-teal-soft dark:bg-teal/15",
    text: "text-teal-dark dark:text-teal",
    border: "border-teal/30",
    gradient: "from-teal to-teal-dark",
    glow: "bg-teal/30",
  },
  truckblue: {
    bg: "bg-truckblue",
    soft: "bg-truckblue-soft dark:bg-truckblue/15",
    text: "text-truckblue dark:text-truckblue",
    border: "border-truckblue/30",
    gradient: "from-truckblue to-ink",
    glow: "bg-truckblue/30",
  },
};
