import type { Metadata } from "next";
import { Suspense } from "react";

import { OrderBriefForm } from "@/components/order-brief-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Complete Your Skin Brief",
  description:
    "Confirm a Codex Dream Skin order and submit the image and preferences needed for delivery.",
  alternates: { canonical: "/order/success" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    url: "/order/success",
    title: "Complete Your Skin Brief | Codex Dream Skin",
    description:
      "Use the secure order return page to verify payment and submit the details needed for delivery.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Complete a Codex Dream Skin order" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Your Skin Brief | Codex Dream Skin",
    description: "Verify payment and submit the brief needed for delivery.",
    images: ["/opengraph-image"],
  },
};

export default function OrderSuccessPage() {
  return (
    <>
      <SiteHeader ctaHref="/custom-skin" ctaLabel="Service details" />
      <main className="mx-auto min-h-[calc(100dvh-72px)] max-w-[900px] px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm font-black uppercase text-link">Secure order handoff</p>
        <h1 className="mt-4 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
          One short brief, then the setup work begins.
        </h1>
        <p className="mt-5 max-w-[62ch] text-pretty text-lg leading-8 text-charcoal">
          The payment details in this return link are checked directly with
          Creem. Your source image is stored privately and is not added to the
          public gallery.
        </p>
        <div className="mt-10">
          <Suspense fallback={<p className="font-bold text-charcoal">Loading secure order details...</p>}>
            <OrderBriefForm />
          </Suspense>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
