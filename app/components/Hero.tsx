'use client';

import { useState } from 'react';

interface HeroProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}

export default function Hero({ isYearly, setIsYearly }: HeroProps) {
  const [sliderValue] = useState(0);
  const memberCount = '1,000';

  return (
    <section className="pt-8 sm:pt-12 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Content */}
        <div className="text-center mb-8 sm:mb-10">
          {/* Ghost(Pro) Pill Badge */}
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-[#F4F5F6] text-[#394047] text-[13px] sm:text-[14px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              Ghost(Pro) plans & pricing
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-bold leading-[1.15] text-[#15171A] mb-4 sm:mb-5 px-4">
            Launch your creative business
          </h1>

          {/* Subtitle */}
          <p className="text-[16px] sm:text-[18px] text-[#7C8B9A] leading-[1.5] px-4">
            No payment fees — upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        {/* Slider Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
            {/* Left: Audience Label */}
            <div className="text-center lg:text-left lg:whitespace-nowrap">
              <span className="text-[13px] sm:text-[14px] text-[#7C8B9A]">Based on an audience up to</span>
              <br />
              <span className="text-[16px] sm:text-[18px] font-semibold text-[#FF247C]">{memberCount} members</span>
            </div>

            {/* Center: Slider */}
            <div className="flex-1 max-w-md mx-auto lg:mx-0 w-full px-4 sm:px-0">
              {/* Tooltip */}
              <div className="relative flex justify-center mb-2">
                <div
                  className="bg-[#FF247C] text-white text-[12px] sm:text-[13px] font-semibold px-2.5 sm:px-3 py-1 rounded-md relative"
                  style={{ marginLeft: `${sliderValue}%` }}
                >
                  {memberCount}
                  {/* Tooltip Arrow */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#FF247C]" />
                </div>
              </div>

              {/* Slider Track */}
              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[12px] sm:text-[13px] text-[#7C8B9A]">0</span>
                  <span className="text-[12px] sm:text-[13px] text-[#7C8B9A]">Members</span>
                  <span className="text-[12px] sm:text-[13px] text-[#7C8B9A]">100k+</span>
                </div>
                <div className="relative h-1.5 bg-[#E5E7EB] rounded-full">
                  {/* Filled portion */}
                  <div
                    className="absolute left-0 top-0 h-full bg-[#FF247C] rounded-full opacity-30"
                    style={{ width: '1%' }}
                  />
                  {/* Thumb */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#E5E7EB] rounded-full shadow-sm cursor-pointer"
                    style={{ left: '0%' }}
                  />
                </div>
              </div>
            </div>

            {/* Right: Billing Toggle - Now Functional */}
            <div className="flex items-center justify-center border border-[#E5E7EB] rounded-md overflow-hidden mx-auto lg:mx-0">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-3 sm:px-4 py-2 text-[13px] sm:text-[14px] transition-colors whitespace-nowrap ${
                  !isYearly
                    ? 'text-[#15171A] bg-white font-medium'
                    : 'text-[#7C8B9A] hover:bg-gray-50'
                }`}
              >
                Monthly billing
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-3 sm:px-4 py-2 text-[13px] sm:text-[14px] border-l border-[#E5E7EB] transition-colors whitespace-nowrap ${
                  isYearly
                    ? 'text-[#15171A] bg-white font-medium'
                    : 'text-[#7C8B9A] hover:bg-gray-50'
                }`}
              >
                Yearly billing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
