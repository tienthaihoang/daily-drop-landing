"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations("hero");

  const services = [
    {
      nameKey: "design",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      id: "#design",
    },
    {
      nameKey: "video",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      id: "#video",
    },
    {
      nameKey: "development",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      id: "#development",
    },
    {
      nameKey: "content",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
      id: "#content",
    },
  ];

  const features = [
    { icon: "⚡", textKey: "delivery" },
    { icon: "♾️", textKey: "unlimited" },
    { icon: "🎯", textKey: "team" },
    { icon: "✨", textKey: "quality" },
  ];

  return (
    <section className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden pt-[120px] pb-16 px-4">
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-300/40 to-blue-300/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-orange-300/30 to-yellow-300/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-purple-200 rounded-full px-5 py-2 mb-8 shadow-lg shadow-purple-100">
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t("badge")}
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                {t("title1")}
              </span>
              <br />
              <span className="text-slate-900">{t("title2")}</span>
            </h1>

            <p className="text-xl text-slate-700 mb-10 max-w-2xl leading-relaxed">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {services.map((service, idx) => (
                <Link
                  href={service.id}
                  key={idx}
                  className={`${service.bgColor} backdrop-blur-sm border-2 border-white rounded-2xl px-6 py-3 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl`}
                >
                  <span className={`font-bold ${service.textColor}`}>
                    {t(`services.${service.nameKey}`)}
                  </span>
                </Link>
              ))}
            </div>

            <div className="bg-white/60 backdrop-blur-xl border-2 border-white rounded-3xl p-8 shadow-2xl shadow-purple-200/50 mb-10 max-w-3xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {t("pricing.amount")}
                    </span>
                    <span className="text-xl md:text-2xl text-slate-600">
                      {t("pricing.period")}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 font-medium">
                    {t("pricing.cancel")}
                  </p>
                </div>

                <button className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-purple-300 hover:shadow-2xl hover:shadow-pink-300 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  {t("pricing.cta")}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 text-base">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700">
                    {t(`features.${feature.textKey}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
