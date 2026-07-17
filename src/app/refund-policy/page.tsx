import type { Metadata } from "next";
import { ArrowLeft, Receipt } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund and cancellation conditions for Skin Quick Setup and Custom Skin Early Access, including delivery problems and unusable source images.",
  alternates: { canonical: "/refund-policy" },
  openGraph: {
    type: "website",
    url: "/refund-policy",
    title: "Refund Policy | Codex Dream Skin",
    description:
      "Refund and cancellation conditions for one-time Codex skin setup services, delivery problems, and unusable source images.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Codex Dream Skin refund policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | Codex Dream Skin",
    description:
      "Refund and cancellation conditions for one-time Codex skin setup services and delivery problems.",
    images: ["/opengraph-image"],
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <main className="mx-auto max-w-[860px] px-4 py-12 sm:px-6 sm:py-20">
        <Link href="/custom-skin" className="inline-flex items-center gap-2 font-extrabold text-link underline decoration-2 underline-offset-4">
          <ArrowLeft aria-hidden="true" className="size-5" weight="bold" />
          Back to services
        </Link>
        <Receipt aria-hidden="true" className="mt-10 size-14 text-action" weight="fill" />
        <h1 className="mt-5 text-balance text-5xl font-black text-eel-dark-blue sm:text-6xl">Refund Policy</h1>
        <p className="mt-4 font-bold text-ash">Effective July 17, 2026</p>
        <p className="mt-6 text-pretty text-lg leading-8 text-charcoal">
          Skin Quick Setup and Custom Skin Early Access are one-time digital
          preparation services. The goal is to resolve genuine delivery problems
          fairly while recognizing that work begins soon after a valid brief is received.
        </p>

        <div className="mt-12 grid gap-9">
          <section>
            <h2 className="text-2xl font-black text-eel-dark-blue">Before preparation begins</h2>
            <p className="mt-3 text-pretty leading-7 text-charcoal">
              A cancellation request made before preparation begins is eligible
              for a full refund. Contact support promptly from the checkout email
              and include the order reference. A request is not considered
              complete until enough information is provided to identify the order.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-eel-dark-blue">After work begins</h2>
            <p className="mt-3 text-pretty leading-7 text-charcoal">
              Once personalized preparation has started, a change of mind,
              preference change, or request for an unlisted revision is normally
              not refundable. Custom Skin Early Access includes one delivery and
              no revision. This does not remove any mandatory consumer right that
              applies in the customer&apos;s location.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-eel-dark-blue">Delivery problems</h2>
            <p className="mt-3 text-pretty leading-7 text-charcoal">
              Contact support if the promised package is not delivered within 72
              hours after a complete brief, the delivered archive cannot be
              opened, or the package materially omits an item listed for the
              purchased service. The first remedy may be prompt correction or
              redelivery. If the service cannot be supplied, a full or appropriate
              partial refund will be offered.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-eel-dark-blue">Unsupported or unusable input</h2>
            <p className="mt-3 text-pretty leading-7 text-charcoal">
              The delivery window pauses when the submitted image is corrupt,
              inaccessible, too small for a usable result, or clearly lacks the
              required rights. If a suitable replacement is not provided after a
              reasonable request, the order may be canceled; any refund may be
              reduced only for work already completed where permitted by law.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-eel-dark-blue">How refunds are processed</h2>
            <p className="mt-3 text-pretty leading-7 text-charcoal">
              Creem is the Merchant of Record and processes approved refunds to
              the original payment method. Bank and card-network posting times
              vary. Never send card details by email. Disputes should be raised
              with support first so the order and delivery evidence can be reviewed.
            </p>
          </section>
        </div>

        <Link href="/contact" className="button-primary mt-12 inline-flex min-h-14 items-center justify-center px-6 font-black">
          Contact support
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
