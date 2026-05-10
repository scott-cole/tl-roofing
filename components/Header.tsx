"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#292929] shadow-xl border-b border-[#404040]">
      <nav className="container py-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-10 group">
            <div className="hidden sm:block">
              <span className="text-2xl font-normal text-white group-hover:text-[#1E97D4] transition-colors">
                T&L Roofing
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-24">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#1E97D4] transition-colors font-medium text-sm uppercase tracking-wide relative group py-5 px-6"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E97D4] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-20">
            <a
              href="tel:01130000000"
              className="flex items-center space-x-4 text-white hover:text-[#1E97D4] transition-colors font-semibold py-4 px-6"
            >
              <Phone className="w-5 h-5" />
              <span className="text-base font-medium">0113 000 0000</span>
            </a>
            <Link
              href="/contact"
              className="bg-[#1E97D4] hover:bg-[#0d7ab8] text-white font-medium py-4 px-14 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>

          <button
            className="lg:hidden p-6 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 mt-8" : "max-h-0",
          )}
        >
          <div className="flex flex-col space-y-4 py-8 border-t border-white/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#1E97D4] transition-colors font-medium py-4 text-lg px-8"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:01130000000"
              className="flex items-center space-x-4 text-white font-semibold text-lg py-4 px-8"
            >
              <Phone className="w-5 h-5 text-[#1E97D4]" />
              <span>0113 000 0000</span>
            </a>
            <Link
              href="/contact"
              className="bg-[#1E97D4] hover:bg-[#0d7ab8] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-center mx-8"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
