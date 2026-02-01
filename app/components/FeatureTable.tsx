import React from 'react';

export interface FeatureRow {
  name: string;
  hasInfo?: boolean;
  starter: string | boolean;
  publisher: string | boolean;
  business: string | boolean;
  custom: string | boolean;
}

export interface FeatureTableProps {
  title: string;
  features: FeatureRow[];
}

const InfoIcon = () => (
  <button className="ml-1.5 text-[#ABB4BE] hover:text-[#7C8B9A] transition-colors" aria-label="More info">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 6V10M7 4.5V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </button>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8L6.5 11.5L13 5" stroke="#30CF43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DashIcon = () => (
  <span className="text-[#E5E7EB] text-lg">–</span>
);

const renderCellValue = (value: string | boolean): React.ReactNode => {
  if (typeof value === 'boolean') {
    return value ? <CheckIcon /> : <DashIcon />;
  }
  return <span className="text-[#394047] text-[14px]">{value}</span>;
};

const FeatureTable: React.FC<FeatureTableProps> = ({ title, features }) => {
  return (
    <div className="mb-10">
      {/* Section Header with Plan Names */}
      <div className="flex items-end mb-4">
        <h3 className="text-[20px] font-bold text-[#15171A] flex-[2]">{title}</h3>
        <div className="flex-1 text-center">
          <span className="text-[13px] text-[#7C8B9A]">Starter</span>
        </div>
        <div className="flex-1 text-center">
          <span className="text-[13px] text-[#7C8B9A]">Publisher</span>
        </div>
        <div className="flex-1 text-center">
          <span className="text-[13px] text-[#7C8B9A]">Business</span>
        </div>
        <div className="flex-1 text-center">
          <span className="text-[13px] text-[#7C8B9A]">Custom</span>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead className="sr-only">
          <tr>
            <th>Feature</th>
            <th>Starter</th>
            <th>Publisher</th>
            <th>Business</th>
            <th>Custom</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr
              key={feature.name}
              className={`${
                index !== features.length - 1 ? 'border-b border-[#F0F0F0]' : ''
              } hover:bg-[#FAFAFA] transition-colors`}
            >
              <td className="py-3.5 pr-4 flex-[2] text-[14px] text-[#394047] flex items-center">
                {feature.name}
                {feature.hasInfo && <InfoIcon />}
              </td>
              <td className="py-3.5 text-center flex-1">
                <div className="flex items-center justify-center">
                  {renderCellValue(feature.starter)}
                </div>
              </td>
              <td className="py-3.5 text-center flex-1">
                <div className="flex items-center justify-center">
                  {renderCellValue(feature.publisher)}
                </div>
              </td>
              <td className="py-3.5 text-center flex-1">
                <div className="flex items-center justify-center">
                  {renderCellValue(feature.business)}
                </div>
              </td>
              <td className="py-3.5 text-center flex-1">
                <div className="flex items-center justify-center">
                  {renderCellValue(feature.custom)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureTable;
