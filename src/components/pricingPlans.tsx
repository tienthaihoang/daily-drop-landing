"use client";

import { Select } from "antd";
import { ArrowRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [currency, setCurrency] = useState<"USD" | "KRW">("USD");
  const t = useTranslations("pricing");

  const plans = useMemo(() => {
    const getFeatures = (planKey: string): string[] => {
      const features = [];
      let index = 0;

      while (index < 8) {
        const key = `plans.${planKey}.features.${index}`;
        const translation = t(key);

        if (translation === key || translation.startsWith("pricing.plans.")) {
          break;
        }

        features.push(translation);
        index++;
      }

      return features;
    };

    return [
      {
        planKey: "design",
        name: t("plans.design.name"),
        description: t("plans.design.description"),
        turnaround: t("plans.design.turnaround"),
        features: getFeatures("design"),
        price: {
          monthly: { USD: 795, KRW: 1050000 },
          yearly: { USD: 7950, KRW: 10500000 },
        },
        gradient: "from-purple-500 to-pink-500",
        popular: false,
      },
      {
        planKey: "designVideo",
        name: t("plans.designVideo.name"),
        description: t("plans.designVideo.description"),
        turnaround: t("plans.designVideo.turnaround"),
        features: getFeatures("designVideo"),
        price: {
          monthly: { USD: 1295, KRW: 1710000 },
          yearly: { USD: 12950, KRW: 17100000 },
        },
        gradient: "from-pink-500 to-orange-500",
        popular: true,
      },
      {
        planKey: "complete",
        name: t("plans.complete.name"),
        description: t("plans.complete.description"),
        turnaround: t("plans.complete.turnaround"),
        features: getFeatures("complete"),
        price: {
          monthly: { USD: 2495, KRW: 3290000 },
          yearly: { USD: 24950, KRW: 32900000 },
        },
        gradient: "from-orange-500 to-red-500",
        popular: false,
      },
    ];
  }, [t]);

  const formatPrice = (price: number) => {
    if (currency === "KRW") {
      return `₩${price.toLocaleString()}`;
    }
    return `$${price.toLocaleString()}`;
  };

  const paymentMethods = [
    { name: "Visa", icon: "/visa.svg" },
    { name: "Mastercard", icon: "/mastercard.svg" },
    { name: "American Express", icon: "/amex.svg" },
    { name: "JCB", icon: "/jcb.svg" },
    { name: "Discover", icon: "/discover.svg" },
    { name: "Diners", icon: "/diners.svg" },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-white scroll-mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 mb-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              {t("title")}
            </h2>
            <p className="text-xl text-slate-600 mb-8">{t("subtitle")}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    billingCycle === "monthly"
                      ? "bg-white text-slate-900 shadow-md"
                      : "text-slate-600"
                  }`}
                >
                  {t("billing.monthly")}
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    billingCycle === "yearly"
                      ? "bg-white text-slate-900 shadow-md"
                      : "text-slate-600"
                  }`}
                >
                  {t("billing.yearly")}
                  <span className="ml-2 text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full">
                    {t("billing.save")}
                  </span>
                </button>
              </div>

              <Select
                value={currency}
                onChange={(value) => setCurrency(value)}
                options={[
                  { value: "USD", label: t("currency.usd") },
                  { value: "KRW", label: t("currency.krw") },
                ]}
                className="w-24"
                size="large"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {plans.map((plan, idx) => (
                <div key={idx} className="relative">
                  {plan.popular && (
                    <div className="absolute -top-3 right-4 z-10">
                      <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {t("plans.designVideo.popular")}
                      </span>
                    </div>
                  )}

                  <div className="h-full bg-slate-50 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 border-2 border-slate-200">
                    <h3 className="text-2xl font-black text-slate-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-6 min-h-[60px]">
                      {plan.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-slate-900">
                          {formatPrice(
                            billingCycle === "monthly"
                              ? plan.price.monthly[currency]
                              : Math.round(plan.price.yearly[currency] / 12)
                          )}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm mt-1">
                        {t("common.perMonth")}{" "}
                        <span className="font-semibold">
                          {t("common.freeTrial")}
                        </span>
                      </p>
                      {billingCycle === "yearly" && (
                        <p className="text-sm text-slate-500 mt-1">
                          {t("common.billedAnnually", {
                            amount: formatPrice(plan.price.yearly[currency]),
                          })}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 text-sm mb-6">
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {plan.turnaround}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        {t("common.unlimitedRevisions")}
                      </span>
                    </div>

                    <button className="w-full group bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-purple-300/50 hover:shadow-xl hover:shadow-pink-300/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mb-8">
                      {t("common.getStarted")}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="border-t border-slate-300 pt-6">
                      <h4 className="font-bold text-slate-900 mb-4">
                        {t("common.whatsIncluded")}
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center text-sm text-slate-600 space-y-4 mt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-slate-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-600">{t("footer.secure")}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-blue-600 border border-blue-200 bg-blue-50 px-2 py-0.5 rounded text-xs font-medium">
                  Powered by <span className="font-bold">stripe</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {paymentMethods.map((method, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-10 bg-white flex items-center justify-center"
                  >
                    <Image
                      src={method.icon}
                      alt={method.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="text-xs leading-relaxed max-w-4xl mx-auto text-slate-500 space-y-2">
                <p>{t("footer.disclaimer")}</p>
                <p>
                  <span className="font-semibold text-slate-700">
                    {t("footer.planTitles.design")}
                  </span>{" "}
                  {t("footer.planDetails.design")} •
                  <span className="font-semibold text-slate-700">
                    {" "}
                    {t("footer.planTitles.designVideo")}
                  </span>{" "}
                  {t("footer.planDetails.designVideo")} •
                  <span className="font-semibold text-slate-700">
                    {" "}
                    {t("footer.planTitles.complete")}
                  </span>{" "}
                  {t("footer.planDetails.complete")}
                </p>
                <p>
                  <span className="font-semibold text-slate-700">
                    {t("footer.terms")}
                  </span>{" "}
                  <a
                    href="#"
                    className="text-blue-600 underline hover:text-blue-700"
                  >
                    {t("footer.seeTerms")}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
