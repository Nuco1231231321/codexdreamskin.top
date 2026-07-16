import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[100dvh] place-items-center px-4 py-16">
      <div className="max-w-xl text-center">
        <p className="text-sm font-black uppercase text-link">Page not found</p>
        <h1 className="mt-4 text-balance text-5xl font-black text-eel-dark-blue sm:text-6xl">
          This skin route does not exist.
        </h1>
        <p className="mt-5 text-pretty text-lg leading-8 text-charcoal">
          Return to the installer to choose macOS or Windows, copy the current
          command, and review the restore instructions.
        </p>
        <Link
          href="/"
          className="button-primary mt-8 inline-flex min-h-14 items-center justify-center gap-2 px-6 font-black"
        >
          <ArrowLeft aria-hidden="true" className="size-5" weight="bold" />
          Back to installer
        </Link>
      </div>
    </main>
  );
}
