import type { Metadata } from "next";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for the free Codex Dream Skin installer, pet gallery, downloads, image rights, Creem payments, delivery, and optional setup services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    type: "website",
    url: "/terms",
    title: "Terms of Service | Codex Dream Skin",
    description:
      "Terms for free installer materials, gallery use, image rights, payments, delivery, and optional Codex skin setup services.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Codex Dream Skin terms of service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Codex Dream Skin",
    description:
      "Terms for installer materials, gallery use, image rights, payments, delivery, and setup services.",
    images: ["/opengraph-image"],
  },
};

const sections = [
  ["Independent service", "Codex Dream Skin is an independent website and is not affiliated with, sponsored by, or endorsed by OpenAI. Codex and related marks belong to their respective owners. The website does not sell the official Codex application."],
  ["Free materials", "The install guide, commands, gallery, tutorials, and starter files are provided for informational and self-service use. They may depend on unofficial or experimental tooling and can stop working after a Codex Desktop, operating-system, package, or renderer update. Review commands before running them and keep the restore path available."],
  ["What paid orders cover", "Skin Quick Setup and Custom Skin Early Access charge for personalization, preparation, readability checking, configuration packaging, and install or restore guidance. Payment does not buy open-source software, third-party artwork, character rights, trademarks, or an OpenAI product license."],
  ["Delivery", "The stated delivery window is within 72 hours after both payment and a complete, usable brief are received. If the submitted file is corrupt, inaccessible, clearly unsuitable, or missing necessary rights, the delivery window begins after a suitable replacement is received. Delivery is sent to the email used at checkout."],
  ["Service scope", "Skin Quick Setup includes the listed palette, image-placement assistance when an image is supplied, downloadable configuration, and instructions. Custom Skin Early Access includes one tailored skin based on one customer-supplied image and no revision. Neither service includes original illustration, third-party character licensing, remote access to your computer, or a guarantee that future Codex versions will preserve the same visual result."],
  ["Your image and instructions", "You must own or have permission to use any uploaded image and instructions. Do not submit illegal, abusive, deceptive, privacy-invasive, infringing, or harmful content. You retain ownership of your submitted material and grant only the limited permission needed to prepare and deliver the ordered configuration."],
  ["Payments", "Creem acts as the payment processor and Merchant of Record for paid services. Prices are shown in USD. Applicable taxes and payment details are handled in the checkout flow. Do not send payment-card information to the support address."],
  ["Reasonable use and safety", "Do not use downloads, commands, contact channels, upload endpoints, or payment flows to distribute malware, probe systems, interfere with other users, automate fraudulent traffic, or bypass security controls. Access may be limited when necessary to protect the service or comply with law."],
  ["Warranty and liability", "The free guide and experimental customization methods are provided without a promise of uninterrupted compatibility. To the extent permitted by law, the site is not liable for indirect loss, lost work, or third-party platform changes. This does not exclude rights or remedies that cannot legally be excluded."],
  ["Changes and contact", "These terms may be updated when the service, payment flow, or applicable requirements change. Material changes will be reflected by the effective date. Questions can be sent through the Contact page."],
];

export default function TermsPage() {
  return (
    <>
      <main className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 sm:py-20">
        <Link href="/" className="inline-flex items-center gap-2 font-extrabold text-link underline decoration-2 underline-offset-4">
          <ArrowLeft aria-hidden="true" className="size-5" weight="bold" />
          Back to home
        </Link>
        <h1 className="mt-10 text-balance text-5xl font-black text-eel-dark-blue sm:text-6xl">Terms of Service</h1>
        <p className="mt-4 font-bold text-ash">Effective July 17, 2026</p>
        <p className="mt-6 text-pretty text-lg leading-8 text-charcoal">
          These terms explain the boundary between the free guide and the
          optional paid preparation services. By using the site or placing an
          order, you agree to the terms that apply to that activity.
        </p>
        <div className="mt-12 grid gap-9">
          {sections.map(([title, body]) => (
            <section key={title}>
              <h2 className="text-2xl font-black text-eel-dark-blue">{title}</h2>
              <p className="mt-3 text-pretty leading-7 text-charcoal">{body}</p>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
