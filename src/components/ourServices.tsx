"use client";

import { BarChart3, FileCheck, Linkedin, Video } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LightboxGallery from "./ui/LightboxGallery";

export default function OurServices() {
  const t = useTranslations("ourServices");
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);

  const services = [
    {
      titleKey: "regulationVisuals",
      icon: <FileCheck className="w-10 h-10 text-white" />,
      gradient: "from-purple-500 to-indigo-500",
      images: ["/visuals-1.png", "/visuals-2.jpg", "/visuals-3.jpg"],
    },
    {
      titleKey: "investorInfographics",
      icon: <BarChart3 className="w-10 h-10 text-white" />,
      gradient: "from-indigo-500 to-blue-500",
      images: [
        "/report-infographics-1.jpg",
        "/report-infographics-2.jpg",
        "/report-infographics-3.jpeg",
      ],
    },
    {
      titleKey: "linkedinCampaigns",
      icon: <Linkedin className="w-10 h-10 text-white" />,
      gradient: "from-blue-500 to-cyan-500",
      images: [
        "/short-form-campaigns-1.jpg",
        "/short-form-campaigns-2.png",
        "/short-form-campaigns-3.jpg",
      ],
    },
    {
      titleKey: "recruitmentVideos",
      icon: <Video className="w-10 h-10 text-white" />,
      gradient: "from-cyan-500 to-teal-500",
      images: [
        "/branding-videos-1.jpg",
        "/branding-videos-2.jpg",
        "/branding-videos-3.jpg",
      ],
    },
  ];

  return (
    <section
      id="subscription"
      className="py-20 px-4 bg-slate-900 relative overflow-hidden scroll-mt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-12 mb-16">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              {t("title")}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  id={service.titleKey}
                  className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                  onClick={() => setLightboxImages(service.images)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`}
                  ></div>

                  <div className="relative p-8 flex flex-col items-center text-center">
                    <div
                      className={`mb-6 inline-flex items-center justify-center p-5 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      {service.icon}
                    </div>

                    <h3 className="text-xl font-black text-white mb-3">
                      {t(`services.${service.titleKey}.title`)}
                    </h3>

                    <p className="text-slate-400 leading-relaxed text-sm">
                      {t(`services.${service.titleKey}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightboxImages && (
        <LightboxGallery
          images={lightboxImages}
          onClose={() => setLightboxImages(null)}
        />
      )}
    </section>
  );
}