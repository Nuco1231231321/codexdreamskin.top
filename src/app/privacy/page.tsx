import type { Metadata } from "next";
import { ArrowLeft, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy information for codexdreamskin.top, including analytics, clipboard use, external links, and local installation commands.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    url: "/privacy",
    title: "Privacy | Codex Dream Skin",
    description:
      "Read how codexdreamskin.top handles analytics, clipboard actions, downloads, and external links.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Codex Dream Skin privacy information",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy | Codex Dream Skin",
    description:
      "Read how the site handles analytics, clipboard actions, downloads, and external links.",
    images: ["/opengraph-image"],
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-[100dvh] max-w-[820px] px-4 py-12 sm:px-6 sm:py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-extrabold text-link underline decoration-2 underline-offset-4"
      >
        <ArrowLeft aria-hidden="true" className="size-5" weight="bold" />
        Back to installer
      </Link>
      <ShieldCheck aria-hidden="true" className="mt-10 size-14 text-action" weight="fill" />
      <h1 className="mt-5 text-balance text-5xl font-black text-eel-dark-blue sm:text-6xl">
        Privacy
      </h1>
      <p className="mt-5 text-pretty text-lg leading-8 text-charcoal">
        This website does not ask for an account, accept file uploads, collect
        Codex credentials, or request API keys. The copy buttons use your
        browser&apos;s clipboard permission only after you click them.
      </p>

      <div className="mt-12 grid gap-9">
        <section>
          <h2 className="text-2xl font-black text-eel-dark-blue">No theme files are uploaded</h2>
          <p className="mt-3 text-pretty leading-7 text-charcoal">
            Installation and customization happen on your own computer after
            you download the linked open-source project. This website does not
            receive your wallpaper, Codex configuration, project names, chat
            content, screenshots, or local paths.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-eel-dark-blue">External links</h2>
          <p className="mt-3 text-pretty leading-7 text-charcoal">
            Downloads are served from this domain. Attribution and community
            links may open the original project page, pet listing, or public X
            post. Those services and network providers may process request logs
            under their own policies. Review the destination address before
            downloading or running files.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-black text-eel-dark-blue">Google Analytics</h2>
          <p className="mt-3 text-pretty leading-7 text-charcoal">
            This site uses Google Analytics 4 to measure page visits, navigation,
            device categories, and engagement so the install guide can be
            improved. Google may process identifiers and request information
            under its own privacy terms. The site does not use an account system,
            advertising form, or custom profile database.
          </p>
        </section>
      </div>
    </main>
  );
}
