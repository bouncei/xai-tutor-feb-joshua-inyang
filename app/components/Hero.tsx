'use client';

import { useState } from 'react';

export default function Hero() {
  const [sliderValue] = useState(0);
  const memberCount = '1,000';

  return (
    <section className="pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="text-center mb-10">
          {/* Ghost(Pro) Pill Badge */}
          <div className="inline-block mb-6">
            <span className="bg-[#F4F5F6] text-[#394047] text-[14px] font-medium px-4 py-2 rounded-full">
              Ghost(Pro) plans & pricing
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-[2.75rem] font-bold leading-[1.15] text-[#15171A] mb-5">
            Launch your creative business
          </h1>

          {/* Subtitle */}
          <p className="text-[18px] text-[#7C8B9A] leading-[1.5]">
            No payment fees — upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        {/* Slider Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between gap-8">
            {/* Left: Audience Label */}
            <div className="text-left whitespace-nowrap">
              <span className="text-[14px] text-[#7C8B9A]">Based on an audience up to</span>
              <br />
              <span className="text-[18px] font-semibold text-[#FF247C]">{memberCount} members</span>
            </div>

            {/* Center: Slider */}
            <div className="flex-1 max-w-md">
              {/* Tooltip */}
              <div className="relative flex justify-center mb-2">
                <div 
                  className="bg-[#FF247C] text-white text-[13px] font-semibold px-3 py-1 rounded-md relative"
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
                  <span className="text-[13px] text-[#7C8B9A]">0</span>
                  <span className="text-[13px] text-[#7C8B9A]">Members</span>
                  <span className="text-[13px] text-[#7C8B9A]">100k+</span>
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

            {/* Right: Billing Toggle */}
            <div className="flex items-center border border-[#E5E7EB] rounded-md overflow-hidden">
              <button className="px-4 py-2 text-[14px] text-[#7C8B9A] hover:bg-gray-50 transition-colors">
                Monthly billing
              </button>
              <button className="px-4 py-2 text-[14px] text-[#15171A] bg-white border-l border-[#E5E7EB] font-medium">
                Yearly billing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
