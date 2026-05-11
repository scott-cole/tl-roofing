"use client";

import { Mail, Phone, MapPin, CheckCircle, ExternalLink } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="py-20 md:py-28 bg-[#292929]">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="section-header">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Ready to discuss your roofing needs? Contact us today for a free,
              no-obligation quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8 flex-1">
              <div className="flex items-start space-x-8">
                <div className="w-16 h-16 bg-[#1E97D4]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-8 h-8 text-[#1E97D4]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3">Phone</h3>
                  <a
                    href="tel:07936450711"
                    className="text-2xl font-bold text-[#1E97D4] hover:text-white transition-colors"
                  >
                    07936 450711
                  </a>
                  <a
                    href="tel:07791746045"
                    className="text-2xl font-bold text-[#1E97D4] hover:text-white transition-colors"
                  >
                    07791 746045
                  </a>
                  <p className="text-gray-400 mt-2">
                    Mon-Fri: 8am-6pm, Sat: 9am-2pm
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="w-16 h-16 bg-[#1E97D4]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-8 h-8 text-[#1E97D4]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
                  <a
                    href="mailto:tl.roofing@outlook.com"
                    className="text-xl font-semibold text-[#1E97D4] hover:text-white transition-colors"
                  >
                    tl.roofing@outlook.com
                  </a>
                  <p className="text-gray-400 mt-2">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="w-16 h-16 bg-[#1E97D4]/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-8 h-8 text-[#1E97D4]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Service Area
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Leeds, West Yorkshire
                    <br />
                    United Kingdom
                  </p>
                  <p className="text-gray-500 mt-2">
                    Serving Leeds and surrounding areas
                  </p>
                </div>
              </div>

              <div className="bg-[#333333] rounded-2xl p-8 border border-[#404040]">
                <div className="flex flex-wrap gap-6 justify-center">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#1E97D4] shrink-0" />
                    <span className="text-base font-medium text-gray-300">
                      Free Quotes
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#1E97D4] shrink-0" />
                    <span className="text-base font-medium text-gray-300">
                      24/7 Emergency
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#1E97D4] shrink-0" />
                    <span className="text-base font-medium text-gray-300">
                      Fully Insured
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#1E97D4] shrink-0" />
                    <span className="text-base font-medium text-gray-300">
                      Quality Work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#333333] rounded-2xl p-14 shadow-lg border border-[#404040] flex-1 min-w-[300px] flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-[#1E97D4]/10 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-10 h-10 text-[#1E97D4]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Email Us Directly
              </h3>
              <p className="text-gray-400 text-lg mb-10 max-w-md">
                Click the button below to send us an email using your preferred
                email client. We&rsquo;ll get back to you within 24 hours.
              </p>
              <a
                href="mailto:tl.roofing@outlook.com?subject=Roofing%20Enquiry"
                target="_blank"
                className="btn-primary inline-flex items-center justify-center space-x-3 text-lg px-10 py-4"
              >
                <ExternalLink className="w-6 h-6" />
                <span>Send an Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
