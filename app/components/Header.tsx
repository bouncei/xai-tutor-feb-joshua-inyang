import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            {/* Ghost Logo SVG */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15" stroke="#15171A" strokeWidth="2" fill="none"/>
            </svg>
            <span className="text-[18px] font-semibold text-[#15171A]">ghost</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
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

          {/* Right Side: Sign in + CTA */}
          <div className="flex items-center gap-4">
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
        </nav>
      </div>
    </header>
  );
}
