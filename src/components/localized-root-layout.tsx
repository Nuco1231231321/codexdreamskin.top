import { Nunito } from "next/font/google";
import { setRequestLocale } from "next-intl/server";

import { ConsentBanner } from "@/components/consent-banner";
import { IntlProvider } from "@/components/intl-provider";
import { getClientMessagesForLocale, type Locale } from "@/i18n/config";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export function LocalizedRootLayout({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode;
  locale: Locale;
}>) {
  setRequestLocale(locale);

  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"} className={`${nunito.variable} scroll-smooth`}>
      <body>
        <script
          id="google-consent-default"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});`,
          }}
        />
        <IntlProvider
          locale={locale}
          messages={getClientMessagesForLocale(locale)}
          timeZone="Asia/Shanghai"
        >
          {children}
          <ConsentBanner />
        </IntlProvider>
      </body>
    </html>
  );
}
