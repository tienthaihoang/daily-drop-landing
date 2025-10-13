"use client";

import { Award, Clock, Heart, Infinity, Rocket, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");

  const benefits = [
    {
      icon: <Infinity className="w-10 h-10" />,
      titleKey: "unlimited",
      gradient: "from-green-400 via-teal-400 to-cyan-500",
      bgGradient: "from-green-50 to-teal-100",
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      titleKey: "fast",
      gradient: "from-teal-400 via-cyan-400 to-blue-500",
      bgGradient: "from-teal-50 to-cyan-100",
    },
    {
      icon: <Award className="w-10 h-10" />,
      titleKey: "quality",
      gradient: "from-green-400 via-teal-500 to-cyan-600",
      bgGradient: "from-green-50 to-cyan-100",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      titleKey: "pause",
      gradient: "from-teal-400 via-cyan-400 to-blue-500",
      bgGradient: "from-teal-50 to-cyan-100",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      titleKey: "fixed",
      gradient: "from-green-400 via-teal-400 to-cyan-500",
      bgGradient: "from-green-50 to-teal-100",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      titleKey: "unique",
      gradient: "from-teal-400 via-cyan-400 to-blue-500",
      bgGradient: "from-teal-50 to-cyan-100",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient}`}
                  ></div>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

                  <div className="relative p-8 h-full flex flex-col items-center text-center min-h-[360px]">
                    <div className="mb-6 flex-shrink-0">
                      <div className="inline-flex p-5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <div className="text-white">{benefit.icon}</div>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-start">
                      <h3 className="text-2xl font-black text-white mb-4 drop-shadow-lg min-h-[64px] flex items-center justify-center">
                        {t(`benefits.${benefit.titleKey}.title`)}
                      </h3>
                      <p className="text-white/90 leading-relaxed drop-shadow text-sm">
                        {t(`benefits.${benefit.titleKey}.description`)}
                      </p>
                    </div>

                    <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
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
