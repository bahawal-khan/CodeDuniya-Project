import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPathBySlug, learningPaths } from "@/data/paths";
import { PathDetailClient } from "./path-detail-client";

export function generateStaticParams() {
  return learningPaths.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const path = getPathBySlug(slug);
  if (!path) return {};
  return {
    title: `${path.title} — CodeDuniya`,
    description: path.description,
  };
}

export default async function PathDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const path = getPathBySlug(slug);
  if (!path) return notFound();

  return <PathDetailClient path={path} />;
}
