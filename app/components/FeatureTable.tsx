'use client';

import React, { useState } from 'react';

export interface FeatureRow {
  name: string;
  hasInfo?: boolean;
  infoContent?: string;
  starter: string | boolean;
  publisher: string | boolean;
  business: string | boolean;
  custom: string | boolean;
}

export interface FeatureTableProps {
  title: string;
  features: FeatureRow[];
}

interface InfoIconProps {
  onClick: () => void;
}

const InfoIcon: React.FC<InfoIconProps> = ({ onClick }) => (
  <button 
    className="ml-1.5 text-[#ABB4BE] hover:text-[#7C8B9A] transition-colors" 
    aria-label="More info"
    onClick={onClick}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 6V10M7 4.5V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </button>
);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop - Blurred light overlay like Ghost */}
      <div
        className="fixed inset-0 bg-white/80 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl z-50 max-w-md w-full mx-4">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-[20px] font-bold text-[#15171A]">{title}</h3>
            <button
              onClick={onClose}
              className="text-[#ABB4BE] hover:text-[#7C8B9A] transition-colors"
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          
          {/* Content */}
          <div className="text-[15px] text-[#394047] leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </>
  );
};

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8L6.5 11.5L13 5" stroke="#FF247D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (featureName: string) => {
    setActiveModal(featureName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="mb-8 sm:mb-10">
      {/* Section Title - Mobile */}
      <h3 className="text-[18px] sm:text-[20px] font-bold text-[#15171A] mb-4 sm:mb-0 sm:hidden">{title}</h3>

      {/* Section Header with Plan Names - Desktop */}
      <div className="hidden sm:flex items-end mb-4">
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

      {/* Table - Desktop */}
      <div className="hidden sm:block overflow-x-auto">
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
                  {feature.hasInfo && (
                    <InfoIcon onClick={() => openModal(feature.name)} />
                  )}
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

      {/* Mobile View - Stacked Cards */}
      <div className="sm:hidden space-y-4">
        {features.map((feature) => (
          <div key={feature.name} className="border border-[#E5E7EB] rounded-lg p-4">
            <div className="flex items-center mb-3 pb-3 border-b border-[#F0F0F0]">
              <span className="text-[14px] font-medium text-[#15171A]">{feature.name}</span>
              {feature.hasInfo && (
                <InfoIcon onClick={() => openModal(feature.name)} />
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-[11px] text-[#7C8B9A] mb-1">Starter</div>
                <div className="flex items-center">{renderCellValue(feature.starter)}</div>
              </div>
              <div>
                <div className="text-[11px] text-[#7C8B9A] mb-1">Publisher</div>
                <div className="flex items-center">{renderCellValue(feature.publisher)}</div>
              </div>
              <div>
                <div className="text-[11px] text-[#7C8B9A] mb-1">Business</div>
                <div className="flex items-center">{renderCellValue(feature.business)}</div>
              </div>
              <div>
                <div className="text-[11px] text-[#7C8B9A] mb-1">Custom</div>
                <div className="flex items-center">{renderCellValue(feature.custom)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {features.map((feature) => (
        feature.hasInfo && feature.infoContent && (
          <Modal
            key={feature.name}
            isOpen={activeModal === feature.name}
            onClose={closeModal}
            title={feature.name}
            content={feature.infoContent}
          />
        )
      ))}
    </div>
  );
};

export default FeatureTable;
