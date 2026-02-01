import React from 'react';

/**
 * Represents a single row in the feature comparison table
 */
export interface FeatureRow {
  name: string;
  starter: string | boolean;
  publisher: string | boolean;
  business: string | boolean;
  custom: string | boolean;
}

/**
 * Props for the FeatureTable component
 */
export interface FeatureTableProps {
  /** The section title (e.g., "Website", "Audience", "Growth") */
  title: string;
  /** Array of feature rows to display */
  features: FeatureRow[];
}

/**
 * Renders a cell value based on its type
 * - boolean true: Green checkmark
 * - boolean false: Gray dash
 * - string: Display the text value
 */
const renderCellValue = (value: string | boolean): React.ReactNode => {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="text-[#30CF43] text-xl">✓</span>
    ) : (
      <span className="text-gray-300 text-lg">—</span>
    );
  }
  return <span className="text-gray-900">{value}</span>;
};

/**
 * FeatureTable Component
 *
 * A reusable component for displaying feature comparison tables.
 * Uses a 5-column grid layout with feature names in the first column
 * and plan data (Starter, Publisher, Business, Custom) in the remaining columns.
 *
 * @example
 * ```tsx
 * <FeatureTable
 *   title="Website"
 *   features={[
 *     { name: "Staff users", starter: "1", publisher: "Unlimited", business: "Unlimited", custom: "Unlimited" },
 *     { name: "Custom branding", starter: false, publisher: true, business: true, custom: true }
 *   ]}
 * />
 * ```
 */
const FeatureTable: React.FC<FeatureTableProps> = ({ title, features }) => {
  return (
    <div className="mb-12">
      {/* Section Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>

      {/* Table Grid */}
      <div className="border border-[#E5E7EB] rounded-xl overflow-hidden">
        {/* Header Row */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] border-b border-[#E5E7EB] bg-white">
          <div className="py-4 px-6 font-semibold text-gray-900">Feature</div>
          <div className="py-4 px-6 text-center font-semibold text-gray-900">Starter</div>
          <div className="py-4 px-6 text-center font-semibold text-gray-900">Publisher</div>
          <div className="py-4 px-6 text-center font-semibold text-gray-900">Business</div>
          <div className="py-4 px-6 text-center font-semibold text-gray-900">Custom</div>
        </div>

        {/* Feature Rows */}
        {features.map((feature, index) => (
          <div
            key={feature.name}
            className={`grid grid-cols-[2fr_1fr_1fr_1fr_1fr] ${
              index !== features.length - 1 ? 'border-b border-[#E5E7EB]' : ''
            } bg-white hover:bg-gray-50 transition-colors`}
          >
            <div className="py-4 px-6 font-medium text-gray-900">
              {feature.name}
            </div>
            <div className="py-4 px-6 text-center flex items-center justify-center">
              {renderCellValue(feature.starter)}
            </div>
            <div className="py-4 px-6 text-center flex items-center justify-center">
              {renderCellValue(feature.publisher)}
            </div>
            <div className="py-4 px-6 text-center flex items-center justify-center">
              {renderCellValue(feature.business)}
            </div>
            <div className="py-4 px-6 text-center flex items-center justify-center">
              {renderCellValue(feature.custom)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureTable;
