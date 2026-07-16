import type { Metadata } from "next";
import { ArrowLeft, ArrowSquareOut, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About and Sources",
  description:
    "See the public sources used to document Codex Dream Skin installation, compatibility, restoration, and security boundaries.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "/about",
    title: "About and Sources | Codex Dream Skin",
    description:
      "See how Codex Dream Skin installation, compatibility, restoration, and security claims are checked.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "About Codex Dream Skin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About and Sources | Codex Dream Skin",
    description:
      "See how the installation and safety guide checks its public sources.",
    images: ["/opengraph-image"],
  },
};

const sources = [
  ["Main repository", "https://github.com/Fei-Away/Codex-Dream-Skin"],
  ["macOS guide", "https://github.com/Fei-Away/Codex-Dream-Skin/blob/main/macos/README.md"],
  ["Windows guide", "https://github.com/Fei-Away/Codex-Dream-Skin/blob/main/windows/SKILL.md"],
  ["Platform comparison", "https://github.com/Fei-Away/Codex-Dream-Skin/blob/main/docs/platforms.md"],
  ["macOS changelog", "https://github.com/Fei-Away/Codex-Dream-Skin/blob/main/macos/CHANGELOG.md"],
  ["Open issues", "https://github.com/Fei-Away/Codex-Dream-Skin/issues"],
];

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-[100dvh] max-w-[900px] px-4 py-12 sm:px-6 sm:py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-extrabold text-link underline decoration-2 underline-offset-4"
      >
        <ArrowLeft aria-hidden="true" className="size-5" weight="bold" />
        Back to installer
      </Link>
      <div className="mt-10 border-l-[7px] border-action pl-5 sm:pl-8">
        <h1 className="text-balance text-5xl font-black text-eel-dark-blue sm:text-6xl">
          About this guide
        </h1>
        <p className="mt-5 text-pretty text-lg leading-8 text-charcoal">
          codexdreamskin.top is an independent install and safety guide for
          the open-source Codex Dream Skin project. It is not affiliated with
          OpenAI and does not host a modified Codex application.
        </p>
      </div>

      <section className="mt-14">
        <h2 className="text-3xl font-black text-eel-dark-blue">Editorial method</h2>
        <p className="mt-4 text-pretty leading-7 text-charcoal">
          Installation commands, operating-system requirements, customization
          limits, restore behavior, and security notes are checked against the
          public repository. When the project and this guide disagree, the
          current repository source is authoritative. Preview images are labeled
          as repository screenshots or previews, and visual results are not
          presented as guaranteed pixel matches.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-black text-eel-dark-blue">Primary sources</h2>
        <div className="mt-6 grid gap-3">
          {sources.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-14 items-center justify-between gap-4 rounded-xl border-2 border-graphite border-b-[5px] px-4 font-extrabold text-eel-dark-blue hover:border-action"
            >
              <span className="inline-flex items-center gap-2">
                <GithubLogo aria-hidden="true" className="size-5" weight="fill" />
                {label}
              </span>
              <ArrowSquareOut aria-hidden="true" className="size-5 shrink-0" weight="bold" />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
