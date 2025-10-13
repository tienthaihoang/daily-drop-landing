import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TermsContent from "./terms-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("terms");

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default function TermsPage() {
  return <TermsContent />;
}
