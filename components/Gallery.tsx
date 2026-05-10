"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface GalleryProps {
  images: string[];
  title?: string;
  subtitle?: string;
  limit?: number;
}

export default function Gallery({
  images,
  title,
  subtitle,
  limit,
}: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const displayImages = limit ? images.slice(0, limit) : images;

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null
    );
  }, [images.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, goToPrev, goToNext]);

  return (
    <>
      <section className="py-20 md:py-28 bg-[#292929]">
        <div className="container">
          {(title || subtitle) && (
            <div className="section-header">
              {title && <h2 className="section-title">{title}</h2>}
              {subtitle && <p className="section-subtitle">{subtitle}</p>}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {displayImages.map((src, index) => (
              <ScrollReveal key={src} delay={index * 50}>
                <button
                  onClick={() => openLightbox(index)}
                  className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#333333] border border-[#404040] hover:border-[#1E97D4] transition-all duration-500"
                >
                  <Image
                    src={src}
                    alt={`Roofing project ${index + 1}`}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="w-14 h-14 bg-[#1E97D4] rounded-full flex items-center justify-center shadow-lg shadow-[#1E97D4]/30">
                        <Maximize2 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="flex items-center justify-center w-full h-full p-4 md:p-8 pb-20 md:pb-24"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-[95vw] max-h-[80vh]">
              <Image
                src={images[selectedIndex]}
                alt={`Roofing project ${selectedIndex + 1}`}
                fill
                className="object-contain"
                priority
                sizes="95vw"
              />
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-6 md:gap-10 pb-6 pt-4 z-40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            <span className="text-white/80 font-medium text-sm md:text-base tabular-nums">
              {selectedIndex + 1} / {images.length}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>

          <button
            onClick={closeLightbox}
            style={{ position: "fixed", top: 16, right: 16, zIndex: 9999 }}
            className="flex items-center gap-2 px-4 py-3 bg-black/80 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border-2 border-white/60"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
            <span className="text-white text-sm font-semibold">Close</span>
          </button>
        </div>
      )}
    </>
  );
}
