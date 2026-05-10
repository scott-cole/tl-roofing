"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-primary">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-16 h-16">
              <Image
                src="/tl-logo.png"
                alt="T & L Roofing Logo"
                fill
                className="object-contain transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold text-secondary">T & L Roofing</span>
              <p className="text-xs text-primary font-medium">Professional Roofing Services</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:01130000000"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">0113 000 0000</span>
            </a>
            <Link
              href="/contact"
              className="btn-primary text-white flex items-center space-x-2"
            >
              <span>Get Quote</span>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7 text-primary" /> : <Menu className="w-7 h-7 text-secondary" />}
          </button>
        </div>

        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4 py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:01130000000"
              className="flex items-center space-x-2 text-secondary font-semibold text-lg py-2"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span>0113 000 0000</span>
            </a>
            <Link
              href="/contact"
              className="btn-primary text-white text-center py-4"
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