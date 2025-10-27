"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function ImageGallery() {
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations("gallery.titles");

  const images = useMemo(
    () => [
      {
        id: 1,
        url: "/imageGallery/design-1.jpg",
        titleKey: "design",
      },
      {
        id: 2,
        url: "/imageGallery/video-1.png",
        titleKey: "video",
      },
      {
        id: 3,
        url: "/imageGallery/content-1.png",
        titleKey: "content",
      },
      {
        id: 4,
        url: "/imageGallery/presentation-1.png",
        titleKey: "presentation",
      },
      { id: 5, url: "/imageGallery/qa-1.jpg", titleKey: "qa" },
      {
        id: 6,
        url: "/imageGallery/localization-1.png",
        titleKey: "localization",
      },
      {
        id: 7,
        url: "/imageGallery/design-2.jpg",
        titleKey: "design",
      },
      {
        id: 8,
        url: "/imageGallery/video-2.jpg",
        titleKey: "video",
      },
      {
        id: 9,
        url: "/imageGallery/content-2.png",
        titleKey: "content",
      },
      {
        id: 10,
        url: "/imageGallery/presentation-2.jpg",
        titleKey: "presentation",
      },
      { id: 11, url: "/imageGallery/qa-2.png", titleKey: "qa" },
      {
        id: 12,
        url: "/imageGallery/localization-2.jpg",
        titleKey: "localization",
      },
    ],
    []
  );

  const duplicatedImages = useMemo(() => [...images, ...images], [images]);

  return (
    <div className="w-full py-20 overflow-hidden bg-slate-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>

      <div className="relative w-full z-10">
        <div
          className="w-max animate-scroll"
          style={{
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {duplicatedImages.map((image, idx) => (
            <div
              key={`${image.id}-${idx}`}
              className="relative flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden group cursor-pointer border border-white/10"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={image.url}
                alt={t(image.titleKey)}
                width={380}
                height={280}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                priority={idx < 6}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {t(image.titleKey)}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
