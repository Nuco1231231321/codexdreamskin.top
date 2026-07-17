import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-17T00:00:00+08:00");

  return [
    {
      url: "https://codexdreamskin.top/",
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://codexdreamskin.top/about",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://codexdreamskin.top/codex-pets",
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://codexdreamskin.top/privacy",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://codexdreamskin.top/custom-skin",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://codexdreamskin.top/contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://codexdreamskin.top/terms",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://codexdreamskin.top/refund-policy",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
