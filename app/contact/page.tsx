import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact T & L Roofing | Get a Free Quote in Leeds",
  description:
    "Contact T & L Roofing for professional roofing services in Leeds and West Yorkshire. Get a free quote for roof repairs, replacements, and installations.",
  keywords:
    "contact roofing Leeds, roofing quote, free roof inspection, roofers contact",
  alternates: {
    canonical: "https://tl-roofing.co.uk/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <FAQSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://tl-roofing.co.uk" },
          { name: "Contact", url: "https://tl-roofing.co.uk/contact" },
        ]}
      />
      <ContactForm />

      <section className="py-20 bg-muted">
        <div className="container mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Find Us in Leeds
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#404040]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.6789012345678!2d-1.5491!3d53.8008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDQ4JzAzLjAiTiAxwrAzMyc0Ni44Ilc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="T & L Roofing Location - Leeds, West Yorkshire"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 text-left">
              <div className="bg-[#333333] rounded-2xl p-8 shadow-lg card-hover border border-[#404040]">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Do you offer free quotes?
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Yes, we provide free, no-obligation quotes for all roofing
                  work. Contact us to schedule a site assessment.
                </p>
              </div>

              <div className="bg-[#333333] rounded-2xl p-8 shadow-lg card-hover border border-[#404040]">
                <h3 className="text-2xl font-bold text-white mb-3">
                  What areas do you serve?
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We primarily serve Leeds and the surrounding West Yorkshire
                  area. Contact us to confirm service in your specific location.
                </p>
              </div>

              <div className="bg-[#333333] rounded-2xl p-8 shadow-lg card-hover border border-[#404040]">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Are you available for emergency repairs?
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Yes, we offer 24/7 emergency roofing services. Call us
                  immediately if you have urgent roofing issues.
                </p>
              </div>

              <div className="bg-[#333333] rounded-2xl p-8 shadow-lg card-hover border border-[#404040]">
                <h3 className="text-2xl font-bold text-white mb-3">
                  How long does a roof replacement take?
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Most residential roof replacements are completed within 1-3
                  days, depending on the size and complexity of the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#404040]">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you need a repair, replacement, or just have questions about
            your roof, we&rsquo;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07936450711"
              className="btn-primary inline-flex items-center justify-center"
            >
              Call Us Now
            </a>
            <a
              href="mailto:tl.roofing@outlook.com"
              className="btn-outline inline-flex items-center justify-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
