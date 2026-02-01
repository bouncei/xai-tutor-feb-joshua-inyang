// CTASection.tsx
// Typography: Title 36px/2.25rem (Section Title), Stats 18px/1.125rem (Body Large)
// Layout: Centered content with light gray background (#F9FAFB)
// Spacing: py-20 (80px section padding)

export default function CTASection() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Headline - 36px, font-weight 700 */}
        <h2 className="text-[2.25rem] font-bold text-[#15171A] mb-6 leading-[1.2]">
          Launch your big idea
        </h2>

        {/* Stats text - 18px, text-secondary-text */}
        <p className="text-[1.125rem] text-[#7C8B9A] mb-8 leading-[1.6]">
          Last week, 9,975 brand new publications got started with Ghost
        </p>

        {/* CTA Button - Primary style with arrow */}
        <button className="bg-black text-white py-3 px-6 rounded-md font-semibold text-[15px] hover:bg-[#333333] transition-colors inline-flex items-center gap-2">
          Start publishing now
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
