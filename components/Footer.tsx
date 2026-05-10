"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333333] text-white">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src="/tl-logo.png"
                  alt="T & L Roofing Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold">T & L Roofing</h3>
                <p className="text-gray-400 text-sm">
                  Professional Roofing Services
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Expert roofing services in Leeds and West Yorkshire. Quality
              workmanship, reliable service, and competitive prices for all your
              roofing needs.
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/TLROOFINGSERVICES"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1E97D4] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#1E97D4] transition-colors font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#1E97D4] transition-colors font-medium"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#1E97D4] transition-colors font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#1E97D4] transition-colors font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1E97D4] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 font-medium">
                  Leeds, West Yorkshire
                  <br />
                  United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1E97D4] flex-shrink-0" />
                <a
                  href="tel:07936450711"
                  className="text-gray-400 hover:text-[#1E97D4] transition-colors font-medium"
                >
                  07936 450711
                </a>
                <a
                  href="tel:07791746045"
                  className="text-gray-400 hover:text-[#1E97D4] transition-colors font-medium"
                >
                  07791 746045
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1E97D4] flex-shrink-0" />
                <a
                  href="mailto:tl.roofing@outlook.com"
                  className="text-gray-400 hover:text-[#1E97D4] transition-colors font-medium"
                >
                  tl.roofing@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#404040] mt-16 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} T & L Roofing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
