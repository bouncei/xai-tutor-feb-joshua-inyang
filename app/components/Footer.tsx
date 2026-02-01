import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#15171A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-5 gap-8 mb-12">
          {/* Product Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#creators" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Creators
                </Link>
              </li>
              <li>
                <Link href="#publishers" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Publishers
                </Link>
              </li>
              <li>
                <Link href="#business" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="#developers" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Developers
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Developers</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#ghost-pro" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Ghost(Pro)
                </Link>
              </li>
              <li>
                <Link href="#open-source" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Open Source
                </Link>
              </li>
              <li>
                <Link href="#docs" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#ghost-org" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Ghost.org
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#tutorials" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#resources" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Comparisons Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Comparisons</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#vs-substack" className="text-gray-400 text-sm hover:text-white transition-colors">
                  vs Substack
                </Link>
              </li>
              <li>
                <Link href="#vs-wordpress" className="text-gray-400 text-sm hover:text-white transition-colors">
                  vs WordPress
                </Link>
              </li>
              <li>
                <Link href="#vs-medium" className="text-gray-400 text-sm hover:text-white transition-colors">
                  vs Medium
                </Link>
              </li>
              <li>
                <Link href="#vs-beehiiv" className="text-gray-400 text-sm hover:text-white transition-colors">
                  vs Beehiiv
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#help" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Help
                </Link>
              </li>
              <li>
                <Link href="#status" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Status
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#394047] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">Ghost</span>
            <span className="text-gray-400 text-sm">© 2026 Ghost Foundation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
