import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#15171A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Headline */}
        <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-white mb-3 sm:mb-4 leading-[1.2] px-4">
          Launch your big idea
        </h2>

        {/* Stats text */}
        <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-[#ABB4BE] mb-2 leading-[1.6] px-4">
          Last week, 9,975 brand new<br className="hidden sm:block" /><span className="sm:hidden"> </span>publications got started with Ghost.
        </p>

        {/* Second line */}
        <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-[#ABB4BE] mb-6 sm:mb-8 leading-[1.6] px-4">
          Today, it&apos;s your turn.
        </p>

        {/* CTA Button */}
        <Link 
          href="https://account.ghost.org/signup/"
          className="inline-flex items-center gap-2 bg-[#FF247C] text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-[4px] font-medium text-[14px] sm:text-[15px] hover:bg-[#E6006E] transition-colors"
        >
          Start publishing now
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
