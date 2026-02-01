'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15" stroke="#15171A" strokeWidth="2" fill="none"/>
            </svg>
            <span className="text-[18px] font-semibold text-[#15171A]">ghost</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <button className="flex items-center gap-1 text-[14px] font-medium text-[#394047] hover:text-black transition-colors">
              Product
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link
              href="https://explore.ghost.org"
              className="text-[14px] font-medium text-[#394047] hover:text-black transition-colors"
            >
              Explore
            </Link>
            <button className="flex items-center gap-1 text-[14px] font-medium text-[#394047] hover:text-black transition-colors">
              Resources
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link
              href="#pricing"
              className="text-[14px] font-medium text-[#394047] hover:text-black transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* Desktop Right Side: Sign in + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://account.ghost.org/signin/"
              className="text-[14px] font-medium text-[#394047] hover:text-black transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="https://account.ghost.org/signup/"
              className="bg-[#15171A] text-white py-2.5 px-5 rounded-[4px] text-[14px] hover:bg-[#333333] transition-colors"
            >
              <strong>Get Started</strong> — free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#394047]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E5E7EB] py-4">
            <div className="flex flex-col space-y-4">
              <button className="flex items-center gap-1 text-[14px] font-medium text-[#394047] hover:text-black transition-colors">
                Product
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <Link
                href="https://explore.ghost.org"
                className="text-[14px] font-medium text-[#394047] hover:text-black transition-colors"
              >
                Explore
              </Link>
              <button className="flex items-center gap-1 text-[14px] font-medium text-[#394047] hover:text-black transition-colors">
                Resources
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <Link
                href="#pricing"
                className="text-[14px] font-medium text-[#394047] hover:text-black transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="https://account.ghost.org/signin/"
                className="text-[14px] font-medium text-[#394047] hover:text-black transition-colors pt-2 border-t border-[#E5E7EB]"
              >
                Sign in
              </Link>
              <Link
                href="https://account.ghost.org/signup/"
                className="bg-[#15171A] text-white py-2.5 px-5 rounded-[4px] text-[14px] hover:bg-[#333333] transition-colors text-center"
              >
                <strong>Get Started</strong> — free
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
