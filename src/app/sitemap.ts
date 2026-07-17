import type { MetadataRoute } from "next";

import { localizePath } from "@/i18n/paths";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-17T00:00:00+08:00");
  const siteUrl = "https://codexdreamskin.top";
  const pages = [
    { path: "/", changeFrequency: "daily", priority: 1 },
    { path: "/codex-pets", changeFrequency: "daily", priority: 0.9 },
    { path: "/custom-skin", changeFrequency: "weekly", priority: 0.85 },
    { path: "/about", changeFrequency: "weekly", priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.4 },
    { path: "/privacy", changeFrequency: "monthly", priority: 0.4 },
    { path: "/terms", changeFrequency: "monthly", priority: 0.3 },
    { path: "/refund-policy", changeFrequency: "monthly", priority: 0.3 },
  ] as const;

  return pages.flatMap((page) => {
    const englishUrl = `${siteUrl}${page.path === "/" ? "/" : page.path}`;
    const chineseUrl = `${siteUrl}${localizePath(page.path, "zh")}`;
    const alternates = {
      languages: {
        en: englishUrl,
        "zh-Hans": chineseUrl,
        "x-default": englishUrl,
      },
    };

    return [
      {
        url: englishUrl,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates,
      },
      {
        url: chineseUrl,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.path === "/" ? 0.95 : page.priority,
        alternates,
      },
    ];
  });
}
