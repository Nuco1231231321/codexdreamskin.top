import { LocalizedRootLayout } from "@/components/localized-root-layout";
import { createRootMetadata, siteViewport } from "@/i18n/root-metadata";

import "../globals.css";

export const metadata = createRootMetadata("zh");
export const viewport = siteViewport;

export default function ChineseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LocalizedRootLayout locale="zh">{children}</LocalizedRootLayout>;
}
