"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");

  const criteria = [
    "industryKnowledge",
    "brandConsistency",
    "reviewExperience",
    "speed",
    "revisionCount",
  ];

  return (
    <section className="py-20 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-12 mb-16">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              {t("title")}
            </h2>
            <p className="text-xl text-slate-300">{t("subtitle")}</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            {/* Header */}
            <div className="grid grid-cols-2 text-center font-bold border-b border-white/10 pb-4 mb-6">
              <div className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent text-lg">
                {t("columns.ours")}
              </div>
              <div className="text-slate-500 text-lg">
                {t("columns.others")}
              </div>
            </div>

            <div className="flex flex-col divide-y divide-white/5 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
              {criteria.map((key, idx) => (
                <div
                  key={key}
                  className={`grid grid-cols-2 items-start text-left ${
                    idx % 2 === 0 ? "bg-white/5" : "bg-transparent"
                  } hover:bg-white/10 transition-colors`}
                >
                  <div className="p-6 flex items-start gap-3 border-r border-white/10">
                    <CheckCircle2
                      className="hidden md:block text-purple-400 flex-shrink-0 mt-[2px]"
                      size={20}
                    />
                    <p className="leading-relaxed text-slate-300">
                      {t(`criteria.${key}.ours`)}
                    </p>
                  </div>

                  <div className="p-6 flex items-start gap-3">
                    <XCircle
                      className="hidden md:block text-slate-600 flex-shrink-0 mt-[2px]"
                      size={20}
                    />
                    <p className="leading-relaxed text-slate-500">
                      {t(`criteria.${key}.others`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
