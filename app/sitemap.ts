import type { MetadataRoute } from "next";
import { learningPaths } from "@/data/paths";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://codeduniya.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/paths`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/dashboard`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/search`, changeFrequency: "monthly", priority: 0.3 },
  ];

  const pathRoutes: MetadataRoute.Sitemap = learningPaths.map((path) => ({
    url: `${SITE_URL}/paths/${path.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const lessonRoutes: MetadataRoute.Sitemap = learningPaths.flatMap((path) =>
    path.modules.flatMap((mod) =>
      mod.lessons.map((lesson) => ({
        url: `${SITE_URL}/paths/${path.slug}/${mod.slug}/${lesson.slug}`,
        changeFrequency: "monthly" as const,
        priority: lesson.hasFullContent ? 0.7 : 0.4,
      }))
    )
  );

  return [...staticRoutes, ...pathRoutes, ...lessonRoutes];
}
