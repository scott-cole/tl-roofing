import { Metadata } from "next";
import {
  Wrench,
  House,
  Hammer,
  Droplets,
  ClipboardCheck,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Roofing Services in Leeds & West Yorkshire | T & L Roofing",
  description: "Complete roofing services in Leeds and West Yorkshire. Expert roof repairs, replacements, installations, gutters, inspections, and 24/7 emergency services.",
  keywords: "roofing services Leeds, roof repairs, roof replacement, roof installation, gutter services, roof inspections, emergency roofing",
};

export default function ServicesPage() {
  const services = [
    {
      id: "repairs",
      title: "Roof Repairs",
      icon: <Wrench className="w-12 h-12" />,
      description:
        "Professional roof repair services for all types of roofing issues. From fixing leaks and replacing damaged shingles to addressing structural problems, our experienced team ensures your roof is in top condition.",
      features: [
        "Leak detection and repair",
        "Shingle replacement",
        "Flashings repair",
        "Chimney and vent repair",
        "Storm damage repair",
        "Preventative maintenance",
      ],
    },
    {
      id: "replacement",
      title: "Roof Replacement",
      icon: <House className="w-12 h-12" />,
      description:
        "Complete roof replacement services using high-quality materials. Whether your roof has reached the end of its life or suffered extensive damage, we provide efficient replacement solutions.",
      features: [
        "Complete tear-off and replacement",
        "Multiple roofing material options",
        "Proper ventilation installation",
        "Insulation upgrades available",
        "Debris removal and cleanup",
        "Warranty on materials and workmanship",
      ],
    },
    {
      id: "installation",
      title: "New Roof Installation",
      icon: <Hammer className="w-12 h-12" />,
      description:
        "Expert new roof installation for new builds, extensions, and home improvements. Our team works closely with builders and homeowners to deliver precise, high-quality installations.",
      features: [
        "New construction roofing",
        "Extension roofing",
        "Conservatory roofing",
        "Flat roofing systems",
        "Pitched roofing systems",
        "Custom roofing solutions",
      ],
    },
    {
      id: "gutters",
      title: "Gutter Services",
      icon: <Droplets className="w-12 h-12" />,
      description:
        "Comprehensive gutter services including installation, repair, and cleaning. Proper gutters are essential for protecting your home from water damage.",
      features: [
        "Gutter installation",
        "Gutter repair and replacement",
        "Gutter cleaning and maintenance",
        "Downpipe installation",
        "Gutter guards and leaf protection",
        "Water damage prevention",
      ],
    },
    {
      id: "inspections",
      title: "Roof Inspections",
      icon: <ClipboardCheck className="w-12 h-12" />,
      description:
        "Thorough roof inspections to identify potential issues before they become major problems. Essential for property purchases, insurance claims, and routine maintenance.",
      features: [
        "Comprehensive roof assessments",
        "Detailed inspection reports",
        "Photo documentation",
        "Insurance claim support",
        "Pre-purchase inspections",
        "Maintenance recommendations",
      ],
    },
    {
      id: "emergency",
      title: "Emergency Repairs",
      icon: <AlertTriangle className="w-12 h-12" />,
      description:
        "24/7 emergency roofing services for urgent situations. Storm damage, sudden leaks, and other roofing emergencies require immediate attention.",
      features: [
        "24/7 emergency response",
        "Rapid leak patching",
        "Storm damage assessment",
        "Temporary protection measures",
        "Priority scheduling",
        "Insurance claim assistance",
      ],
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-secondary-light text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Roofing Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Comprehensive roofing solutions for homes and businesses in Leeds and
            West Yorkshire
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      What's Included:
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-muted rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Need {service.title}?
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Contact T & L Roofing for a free quote on{" "}
                      {service.title.toLowerCase()}. Our team is ready to help
                      with your roofing needs in Leeds and West Yorkshire.
                    </p>
                    <a
                      href="/contact"
                      className="btn-primary inline-flex items-center"
                    >
                      Get Free Quote
                    </a>
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <p className="text-sm text-gray-500">
                        <strong className="text-gray-900">Service Area:</strong>{" "}
                        Leeds, West Yorkshire, and surrounding areas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We offer custom roofing solutions. Contact us to discuss your specific
            requirements.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
}