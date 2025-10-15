import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PaymentTermsContent from "./payment-term-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("privacyPolicy");

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default function PaymentTermPage() {
  return <PaymentTermsContent />;
}
