"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LightboxGalleryProps {
  images: string[];
  onClose: () => void;
}

export default function LightboxGallery({
  images,
  onClose,
}: LightboxGalleryProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => setCurrent(0), [images]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!images || images.length === 0) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
      if (e.key === "ArrowRight")
        setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images, onClose]);

  if (!images?.length) return null;
  const total = images.length;
  const src = images[current];
  if (!src) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm flex items-center justify-center z-[100]"
      onClick={onClose}
    >
      <div
        className="
          relative flex items-center justify-center 
          w-[90vw] h-[60vh] sm:w-[80vw] sm:h-[70vh] md:w-[70vw] md:h-[75vh] lg:w-[60vw] lg:h-[80vh]
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-[90vw] max-w-4xl aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src={src}
            alt={`Image ${current + 1}`}
            fill
            className="object-cover rounded-2xl transition-all duration-300"
            priority
          />
        </div>

        {/* Navigation buttons */}
        {total > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-3 transition-all hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-3 transition-all hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}

        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-xl font-bold transition-all hover:scale-110"
          aria-label="Close"
        >
          ×
        </button>

        {total > 1 && (
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 text-white text-xs sm:text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 font-medium">
            {current + 1} / {total}
          </div>
        )}
      </div>
    </div>
  );
}