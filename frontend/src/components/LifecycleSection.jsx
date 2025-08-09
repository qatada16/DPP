import React from 'react';

const LifecycleSection = ({ lifecycle }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
      <h2 className="text-2xl font-bold text-[#2B2B2B] mb-6 flex items-center">
        <div className="w-2 h-8 bg-[#7DCDDF] rounded-full mr-3"></div>
        Product Instructions
      </h2>
      
      <div className="space-y-6">
        {/* Care Instructions */}
        <div className="bg-gradient-to-r from-[#F5F5F5] to-[#C3EEF4]/30 p-6 rounded-xl border border-[#7DCDDF]/20">
          <h3 className="text-lg font-bold text-[#2B2B2B] mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-[#1AA890]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            Care Instructions
          </h3>
          <ul className="space-y-3">
            {lifecycle.careInstructions.map((instruction, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1AA890] rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-[#2B2B2B] font-medium">{instruction}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Durability and Repair Guide */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-[#A4E1D9]/30 to-[#7DCDDF]/20 p-6 rounded-xl border border-[#1AA890]/20">
            <h3 className="text-lg font-semibold text-[#2B2B2B] mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#1AA890]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Durability
            </h3>
            <p className="text-[#2B2B2B]/80 leading-relaxed">{lifecycle.durability}</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#FECACA]/30 to-[#F87171]/20 p-6 rounded-xl border border-[#F87171]/20">
            <h3 className="text-lg font-semibold text-[#2B2B2B] mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#F87171]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
              </svg>
              Repair Guide
            </h3>
            <p className="text-[#2B2B2B]/80 leading-relaxed">{lifecycle.repairGuide}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifecycleSection;
