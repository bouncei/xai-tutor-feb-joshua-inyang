import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-text hover:text-ghost-blue transition-colors">
              Ghost
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="#product"
              className="text-[14px] font-medium text-gray-700 hover:text-black transition-colors"
            >
              Product
            </Link>
            <Link
              href="#resources"
              className="text-[14px] font-medium text-gray-700 hover:text-black transition-colors"
            >
              Resources
            </Link>
            <Link
              href="#pricing"
              className="text-[14px] font-medium text-gray-700 hover:text-black transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* Right Side: Sign in + CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="#signin"
              className="text-[14px] font-medium text-gray-700 hover:text-black transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="#try-ghost"
              className="bg-black text-white py-3 px-6 rounded-md font-semibold text-[15px] hover:bg-[#333333] transition-colors"
            >
              Try Ghost free
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
