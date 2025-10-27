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
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed top-10 left-4 z-50">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold px-4 py-2 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">{t("backButton")}</span>
        </Link>
      </div>

      <div className="bg-slate-950 relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-6">
                  <svg
                    className="w-5 h-5 text-purple-400"
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
                  <span className="text-sm font-semibold text-slate-300">
                    {t("badge")}
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                  {t("title")}
                </h1>

                <p className="text-xl text-slate-300 mb-4">{t("subtitle")}</p>

                <p className="text-sm text-slate-500">{t("lastUpdated")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-12 gap-8">
            <div className="hidden lg:block lg:col-span-3 lg:col-start-2">
              <div className="sticky top-24">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">
                    {t("tableOfContents")}
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section, idx) => (
                      <a
                        key={idx}
                        href={`#${section.key}`}
                        className="block text-sm text-slate-400 hover:text-purple-400 transition-colors py-1"
                      >
                        {t(`sections.${section.key}.title`)}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="prose prose-slate max-w-none">
                {sections.map((section, idx) => (
                  <section
                    key={idx}
                    id={section.key}
                    className="mb-12 scroll-mt-24"
                  >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all">
                      <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-lg font-bold">
                          {idx + 1}
                        </span>
                        {t(`sections.${section.key}.title`)}
                      </h2>

                      <div className="text-slate-300 leading-relaxed space-y-4">
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
                                    className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5"
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
                                    <strong className="text-white">
                                      {t(
                                        `sections.${section.key}.items.${subIdx}.title`
                                      )}
                                    </strong>
                                    <p className="text-slate-400 mt-1">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
