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
    <div className="w-full py-20 overflow-hidden">
      <div className="relative w-full">
        <div
          className="w-max animate-scroll"
          style={{
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {duplicatedImages.map((image, idx) => (
            <div
              key={`${image.id}-${idx}`}
              className="relative flex-shrink-0 w-96 h-72 rounded-2xl overflow-hidden group cursor-pointer"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-bold">
                    {t(image.titleKey)}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
