"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
      <nav className="container py-2">
        <div className="flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center shrink-0 group gap-2">
            <div className="relative w-16 h-16 shrink-0">
              <Image
                src="/tl-logo.png"
                alt="T & L Roofing Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-white">TL</span>
            <span className="text-xl text-[#1E97D4]">Roofing Services</span>
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#1E97D4] transition-colors font-semibold text-sm uppercase tracking-wide relative group py-2 px-3 whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E97D4] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Phone className="w-5 h-5" />
            <div className="flex flex-col text-xs">
              <a
                href="tel:07936450711"
                className="text-white hover:text-[#1E97D4] transition-colors font-semibold text-sm"
              >
                07936 450711
              </a>
              <a
                href="tel:07791746045"
                className="text-white hover:text-[#1E97D4] transition-colors font-semibold text-sm"
              >
                07791 746045
              </a>
            </div>

            <Link
              href="/contact"
              className="bg-[#1E97D4] hover:bg-[#0d7ab8] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get Quote
            </Link>
          </div>

          <button
            className="lg:hidden p-3 rounded-lg hover:bg-white/10 transition-colors"
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
            isMenuOpen ? "max-h-96 mt-4" : "max-h-0",
          )}
        >
          <div className="flex flex-col gap-2 py-6 border-t border-white/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#1E97D4] transition-colors font-semibold py-3 text-base px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-4 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <div className="flex flex-col text-xs">
                <a
                  href="tel:07936450711"
                  className="text-white hover:text-[#1E97D4] transition-colors font-semibold text-sm"
                >
                  07936 450711
                </a>
                <a
                  href="tel:07791746045"
                  className="text-white hover:text-[#1E97D4] transition-colors font-semibold text-sm"
                >
                  07791 746045
                </a>
              </div>
            </div>
            <Link
              href="/contact"
              className="bg-[#1E97D4] hover:bg-[#0d7ab8] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 text-center mx-4 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
