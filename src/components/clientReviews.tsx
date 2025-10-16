"use client";

import { CheckCircle, Globe2Icon, Star } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function ClientReviews() {
  const t = useTranslations("reviews");
  const locale = useLocale();

  const reviews = [
    {
      name: "Minji Lee",
      initial: "ML",
      flag: "🇰🇷",
      serviceKey: "slot2DesignVideo",
      positionKey: "marketingManager",
      rating: 5,
      comment:
        "The team quickly understood our brand tone and created visuals that felt perfectly local yet premium. Their communication in Notion was clear and professional.",
      date: "April 12, 2025",
      color: "bg-purple-200 text-purple-700",
    },
    {
      name: "Kenji Sato",
      initial: "KS",
      flag: "🇯🇵",
      serviceKey: "slot1PresentationBranding",
      positionKey: "brandDirector",
      rating: 5,
      comment:
        "We needed clean investor materials in English and Japanese. DailyDrop handled both design and translation with impressive attention to detail.",
      date: "March 30, 2025",
      color: "bg-blue-200 text-blue-700",
    },
    {
      name: "Sarah Johnson",
      initial: "SJ",
      flag: "🇸🇬",
      serviceKey: "slot1Design",
      positionKey: "creativeLead",
      rating: 4,
      comment:
        "I've worked with many agencies, but this was the first time feedback was implemented overnight. The 48h draft system actually works.",
      date: "February 18, 2025",
      color: "bg-pink-200 text-pink-700",
    },
    {
      name: "Eunice Tan",
      initial: "ET",
      flag: "🇸🇬",
      serviceKey: "slot3Complete",
      positionKey: "headOfMarketing",
      rating: 5,
      comment:
        "Our internal creative team couldn't keep up with regional campaigns. DailyDrop became our external arm — faster, consistent, and always on brand.",
      date: "January 25, 2025",
      color: "bg-emerald-200 text-emerald-700",
    },
    {
      name: "Hiroko Yamamoto",
      initial: "HY",
      flag: "🇯🇵",
      serviceKey: "slot2VideoMotion",
      positionKey: "communicationsManager",
      rating: 4,
      comment:
        "Beautiful motion graphics with subtle typography choices. They even localized subtitles for our Asia launch video.",
      date: "December 10, 2024",
      color: "bg-cyan-200 text-cyan-700",
    },
    {
      name: "David Nguyen",
      initial: "DN",
      flag: "🇻🇳",
      serviceKey: "slot1PresentationDocs",
      positionKey: "corporateAffairsExecutive",
      rating: 5,
      comment:
        "They designed our annual report and visualized complex data into a format our board loved. Professional and dependable team.",
      date: "November 22, 2024",
      color: "bg-orange-200 text-orange-700",
    },
    {
      name: "Emily Park",
      initial: "EP",
      flag: "🇰🇷",
      serviceKey: "slot2ContentLocalization",
      positionKey: "globalMarketingSpecialist",
      rating: 5,
      comment:
        "We run campaigns in both Korean and English — their bilingual copywriting made our tone consistent across platforms.",
      date: "October 30, 2024",
      color: "bg-rose-200 text-rose-700",
    },
    {
      name: "Rachel Wong",
      initial: "RW",
      flag: "🇸🇬",
      serviceKey: "slot1DesignBranding",
      positionKey: "marketingExecutive",
      rating: 5,
      comment:
        "What I like most is the consistency. Even with different designers, the brand visuals always feel unified.",
      date: "September 15, 2024",
      color: "bg-indigo-200 text-indigo-700",
    },
    {
      name: "Michael Chen",
      initial: "MC",
      flag: "🇨🇳",
      serviceKey: "slot3Enterprise",
      positionKey: "ceo",
      rating: 5,
      comment:
        "We subscribed for 3 slots and managed parallel projects smoothly. Their PM handled feedback like an in-house manager.",
      date: "August 28, 2024",
      color: "bg-violet-200 text-violet-700",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 px-4 bg-cyan-50 scroll-mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 mb-16">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              {t("title")}
            </h2>
            <p className="text-xl text-slate-600">{t("subtitle")}</p>
            <p className="inline-flex items-center justify-center gap-2 text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full mx-auto mt-4 shadow-sm border border-emerald-100">
              <Globe2Icon className="w-4 h-4 text-blue-500" />
              {t("badge")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center font-bold text-lg flex-shrink-0`}
                    >
                      {review.initial}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-slate-900 truncate">
                          {review.name}
                        </h3>
                        <span className="text-lg">{review.flag}</span>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </div>
                      <p className="text-xs text-slate-500 font-semibold mb-0.5">
                        {t(`services.${review.serviceKey}`)}
                      </p>
                      <p className="text-xs text-slate-400">
                        {t(`positions.${review.positionKey}`)}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">{renderStars(review.rating)}</div>

                  <p className="text-slate-700 text-sm leading-relaxed mb-4 min-h-[60px]">
                    {review.comment}
                  </p>

                  <p className="text-xs text-slate-400">
                    {new Intl.DateTimeFormat(locale, {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    }).format(new Date(review.date))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
