import React from 'react';

const DisposalModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const getColorConfig = (type) => {
    switch(type) {
      case 'discard': 
        return {
          gradient: 'from-[#F87171] to-[#DC2626]',
          bg: 'bg-[#F87171]/10',
          border: 'border-[#F87171]/30',
          text: 'text-[#F87171]',
          accent: '#F87171'
        };
      case 'resell': 
        return {
          gradient: 'from-[#1AA890] to-[#148773]',
          bg: 'bg-[#1AA890]/10',
          border: 'border-[#1AA890]/30',
          text: 'text-[#1AA890]',
          accent: '#1AA890'
        };
      case 'donate': 
        return {
          gradient: 'from-[#7DCDDF] to-[#5BAEBF]',
          bg: 'bg-[#7DCDDF]/10',
          border: 'border-[#7DCDDF]/30',
          text: 'text-[#7DCDDF]',
          accent: '#7DCDDF'
        };
      default: 
        return {
          gradient: 'from-[#2B2B2B] to-[#1AA890]',
          bg: 'bg-[#2B2B2B]/10',
          border: 'border-[#2B2B2B]/30',
          text: 'text-[#2B2B2B]',
          accent: '#2B2B2B'
        };
    }
  };

  const colorConfig = getColorConfig(data.type);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-lg bg-black/50">
      <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border-2 border-white/30">
        {/* Background with gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colorConfig.gradient} opacity-95`}></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>

        {/* Modal Content */}
        <div className="relative z-10 p-8 text-white">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="flex items-start mb-8">
            <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm mr-6 border border-white/30">
              <div className="text-4xl" style={{ color: colorConfig.accent }}>
                {data.type === 'discard' && '♻️'}
                {data.type === 'resell' && '💰'}
                {data.type === 'donate' && '❤️'}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-2 h-8 bg-white rounded-full mr-3"></div>
                <h2 className="text-3xl font-black text-white drop-shadow-lg">{data.title}</h2>
              </div>
              <p className="text-white/80 text-lg font-medium">{data.description}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 mb-6">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-2 h-6 bg-white rounded-full mr-3"></div>
              {data.method || data.store || data.organization}
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              {data.details || data.accepts}
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
                <p className="text-white/70 text-sm font-medium mb-1">Distance</p>
                <p className="text-white font-bold text-lg">{data.distance?.split('|')[0]?.trim() || data.distance}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
                <p className="text-white/70 text-sm font-medium mb-1">Rating</p>
                <p className="text-white font-bold text-lg">{data.rating}</p>
              </div>
            </div>

            {data.price && (
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
                <p className="text-white/70 text-sm font-medium mb-1">
                  {data.type === 'resell' ? 'Estimated Value' : 'Service Cost'}
                </p>
                <p className="text-white font-black text-2xl">{data.price}</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm border border-white/30 hover:scale-105"
            >
              Close Details
            </button>
            <button 
              className="px-8 py-3 bg-white text-[#2B2B2B] hover:bg-[#F5F5F5] rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white/30"
              style={{ color: colorConfig.accent }}
            >
              {data.action || 'View Details'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisposalModal;
