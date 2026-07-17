import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Link from "next/link";

import enMessages from "../../messages/en.json";
import zhMessages from "../../messages/zh.json";

import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codexdreamskin.top"),
  title: "Page Not Found | Codex Dream Skin",
  description: enMessages.NotFound.description,
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        <main className="grid min-h-[100dvh] place-items-center px-4 py-16">
          <div className="max-w-xl text-center">
            <p className="text-sm font-black uppercase text-link">{enMessages.NotFound.eyebrow}</p>
            <h1 className="mt-4 text-balance text-5xl font-black text-eel-dark-blue sm:text-6xl">{enMessages.NotFound.title}</h1>
            <p className="mt-5 text-pretty text-lg leading-8 text-charcoal">{enMessages.NotFound.description}</p>
            <p lang="zh-CN" className="mt-4 text-pretty leading-7 text-charcoal">{zhMessages.NotFound.description}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/" className="button-secondary inline-flex min-h-14 items-center justify-center gap-2 px-6 font-black">
                <ArrowLeft aria-hidden="true" className="size-5" weight="bold" />
                {enMessages.NotFound.back}
              </Link>
              <Link href="/zh" lang="zh-CN" className="button-primary inline-flex min-h-14 items-center justify-center px-6 font-black">
                {zhMessages.NotFound.back}
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
