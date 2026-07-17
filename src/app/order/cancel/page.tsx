import type { Metadata } from "next";
import { ArrowLeft, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout Canceled",
  description: "Return to free Codex skin tools or review the optional setup services.",
  alternates: { canonical: "/order/cancel" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    url: "/order/cancel",
    title: "Checkout Canceled | Codex Dream Skin",
    description: "No payment was completed. Return to the free installer or review the setup services.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Codex Dream Skin checkout canceled" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Checkout Canceled | Codex Dream Skin",
    description: "No payment was completed. Return to free Codex skin tools.",
    images: ["/opengraph-image"],
  },
};

export default function OrderCancelPage() {
  return (
    <main className="mx-auto grid min-h-[100dvh] max-w-[760px] place-items-center px-4 py-12 sm:px-6">
      <div className="w-full rounded-xl border-2 border-graphite border-b-[7px] bg-white p-7 sm:p-10">
        <ShieldCheck aria-hidden="true" className="size-14 text-action" weight="fill" />
        <h1 className="mt-5 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
          No payment was completed.
        </h1>
        <p className="mt-5 text-pretty text-lg leading-8 text-charcoal">
          Nothing was submitted for production. The free installer, gallery,
          tutorials, and restore guide remain available without checkout.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/custom-skin" className="button-secondary inline-flex min-h-14 items-center justify-center gap-2 px-6 font-black">
            <ArrowLeft aria-hidden="true" className="size-5" weight="bold" />
            Review services
          </Link>
          <Link href="/#install" className="button-primary inline-flex min-h-14 items-center justify-center px-6 font-black">
            Use the free guide
          </Link>
        </div>
      </div>
    </main>
  );
}
