import Link from "next/link";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Roofing Services in{" "}
            <span className="text-accent">Leeds & West Yorkshire</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Expert roof repairs, replacements, and installations. Quality workmanship
            you can trust, with competitive prices and reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/30"
            >
              Our Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Shield className="w-12 h-12 text-accent mb-3" />
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-200 text-center">
                Comprehensive insurance for your peace of mind
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Clock className="w-12 h-12 text-accent mb-3" />
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency</h3>
              <p className="text-gray-200 text-center">
                Fast response to urgent roofing problems
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Award className="w-12 h-12 text-accent mb-3" />
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-200 text-center">
                High standards with guaranteed workmanship
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}