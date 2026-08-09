import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPathBySlug, learningPaths } from "@/data/paths";
import { LessonDetailClient } from "./lesson-detail-client";

export function generateStaticParams() {
  return learningPaths.flatMap((path) =>
    path.modules.flatMap((mod) =>
      mod.lessons.map((lesson) => ({
        slug: path.slug,
        moduleSlug: mod.slug,
        lessonSlug: lesson.slug,
      }))
    )
  );
}

function resolveLesson(slug: string, moduleSlug: string, lessonSlug: string) {
  const path = getPathBySlug(slug);
  const mod = path?.modules.find((m) => m.slug === moduleSlug);
  const lesson = mod?.lessons.find((l) => l.slug === lessonSlug);
  if (!path || !mod || !lesson) return null;
  return { path, mod, lesson };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; moduleSlug: string; lessonSlug: string }>;
}): Promise<Metadata> {
  const { slug, moduleSlug, lessonSlug } = await params;
  const resolved = resolveLesson(slug, moduleSlug, lessonSlug);
  if (!resolved) return {};
  const { path, lesson } = resolved;
  return {
    title: `${lesson.title} — ${path.title} — CodeDuniya`,
    description: lesson.summaryEn,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; moduleSlug: string; lessonSlug: string }>;
}) {
  const { slug, moduleSlug, lessonSlug } = await params;
  const resolved = resolveLesson(slug, moduleSlug, lessonSlug);
  if (!resolved) return notFound();
  const { path, mod, lesson } = resolved;

  const flatLessons = path.modules.flatMap((m) => m.lessons.map((l) => ({ mod: m, lesson: l })));
  const flatIdx = flatLessons.findIndex((x) => x.lesson.id === lesson.id);
  const prev = flatIdx > 0 ? flatLessons[flatIdx - 1] : undefined;
  const next = flatIdx >= 0 ? flatLessons[flatIdx + 1] : undefined;

  return <LessonDetailClient path={path} mod={mod} lesson={lesson} prev={prev} next={next} />;
}
