'use client';

import React from 'react';
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

interface PricingSectionProps {
  isYearly: boolean;
}

export default function PricingSection({ isYearly }: PricingSectionProps) {
  return (
    <section className="py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Pricing Cards Grid - No duplicate controls */}
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
