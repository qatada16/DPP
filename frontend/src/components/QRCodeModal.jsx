import React from 'react';

const QRCodeModal = ({ qrCodeUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-[#2B2B2B]">Product QR Code</h3>
          <button 
            onClick={onClose}
            className="text-[#2B2B2B] hover:text-[#F87171] transition-colors p-2 hover:bg-[#F5F5F5] rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        <div className="text-center">
          <div className="bg-[#F5F5F5] p-6 rounded-xl mb-4 border border-gray-200">
            <img 
              src={qrCodeUrl || "/placeholder.svg?height=200&width=200&query=QR+Code"} 
              alt="QR Code" 
              className="w-48 h-48 mx-auto"
            />
          </div>
          <p className="text-[#2B2B2B]/80 text-sm">
            Scan this QR code to access the digital passport on your mobile device
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;
