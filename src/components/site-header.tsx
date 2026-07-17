import { Palette } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

type SiteHeaderProps = {
  ctaHref: string;
  ctaLabel: string;
};

export function SiteHeader({ ctaHref, ctaLabel }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b-2 border-eel-light bg-white/95">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6"
      >
        <Link
          href="/"
          aria-label="Codex Dream Skin home"
          className="flex shrink-0 items-center gap-2 font-black text-eel-dark-blue"
        >
          <span className="grid size-10 place-items-center rounded-xl border-2 border-action bg-eel-light">
            <Palette aria-hidden="true" className="size-6" weight="fill" />
          </span>
          <span className="hidden text-lg sm:inline">codex dream skin</span>
        </Link>

        <div className="hidden items-center gap-5 text-sm font-extrabold text-charcoal lg:flex">
          <Link href="/#install" className="hover:text-link">
            Install
          </Link>
          <Link href="/codex-pets" className="hover:text-link">
            Codex Pets
          </Link>
          <Link href="/custom-skin" className="hover:text-link">
            Custom Skin
          </Link>
          <Link href="/#safety" className="hover:text-link">
            Safety
          </Link>
          <Link href="/contact" className="hover:text-link">
            Contact
          </Link>
        </div>

        <Link
          href={ctaHref}
          className="button-primary inline-flex min-h-11 shrink-0 items-center justify-center px-4 text-sm font-black"
        >
          {ctaLabel}
        </Link>
      </nav>
    </header>
  );
}
