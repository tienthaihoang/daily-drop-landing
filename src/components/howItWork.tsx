"use client";

import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  const process = [
    {
      step: "1",
      titleKey: "step1",
      icon: "🎯",
      gradient: "from-orange-400 to-red-400",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      step: "2",
      titleKey: "step2",
      icon: "📝",
      gradient: "from-green-400 to-emerald-400",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      step: "3",
      titleKey: "step3",
      icon: "✨",
      gradient: "from-cyan-400 to-blue-400",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      step: "4",
      titleKey: "step4",
      icon: "🚀",
      gradient: "from-pink-400 to-purple-400",
      bgGradient: "from-pink-50 to-purple-50",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-white scroll-mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 mb-16">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              {t("title")}
            </h2>
            <p className="text-xl text-slate-600">{t("subtitle")}</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {process.map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full">
                    <div
                      className={`relative h-48 bg-gradient-to-br ${item.bgGradient} flex items-center justify-center overflow-hidden`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                      ></div>
                      <div className="relative">
                        <div className="text-7xl mb-2 transform group-hover:scale-110 transition-transform duration-500">
                          {item.icon}
                        </div>
                        <div
                          className={`text-center text-6xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent opacity-20`}
                        >
                          {item.step}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-black text-slate-900 mb-3">
                        {t(`steps.${item.titleKey}.title`)}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {t(`steps.${item.titleKey}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-12 mt-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <button className="group bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold px-10 py-4 rounded-2xl shadow-2xl shadow-purple-300 hover:shadow-pink-300 transition-all duration-300 hover:scale-110 inline-flex items-center gap-3 text-lg">
              {t("cta", { default: "Start your free trial" })}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
