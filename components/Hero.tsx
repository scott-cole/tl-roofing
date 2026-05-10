import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Clock, Award, CheckCircle, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#292929] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/roof1.jpg"
          alt="Professional roofing work"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#292929] via-[#292929]/95 to-[[#292929]/90"></div>
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center py-12 lg:py-20">
          <div className="relative w-[350px] h-[350px] mx-auto mb-10">
            <Image
              src="/tl-logo.png"
              alt="T & L Roofing Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="inline-flex items-center bg-[#1E97D4]/20 backdrop-blur-sm px-8 py-4 rounded-full border border-[#1E97D4]/30 mb-8">
            <CheckCircle className="w-5 h-5 text-[#1E97D4] mr-3" />
            <span className="text-sm font-medium uppercase tracking-wide">Serving Leeds & West Yorkshire</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Professional{" "}
            <span className="text-[#1E97D4]">Roofing Services</span>
            {" "}You Can Trust
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-10">
            Expert roof repairs, replacements, and installations. Quality workmanship
            you can trust, with competitive prices and reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/contact"
              className="bg-[#1E97D4] hover:bg-[#0d7ab8] text-white font-semibold py-4 px-10 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-3"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#1E97D4] text-[#1E97D4] hover:bg-[#1E97D4] hover:text-white font-semibold py-4 px-10 rounded-lg transition-all duration-200 flex items-center justify-center space-x-3"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-16 max-w-4xl mx-auto pt-12 border-t border-[#404040]">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-[#1E97D4] mb-2">15+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-[#1E97D4] mb-2">500+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Projects Done</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-[#1E97D4] mb-2">100%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}