import React from 'react';

/**
 * Type definitions for pricing card
 */
type PricingCardProps = {
  planName: string;
  monthlyPrice: number | string;
  yearlyPrice: number | string;
  members: string;
  features: string[];
  isYearly: boolean;
  isMostPopular?: boolean;
  isCustom?: boolean;
};

/**
 * PricingCard component displays individual pricing plan details
 *
 * @param planName - Name of the pricing plan (e.g., "Starter", "Publisher")
 * @param monthlyPrice - Monthly billing price
 * @param yearlyPrice - Yearly billing price (displayed as monthly rate)
 * @param members - Member capacity (e.g., "500 members")
 * @param features - Array of feature strings to display
 * @param isYearly - Current billing period selection
 * @param isMostPopular - Flag to highlight the "Most Popular" plan
 * @param isCustom - Flag for custom pricing plan (shows "Contact" instead of price)
 */
export default function PricingCard({
  planName,
  monthlyPrice,
  yearlyPrice,
  members,
  features,
  isYearly,
  isMostPopular = false,
  isCustom = false,
}: PricingCardProps) {
  // Determine which price to display based on billing period
  const displayPrice = isYearly ? yearlyPrice : monthlyPrice;
  const billingNote = isYearly ? 'Billed annually' : 'Billed monthly';

  return (
    <div
      className={`bg-white rounded-xl p-8 relative ${
        isMostPopular
          ? 'border-2 border-black'
          : 'border border-[#E5E7EB]'
      }`}
    >
      {/* Most Popular Badge */}
      {isMostPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-black text-white text-xs px-3 py-1 rounded-full font-medium">
            Most popular
          </span>
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-[1.5rem] font-semibold text-[#15171A] mb-2">
        {planName}
      </h3>

      {/* Member Count */}
      <p className="text-[#7C8B9A] text-sm mb-6">{members}</p>

      {/* Price Display */}
      <div className="mb-2">
        {isCustom ? (
          <div className="text-[3rem] font-bold text-[#15171A] leading-none">
            Custom
          </div>
        ) : (
          <div className="flex items-baseline">
            <span className="text-[3rem] font-bold text-[#15171A] leading-none">
              ${displayPrice}
            </span>
            <span className="text-[#7C8B9A] ml-2">/month</span>
          </div>
        )}
      </div>

      {/* Billing Note */}
      <p className="text-[#7C8B9A] text-sm mb-6">{billingNote}</p>

      {/* CTA Button */}
      <button
        className="w-full bg-black text-white py-3 px-6 rounded-md font-semibold text-[15px] hover:bg-[#333333] transition-colors mb-6"
        aria-label={`${isCustom ? 'Get in touch' : 'Try for free'} - ${planName} plan`}
      >
        {isCustom ? 'Get in touch' : 'Try for free'}
      </button>

      {/* Divider */}
      <div className="border-t border-[#E5E7EB] mb-6"></div>

      {/* Features List */}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-[#30CF43] text-lg flex-shrink-0 mt-0.5" aria-hidden="true">
              ✓
            </span>
            <span className="text-[#15171A] text-[15px]">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
