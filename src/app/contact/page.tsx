import type { Metadata } from "next";
import { ArrowLeft, EnvelopeSimple, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Codex Dream Skin about an order, installation problem, privacy request, correction, or artwork rights concern.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact Codex Dream Skin",
    description: "Get help with orders, installation, privacy, corrections, or rights concerns.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Contact Codex Dream Skin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Codex Dream Skin",
    description: "Get help with orders, installation, privacy, corrections, or rights concerns.",
    images: ["/opengraph-image"],
  },
};

export default function ContactPage() {
  return (
    <>
      <main className="mx-auto min-h-[calc(100dvh-180px)] max-w-[900px] px-4 py-12 sm:px-6 sm:py-20">
        <Link href="/" className="inline-flex items-center gap-2 font-extrabold text-link underline decoration-2 underline-offset-4">
          <ArrowLeft aria-hidden="true" className="size-5" weight="bold" />
          Back to home
        </Link>
        <EnvelopeSimple aria-hidden="true" className="mt-10 size-14 text-action" weight="fill" />
        <h1 className="mt-5 text-balance text-5xl font-black text-eel-dark-blue sm:text-6xl">Contact</h1>
        <p className="mt-5 max-w-[65ch] text-pretty text-lg leading-8 text-charcoal">
          Get help with a paid order, an installation problem, a privacy or
          deletion request, a factual correction, or a gallery rights concern.
          Messages are normally reviewed within two business days.
        </p>

        <div className="mt-12 rounded-xl border-2 border-graphite border-b-[7px] bg-eel-light p-6 sm:p-8">
          <h2 className="text-balance text-3xl font-black text-eel-dark-blue">Email support</h2>
          <a href="mailto:support@codexdreamskin.top" className="mt-4 inline-block break-all text-xl font-black text-link underline decoration-2 underline-offset-4">
            support@codexdreamskin.top
          </a>
          <p className="mt-5 text-pretty leading-7 text-charcoal">
            For an order, email from the address used at checkout and include
            the order reference shown on the confirmation page. Do not send
            passwords, API keys, Codex conversations, or unrelated private files.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-black text-eel-dark-blue">What to include</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Installation help", "Platform, Codex version if known, the exact step that failed, and the visible error message. Remove private paths or project names from screenshots."],
              ["Order help", "Checkout email, order reference, selected service, and a short description of the problem. Never send card details."],
              ["Rights or attribution", "The exact gallery item or page, your relationship to the work, and a reliable way to verify the claim."],
              ["Privacy request", "State whether you want access, correction, or deletion of order, brief, upload, or analytics-related information."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-xl border-2 border-graphite p-5">
                <ShieldCheck aria-hidden="true" className="size-8 text-action" weight="fill" />
                <h3 className="mt-4 text-xl font-black text-eel-dark-blue">{title}</h3>
                <p className="mt-3 text-pretty text-sm leading-6 text-charcoal">{body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

