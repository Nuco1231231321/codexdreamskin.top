import type { Metadata } from "next";
import {
  Check,
  ClockCountdown,
  DownloadSimple,
  ImageSquare,
  PaintBrush,
  ShieldCheck,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import { CheckoutButton } from "@/components/checkout-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Custom Codex Skin Setup and Theme Service",
  description:
    "Get a readable custom Codex skin, prepared color settings, image placement, downloadable configuration, and install guidance from $4.99.",
  keywords: [
    "custom Codex skin",
    "Codex skin setup",
    "Codex theme customization",
    "custom Codex desktop theme",
    "Codex wallpaper theme",
  ],
  alternates: { canonical: "/custom-skin" },
  openGraph: {
    type: "website",
    url: "/custom-skin",
    title: "Custom Codex Skin Setup from $4.99",
    description:
      "Choose a fast Codex skin setup or one tailored skin with a rights-cleared image you supply.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Custom Codex skin setup" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Codex Skin Setup from $4.99",
    description:
      "Readable color settings, image placement, downloadable configuration, and install guidance.",
    images: ["/opengraph-image"],
  },
};

const serviceFaq = [
  {
    question: "Am I paying for the open-source Codex skin project?",
    answer:
      "No. The public installer, gallery, and tutorials remain free. Paid orders cover personalization work: selecting readable colors, preparing image placement, producing a configuration, checking the result, and writing install and restore guidance for the order.",
  },
  {
    question: "What happens after checkout?",
    answer:
      "Creem returns you to a verified order page. The page connects the payment automatically and asks only for platform, visual direction, optional color preference, and the image needed for the selected service. No account or copied order number is required.",
  },
  {
    question: "When will the configuration arrive?",
    answer:
      "Delivery is within 72 hours after a complete brief and usable image are received. The finished package is sent to the email used at checkout.",
  },
  {
    question: "Does Custom Skin Early Access include revisions?",
    answer:
      "No. It includes one tailored skin based on the submitted brief. Clear visual direction and a suitable source image help the first delivery match the intended result.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Codex Skin Setup",
  provider: {
    "@type": "Organization",
    name: "Codex Dream Skin",
    url: "https://codexdreamskin.top",
  },
  areaServed: "Worldwide",
  serviceType: "Desktop theme configuration and installation support",
  offers: [
    { "@type": "Offer", name: "Skin Quick Setup", price: "4.99", priceCurrency: "USD", url: "https://codexdreamskin.top/custom-skin" },
    { "@type": "Offer", name: "Custom Skin Early Access", price: "9.99", priceCurrency: "USD", url: "https://codexdreamskin.top/custom-skin" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: serviceFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function CustomSkinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd]) }}
      />
      <SiteHeader ctaHref="#pricing" ctaLabel="Choose a service" />
      <main>
        <section className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-black uppercase text-link">Custom Codex skin service</p>
            <h1 className="mt-4 max-w-[14ch] text-balance text-5xl font-black leading-[1.05] text-eel-dark-blue sm:text-6xl">
              A readable skin, prepared for your setup.
            </h1>
            <p className="mt-6 max-w-[58ch] text-pretty text-lg font-semibold leading-8 text-charcoal">
              Skip the color guessing and repeated image crops. Choose a fast
              setup or submit one image for a tailored Codex desktop theme,
              then receive a downloadable configuration with install and
              restore instructions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pricing" className="button-primary inline-flex min-h-14 items-center justify-center px-6 font-black">
                Compare services
              </a>
              <Link href="/#install" className="button-secondary inline-flex min-h-14 items-center justify-center px-6 font-black">
                Keep using the free guide
              </Link>
            </div>
          </div>

          <div className="rounded-xl border-2 border-graphite border-b-[8px] bg-eel-light p-6 sm:p-8">
            <PaintBrush aria-hidden="true" className="size-12 text-link" weight="fill" />
            <h2 className="mt-5 text-balance text-3xl font-black text-eel-dark-blue">
              The software stays free.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-8 text-charcoal">
              Payment covers the hands-on preparation around it: palette
              selection, image placement, readability checks, configuration
              packaging, and practical support. It does not purchase the
              open-source project, the official Codex app, or rights to someone
              else&apos;s artwork.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-extrabold text-eel-dark-blue sm:grid-cols-2">
              {["No account required", "Secure Creem checkout", "Private image storage", "72-hour delivery window"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check aria-hidden="true" className="size-5 shrink-0 text-link" weight="bold" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24 border-y-2 border-eel-light bg-[#fbfff8]">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
            <div className="max-w-3xl">
              <h2 className="text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
                Start free. Pay only when preparation saves you time.
              </h2>
              <p className="mt-4 text-pretty text-lg leading-8 text-charcoal">
                Every visitor can install the project, browse the full pet
                gallery, download the starter files, and follow the tutorials.
                The paid options are small, one-time services for people who
                want a prepared result instead of doing the visual work alone.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              <article className="flex flex-col rounded-xl border-2 border-graphite border-b-[7px] bg-white p-6">
                <p className="text-sm font-black uppercase text-link">Self-service</p>
                <h3 className="mt-2 text-3xl font-black text-eel-dark-blue">Free</h3>
                <p className="mt-3 text-pretty leading-7 text-charcoal">
                  The complete do-it-yourself path for installing, checking,
                  customizing, and restoring your Codex appearance.
                </p>
                <ul className="mt-6 grid gap-3 text-sm font-bold leading-6 text-charcoal">
                  {["macOS and Windows install guide", "53-pet searchable gallery", "Copy-ready install commands", "Pet creation starter and tutorial", "Restore and safety guidance"].map((item) => (
                    <li key={item} className="flex gap-2"><Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-link" weight="bold" />{item}</li>
                  ))}
                </ul>
                <Link href="/#install" className="button-secondary mt-auto inline-flex min-h-14 items-center justify-center px-5 font-black">
                  Open the free installer
                </Link>
              </article>

              <article className="flex flex-col rounded-xl border-2 border-graphite border-b-[7px] bg-white p-6">
                <p className="text-sm font-black uppercase text-link">Fast preparation</p>
                <h3 className="mt-2 text-balance text-3xl font-black text-eel-dark-blue">Skin Quick Setup</h3>
                <p className="mt-3 text-4xl font-black tabular-nums text-eel-dark-blue">$4.99</p>
                <p className="mt-3 text-pretty leading-7 text-charcoal">
                  A compact setup for a clearer color direction and a prepared
                  configuration. Add an image if you want it checked and placed.
                </p>
                <ul className="mt-6 grid gap-3 text-sm font-bold leading-6 text-charcoal">
                  {["Custom color palette parameters", "Optional image placement adjustment", "Readability check", "Downloadable configuration", "Install and restore instructions", "Delivery within 72 hours"].map((item) => (
                    <li key={item} className="flex gap-2"><Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-link" weight="bold" />{item}</li>
                  ))}
                </ul>
                <CheckoutButton productSlug="skin-quick-setup" label="Get Quick Setup" className="mt-7" />
              </article>

              <article className="flex flex-col rounded-xl border-2 border-action-dark border-b-[7px] bg-eel-light p-6">
                <p className="text-sm font-black uppercase text-link">Early access</p>
                <h3 className="mt-2 text-balance text-3xl font-black text-eel-dark-blue">Custom Skin</h3>
                <p className="mt-3 text-4xl font-black tabular-nums text-eel-dark-blue">$9.99</p>
                <p className="mt-3 text-pretty leading-7 text-charcoal">
                  One tailored skin based on one suitable image you provide,
                  prepared around your chosen visual direction.
                </p>
                <ul className="mt-6 grid gap-3 text-sm font-bold leading-6 text-charcoal">
                  {["One tailored Codex skin", "One customer-supplied rights-cleared image", "Readability-tested color treatment", "Downloadable configuration", "Install and restore instructions", "Delivery within 72 hours", "No revision"].map((item) => (
                    <li key={item} className="flex gap-2"><Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-link" weight="bold" />{item}</li>
                  ))}
                </ul>
                <CheckoutButton productSlug="custom-skin-early-access" label="Order Custom Skin" className="mt-7" />
              </article>
            </div>

            <p className="mt-6 text-pretty text-sm font-bold leading-6 text-ash">
              Prices are one-time payments in USD. Taxes, when required, are
              calculated by Creem at checkout. Review the Terms and Refund
              Policy before purchasing.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
          <h2 className="max-w-[18ch] text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
            From payment to a usable configuration
          </h2>
          <div className="mt-10 grid border-y-2 border-graphite md:grid-cols-4">
            {[
              [ShieldCheck, "Pay securely", "Creem handles checkout, payment processing, and applicable tax collection."],
              [ImageSquare, "Send one short brief", "The return page verifies the order automatically and asks only for the details needed to make the skin."],
              [Wrench, "Configuration is prepared", "Color, image placement, and interface readability are checked for the selected service."],
              [DownloadSimple, "Receive the package", "The checkout email receives the configuration plus install and restore instructions within 72 hours."],
            ].map(([Icon, title, body], index) => {
              const StepIcon = Icon as typeof ShieldCheck;
              return (
                <article key={String(title)} className={`py-7 md:px-6 ${index < 3 ? "border-b-2 border-eel-light md:border-r-2 md:border-b-0" : ""}`}>
                  <StepIcon aria-hidden="true" className="size-9 text-action" weight="fill" />
                  <h3 className="mt-4 text-xl font-black text-eel-dark-blue">{String(title)}</h3>
                  <p className="mt-3 text-pretty text-sm leading-6 text-charcoal">{String(body)}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y-2 border-eel-light bg-[#fbfff8]">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:py-24">
            <div>
              <ClockCountdown aria-hidden="true" className="size-12 text-action" weight="fill" />
              <h2 className="mt-5 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
                What makes a good source image?
              </h2>
            </div>
            <div className="grid gap-5 text-pretty text-lg leading-8 text-charcoal">
              <p>
                Use an image you created, licensed, purchased with suitable
                rights, or received permission to use. A public image appearing
                in search results is not automatically licensed for reuse. The
                service cannot create rights for a copyrighted character,
                photograph, logo, or artwork supplied without permission.
              </p>
              <p>
                Wide images usually fit a desktop theme better than tall phone
                wallpapers. Leave a calm area behind the main title and project
                list, keep the subject away from the composer, and avoid very
                small text inside the image. PNG, JPEG, WebP, HEIC, and HEIF are
                accepted up to 15 MB through private storage.
              </p>
              <p>
                A Custom Skin order uses one submitted image and has no revision.
                If the image is unusable—for example, corrupt, too small, or
                clearly missing necessary rights—the delivery window begins
                after a suitable replacement is received.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1000px] px-4 py-16 sm:px-6 lg:py-24">
          <h2 className="text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">Service questions</h2>
          <div className="mt-9 grid gap-4">
            {serviceFaq.map((item) => (
              <details key={item.question} className="rounded-xl border-2 border-graphite bg-white p-5 sm:p-6">
                <summary className="cursor-pointer text-lg font-black text-eel-dark-blue">{item.question}</summary>
                <p className="mt-4 text-pretty leading-7 text-charcoal">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
