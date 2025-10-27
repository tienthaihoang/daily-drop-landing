"use client";

import { Award, Rocket, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

export default function StatsSection() {
  const t = useTranslations("stats");

  const stats = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      value: "94.7%",
      label: t("satisfaction"),
      gradient: "from-purple-400 to-indigo-500",
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      value: t("deliveryValue"),
      label: t("averageDelivery"),
      gradient: "from-indigo-400 to-blue-500",
    },
    {
      icon: <Award className="w-10 h-10" />,
      value: "100+",
      label: t("trustedClients"),
      gradient: "from-blue-400 to-cyan-500",
    },
  ];

  return (
    <section className="py-16 px-4 bg-slate-950 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="group relative">
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`}
                  ></div>

                  {/* Card */}
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{stat.icon}</div>
                    </div>

                    {/* Value */}
                    <div
                      className={`text-4xl md:text-5xl font-black bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-3`}
                    >
                      {stat.value}
                    </div>

                    {/* Label */}
                    <p className="text-slate-300 text-base font-semibold">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom text */}
            <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <p className="text-slate-400 font-medium">{t("financeTrust")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}