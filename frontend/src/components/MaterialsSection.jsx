'use client';

import React, { useState } from 'react';

const MaterialsSection = ({ materials }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!materials || !Array.isArray(materials.composition) || !Array.isArray(materials.details)) {
    return null;
  }

  const highlightColors = ['#1AA890', '#F87171', '#7DCDDF'];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
      <h2 className="text-2xl font-bold text-[#2B2B2B] mb-6 flex items-center">
        <div className="w-2 h-8 bg-[#1AA890] rounded-full mr-3"></div>
        Materials & Composition
      </h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#2B2B2B] mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2 text-[#7DCDDF]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Material Breakdown
        </h3>
        <div className="space-y-4">
          {materials.composition.map((item, index) => (
            <div 
              key={index} 
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center mb-2">
                <div className="w-32 font-semibold text-[#2B2B2B] flex items-center">
                  {item.material}
                </div>
                <div className="flex-1 relative">
                  <div className="h-6 bg-[#F5F5F5] rounded-full overflow-hidden relative mr-16 border border-gray-200">
                    <div 
                      className={`h-full rounded-full transition-all duration-700 ease-out ${hoveredIndex === index ? 'shadow-lg' : ''}`}
                      style={{ 
                        width: `${item.percentage}%`,
                        background: index % 2 === 0 
                          ? 'linear-gradient(90deg, #1AA890, #7DCDDF)' 
                          : 'linear-gradient(90deg, #7DCDDF, #1AA890)'
                      }}
                    >
                      <div className={`absolute inset-0 bg-white opacity-20 ${hoveredIndex === index ? 'animate-pulse' : '' }`}></div>
                    </div>
                  </div>
                  <div 
                    className="absolute -top-1 right-0 text-lg font-bold px-3 py-1 rounded-full bg-[#F5F5F5] border border-gray-200 text-[#1AA890] transition-all duration-300"
                  >
                    {item.percentage}%
                  </div>
                </div>
              </div>
              {hoveredIndex === index && (
                <div className="absolute left-0 right-0 mt-2 p-3 text-sm text-[#2B2B2B] bg-[#C3EEF4] border border-[#7DCDDF] rounded-lg shadow-lg z-10 transition-all duration-200">
                  {item.description || `No description for ${item.material}`}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-[#2B2B2B] mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2 text-[#F87171]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          Material Highlights
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {materials.details.map((detail, index) => (
            <div 
              key={index} 
              className="p-4 rounded-xl transition-all duration-300 bg-[#F5F5F5] hover:bg-[#C3EEF4] hover:scale-[1.02] border border-gray-200 hover:border-[#7DCDDF] group"
            >
              <div className="flex items-start">
                <span 
                  className="text-xl font-bold mr-3 transition-transform duration-300 group-hover:rotate-12" 
                  style={{ color: highlightColors[index % 3] }}
                >
                  {index % 3 === 0 ? '✓' : index % 3 === 1 ? '★' : '●'}
                </span>
                <span className="text-[#2B2B2B] font-medium">{detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaterialsSection;
