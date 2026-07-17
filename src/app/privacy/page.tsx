import type { Metadata } from "next";
import { ArrowLeft, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Codex Dream Skin handles analytics consent, Creem checkout information, Supabase order records, private image uploads, and privacy requests.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    url: "/privacy",
    title: "Privacy Policy | Codex Dream Skin",
    description:
      "Read how analytics, checkout information, private uploads, cookies, and deletion requests are handled.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Codex Dream Skin privacy policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Codex Dream Skin",
    description: "How analytics, checkout information, private uploads, cookies, and deletion requests are handled.",
    images: ["/opengraph-image"],
  },
};

const sections = [
  {
    title: "Information used by the free site",
    body: "The installer, gallery, tutorials, downloads, and copy buttons do not require an account. Hosting and security providers may process ordinary request information such as IP address, browser type, requested URL, timestamp, and security signals. Copy actions use the browser clipboard only after you choose a copy button. The website does not receive Codex conversations, project contents, local paths, API keys, or desktop credentials through the free install flow.",
  },
  {
    title: "Analytics consent",
    body: "Google Analytics 4 loads only after you choose Accept analytics. When accepted, Google may process page views, engagement events, device and browser information, approximate location derived from IP address, and identifiers used to measure sessions. Analytics storage is denied by default. Your choice is stored in your browser and can be changed with Cookie settings in the footer. Essential site features remain available when analytics is declined.",
  },
  {
    title: "Paid checkout information",
    body: "Creem is the payment processor and Merchant of Record for Skin Quick Setup and Custom Skin Early Access. Creem collects and processes checkout details such as name, email, billing country, payment method, order amount, tax, customer ID, checkout ID, and order status under its own privacy terms. This site receives the order identifiers, checkout email, purchased service, amount, currency, and payment status needed to verify and fulfill an order. Full payment-card details are not received or stored by this site.",
  },
  {
    title: "Briefs and private image uploads",
    body: "After a verified purchase, the brief may include platform, visual direction, color preference, notes, and one source image. Supabase stores order records and keeps uploaded source images in a private bucket that is not publicly readable. The image is used only to prepare, verify, and deliver the ordered configuration, resolve related support, or comply with a lawful obligation. Paid uploads are not added to the public gallery without separate permission.",
  },
  {
    title: "Service providers and disclosures",
    body: "Cloudflare hosts and protects the public website, Supabase provides database, Edge Function, and private storage services, Creem handles payment and tax processing, and Google provides optional analytics. Information may also be disclosed when reasonably necessary to comply with law, respond to valid legal process, protect users or the service, investigate fraud or abuse, or complete a business transfer with appropriate safeguards.",
  },
  {
    title: "Advertising and Google cookies",
    body: "The site may use Google advertising products after approval. If ads are enabled, third-party vendors including Google may place or read cookies, use web beacons, IP addresses, or other identifiers to serve, limit, measure, and personalize ads where consent and law allow. Before personalized advertising is enabled for regions that require it, the site will deploy the consent controls required by Google and applicable law. Visitors can also review Google advertising settings or opt-out tools. Personally identifiable information is not intentionally passed to Google in ad requests.",
  },
  {
    title: "Retention and deletion",
    body: "Order and payment records are kept for fulfillment, dispute handling, fraud prevention, accounting, and tax obligations. Briefs and source images are kept only as long as reasonably needed to produce and support the order; source uploads are normally removed after the delivery and support period. Analytics retention follows the configured Google Analytics settings. A verified request may ask for access, correction, or deletion, subject to records that must be retained for legal, tax, security, or dispute purposes.",
  },
  {
    title: "Security and international processing",
    body: "HTTPS is used in transit, private uploads are not exposed through a public storage policy, and payment webhooks are authenticated with signatures. No online service can guarantee absolute security. Providers may process information in countries other than the visitor's country, using their contractual and legal safeguards where required.",
  },
  {
    title: "Children",
    body: "This website is intended for a general developer and desktop-customization audience and is not directed to children under 13. It does not knowingly create behavioral advertising profiles from child-directed activity. A parent or guardian can request deletion if they believe a child submitted personal information.",
  },
  {
    title: "Your choices and contact",
    body: "You can decline analytics, clear the saved consent choice in your browser, avoid optional paid services, and refrain from uploading an image. For access, correction, deletion, consent, rights, or privacy questions, use the Contact page or email support@codexdreamskin.top. Verification may be required before accountless order information is disclosed or deleted.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <main className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 sm:py-20">
        <Link href="/" className="inline-flex items-center gap-2 font-extrabold text-link underline decoration-2 underline-offset-4">
          <ArrowLeft aria-hidden="true" className="size-5" weight="bold" />
          Back to home
        </Link>
        <ShieldCheck aria-hidden="true" className="mt-10 size-14 text-action" weight="fill" />
        <h1 className="mt-5 text-balance text-5xl font-black text-eel-dark-blue sm:text-6xl">Privacy Policy</h1>
        <p className="mt-4 font-bold text-ash">Effective July 17, 2026</p>
        <p className="mt-6 text-pretty text-lg leading-8 text-charcoal">
          This policy explains what information is involved when you browse the
          free site, accept analytics, place a paid order, upload a source image,
          or contact support.
        </p>

        <div className="mt-12 grid gap-9">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-black text-eel-dark-blue">{section.title}</h2>
              <p className="mt-3 text-pretty leading-7 text-charcoal">{section.body}</p>
            </section>
          ))}
        </div>

        <Link href="/contact" className="button-primary mt-12 inline-flex min-h-14 items-center justify-center px-6 font-black">
          Make a privacy request
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
