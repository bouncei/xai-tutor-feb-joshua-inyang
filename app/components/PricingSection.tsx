'use client';

import React, { useState } from 'react';
import PricingCard from './PricingCard';

/**
 * Type definition for pricing plan data
 */
type PricingPlan = {
  planName: string;
  monthlyPrice: number | string;
  yearlyPrice: number | string;
  members: string;
  features: string[];
  isMostPopular?: boolean;
  isCustom?: boolean;
};

/**
 * Pricing data for all plans
 * Yearly prices are displayed as monthly rates but billed annually
 */
const pricingPlans: PricingPlan[] = [
  {
    planName: 'Starter',
    monthlyPrice: 11,
    yearlyPrice: 9,
    members: 'Up to 500 members',
    features: [
      '1 Staff user',
      'Up to 500 members',
      'Unlimited posts',
      'Basic analytics',
    ],
    isMostPopular: false,
    isCustom: false,
  },
  {
    planName: 'Publisher',
    monthlyPrice: 31,
    yearlyPrice: 25,
    members: 'Up to 1,000 members',
    features: [
      'Unlimited staff users',
      'Up to 1,000 members',
      'Unlimited posts',
      'Advanced analytics',
      'Custom domain',
    ],
    isMostPopular: true,
    isCustom: false,
  },
  {
    planName: 'Business',
    monthlyPrice: 63,
    yearlyPrice: 50,
    members: 'Up to 10,000 members',
    features: [
      'Everything in Publisher',
      'Up to 10,000 members',
      'Priority support',
      'Advanced integrations',
    ],
    isMostPopular: false,
    isCustom: false,
  },
  {
    planName: 'Custom',
    monthlyPrice: 'Contact',
    yearlyPrice: 'Contact',
    members: 'Unlimited',
    features: [
      'Unlimited everything',
      'Dedicated support',
      'Custom development',
      'SLA agreement',
    ],
    isMostPopular: false,
    isCustom: true,
  },
];

/**
 * PricingSection component
 * Displays pricing cards with a monthly/yearly billing toggle
 *
 * Features:
 * - Interactive billing period toggle (Monthly/Yearly)
 * - 4 pricing tiers with feature lists
 * - Highlights "Most Popular" plan (Publisher)
 * - Responsive grid layout
 */
export default function PricingSection() {
  // State to track billing period: true = yearly, false = monthly
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#15171A] mb-4">
          Choose your plan
        </h2>
        <p className="text-lg text-[#7C8B9A] mb-8">
          Flexible pricing for every stage of your publishing journey
        </p>

        {/* Monthly/Yearly Toggle */}
        <div className="flex justify-center">
          <div
            className="bg-[#F3F4F6] p-1 rounded-full inline-flex"
            role="tablist"
            aria-label="Billing period selector"
          >
            {/* Monthly Tab */}
            <button
              className={`py-2 px-6 rounded-full font-medium transition-colors ${
                !isYearly
                  ? 'bg-black text-white'
                  : 'text-[#6B7280] hover:text-[#111827]'
              }`}
              onClick={() => setIsYearly(false)}
              role="tab"
              aria-selected={!isYearly}
              aria-label="Monthly billing"
            >
              Monthly
            </button>

            {/* Yearly Tab */}
            <button
              className={`py-2 px-6 rounded-full font-medium transition-colors ${
                isYearly
                  ? 'bg-black text-white'
                  : 'text-[#6B7280] hover:text-[#111827]'
              }`}
              onClick={() => setIsYearly(true)}
              role="tab"
              aria-selected={isYearly}
              aria-label="Yearly billing"
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-4 gap-6">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.planName}
            planName={plan.planName}
            monthlyPrice={plan.monthlyPrice}
            yearlyPrice={plan.yearlyPrice}
            members={plan.members}
            features={plan.features}
            isYearly={isYearly}
            isMostPopular={plan.isMostPopular}
            isCustom={plan.isCustom}
          />
        ))}
      </div>
    </section>
  );
}
