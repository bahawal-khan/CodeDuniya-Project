import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-rani-soft text-rani-dark dark:bg-rani/20 dark:text-rani",
        saffron: "bg-saffron-soft text-saffron-dark dark:bg-saffron/20 dark:text-saffron",
        teal: "bg-teal-soft text-teal-dark dark:bg-teal/20 dark:text-teal",
        truckblue: "bg-truckblue-soft text-truckblue dark:bg-truckblue/20 dark:text-truckblue",
        outline: "border border-ink/15 text-ink/70 dark:border-cream/20 dark:text-cream/70",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
