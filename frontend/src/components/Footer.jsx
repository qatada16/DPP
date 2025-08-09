import React from 'react';

const Footer = ({ onShowQRCode }) => {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-800 text-white py-6 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm opacity-90">
              © 2025 Powered by Fruit of Sustainability (FOS).
            </p>
            <p className="text-xs opacity-70 mt-1">
              Committed to sustainable and transparent fashion.
            </p>
          </div>
          
          <button 
            onClick={onShowQRCode}
            className="bg-white text-green-700 hover:bg-green-50 px-4 py-2 rounded-full font-medium flex items-center shadow-md transition-colors"
          >
            <span className="mr-2">🔗</span>
            View QR Code
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;