import type { Metadata, Viewport } from "next";

import type { Locale } from "@/i18n/config";
import { createPageMetadata } from "@/i18n/metadata";

export function createRootMetadata(locale: Locale): Metadata {
  const homeMetadata = createPageMetadata(locale, "home", "/");

  return {
    metadataBase: new URL("https://codexdreamskin.top"),
    title: homeMetadata.title,
    description: homeMetadata.description,
    keywords: homeMetadata.keywords,
    openGraph: homeMetadata.openGraph,
    twitter: homeMetadata.twitter,
    category: "technology",
    verification: {
      google: "vRp_giC_X7TOqynkGYM5RhIjIY0Qhw425gryJC2zf8U",
    },
  };
}

export const siteViewport: Viewport = {
  themeColor: "#58cc02",
  colorScheme: "light",
};
