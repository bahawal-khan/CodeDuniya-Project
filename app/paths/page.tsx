import type { Metadata } from "next";
import { PathCard } from "@/components/path-card";
import { learningPaths } from "@/data/paths";

export const metadata: Metadata = {
  title: "Sab Learning Paths — CodeDuniya",
  description: "Full Stack Web Dev, AI & ML, Python, JavaScript aur Web Basics — har path modules, mini projects aur daily tasks ke sath.",
};

export default function PathsPage() {
  return (
    <div className="container py-12">
      <div className="mb-10 text-center">
        <h1 className="font-display text-3xl font-extrabold md:text-4xl">Sab Learning Paths</h1>
        <p className="mx-auto mt-2 max-w-xl text-sm text-ink/60 dark:text-cream/60">
          Har path modules, mini projects aur daily tasks ke sath — apni raftar se seekho.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {learningPaths.map((p, i) => (
          <PathCard key={p.id} path={p} index={i} />
        ))}
      </div>
    </div>
  );
}
