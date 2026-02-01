import React from 'react';
import FeatureTable, { FeatureRow } from './FeatureTable';

const websiteFeatures: FeatureRow[] = [
  {
    name: 'Staff users',
    hasInfo: true,
    starter: '1',
    publisher: '3',
    business: '15',
    custom: 'Unlimited',
  },
  {
    name: 'File uploads',
    hasInfo: true,
    starter: '5mb',
    publisher: '100mb',
    business: '250mb',
    custom: '1gb',
  },
  {
    name: 'Whitelabel branding',
    hasInfo: true,
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Free custom domain',
    hasInfo: true,
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Internationalization',
    hasInfo: true,
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Design settings',
    hasInfo: false,
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Marketplace themes',
    hasInfo: true,
    starter: false,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Custom themes',
    hasInfo: true,
    starter: false,
    publisher: true,
    business: true,
    custom: true,
  },
];

const audienceFeatures: FeatureRow[] = [
  {
    name: 'Registered members',
    hasInfo: true,
    starter: '1,000',
    publisher: '1,000',
    business: '10,000',
    custom: 'Unlimited',
  },
  {
    name: 'Member tagging',
    hasInfo: true,
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Member import/export',
    hasInfo: true,
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Community comments',
    hasInfo: true,
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Paid subscriptions',
    hasInfo: true,
    starter: false,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Tips/donations',
    hasInfo: true,
    starter: false,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Premium tiers',
    hasInfo: true,
    starter: false,
    publisher: '3',
    business: '10',
    custom: 'Unlimited',
  },
  {
    name: 'Special offers',
    hasInfo: true,
    starter: false,
    publisher: '15',
    business: '50',
    custom: 'Unlimited',
  },
  {
    name: 'Transaction fees',
    hasInfo: true,
    starter: false,
    publisher: '0%',
    business: '0%',
    custom: '0%',
  },
];

const growthFeatures: FeatureRow[] = [
  {
    name: 'Social web distribution',
    hasInfo: true,
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Ghost Explore network',
    hasInfo: true,
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Recommendations',
    hasInfo: true,
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Referral program',
    hasInfo: true,
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Advanced SEO tools',
    hasInfo: true,
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'RSS feeds',
    hasInfo: false,
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
];

const FeatureSections: React.FC = () => {
  return (
    <section className="py-12 border-t border-[#F0F0F0]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-[24px] font-bold text-[#15171A] mb-8 sr-only">Feature comparison</h2>

        {/* Website Section */}
        <FeatureTable title="Website" features={websiteFeatures} />

        {/* Audience Section */}
        <FeatureTable title="Audience" features={audienceFeatures} />

        {/* Growth Section */}
        <FeatureTable title="Growth" features={growthFeatures} />
      </div>
    </section>
  );
};

export default FeatureSections;
