import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact T & L Roofing | Get a Free Quote in Leeds",
  description: "Contact T & L Roofing for professional roofing services in Leeds and West Yorkshire. Get a free quote for roof repairs, replacements, and installations.",
  keywords: "contact roofing Leeds, roofing quote, free roof inspection, roofers contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-100">
            Get in touch with T & L Roofing for a free, no-obligation quote
          </p>
        </div>
      </section>

      <ContactForm />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 text-left mt-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Do you offer free quotes?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide free, no-obligation quotes for all roofing
                  work. Contact us to schedule a site assessment.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  What areas do you serve?
                </h3>
                <p className="text-gray-600">
                  We primarily serve Leeds and the surrounding West Yorkshire
                  area. Contact us to confirm service in your specific location.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Are you available for emergency repairs?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer 24/7 emergency roofing services. Call us
                  immediately if you have urgent roofing issues.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How long does a roof replacement take?
                </h3>
                <p className="text-gray-600">
                  Most residential roof replacements are completed within 1-3
                  days, depending on the size and complexity of the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need a repair, replacement, or just have questions about
            your roof, we're here to help.
          </p>
          <a
            href="tel:01130000000"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-light transition-colors font-semibold text-lg mr-4"
          >
            Call Us Now
          </a>
          <a
            href="mailto:tl.roofing@outlook.com"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
          >
            Email Us
          </a>
        </div>
      </section>
    </>
  );
}