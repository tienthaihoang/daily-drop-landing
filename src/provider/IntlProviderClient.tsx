"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  locale: string;
  messages: Record<string, string>;
};

export default function IntlProviderClient({
  locale,
  messages,
  children,
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleError = (err: any) => {
    if (err.code === "MISSING_MESSAGE") return;
    console.error(err);
  };
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      onError={handleError}
    >
      {children}
    </NextIntlClientProvider>
  );
}
