"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Phone, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Counter from "./Counter";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#292929] text-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28 -mt-20 sm:-mt-32 md:-mt-40">
      <div className="absolute inset-0">
        <Image
          src="/images/roof1.jpg"
          alt="Professional roofing work"
          fill
          className="object-cover opacity-20"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#292929]/80 via-[#292929]/85 to-[#292929]/90"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] mx-auto -mb-8 sm:-mb-12 md:-mb-20">
            <Image
              src="/tl-logo.png"
              alt="T & L Roofing Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center max-w-5xl">
            Professional{" "}
            <span className="text-[#1E97D4]">Roofing Services</span> You Can
            Trust
          </h1>
          <div className="inline-flex items-center bg-[#1E97D4]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#1E97D4]/30 mb-8">
            <CheckCircle className="w-5 h-5 text-[#1E97D4] mr-3" />
            <span className="text-sm font-medium uppercase tracking-wide">
              Serving Leeds & West Yorkshire
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-10 text-center">
            Expert roof repairs, replacements, and installations. Quality
            workmanship you can trust, with competitive prices and reliable
            service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="bg-[#1E97D4] hover:bg-[#0d7ab8] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#1E97D4] text-[#1E97D4] hover:bg-[#1E97D4] hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-20 max-w-4xl mx-auto pt-12 pb-20 border-t border-[#404040]">
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1E97D4] mb-3">
                <Counter end={15} suffix="+" animateOnMount={true} />
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Years Experience
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1E97D4] mb-3">
                <Counter end={500} suffix="+" animateOnMount={true} />
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Projects Done
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1E97D4] mb-3">
                <Counter end={100} suffix="%" animateOnMount={true} />
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Satisfaction
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#services"
            className="text-[#1E97D4] hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
