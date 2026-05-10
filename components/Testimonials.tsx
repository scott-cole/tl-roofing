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
      name: "michelle31989",
      location: "Wakefield",
      rating: 5,
      text: "Brilliant work, great communication and workmanship. Guys were helpful and worked around other trades really well.",
      source: "MyBuilder",
    },
    {
      name: "deadlyden",
      location: "Leeds",
      rating: 5,
      text: "We would highly recommend TL Roofing Services. Completed the job fully in inclement weather conditions to our full satisfaction. The roof, facias, gutters fall pipes and new slate bay and leading look superb with many positive comments from neighbours. Two guys with a great personality, plus a great team as well...",
      source: "MyBuilder",
    },
    {
      name: "tania31720",
      location: "Leeds",
      rating: 5,
      text: "I was desperate to find someone as our roof was leaking badly. Between so many quotes, we chose TL roofing and I am very pleased with the service and care that we received from them. I am definitely recommend this firm to anyone in need of roofing work. They gave us fair quotes with clear understanding of every step that they were taking in order to replace our flat roofs as well as all the tiles and started their work on time and through 2 weeks of work I am satisfied with their professional approach and high standards of workmanship.",
      source: "MyBuilder",
    },
    {
      name: "biggles_18",
      location: "Leeds",
      rating: 5,
      text: "Tom was quick to respond to my posted job to renew 2 bay windows roofs. He arrived to quote when he said he would and kept me up to date with an install date. Tom and his colleague are very polite and worked non stop to get the roofs installed. The new fibreglass roofs look much better than the old ones and I'm very happy with the result. The price was competitive and I will not hesitate to recommend them to family and friends.",
      source: "MyBuilder",
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
                className={`bg-[#404040] rounded-2xl shadow-lg p-8 relative card-hover border border-[#4a4a4a] flex flex-col ${
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
                <p className="text-gray-300 mb-8 italic leading-relaxed line-clamp-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-[#4a4a4a] mt-auto">
                  <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-sm text-gray-400">{review.location}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                    <span className="text-xs text-gray-500">Verified</span>
                  </div>
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
