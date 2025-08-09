// components/JourneyModal.jsx
import React from 'react';

const JourneyModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  const transportIcons = {
    truck: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#1AA890">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    ship: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ED9BA0">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4m16 0a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2m16 0V8a2 2 0 00-2-2h-4.586a2 2 0 01-1.414-.586l-1.086-1.086A2 2 0 0010.586 3H8a2 2 0 00-2 2v1m16 0h-8" />
      </svg>
    ),
    plane: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#60A5FA">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pl-1 md:p-4 backdrop-blur-sm">
      <div 
        className="relative w-full md:w-1/2 max-w-4xl rounded-3xl overflow-hidden shadow-2xl">
        {/* Modal Content */}
        <div className=" bg-red-400 border-3 border-[#45B7D1] relative z-55 px-8 pb-1 pt-6 md:py-6 pl-2 md:p-8 text-white">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-1 right-1 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
              <div className="flex items-center space-x-4">
                <span className="flex items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {data.location}
                </span>
                <span className="flex items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {data.date}
                </span>
              </div>
            </div>
            <div className={`px-2 md:px-4 py-2 rounded-2xl md:rounded-full text-sm font-bold ${
                data.status === "current" 
                    ? "bg-[#1AA890] text-white" 
                    : "bg-green-100 text-green-800"
                }`}>
                <span className="hidden sm:inline">
                    {data.status === "current" ? "🔄 In Progress" : "✅ Completed"}
                </span>
                <span className="sm:hidden">
                    {data.status === "current" ? "In Progress" : "Completed"}
                </span>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
            
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-2 md:mb-4">Process Details</h3>
              <p className="text-lg leading-relaxed">{data.description}</p>
            </div>

            <div className="space-y-2 md:space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-2 px-4 md:p-4 rounded-xl">
                <h4 className="font-semibold mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Step {data.id}
                </h4>
                <div className="flex items-center justify-between">
                  <span>Progress:</span>
                  <span className="font-bold">{data.id} of 5</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <h4 className="font-semibold mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  Transportation
                </h4>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{transportIcons[data.transport]}</span>
                  <span className="capitalize">{data.transport}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Image Box */}
          <div className="mb-2 mt-2 md:mb-0 flex justify-center items-center">
            <div className="relative w-120 h-60 rounded-2xl shadow-2xl overflow-hidden group">
              <img
                src={data.backgroundImage}
                alt={data.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-2xl"
              />
              {/* Overlay: darker at bottom */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50 transition-all duration-300 group-hover:opacity-80"></div>
            </div>
          </div>
          {/* Footer */}
          <div className="mt-2 p-1 md:pt-6 border-t border-white/20 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      </div>
    </div>
  );
};

export default JourneyModal;