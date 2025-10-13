"use client";

import { ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function TermsContent() {
  const t = useTranslations("terms");
  const locale = useLocale();

  const sections = [
    { key: "introduction", hasSubsections: false },
    { key: "services", hasSubsections: false },
    { key: "subscriptionPayment", hasSubsections: true, count: 4 },
    { key: "intellectualProperty", hasSubsections: false },
    { key: "userResponsibilities", hasSubsections: true, count: 5 },
    { key: "deliveryRevisions", hasSubsections: false },
    { key: "termination", hasSubsections: false },
    { key: "refunds", hasSubsections: false },
    { key: "limitation", hasSubsections: false },
    { key: "indemnification", hasSubsections: false },
    { key: "changes", hasSubsections: false },
    { key: "governing", hasSubsections: false },
    { key: "contact", hasSubsections: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Back Button */}
      <div className="fixed top-10 left-4 z-50">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-4 py-2 rounded-xl shadow-lg border-2 border-slate-200 transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">{t("backButton")}</span>
        </Link>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-200 shadow-sm">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-blue-900">
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
      </div>

      {/* Content */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            {/* Table of Contents */}
            <div className="hidden lg:block lg:col-span-3 lg:col-start-2">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">
                    {t("tableOfContents")}
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section, idx) => (
                      <a
                        key={idx}
                        href={`#${section.key}`}
                        className="block text-sm text-slate-600 hover:text-blue-600 transition-colors py-1"
                      >
                        {t(`sections.${section.key}.title`)}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-12 lg:col-span-7">
              <div className="prose prose-slate max-w-none">
                {sections.map((section, idx) => (
                  <section
                    key={idx}
                    id={section.key}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white text-lg font-bold">
                          {idx + 1}
                        </span>
                        {t(`sections.${section.key}.title`)}
                      </h2>

                      <div className="text-slate-700 leading-relaxed space-y-4">
                        <p>{t(`sections.${section.key}.content`)}</p>

                        {section.hasSubsections && (
                          <ul className="space-y-3 mt-6">
                            {Array.from({ length: section.count || 0 }).map(
                              (_, subIdx) => (
                                <li
                                  key={subIdx}
                                  className="flex items-start gap-3"
                                >
                                  <svg
                                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
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
                                        `sections.${section.key}.items.${subIdx}.title`
                                      )}
                                    </strong>
                                    <p className="text-slate-600 mt-1">
                                      {t(
                                        `sections.${section.key}.items.${subIdx}.description`
                                      )}
                                    </p>
                                  </div>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="text-center">
                  <h3 className="text-2xl font-black text-slate-900 mb-3">
                    {t("cta.title")}
                  </h3>
                  <p className="text-slate-600 mb-6">{t("cta.subtitle")}</p>
                  <a
                    href="mailto:legal@dailydrop.com"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {t("cta.button")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
