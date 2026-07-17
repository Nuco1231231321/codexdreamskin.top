import type { Metadata } from "next";
import { ArrowLeft, CheckCircle, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Codex Dream Skin documents installation, gallery listings, safety boundaries, and optional configuration services.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "/about",
    title: "About Codex Dream Skin",
    description:
      "How the independent Codex skin guide checks installation steps, safety notes, gallery listings, and service claims.",
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
    title: "About Codex Dream Skin",
    description:
      "How the independent install guide, pet gallery, and optional setup service are maintained.",
    images: ["/opengraph-image"],
  },
};

export default function AboutPage() {
  return (
    <>
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
            About Codex Dream Skin
          </h1>
          <p className="mt-5 text-pretty text-lg leading-8 text-charcoal">
            codexdreamskin.top helps people install, understand, and safely
            restore an unofficial visual layer for Codex Desktop. It also curates
            public Codex Pets and offers optional configuration preparation. The
            site is independent and is not affiliated with or endorsed by OpenAI.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="text-3xl font-black text-eel-dark-blue">How information is checked</h2>
          <p className="mt-4 text-pretty leading-7 text-charcoal">
            Installation commands, operating-system requirements, customization
            limits, restore behavior, and security notes are checked against the
            current public project documentation and then tested against the
            website&apos;s copy-ready flow. Visual results are not presented as
            guaranteed pixel matches because Codex versions, platforms, images,
            and renderer details can change.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black text-eel-dark-blue">What the site provides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Free practical access", "Install commands, platform notes, restore guidance, 53 pet listings, filters, and a pet-building starter remain available without an account or payment."],
              ["Clear commercial boundary", "Paid orders cover individual preparation and support. They do not sell the open-source software, the official Codex app, or third-party artwork rights."],
              ["Visible safety limits", "The guide explains local debugging, compatibility risk, image rights, restoration, and the fact that a desktop update may require a newer theme package."],
              ["Human-readable delivery", "Optional paid packages include a prepared configuration and practical install and restore instructions instead of leaving customers with unexplained files."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-xl border-2 border-graphite border-b-[5px] p-5">
                <CheckCircle aria-hidden="true" className="size-8 text-action" weight="fill" />
                <h3 className="mt-4 text-xl font-black text-eel-dark-blue">{title}</h3>
                <p className="mt-3 text-pretty text-sm leading-6 text-charcoal">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-xl border-2 border-graphite border-b-[6px] bg-eel-light p-6 sm:p-8">
          <ShieldCheck aria-hidden="true" className="size-10 text-link" weight="fill" />
          <h2 className="mt-4 text-3xl font-black text-eel-dark-blue">Corrections and rights requests</h2>
          <p className="mt-4 text-pretty leading-7 text-charcoal">
            A creator, rights holder, or user can report an inaccurate statement,
            broken install path, unsafe instruction, attribution issue, or image
            rights concern through the contact page. Affected material can be
            corrected or removed while the claim is reviewed.
          </p>
          <Link href="/contact" className="button-primary mt-6 inline-flex min-h-12 items-center justify-center px-5 font-black">
            Contact the site
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
