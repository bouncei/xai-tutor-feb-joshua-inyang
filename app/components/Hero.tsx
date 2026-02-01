// components/Hero.tsx
// Typography: Title 48px/3rem (font-weight 700, line-height 1.1)
//             Subtitle 18px (text-secondary-text)
// Layout: Centered content with static slider UI (reference: design.md Hero Section)

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="text-center">
          {/* Hero Title - 48px/3rem, font-weight 700, line-height 1.1 */}
          <h1 className="text-[3rem] font-bold leading-[1.1] text-primary-text mb-6">
            Launch your creative business
          </h1>

          {/* Subtitle - 18px, text-secondary-text, max-width ~600px */}
          <p className="text-[18px] text-secondary-text max-w-[600px] mx-auto mb-4 leading-[1.6]">
            The world&apos;s most popular modern publishing platform for creating a new media platform.
            Used by Apple, SkyNews, Buffer, OpenAI, and thousands more. Try it free for 14 days.
          </p>

          {/* Additional info text */}
          <p className="text-[14px] text-muted-text mb-12">
            No payment fees — upgrade, downgrade, or cancel anytime.
          </p>

          {/* Audience Slider - Static UI Only */}
          <div className="max-w-md mx-auto mt-12">
            {/* Slider Container */}
            <div className="relative">
              {/* Labels Container */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-[14px] font-medium text-primary-text">0</span>
                <span className="text-[14px] font-medium text-primary-text">100k+</span>
              </div>

              {/* Track */}
              <div className="relative h-2 bg-border-light rounded-full">
                {/* Filled Track (left side) */}
                <div className="absolute left-0 top-0 h-full w-1/2 bg-black rounded-full" />

                {/* Thumb/Indicator */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-6 h-6 bg-black rounded-full border-4 border-white shadow-md"
                  style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}
                />
              </div>

              {/* Audience Size Label */}
              <div className="text-center mt-4">
                <span className="text-[14px] text-secondary-text">Audience Size</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
