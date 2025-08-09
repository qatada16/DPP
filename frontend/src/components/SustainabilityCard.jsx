import React from 'react';

const SustainabilityCard = ({ title, value, description, icon }) => {
  const getCardConfig = (title) => {
    switch (title) {
      case "Water Usage":
        return {
          bgColor: "from-[#7DCDDF] to-[#5BAEBF]",
          iconColor: "#FFFFFF",
          accentColor: "#148773"
        };
      case "Carbon Footprint":
        return {
          bgColor: "from-[#F87171] to-[#DC2626]",
          iconColor: "#FFFFFF",
          accentColor: "#FECACA"
        };
      case "Energy Usage":
        return {
          bgColor: "from-[#1AA890] to-[#148773]",
          iconColor: "#FFFFFF",
          accentColor: "#A4E1D9"
        };
      case "Impact Comparison":
        return {
          bgColor: "from-[#A4E1D9] to-[#7DCDDF]",
          iconColor: "#FFFFFF",
          accentColor: "#148773"
        };
      default:
        return {
          bgColor: "from-[#1AA890] to-[#148773]",
          iconColor: "#FFFFFF",
          accentColor: "#A4E1D9"
        };
    }
  };

  const config = getCardConfig(title);

  return (
    <div className={`bg-gradient-to-br ${config.bgColor} rounded-2xl p-6 px-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:scale-105 relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <div className="w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
        </div>

        <p 
          className="text-3xl font-black mb-3 drop-shadow-md"
          style={{ color: config.iconColor, whiteSpace: 'nowrap' }}
        >
          {value}
        </p>
        
        <p className="text-white/90 text-sm leading-relaxed font-medium">{description}</p>
        
        {/* Progress indicator */}
        <div className="mt-4 w-full bg-white/20 rounded-full h-2">
          <div 
            className="h-2 rounded-full bg-white/60 transition-all duration-1000"
            style={{ width: '75%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityCard;
