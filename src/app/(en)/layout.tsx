import { LocalizedRootLayout } from "@/components/localized-root-layout";
import { createRootMetadata, siteViewport } from "@/i18n/root-metadata";

import "../globals.css";

export const metadata = createRootMetadata("en");
export const viewport = siteViewport;

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LocalizedRootLayout locale="en">{children}</LocalizedRootLayout>;
}
