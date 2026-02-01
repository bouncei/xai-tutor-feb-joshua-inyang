import React from 'react';
import FeatureTable, { FeatureRow } from './FeatureTable';

const websiteFeatures: FeatureRow[] = [
  {
    name: 'Staff users',
    hasInfo: true,
    infoContent: 'Staff users are people who can log into Ghost Admin and publish posts, which includes Author, Editor, Administrator and Owner roles. Contributors and Suspended users are always free, they won\'t count towards your plan limits.',
    starter: '1',
    publisher: '3',
    business: '15',
    custom: 'Unlimited',
  },
  {
    name: 'File uploads',
    hasInfo: true,
    infoContent: 'You can upload unlimited files to each Ghost(Pro) plan. The file upload limit applies to how large each individual file can be, whether image, audio, video, pdf, or other upload. If you need to upload files larger than supported by any of our plans, we recommend using a separate, dedicated service optimised for serving large media, like YouTube or Dropbox.',
    starter: '5mb',
    publisher: '100mb',
    business: '250mb',
    custom: '1gb',
  },
  {
    name: 'Whitelabel branding',
    hasInfo: true,
    infoContent: 'Other platforms put their logo all over your website and email newsletters to try and capture your audience. With Ghost, your brand is front and center. Your logo. Your colors. Your publication.',
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Free custom domain',
    hasInfo: true,
    infoContent: 'All Ghost(Pro) sites come with a free ghost.io subdomain by default, and also support the use of any custom domain name via a CNAME DNS record. All Ghost(Pro) sites include a one-year free domain registration using the .link TLD. Domains registered through this promotion renew at standard rates after the first year.',
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Internationalization',
    hasInfo: true,
    infoContent: 'Write your content and present your website in any language, so your subscribers feel right at home.',
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
    infoContent: 'Install any theme from the Ghost Marketplace and use it on your site. Choose from hundreds of professionally designed themes.',
    starter: false,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Custom themes',
    hasInfo: true,
    infoContent: 'Our Starter plan comes with a built-in default theme with plenty of layout and color settings. On higher plans, you can install and configure any custom theme you prefer from the Ghost Marketplace, or create your own from scratch!',
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
    infoContent: 'Members are any users who have either a free or paid account on your site with which they can subscribe or log-in, using Ghost\'s memberships & subscriptions feature. As your publication grows over time you\'ll be notified to upgrade your plan whenever needed, based on the number of members you have.',
    starter: '1,000',
    publisher: '1,000',
    business: '10,000',
    custom: 'Unlimited',
  },
  {
    name: 'Member tagging',
    hasInfo: true,
    infoContent: 'Organize and segment your members with tags. Apply tags automatically based on behavior, manually, or through automation to create targeted member groups.',
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Member import/export',
    hasInfo: true,
    infoContent: 'Easily import your existing subscriber list or export your member data at any time. We support CSV format for seamless data migration.',
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Community comments',
    hasInfo: true,
    infoContent: 'Enable commenting on your posts with options to restrict to members only or paid members only, fostering a healthy community of people who subscribe to your work.',
    starter: true,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Paid subscriptions',
    hasInfo: true,
    infoContent: 'Accept payments from members using Stripe integration. Process subscriptions, one-time payments, and manage billing with ease.',
    starter: false,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Tips/donations',
    hasInfo: true,
    infoContent: 'Collect one-time payments as tips to support your work or donations. Allow your audience to show appreciation with flexible payment amounts.',
    starter: false,
    publisher: true,
    business: true,
    custom: true,
  },
  {
    name: 'Premium tiers',
    hasInfo: true,
    infoContent: 'Ghost allows you to offer multiple membership products, each with unique prices, benefits, and content access levels. A tiered pricing strategy makes it possible to grow your business by offering different products and benefits to your audience.',
    starter: false,
    publisher: '3',
    business: '10',
    custom: 'Unlimited',
  },
  {
    name: 'Special offers',
    hasInfo: true,
    infoContent: 'Create special discounts for Black Friday sales or special events to drive upgrades and premium subscriptions. Set time-limited promotions to encourage member growth during key marketing periods.',
    starter: false,
    publisher: '15',
    business: '50',
    custom: 'Unlimited',
  },
  {
    name: 'Transaction fees',
    hasInfo: true,
    infoContent: 'Process payments for your premium subscriptions without any additional transaction fees from Ghost. Payment processor fees still apply.',
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
    <section className="py-8 sm:py-12 border-t border-[#F0F0F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
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
