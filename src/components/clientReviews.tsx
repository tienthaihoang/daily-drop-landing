"use client";

import { CheckCircle, Star } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function ClientReviews() {
  const t = useTranslations("reviews");
  const locale = useLocale();

  const reviews = [
    {
      name: "Sarah Johnson",
      initial: "SJ",
      service: t("planTitles.designVideo"),
      rating: 5,
      comment:
        "Outstanding work! The team delivered exactly what we needed for our product launch.",
      date: "2024-11-15",
      avatar: null,
      color: "bg-purple-200 text-purple-700",
    },
    {
      name: "Michael Chen",
      initial: "MC",
      service: t("planTitles.complete"),
      rating: 5,
      comment:
        "Incredible turnaround time and quality. Highly recommend for any startup!",
      date: "2024-11-12",
      avatar: null,
      color: "bg-blue-200 text-blue-700",
    },
    {
      name: "Emma Williams",
      initial: "EW",
      service: t("planTitles.design"),
      rating: 4,
      comment:
        "Great designs and fast communication. Will definitely work together again.",
      date: "2024-11-10",
      avatar: null,
      color: "bg-pink-200 text-pink-700",
    },
    {
      name: "David Park",
      initial: "DP",
      service: t("planTitles.designVideo"),
      rating: 5,
      comment:
        "Professional team that understands design trends. Our social media engagement increased 300%!",
      date: "2024-11-08",
      avatar: null,
      color: "bg-orange-200 text-orange-700",
    },
    {
      name: "Lisa Anderson",
      initial: "LA",
      service: t("planTitles.complete"),
      rating: 5,
      comment:
        "Best investment we made this year. The complete package gave us everything we needed.",
      date: "2024-11-05",
      avatar: null,
      color: "bg-emerald-200 text-emerald-700",
    },
    {
      name: "James Martinez",
      initial: "JM",
      service: t("planTitles.design"),
      rating: 5,
      comment:
        "Creative, responsive, and professional. Exceeded our expectations on every project.",
      date: "2024-11-03",
      avatar: null,
      color: "bg-cyan-200 text-cyan-700",
    },
    {
      name: "Rachel Kim",
      initial: "RK",
      service: t("planTitles.designVideo"),
      rating: 5,
      comment:
        "The video content they created helped us double our conversion rate. Amazing work!",
      date: "2024-11-01",
      avatar: null,
      color: "bg-rose-200 text-rose-700",
    },
    {
      name: "Tom Bradley",
      initial: "TB",
      service: t("planTitles.complete"),
      rating: 4,
      comment:
        "Solid work across all services. Great value for the investment.",
      date: "2024-10-31",
      avatar: null,
      color: "bg-indigo-200 text-indigo-700",
    },
    {
      name: "Sophie Turner",
      initial: "ST",
      service: t("planTitles.design"),
      rating: 5,
      comment:
        "Beautiful designs that perfectly captured our brand identity. Thank you!",
      date: "2024-10-29",
      avatar: null,
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
    <section
      id="reviews"
      className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white scroll-mt-16"
    >
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
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-slate-900 truncate">
                          {review.name}
                        </h3>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </div>
                      <p className="text-sm text-slate-500">{review.service}</p>
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
