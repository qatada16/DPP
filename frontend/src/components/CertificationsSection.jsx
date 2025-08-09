import React from 'react';

const CertificationsSection = ({ certifications }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-102">
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-2" style={{ color: "#4ECDC4" }}>🏆</span> 
        Certifications & Standards
      </h2>
      
      <div className="grid md:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-[#45B7D1] transition-colors"
          >
            <div className="h-16 flex items-center justify-center mb-3">
              {cert.logo ? (
                <img src={cert.logo} alt={cert.name} className="h-full object-contain" />
              ) : (
                <span className="text-4xl" style={{ color: "#FF6B6B" }}>📜</span>
              )}
            </div>
            <h3 
              className="font-semibold text-center mb-1"
              style={{ color: "#45B7D1" }}
            >
              {cert.name}
            </h3>
            <p className="text-gray-600 text-sm text-center">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;