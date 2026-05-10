import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Clock, Award, CheckCircle, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary to-secondary-light text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/roof1.jpg"
          alt="Professional roofing work"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/70"></div>
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/roof2.jpg"
                alt="Professional roofing work"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium">Fully Insured</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium">24/7 Emergency</p>
                  </div>
                  <div className="text-center">
                    <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium">Quality Work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}