import React from 'react';
import FeatureTable, { FeatureRow } from './FeatureTable';

/**
 * Website Section Features Data
 */
const websiteFeatures: FeatureRow[] = [
  {
    name: 'Staff users',
    starter: '1',
    publisher: 'Unlimited',
    business: 'Unlimited',
    custom: 'Unlimited',
  },
  {
    name: 'Unlimited uploads',
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Custom branding',
    starter: false,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Custom domain',
    starter: false,
    publisher: true,
    business: true,
    custom: true,
  },
];

/**
 * Audience Section Features Data
 */
const audienceFeatures: FeatureRow[] = [
  {
    name: 'Members included',
    starter: '500',
    publisher: '1,000',
    business: '10,000',
    custom: 'Unlimited',
  },
  {
    name: 'Member tagging',
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Free subscriptions',
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Paid subscriptions',
    starter: false,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Comments',
    starter: false,
    publisher: true,
    business: true,
    custom: true,
  },
];

/**
 * Growth Section Features Data
 */
const growthFeatures: FeatureRow[] = [
  {
    name: 'SEO optimization',
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Social sharing',
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Recommendations',
    starter: false,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Analytics',
    starter: 'Basic',
    publisher: 'Advanced',
    business: 'Advanced',
    custom: 'Custom',
  },
  {
    name: 'Integrations',
    starter: false,
    publisher: true,
    business: true,
    custom: true,
  },
];

/**
 * FeatureSections Component
 *
 * Container component that renders all three feature comparison sections:
 * - Website
 * - Audience
 * - Growth
 *
 * Each section uses the FeatureTable component with its respective data.
 */
const FeatureSections: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
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
