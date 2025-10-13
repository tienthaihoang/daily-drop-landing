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
        url: "/imageGallery/creative-design.png",
        titleKey: "creativeDesign",
      },
      {
        id: 2,
        url: "/imageGallery/brand-identity.png",
        titleKey: "brandIdentity",
      },
      {
        id: 3,
        url: "/imageGallery/digital-marketing.jpg",
        titleKey: "digitalMarketing",
      },
      { id: 4, url: "/imageGallery/web-design.jpg", titleKey: "webDesign" },
      { id: 5, url: "/imageGallery/ux-ui-design.png", titleKey: "uiuxDesign" },
      { id: 6, url: "/imageGallery/photography.jpg", titleKey: "photography" },
      { id: 7, url: "/imageGallery/team-work.png", titleKey: "teamWork" },
      { id: 8, url: "/imageGallery/development.png", titleKey: "development" },
    ],
    []
  );

  const duplicatedImages = useMemo(
    () => [...images, ...images, ...images],
    [images]
  );

  return (
    <div className="w-full py-20 overflow-hidden">
      <div className="relative w-full">
        <div
          className="flex gap-6 animate-scroll"
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
                width={384}
                height={288}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                priority={idx < 8}
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
