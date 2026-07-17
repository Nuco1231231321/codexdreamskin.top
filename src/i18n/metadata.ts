import type { Metadata } from "next";
import { createTranslator } from "next-intl";

import { getMessagesForLocale, type Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";

const siteUrl = "https://codexdreamskin.top";

type MetadataPage =
  | "home"
  | "pets"
  | "customSkin"
  | "about"
  | "contact"
  | "privacy"
  | "terms"
  | "refund"
  | "orderSuccess"
  | "orderCancel";

export function createPageMetadata(
  locale: Locale,
  page: MetadataPage,
  englishPath: string,
  options: { index?: boolean } = {},
): Metadata {
  const t = createTranslator({
    locale,
    messages: getMessagesForLocale(locale),
    namespace: `Metadata.${page}`,
  });
  const canonicalPath = localizePath(englishPath, locale);
  const englishUrl = `${siteUrl}${englishPath === "/" ? "/" : englishPath}`;
  const chinesePath = localizePath(englishPath, "zh");
  const chineseUrl = `${siteUrl}${chinesePath}`;
  const canonicalUrl = `${siteUrl}${canonicalPath === "/" ? "/" : canonicalPath}`;
  const title = t("title");
  const description = t("description");

  return {
    title: { absolute: title },
    description,
    keywords: t.raw("keywords") as string[],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: englishUrl,
        "zh-Hans": chineseUrl,
        "x-default": englishUrl,
      },
    },
    robots:
      options.index === false
        ? { index: false, follow: false }
        : { index: true, follow: true },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: "Codex Dream Skin",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      alternateLocale: [locale === "zh" ? "en_US" : "zh_CN"],
      title,
      description,
      images: [
        {
          url: `${siteUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: t("imageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/opengraph-image`],
    },
  };
}
