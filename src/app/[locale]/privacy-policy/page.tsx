import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PrivacyPolicyContent from "./privacy-policy-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("privacyPolicy");

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
