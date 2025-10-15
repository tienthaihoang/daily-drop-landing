"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function OurServices() {
  const t = useTranslations("ourServices");

  const services = [
    {
      titleKey: "design",
      image: "/graphic-design-services.jpg",
      gradient: "from-[#9FE870] to-emerald-500",
      bgGradient: "from-lime-50 to-emerald-50",
    },
    {
      titleKey: "video",
      image: "/video-editing.jpg",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      titleKey: "development",
      image: "/web-development.png",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
    },
    {
      titleKey: "presentation",
      image: "/presentation.png",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      titleKey: "content",
      image: "/content-writing.jpg",
      gradient: "from-[#9FE870] to-lime-400",
      bgGradient: "from-lime-50 to-yellow-50",
    },
    {
      titleKey: "qa",
      image: "/qa-support.png",
      gradient: "from-emerald-400 to-[#9FE870]",
      bgGradient: "from-emerald-50 to-lime-50",
    },
  ];

  return (
    <section
      id="subscription"
      className="py-20 px-4 bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 scroll-mt-16"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-12 mb-16">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              {t("title")}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  id={service.titleKey}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] scroll-mt-32"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-10 group-hover:opacity-20 transition-opacity`}
                  ></div>
                  <div className="relative p-6">
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-4 shadow-lg">
                      <Image
                        src={service.image}
                        alt={t(`services.${service.titleKey}.title`)}
                        height={400}
                        width={400}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20`}
                      ></div>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-3 min-h-[56px] flex items-center">
                      {t(`services.${service.titleKey}.title`)}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {t(`services.${service.titleKey}.description`)}
                    </p>
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
