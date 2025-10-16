import { routing } from "@/i18n/routing";
import IntlProviderClient from "@/provider/IntlProviderClient";
import { hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { type ReactNode } from "react";
import "../globals.css";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Daily Drop",
  description:
    "Professional design, video, development, and content services on demand",
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <IntlProviderClient locale={locale} messages={messages}>
          {children}
        </IntlProviderClient>
      </body>
    </html>
  );
}
