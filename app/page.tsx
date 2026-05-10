import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {
  Wrench,
  House,
  Hammer,
  Droplets,
  ClipboardCheck,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Roof Repairs",
      description: "Expert repairs for leaks, damaged shingles, and minor roof issues. Fast, reliable service to protect your home.",
      icon: <Wrench className="w-8 h-8" />,
      href: "/services#repairs",
    },
    {
      title: "Roof Replacement",
      description: "Complete roof replacement with quality materials and skilled workmanship. Transform your home's protection.",
      icon: <House className="w-8 h-8" />,
      href: "/services#replacement",
    },
    {
      title: "New Roof Installation",
      description: "Professional installation for new builds and extensions. Precision work from experienced roofing specialists.",
      icon: <Hammer className="w-8 h-8" />,
      href: "/services#installation",
    },
    {
      title: "Gutter Services",
      description: "Installation, repair, and cleaning of gutters and downpipes. Keep your drainage system flowing properly.",
      icon: <Droplets className="w-8 h-8" />,
      href: "/services#gutters",
    },
    {
      title: "Roof Inspections",
      description: "Comprehensive roof assessments and detailed reports. Identify issues before they become major problems.",
      icon: <ClipboardCheck className="w-8 h-8" />,
      href: "/services#inspections",
    },
    {
      title: "Emergency Repairs",
      description: "24/7 emergency roofing services. Rapid response to urgent leaks and storm damage across Leeds.",
      icon: <AlertTriangle className="w-8 h-8" />,
      href: "/services#emergency",
    },
  ];

  return (
    <>
      <Hero />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Roofing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive roofing solutions for homes and businesses in Leeds and West Yorkshire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-light transition-colors font-semibold text-lg"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose T & L Roofing?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Local Expertise
                  </h3>
                  <p className="text-gray-600">
                    Serving Leeds and West Yorkshire for years. We understand local
                    building requirements and weather conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Quality Materials
                  </h3>
                  <p className="text-gray-600">
                    We use only high-quality roofing materials from trusted manufacturers
                    to ensure longevity and performance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Competitive Pricing
                  </h3>
                  <p className="text-gray-600">
                    Fair, transparent pricing with no hidden costs. Get value for money
                    without compromising on quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Guaranteed Workmanship
                  </h3>
                  <p className="text-gray-600">
                    All our work comes with a satisfaction guarantee. We stand behind
                    every project we complete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactForm />

      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Contact T & L Roofing today for a free, no-obligation quote. We're here
            to help with all your roofing needs in Leeds and West Yorkshire.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
