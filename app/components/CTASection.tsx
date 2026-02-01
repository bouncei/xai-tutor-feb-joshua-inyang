import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-[#15171A]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-[2.5rem] font-bold text-white mb-4 leading-[1.2]">
          Launch your big idea
        </h2>

        {/* Stats text */}
        <p className="text-[18px] text-[#ABB4BE] mb-2 leading-[1.6]">
          Last week, 9,975 brand new<br />publications got started with Ghost.
        </p>

        {/* Second line */}
        <p className="text-[18px] text-[#ABB4BE] mb-8 leading-[1.6]">
          Today, it&apos;s your turn.
        </p>

        {/* CTA Button */}
        <Link 
          href="https://account.ghost.org/signup/"
          className="inline-flex items-center gap-2 bg-[#FF247C] text-white py-3 px-6 rounded-[4px] font-medium text-[15px] hover:bg-[#E6006E] transition-colors"
        >
          Start publishing now
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
