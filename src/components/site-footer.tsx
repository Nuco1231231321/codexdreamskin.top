import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-graphite">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-4 py-8 text-sm font-bold text-charcoal sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>
          codexdreamskin.top is an independent guide. Not affiliated with
          OpenAI.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/" className="text-link underline decoration-2 underline-offset-4">
            Dream Skin
          </Link>
          <Link
            href="/codex-pets"
            className="text-link underline decoration-2 underline-offset-4"
          >
            Codex Pets
          </Link>
          <Link
            href="/about"
            className="text-link underline decoration-2 underline-offset-4"
          >
            About
          </Link>
          <Link
            href="/privacy"
            className="text-link underline decoration-2 underline-offset-4"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
