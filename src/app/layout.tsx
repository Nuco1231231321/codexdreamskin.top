import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";

import { ConsentBanner } from "@/components/consent-banner";

import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codexdreamskin.top"),
  title: {
    default: "Codex Dream Skin: Install a Codex Desktop Theme",
    template: "%s | Codex Dream Skin",
  },
  description:
    "Install Codex Dream Skin on macOS or Windows, customize your Codex desktop theme, verify the result, and restore the official appearance safely.",
  keywords: [
    "Codex Dream Skin",
    "Codex skin",
    "Codex desktop theme",
    "Codex theme changer",
    "change Codex theme",
    "Codex desktop skin",
    "Codex 皮肤",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Codex Dream Skin",
    title: "Codex Dream Skin: Install a Codex Desktop Theme",
    description:
      "A practical install, customize, verify, and restore guide for the unofficial Codex Dream Skin project.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Codex Dream Skin install guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codex Dream Skin: Install a Codex Desktop Theme",
    description:
      "Install, customize, verify, and restore a Codex desktop skin on macOS or Windows.",
    images: ["/opengraph-image"],
  },
  category: "technology",
  verification: {
    google: "vRp_giC_X7TOqynkGYM5RhIjIY0Qhw425gryJC2zf8U",
  },
};

export const viewport: Viewport = {
  themeColor: "#58cc02",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} scroll-smooth`}>
      <body>
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});`}
        </Script>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
