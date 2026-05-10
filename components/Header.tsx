"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-[#292929] border-b border-[#404040] transition-all duration-300",
        isScrolled ? "shadow-xl backdrop-blur-md bg-[#292929]/95" : "shadow-lg",
      )}
    >
      <nav className="mx-auto px-3 sm:px-4 lg:px-6 max-w-[1400px] py-4">
        <div className="flex items-center justify-center relative">
          {/* Logo/Branding - Left */}
          <div className="absolute left-0">
            <Link href="/" className="flex items-center shrink-0 group">
              <span className="text-2xl font-bold text-[#1E97D4] tracking-tight">
                T&L
              </span>
              <span className="text-sm text-gray-300 ml-2">Roofing</span>
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#1E97D4] transition-colors font-semibold text-sm uppercase tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1E97D4] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Section - Phone & CTA */}
          <div className="absolute right-0 hidden md:flex items-center gap-6">
            <a
              href="tel:07936450711"
              className="flex items-center gap-2 text-white hover:text-[#1E97D4] transition-colors group"
            >
              <Phone className="w-4 h-4 text-[#1E97D4]" />
              <span className="text-sm font-semibold">07936 450711</span>
            </a>
            <div className="w-px h-6 bg-white/20"></div>
            <Link
              href="/contact"
              className="bg-[#1E97D4] hover:bg-[#0d7ab8] text-white font-semibold py-2 px-7 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm whitespace-nowrap"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors absolute right-0"
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

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-80 mt-4" : "max-h-0",
          )}
        >
          <div className="flex flex-col gap-3 py-4 border-t border-white/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#1E97D4] transition-colors font-semibold py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-white/20 my-2 pt-2">
              <a
                href="tel:07936450711"
                className="flex items-center gap-2 text-white hover:text-[#1E97D4] transition-colors py-2 px-4 font-semibold"
              >
                <Phone className="w-4 h-4 text-[#1E97D4]" />
                <span className="text-sm">07936 450711</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
