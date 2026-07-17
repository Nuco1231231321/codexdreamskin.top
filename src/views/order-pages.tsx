import { ArrowLeft, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Suspense } from "react";

import { OrderBriefForm } from "@/components/order-brief-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";

export function OrderSuccessPageView() {
  const t = useTranslations("Order.success");

  return (
    <>
      <SiteHeader ctaHref="/custom-skin" ctaLabel={t("headerCta")} />
      <main className="mx-auto min-h-[calc(100dvh-72px)] max-w-[900px] px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm font-black uppercase text-link">{t("eyebrow")}</p>
        <h1 className="mt-4 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("title")}</h1>
        <p className="mt-5 max-w-[62ch] text-pretty text-lg leading-8 text-charcoal">{t("description")}</p>
        <div className="mt-10">
          <Suspense fallback={<p className="font-bold text-charcoal">{t("loading")}</p>}>
            <OrderBriefForm />
          </Suspense>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export function OrderCancelPageView() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Order.cancel");

  return (
    <>
      <SiteHeader ctaHref="/custom-skin" ctaLabel={t("headerCta")} />
      <main className="mx-auto grid min-h-[calc(100dvh-72px)] max-w-[760px] place-items-center px-4 py-12 sm:px-6">
        <div className="w-full rounded-xl border-2 border-graphite border-b-[7px] bg-white p-7 sm:p-10">
          <ShieldCheck aria-hidden="true" className="size-14 text-action" weight="fill" />
          <h1 className="mt-5 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("title")}</h1>
          <p className="mt-5 text-pretty text-lg leading-8 text-charcoal">{t("description")}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={localizePath("/custom-skin", locale)} className="button-secondary inline-flex min-h-14 items-center justify-center gap-2 px-6 font-black">
              <ArrowLeft aria-hidden="true" className="size-5" weight="bold" />
              {t("services")}
            </Link>
            <Link href={localizePath("/#install", locale)} className="button-primary inline-flex min-h-14 items-center justify-center px-6 font-black">{t("freeGuide")}</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
