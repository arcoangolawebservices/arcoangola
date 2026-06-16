import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return {
    title: `Arco Angola – ${t("titleHighlight")} ${t("titleSuffix")}`,
    description: t("subtitle"),
    alternates: {
      canonical: `/${locale}`,
      languages: { pt: "/pt", en: "/en", fr: "/fr" },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "pt" | "en" | "fr")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-navy antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
