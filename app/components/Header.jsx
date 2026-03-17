"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-green-900/70 backdrop-blur-md border-b border-green-600 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-green-400 font-extrabold text-xl tracking-wide hover:text-green-500 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 12l2-2 4 4 8-8 2 2-10 10-6-6z" />
          </svg>
          <span>BestStockBrokerIndia</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-green-300 font-semibold text-sm">
          <Link href="/" className="hover:text-green-400 transition">
            Home
          </Link>
          <Link href="/features" className="hover:text-green-400 transition">
            Features
          </Link>
          <Link href="/contact" className="hover:text-green-400 transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button desktop */}
        <div className="hidden md:block">
          <button className="px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-lg text-white font-semibold shadow-lg transition">
            Get Early Access
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label="Toggle menu"
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-green-900/95 border-t border-green-600 text-green-300 px-6 py-4 space-y-3 font-semibold">
          <Link href="/" className="block hover:text-green-400 transition">
            Home
          </Link>
          <Link href="/features" className="block hover:text-green-400 transition">
            Features
          </Link>
          <Link href="/contact" className="block hover:text-green-400 transition">
            Contact
          </Link>
          <button className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-lg text-white font-semibold shadow-lg transition">
            Get Early Access
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;