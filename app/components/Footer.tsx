import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#F4F5F6]">
      {/* Top Navigation Row */}
      <div className="border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <nav className="flex items-center gap-4 sm:gap-8 flex-wrap justify-center sm:justify-start">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" stroke="#15171A" strokeWidth="2" fill="none"/>
                </svg>
              </Link>
              <Link href="/about/" className="text-[13px] sm:text-[14px] text-[#394047] hover:text-[#15171A] transition-colors">
                About
              </Link>
              <Link href="https://explore.ghost.org" className="text-[13px] sm:text-[14px] text-[#394047] hover:text-[#15171A] transition-colors">
                Explore
              </Link>
              <Link href="https://careers.ghost.org" className="text-[13px] sm:text-[14px] text-[#394047] hover:text-[#15171A] transition-colors">
                Careers
              </Link>
              <Link href="https://ghost.org/resources/" className="text-[13px] sm:text-[14px] text-[#394047] hover:text-[#15171A] transition-colors">
                Resources
              </Link>
            </nav>
            {/* GitHub Button Placeholder */}
            <div className="flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-md px-3 py-1.5 text-[12px] sm:text-[13px] text-[#394047]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              Star
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Product Column */}
          <div>
            <h3 className="text-[#15171A] font-semibold mb-4 text-[13px]">Product</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Creator platform
                </Link>
              </li>
              <li>
                <Link href="/marketplace/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Theme marketplace
                </Link>
              </li>
              <li>
                <Link href="/integrations/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/experts/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Experts
                </Link>
              </li>
              <li>
                <Link href="/news/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Ghost for news
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h3 className="text-[#15171A] font-semibold mb-4 text-[13px]">Developers</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="https://docs.ghost.org/install/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  How to install Ghost
                </Link>
              </li>
              <li>
                <Link href="https://docs.ghost.org/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Core concepts
                </Link>
              </li>
              <li>
                <Link href="/pricing/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Ghost hosting
                </Link>
              </li>
              <li>
                <Link href="https://docs.ghost.org/content-api/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  API documentation
                </Link>
              </li>
              <li>
                <Link href="https://docs.ghost.org/security/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Security overview
                </Link>
              </li>
              <li>
                <Link href="https://github.com/TryGhost/Ghost" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Source code
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-[#15171A] font-semibold mb-4 text-[13px]">Resources</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/tutorials/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Ghost tutorials
                </Link>
              </li>
              <li>
                <Link href="/resources/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/love/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Ghost reviews
                </Link>
              </li>
              <li>
                <Link href="https://opensubscriptionplatforms.com" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Open Subscription Platforms
                </Link>
              </li>
            </ul>
          </div>

          {/* Comparisons Column */}
          <div>
            <h3 className="text-[#15171A] font-semibold mb-4 text-[13px]">Comparisons</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/vs/substack/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Ghost vs Substack
                </Link>
              </li>
              <li>
                <Link href="/vs/beehiiv/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Ghost vs BeeHiiv
                </Link>
              </li>
              <li>
                <Link href="/vs/wordpress/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Ghost vs WordPress
                </Link>
              </li>
              <li>
                <Link href="/vs/medium/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Ghost vs Medium
                </Link>
              </li>
              <li>
                <Link href="/vs/patreon/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Ghost vs Patreon
                </Link>
              </li>
              <li>
                <Link href="/alternatives/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Ghost alternatives →
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-[#15171A] font-semibold mb-4 text-[13px]">Support</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/help/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="https://forum.ghost.org/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors">
                  Community forum
                </Link>
              </li>
              <li>
                <Link href="https://status.ghost.org/" className="text-[#7C8B9A] text-[14px] hover:text-[#15171A] transition-colors flex items-center gap-2">
                  Status
                  <span className="flex items-center gap-1 text-[#FF247D] text-[12px]">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                      <polygon points="4,0 8,8 0,8"/>
                    </svg>
                    99.9%
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 sm:pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Foundation Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
            <Link href="/about/" className="flex items-center gap-2 text-[12px] sm:text-[13px] text-[#7C8B9A] hover:text-[#15171A] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 4V8L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Non-Profit Foundation
            </Link>
            <Link href="https://github.com/tryghost" className="flex items-center gap-2 text-[12px] sm:text-[13px] text-[#7C8B9A] hover:text-[#15171A] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              Open Source
            </Link>
            <Link href="https://climate.stripe.com/6MNofu" className="flex items-center gap-2 text-[12px] sm:text-[13px] text-[#7C8B9A] hover:text-[#15171A] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 4V12M4 8H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Carbon Neutral
            </Link>
          </div>

          {/* Legal Links */}
          <nav className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <Link href="/terms/" className="text-[12px] sm:text-[13px] text-[#7C8B9A] hover:text-[#15171A] transition-colors">
              Terms
            </Link>
            <Link href="/privacy/" className="text-[12px] sm:text-[13px] text-[#7C8B9A] hover:text-[#15171A] transition-colors">
              Privacy
            </Link>
            <Link href="/contact/" className="text-[12px] sm:text-[13px] text-[#7C8B9A] hover:text-[#15171A] transition-colors">
              Contact
            </Link>
            <Link href="/" className="text-[12px] sm:text-[13px] text-[#7C8B9A] hover:text-[#15171A] transition-colors">
              Ghost Foundation © 2026
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
