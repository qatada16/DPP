import React from 'react';

const ProductImage = ({ imageUrl, name }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-white">
      <img 
        src={imageUrl || "/placeholder.svg"} 
        alt={name} 
        style={{height: '100%'}}
        className="w-full h-full md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/60 via-transparent to-transparent flex items-end p-6">
        <h2 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">{name}</h2>
      </div>
      <div className="absolute top-4 right-4 bg-[#1AA890] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
        Sustainable
      </div>
    </div>
  );
};

export default ProductImage;
