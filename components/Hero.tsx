import Link from "next/link";
import { ArrowRight, Shield, Clock, Award, CheckCircle, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary to-secondary-light text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-primary mr-2" />
              <span className="text-sm font-medium">Serving Leeds & West Yorkshire</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional{" "}
              <span className="text-gradient">Roofing Services</span>
              {" "}You Can Trust
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert roof repairs, replacements, and installations. Quality workmanship
              you can trust, with competitive prices and reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="btn-outline bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-400">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Fully Insured</h3>
                    <p className="text-gray-400 text-sm">Comprehensive insurance for your peace of mind</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">24/7 Emergency</h3>
                    <p className="text-gray-400 text-sm">Fast response to urgent roofing problems</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Quality Assured</h3>
                    <p className="text-gray-400 text-sm">High standards with guaranteed workmanship</p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 mt-6">
                  <p className="text-2xl font-bold text-white mb-2">0113 000 0000</p>
                  <p className="text-sm text-gray-400 mb-4">Call us 24/7 for emergency repairs</p>
                  <Link
                    href="tel:01130000000"
                    className="w-full btn-primary text-center"
                  >
                    Call Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}