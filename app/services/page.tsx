import { Metadata } from "next";
import {
  Wrench,
  House,
  Hammer,
  Droplets,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Roofing Services in Leeds & West Yorkshire | T & L Roofing",
  description:
    "Complete roofing services in Leeds and West Yorkshire. Expert roof repairs, replacements, installations, gutters, and 24/7 emergency services.",
  keywords:
    "roofing services Leeds, roof repairs, roof replacement, roof installation, gutter services, emergency roofing",
  alternates: {
    canonical: "https://tl-roofing.co.uk/services",
  },
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
      <section className="bg-gradient-to-br from-[#333333] to-[#404040] text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Roofing Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Comprehensive roofing solutions for homes and businesses in Leeds
            and West Yorkshire
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#292929]">
        <div className="container">
          <div className="space-y-20">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  <div className="flex-1 min-w-[300px]">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-[#1E97D4]/10 rounded-xl flex items-center justify-center text-[#1E97D4]">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-[#1E97D4]">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <h3 className="text-xl font-bold text-[#1E97D4] mb-6">
                      What&rsquo;s Included:
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-6 h-6 text-[#1E97D4] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#333333] rounded-2xl p-8 shadow-lg border border-[#404040] flex-1 min-w-[300px]">
                    <h3 className="text-2xl font-bold text-[#1E97D4] mb-6">
                      Need {service.title}?
                    </h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                      Contact T &amp; L Roofing for a free quote on{" "}
                      {service.title.toLowerCase()}. Our team is ready to help
                      with your roofing needs in Leeds and West Yorkshire.
                    </p>
                    <a
                      href="/contact"
                      className="btn-primary inline-flex items-center"
                    >
                      Get Free Quote
                    </a>
                    <div className="mt-8 pt-8 border-t border-[#4a4a4a]">
                      <p className="text-sm text-gray-500">
                        <strong className="text-[#1E97D4]">
                          Service Area:
                        </strong>{" "}
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

      <section className="py-20 md:py-28 bg-[#404040] text-center">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Can&rsquo;t Find What You Need?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We offer custom roofing solutions. Contact us to discuss your
            specific requirements.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
}
