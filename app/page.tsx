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
  CheckCircle,
  Shield,
  Award,
  Clock,
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

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Local Expertise",
      description: "Serving Leeds and West Yorkshire for years. We understand local building requirements and weather conditions.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Materials",
      description: "We use only high-quality roofing materials from trusted manufacturers to ensure longevity and performance.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Competitive Pricing",
      description: "Fair, transparent pricing with no hidden costs. Get value for money without compromising on quality.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Guaranteed Workmanship",
      description: "All our work comes with a satisfaction guarantee. We stand behind every project we complete.",
    },
  ];

  return (
    <>
      <Hero />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Roofing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive roofing solutions for homes and businesses in Leeds and West Yorkshire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
              Why Choose T & L Roofing?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg card-hover"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <div className="text-primary">{benefit.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactForm />

      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Contact T & L Roofing today for a free, no-obligation quote. We're here
            to help with all your roofing needs in Leeds and West Yorkshire.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
