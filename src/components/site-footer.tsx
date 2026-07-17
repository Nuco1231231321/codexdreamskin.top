import Link from "next/link";

import { CookieSettingsButton } from "@/components/cookie-settings-button";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-graphite">
      <div className="mx-auto grid max-w-[1200px] gap-7 px-4 py-9 text-sm font-bold text-charcoal sm:px-6 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <p className="max-w-[58ch] text-pretty leading-6">
            Codex Dream Skin is an independent installer guide, gallery, and
            optional configuration service. It is not affiliated with or
            endorsed by OpenAI.
          </p>
          <p className="mt-2 text-xs font-bold text-ash">© 2026 codexdreamskin.top</p>
        </div>
        <nav aria-label="Footer navigation" className="grid gap-x-6 gap-y-3 sm:grid-cols-3">
          {[
            ["Install", "/#install"],
            ["Codex Pets", "/codex-pets"],
            ["Custom Skin", "/custom-skin"],
            ["About", "/about"],
            ["Contact", "/contact"],
            ["Privacy", "/privacy"],
            ["Terms", "/terms"],
            ["Refund policy", "/refund-policy"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="text-link underline decoration-2 underline-offset-4">
              {label}
            </Link>
          ))}
          <CookieSettingsButton />
        </nav>
      </div>
    </footer>
  );
}
