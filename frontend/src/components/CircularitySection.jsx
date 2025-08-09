import React from 'react';

const CircularitySection = ({ circularity }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
      <h2 className="text-2xl font-bold text-[#2B2B2B] mb-6 flex items-center">
        <div className="w-2 h-8 bg-[#F87171] rounded-full mr-3"></div>
        Circularity & End-of-Life
      </h2>
      
      <div className="space-y-6">
        {/* Top Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#A4E1D9]/30 to-[#7DCDDF]/20 p-6 rounded-xl border border-[#1AA890]/20">
            <h3 className="text-lg font-semibold text-[#2B2B2B] mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#1AA890]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
              </svg>
              Recyclability
            </h3>
            <p className="text-[#2B2B2B]/80 leading-relaxed">{circularity.recyclability}</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#C3EEF4]/30 to-[#7DCDDF]/20 p-6 rounded-xl border border-[#7DCDDF]/20">
            <h3 className="text-lg font-semibold text-[#2B2B2B] mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#7DCDDF]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd"/>
              </svg>
              Take-Back Program
            </h3>
            <p className="text-[#2B2B2B]/80 leading-relaxed">{circularity.takeBackProgram}</p>
          </div>
        </div>
        
        {/* Upcycling Ideas */}
        <div className="bg-gradient-to-br from-[#FECACA]/30 to-[#F87171]/20 p-6 rounded-xl border border-[#F87171]/20">
          <h3 className="text-lg font-semibold text-[#2B2B2B] mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-[#F87171]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Upcycling Ideas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {circularity.upcyclingIdeas.map((idea, index) => (
              <div key={index} className="flex items-start p-3 bg-white/50 rounded-lg border border-[#F87171]/10">
                <div className="flex-shrink-0 w-6 h-6 bg-[#F87171] rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-[#2B2B2B] font-medium">{idea}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularitySection;
