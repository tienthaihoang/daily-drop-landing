"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  // const services = [
  //   {
  //     nameKey: "design",
  //     bgColor: "bg-lime-50",
  //     textColor: "text-lime-700",
  //     id: "#design",
  //   },
  //   {
  //     nameKey: "video",
  //     bgColor: "bg-emerald-50",
  //     textColor: "text-emerald-700",
  //     id: "#video",
  //   },
  //   {
  //     nameKey: "content",
  //     bgColor: "bg-teal-50",
  //     textColor: "text-teal-700",
  //     id: "#content",
  //   },
  //   {
  //     nameKey: "presentation",
  //     bgColor: "bg-cyan-50",
  //     textColor: "text-cyan-700",
  //     id: "#presentation",
  //   },
  //   {
  //     nameKey: "qa",
  //     bgColor: "bg-lime-50",
  //     textColor: "text-lime-700",
  //     id: "#qa",
  //   },
  //   {
  //     nameKey: "localization",
  //     bgColor: "bg-emerald-50",
  //     textColor: "text-emerald-700",
  //     id: "#content",
  //   },
  // ];

  const features = [
    { icon: "⚡", textKey: "delivery" },
    { icon: "♾️", textKey: "unlimited" },
    { icon: "🎯", textKey: "team" },
    { icon: "✨", textKey: "quality" },
  ];

  return (
    <section className="bg-slate-950 relative overflow-hidden pt-[120px] pb-16 px-4">
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-slate-950 to-indigo-900/10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8">
              <span className="text-sm font-semibold text-purple-300">
                {t("badge")}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                {t("title1")}
              </span>
              <br />
              <span className="text-white">{t("title2")}</span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              {t("subtitle")}
            </p>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl mb-10 max-w-3xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl md:text-5xl font-black text-white">
                      {t("pricing.amount")}
                    </span>
                    <span className="text-xl md:text-2xl text-slate-400">
                      {t("pricing.period")}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-slate-400 font-medium">
                    {t("pricing.cancel")}
                  </p>
                  <p className="text-xs italic md:text-sm text-slate-500">
                    {t("pricing.cancelSubtitle")}
                  </p>
                </div>

                <button
                  onClick={() => {
                    const pricingSection =
                      document.getElementById("free-trial");
                    pricingSection?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="group relative bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-purple-900/50 hover:shadow-2xl hover:shadow-purple-800/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  {t("pricing.cta")}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 text-base">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-slate-300">
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
