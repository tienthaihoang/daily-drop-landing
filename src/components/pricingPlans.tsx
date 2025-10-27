"use client";

import { Select } from "antd";
import { ArrowRight, Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import TextWithMarkdown from "./ui/TextWithMarkdown";

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [currency, setCurrency] = useState<"USD" | "KRW">("USD");
  const t = useTranslations("pricing");
  const locale = useLocale();

  const plans = useMemo(() => {
    const getServices = (planKey: string): string[] => {
      const services = [];
      let index = 0;
      while (index < 10) {
        const key = `plans.${planKey}.services.${index}`;
        const translation = t(key);
        if (translation === key || translation.startsWith("pricing.plans."))
          break;
        services.push(translation);
        index++;
      }
      return services;
    };

    const getManagement = (planKey: string): string[] => {
      const management = [];
      let index = 0;
      while (index < 10) {
        const key = `plans.${planKey}.management.${index}`;
        const translation = t(key);
        if (translation === key || translation.startsWith("pricing.plans."))
          break;
        management.push(translation);
        index++;
      }
      return management;
    };

    return [
      {
        planKey: "starter",
        name: t("plans.starter.name"),
        description: t("plans.starter.description"),
        services: getServices("starter"),
        management: getManagement("starter"),
        price: {
          monthly: { USD: 1500, KRW: 2040000 },
          yearly: { USD: 16200, KRW: 22032000 },
        },
        gradient: "from-blue-500 to-cyan-500",
        cta: t("plans.starter.cta"),
        popular: false,
      },
      {
        planKey: "professional",
        name: t("plans.professional.name"),
        description: t("plans.professional.description"),
        services: getServices("professional"),
        management: getManagement("professional"),
        price: {
          monthly: { USD: 2500, KRW: 3400000 },
          yearly: { USD: 27000, KRW: 36720000 },
        },
        gradient: "from-purple-500 to-pink-500",
        badge: t("plans.professional.best"),
        cta: t("plans.professional.cta"),
        popular: true,
      },
      {
        planKey: "enterprise",
        name: t("plans.enterprise.name"),
        description: t("plans.enterprise.description"),
        services: getServices("enterprise"),
        management: getManagement("enterprise"),
        price: {
          monthly: { USD: 3500, KRW: 4760000 },
          yearly: { USD: 37800, KRW: 51408000 },
        },
        gradient: "from-orange-500 to-red-500",
        cta: t("plans.enterprise.cta"),
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
    <section
      id="pricing"
      className="py-20 px-4 bg-slate-950 relative overflow-hidden scroll-mt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-12 mb-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              {t("title")}
            </h2>
            <p className="text-xl text-slate-300 mb-8">{t("subtitle")}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-1">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    billingCycle === "monthly"
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {t("billing.monthly")}
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    billingCycle === "yearly"
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {t("billing.yearly")}
                  <span className="ml-2 text-xs bg-purple-500 text-white px-2 py-0.5 rounded-full">
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
                      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div
                    className={`h-full bg-white/5 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 border ${
                      plan.popular
                        ? "border-purple-500 shadow-2xl shadow-purple-900/50"
                        : "border-white/10 hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-white mb-2">
                        {plan.name}
                      </h3>
                      <TextWithMarkdown className="text-slate-400 text-sm min-h-[40px]">
                        {plan.description}
                      </TextWithMarkdown>
                    </div>

                    <div className="mb-6 pb-6 border-b border-white/10">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-black bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                          {formatPrice(
                            billingCycle === "monthly"
                              ? plan.price.monthly[currency]
                              : Math.round(plan.price.yearly[currency] / 12)
                          )}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mt-2">
                        {t("common.perMonth")}
                      </p>
                      {billingCycle === "yearly" && (
                        <p className="text-sm text-slate-500 mt-1">
                          {t("common.billedAnnually", {
                            amount: formatPrice(plan.price.yearly[currency]),
                          })}
                        </p>
                      )}
                    </div>

                    <button
                      className={`w-full group font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mb-6 ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-900/50 hover:shadow-2xl hover:shadow-purple-800/50"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="mb-6">
                      <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">
                        {t("common.services")}
                      </h4>
                      <ul className="space-y-2">
                        {plan.services.map((service, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-400" />
                            <TextWithMarkdown className="text-slate-300 text-sm">
                              {service}
                            </TextWithMarkdown>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">
                        {t("common.management")}
                      </h4>
                      <ul className="space-y-2">
                        {plan.management.map((item, mIdx) => (
                          <li key={mIdx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-indigo-400" />
                            <TextWithMarkdown className="text-slate-300 text-sm">
                              {item}
                            </TextWithMarkdown>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center text-sm space-y-4 mt-8">
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
                  <span className="text-slate-400">{t("footer.secure")}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-indigo-300 border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 rounded text-xs font-medium">
                  Powered by
                  <span className="font-bold">stripe</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {paymentMethods.map((method, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-10 bg-white/10 backdrop-blur-sm border border-white/10 rounded flex items-center justify-center p-1"
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
                  <span className="font-semibold text-slate-400">
                    {t("footer.terms")}
                  </span>{" "}
                  <Link
                    href={`/${locale}/payment-terms`}
                    className="text-purple-400 underline hover:text-purple-300"
                  >
                    {t("footer.seeTerms")}
                  </Link>
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
