import React from 'react';

type Feature = {
  text: string;
  isNew?: boolean;
};

type PricingCardProps = {
  planName: string;
  subtitle: string;
  monthlyPrice: number | string;
  yearlyPrice: number | string;
  features: Feature[];
  isYearly: boolean;
  isCustom?: boolean;
};

export default function PricingCard({
  planName,
  subtitle,
  monthlyPrice,
  yearlyPrice,
  features,
  isYearly,
  isCustom = false,
}: PricingCardProps) {
  const displayPrice = isYearly ? yearlyPrice : monthlyPrice;
  const billingText = isYearly ? 'Billed yearly' : 'Billed monthly';

  return (
    <div className="bg-white rounded-lg border border-[#E5E7EB] p-6 flex flex-col">
      {/* Plan Header */}
      <div className="mb-5">
        {/* Plan Name - UPPERCASE */}
        <h3 className="text-[13px] font-bold text-[#15171A] tracking-wide mb-1">
          {planName}
        </h3>
        {/* Subtitle */}
        <p className="text-[14px] text-[#7C8B9A]">{subtitle}</p>
      </div>

      {/* Price Display */}
      <div className="mb-6">
        {isCustom ? (
          <div className="flex items-baseline">
            <span className="text-[14px] text-[#7C8B9A] mr-1">$</span>
            <span className="text-[42px] font-bold text-[#15171A] leading-none">Custom</span>
          </div>
        ) : (
          <>
            <div className="flex items-baseline">
              <span className="text-[14px] text-[#7C8B9A] mr-1">$</span>
              <span className="text-[42px] font-bold text-[#15171A] leading-none">{displayPrice}</span>
              <div className="ml-2">
                <span className="text-[14px] text-[#7C8B9A] block leading-tight">USD / mo</span>
                <span className="text-[13px] text-[#ABB4BE]">{billingText}</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Features Section */}
      <div className="mb-6">
        <h4 className="text-[11px] font-bold text-[#7C8B9A] uppercase tracking-wider mb-4">Features</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2.5">
              {/* Checkmark Icon */}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                <path d="M2 7L5.5 10.5L12 4" stroke="#7C8B9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[14px] text-[#394047]">{feature.text}</span>
              {feature.isNew && (
                <span className="bg-[#FF247C] text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                  NEW
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="mt-auto">
        <button
          className="w-full bg-[#15171A] text-white py-3 px-6 rounded-[4px] font-medium text-[14px] hover:bg-[#333333] transition-colors"
          aria-label={`${isCustom ? 'Get in touch' : 'Try for free'} - ${planName} plan`}
        >
          {isCustom ? 'Get in touch' : 'Try for free'}
        </button>
      </div>
    </div>
  );
}
