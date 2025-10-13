"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function OurServices() {
  const t = useTranslations("ourServices");

  const services = [
    {
      titleKey: "design",
      image: "/graphic-design-services.jpg",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-100 to-pink-100",
    },
    {
      titleKey: "video",
      image: "/video-editing.jpg",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-100 to-rose-100",
    },
    {
      titleKey: "development",
      image: "/web-development.png",
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-100 to-amber-100",
    },
    {
      titleKey: "content",
      image: "/content-writing.jpg",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-100 to-cyan-100",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 scroll-mt-16"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  id={service.titleKey}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] scroll-mt-32"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-10 group-hover:opacity-20 transition-opacity`}
                  ></div>
                  <div className="relative p-8">
                    <div className="relative h-56 rounded-2xl overflow-hidden mb-6 shadow-lg">
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
                    <h3 className="text-2xl font-black text-slate-900 mb-4">
                      {t(`services.${service.titleKey}.title`)}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
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
