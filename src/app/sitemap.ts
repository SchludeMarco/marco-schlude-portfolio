import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteUrl}/for-recruiters`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/ask-marco`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
