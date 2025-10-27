"use client";

import {
  Copy,
  MessageCircle,
  MessageSquare,
  Package,
  Palette,
  ShieldCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";
import TextWithMarkdown from "./ui/TextWithMarkdown";

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = [
    { titleKey: "briefing", icon: <MessageSquare size={36} /> },
    { titleKey: "brandCheck", icon: <ShieldCheck size={36} /> },
    { titleKey: "creativeDraft", icon: <Palette size={36} /> },
    { titleKey: "feedback", icon: <MessageCircle size={36} /> },
    { titleKey: "dualOutput", icon: <Copy size={36} /> },
    { titleKey: "finalDelivery", icon: <Package size={36} /> },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 px-4 bg-slate-900 relative overflow-hidden scroll-mt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          {t("title")}
        </h2>
        <TextWithMarkdown className="text-xl text-slate-300 mb-12">
          {t("subtitle")}
        </TextWithMarkdown>

        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-8 max-w-6xl mx-auto px-6">
          <div className="hidden md:block absolute top-[50px] left-[90px] right-[90px] h-[2px] bg-gradient-to-r from-purple-500/50 via-indigo-500/50 to-blue-500/50"></div>

          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center text-center md:w-[150px] flex-shrink-0 z-10"
            >
              <div className="relative flex items-center justify-center w-24 h-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 mb-6 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <span className="text-white relative z-10 flex items-center justify-center">
                  {item.icon}
                </span>
              </div>

              <div className="text-xs text-slate-500 font-medium mb-1">
                {t(`steps.${item.titleKey}.step`)}
              </div>

              <h3 className="text-base font-bold text-white mb-2 leading-tight min-h-[40px] flex items-center justify-center">
                {t(`steps.${item.titleKey}.title`)}
              </h3>

              <TextWithMarkdown className="text-slate-400 text-sm leading-relaxed max-w-[180px] min-h-[60px]">
                {t(`steps.${item.titleKey}.description`)}
              </TextWithMarkdown>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
