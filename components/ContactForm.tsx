"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-[#292929]">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="section-header">
            <h2 className="section-title">
              Get in Touch
            </h2>
            <p className="section-subtitle">
              Ready to discuss your roofing needs? Contact us today for a free,
              no-obligation quote.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-16">
            <div className="space-y-12 flex-1 min-w-[300px]">
              <div className="flex items-start space-x-8">
                <div className="w-20 h-20 bg-[#1E97D4]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-10 h-10 text-[#1E97D4]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Phone</h3>
                  <a
                    href="tel:01130000000"
                    className="text-3xl font-bold text-[#1E97D4] hover:text-white transition-colors"
                  >
                    0113 000 0000
                  </a>
                  <p className="text-gray-400 mt-3">Mon-Fri: 8am-6pm, Sat: 9am-2pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="w-20 h-20 bg-[#1E97D4]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-10 h-10 text-[#1E97D4]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Email</h3>
                  <a
                    href="mailto:tl.roofing@outlook.com"
                    className="text-2xl font-semibold text-[#1E97D4] hover:text-white transition-colors"
                  >
                    tl.roofing@outlook.com
                  </a>
                  <p className="text-gray-400 mt-3">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="w-20 h-20 bg-[#1E97D4]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-10 h-10 text-[#1E97D4]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Service Area</h3>
                  <p className="text-gray-400 text-2xl leading-relaxed">
                    Leeds, West Yorkshire<br />
                    United Kingdom
                  </p>
                  <p className="text-gray-500 mt-3">Serving Leeds and surrounding areas</p>
                </div>
              </div>

              <div className="bg-[#333333] rounded-2xl p-10 border border-[#404040]">
                <div className="flex flex-wrap gap-8 justify-center">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#1E97D4] flex-shrink-0" />
                    <span className="text-base font-medium text-gray-300">Free Quotes</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#1E97D4] flex-shrink-0" />
                    <span className="text-base font-medium text-gray-300">24/7 Emergency</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#1E97D4] flex-shrink-0" />
                    <span className="text-base font-medium text-gray-300">Fully Insured</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#1E97D4] flex-shrink-0" />
                    <span className="text-base font-medium text-gray-300">Quality Work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#333333] rounded-2xl p-14 shadow-lg border border-[#404040] flex-1 min-w-[300px]">
              <h3 className="text-3xl font-bold text-white mb-10">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-4">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-[#292929] border border-[#404040] rounded-xl focus:ring-2 focus:ring-[#1E97D4] focus:border-transparent transition-all text-white placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-4">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-[#292929] border border-[#404040] rounded-xl focus:ring-2 focus:ring-[#1E97D4] focus:border-transparent transition-all text-white placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-4">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-[#292929] border border-[#404040] rounded-xl focus:ring-2 focus:ring-[#1E97D4] focus:border-transparent transition-all text-white placeholder-gray-500"
                    placeholder="07700 900000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-4">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 bg-[#292929] border border-[#404040] rounded-xl focus:ring-2 focus:ring-[#1E97D4] focus:border-transparent transition-all resize-none text-white placeholder-gray-500"
                    placeholder="Tell us about your roofing needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-3"
                >
                  <Send className="w-6 h-6" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}