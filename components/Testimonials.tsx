"use client";

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const reviews = [
    {
      name: "Sarah Thompson",
      location: "Leeds",
      rating: 5,
      text: "Excellent work from T & L Roofing! They replaced our roof quickly and professionally. The team was polite and left everything tidy. Highly recommend!",
      date: "2 weeks ago",
    },
    {
      name: "James Wilson",
      location: "West Yorkshire",
      rating: 5,
      text: "Had an emergency roof leak and T & L Roofing came out the same day. Fixed the problem efficiently at a fair price. Very grateful for their quick response!",
      date: "1 month ago",
    },
    {
      name: "Emma Davis",
      location: "Leeds",
      rating: 5,
      text: "Professional service from start to finish. The team explained everything clearly and did a fantastic job on our new roof installation. Will definitely use again.",
      date: "3 weeks ago",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#333333]">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Trusted by homeowners in Leeds and West Yorkshire
          </p>
        </div>

        <div className="mb-16">
          <div
            ref={scrollRef}
            className={`${
              isMobile
                ? "flex overflow-x-auto snap-x snap-mandatory gap-4 scroll-smooth snap-start"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            }`}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`bg-[#404040] rounded-2xl shadow-lg p-8 relative card-hover border border-[#4a4a4a] ${
                  isMobile ? "w-[70vw] snap-start flex-shrink-0" : ""
                }`}
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#1E97D4]/20" />
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#1E97D4] text-[#1E97D4]"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 italic leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-[#4a4a4a]">
                  <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-sm text-gray-400">{review.location}</p>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          {isMobile && (
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() =>
                  setCurrentIndex((prev) => {
                    const next = prev === 0 ? reviews.length - 1 : prev - 1;
                    scrollTo(next);
                    return next;
                  })
                }
                className="bg-[#1E97D4] hover:bg-[#0d7ab8] text-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      scrollTo(index);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === index
                        ? "bg-[#1E97D4] w-6"
                        : "bg-gray-600 w-2"
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentIndex((prev) => {
                    const next =
                      prev === reviews.length - 1 ? 0 : prev + 1;
                    scrollTo(next);
                    return next;
                  })
                }
                className="bg-[#1E97D4] hover:bg-[#0d7ab8] text-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
