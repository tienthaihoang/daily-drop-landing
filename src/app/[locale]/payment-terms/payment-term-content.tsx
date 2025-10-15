"use client";

import { ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function PaymentTermsContent() {
  const t = useTranslations("paymentTerms");
  const locale = useLocale();

  const sections = [
    "acceptedPayments",
    "billingCycle",
    "freeTrial",
    "pricing",
    "refunds",
    "pauseCancellation",
    "paymentSecurity",
    "taxesInvoices",
    "subscriptionChanges",
    "latePayment",
    "disputeResolution",
    "contact",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 via-green-50 to-emerald-50">
      <div className="fixed top-10 left-4 z-50">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 bg-white hover:bg-lime-50 text-slate-700 font-semibold px-4 py-2 rounded-xl shadow-lg border-2 border-slate-200 transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">{t("backButton")}</span>
        </Link>
      </div>

      <div className="bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-lime-200 shadow-sm">
                <svg
                  className="w-5 h-5 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm font-semibold text-emerald-900">
                  {t("badge")}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
                {t("title")}
              </h1>

              <p className="text-xl text-slate-600 mb-4">{t("subtitle")}</p>
              <p className="text-sm text-slate-500">{t("lastUpdated")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="hidden lg:block lg:col-span-3 lg:col-start-2">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl p-6 border-2 border-lime-200 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">
                    {t("tableOfContents")}
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section, idx) => (
                      <a
                        key={idx}
                        href={`#${section}`}
                        className="block text-sm text-slate-600 hover:text-emerald-600 transition-colors py-1"
                      >
                        {t(`sections.${section}.title`)}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              {sections.map((section, idx) => (
                <section key={idx} id={section} className="mb-12 scroll-mt-24">
                  <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-lime-400 to-emerald-500 text-white text-lg font-bold">
                        {idx + 1}
                      </span>
                      {t(`sections.${section}.title`)}
                    </h2>

                    <div className="text-slate-700 leading-relaxed space-y-4">
                      <p>{t(`sections.${section}.content`)}</p>

                      {t.has(`sections.${section}.items`) && (
                        <ul className="space-y-3 mt-6">
                          {Array.from({ length: 10 }).map((_, itemIdx) => {
                            const hasItem = t.has(
                              `sections.${section}.items.${itemIdx}`
                            );
                            if (!hasItem) return null;

                            return (
                              <li
                                key={itemIdx}
                                className="flex items-start gap-3"
                              >
                                <svg
                                  className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <div>
                                  <strong className="text-slate-900">
                                    {t(
                                      `sections.${section}.items.${itemIdx}.title`
                                    )}
                                  </strong>
                                  <p className="text-slate-600 mt-1">
                                    {t(
                                      `sections.${section}.items.${itemIdx}.description`
                                    )}
                                  </p>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
