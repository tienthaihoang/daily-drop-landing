"use client";

import { CheckCircle, FileText, Gift, Video } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FreeTrialSection() {
  const t = useTranslations("freeTrial");

  const includes = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: t("includes.content.title"),
      description: t("includes.content.description"),
      count: "2",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: t("includes.video.title"),
      description: t("includes.video.description"),
      count: "1",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section
      id="free-trial"
      className="py-20 px-4 bg-slate-950 relative overflow-hidden scroll-mt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-6">
                <Gift className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-slate-300 font-semibold">
                  {t("badge")}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                {t("title")}
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                {t("subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {includes.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`}
                  ></div>

                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all min-h-[280px] flex flex-col">
                    <div
                      className={`absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center shadow-xl`}
                    >
                      <span className="text-white font-black text-lg">
                        {item.count}
                      </span>
                    </div>

                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} mb-4 w-fit`}
                    >
                      <div className="text-white">{item.icon}</div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed flex-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {t("features.title")}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  t("features.items.0"),
                  t("features.items.1"),
                  t("features.items.2"),
                  t("features.items.3"),
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
