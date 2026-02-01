'use client';

import React, { useState } from 'react';
import PricingCard from './PricingCard';

type Feature = {
  text: string;
  isNew?: boolean;
};

type PricingPlan = {
  planName: string;
  subtitle: string;
  monthlyPrice: number | string;
  yearlyPrice: number | string;
  features: Feature[];
  isCustom?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    planName: 'STARTER',
    subtitle: 'For solo blogs & newsletters',
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      { text: 'Your own website' },
      { text: 'Free custom domain', isNew: true },
      { text: 'Email newsletter' },
      { text: 'Simple design settings' },
      { text: '1,000 members' },
    ],
    isCustom: false,
  },
  {
    planName: 'PUBLISHER',
    subtitle: 'For custom publications',
    monthlyPrice: 39,
    yearlyPrice: 29,
    features: [
      { text: '3 staff users' },
      { text: 'Custom themes' },
      { text: '8,000+ integrations' },
      { text: 'Paid subscriptions' },
      { text: 'Advanced analytics' },
      { text: '1,000 members' },
    ],
    isCustom: false,
  },
  {
    planName: 'BUSINESS',
    subtitle: 'For teams scaling up',
    monthlyPrice: 249,
    yearlyPrice: 199,
    features: [
      { text: '15 staff users' },
      { text: 'Priority support' },
      { text: 'Higher usage limits' },
      { text: 'Early access to features' },
      { text: '10,000 members' },
    ],
    isCustom: false,
  },
  {
    planName: 'CUSTOM',
    subtitle: 'For more complex needs',
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    features: [
      { text: 'Unlimited staff users' },
      { text: 'Advanced configurations' },
      { text: 'Dedicated IP address' },
      { text: '99.9% uptime SLA' },
      { text: 'Unlimited members' },
    ],
    isCustom: true,
  },
];

const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}k`;
  }
  return num.toString();
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);
  const [members, setMembers] = useState(0);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMembers(Number(e.target.value));
  };

  return (
    <section className="py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Member Slider and Billing Toggle */}
        <div className="mb-6 sm:mb-8">
          {/* Member Slider */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-center mb-4">
              <span className="text-[14px] sm:text-[15px] text-[#394047]">Based on an audience up to</span>
              <div className="mt-2">
                <span className="text-[14px] sm:text-[15px] font-semibold text-[#15171A]">
                  {members === 100000 ? '100k+' : formatNumber(members)}
                </span>
                <span className="text-[14px] sm:text-[15px] text-[#7C8B9A] ml-1">members</span>
              </div>
            </label>
            <div className="max-w-md mx-auto px-4 sm:px-0">
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={members}
                onChange={handleSliderChange}
                className="w-full h-1 bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#15171A] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#15171A] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsYearly(false)}
              className={`text-[13px] sm:text-[15px] font-medium transition-colors ${
                !isYearly ? 'text-[#15171A]' : 'text-[#7C8B9A]'
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-[#15171A]' : 'bg-[#E5E7EB]'
              }`}
              role="switch"
              aria-checked={isYearly}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`text-[13px] sm:text-[15px] font-medium transition-colors ${
                isYearly ? 'text-[#15171A]' : 'text-[#7C8B9A]'
              }`}
            >
              Yearly billing
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.planName}
              planName={plan.planName}
              subtitle={plan.subtitle}
              monthlyPrice={plan.monthlyPrice}
              yearlyPrice={plan.yearlyPrice}
              features={plan.features}
              isYearly={isYearly}
              isCustom={plan.isCustom}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
