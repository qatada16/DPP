// import React, { useState } from 'react';
// import DisposalModal from './DisposalModal';

// const DisposalOptions = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const disposalData = {
//     discard: {
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#FF6B6B">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//         </svg>
//       ),
//       title: "Responsible Disposal",
//       description: "Eco-friendly ways to discard your item",
//       color: "#FF6B6B",
//       options: [
//         {
//           icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#FF6B6B">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//           ),
//           method: "Textile Recycling Bin",
//           details: "Specialized bins that ensure your clothing is properly recycled",
//           action: "Search locations",
//           price: "Free service",
//           distance: "Multiple locations | 1.2km nearest",
//           rating: "4.5 ★ (120+ reviews)",
//           type: "discard"
//         },
//         {
//           icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#FF6B6B">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//             </svg>
//           ),
//           method: "Brand Take-Back",
//           details: "Return to our stores for professional recycling",
//           action: "Find stores",
//           price: "Free service",
//           distance: "3 stores within 5km",
//           rating: "4.8 ★ (85+ reviews)",
//           type: "discard"
//         },
//         {
//           icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#FF6B6B">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//           ),
//           method: "Municipal Collection",
//           details: "Scheduled pickups for textile waste",
//           action: "View schedule",
//           price: "Free service",
//           distance: "Weekly pickup",
//           rating: "City service",
//           type: "discard"
//         }
//       ]
//     },
//     resell: {
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#4ECDC4">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       title: "Sell Your Item",
//       description: "Get the best price from local buyers",
//       color: "#4ECDC4",
//       options: [
//         {
//           icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#4ECDC4">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//             </svg>
//           ),
//           store: "Second Life Fashion",
//           distance: "1.2 miles away",
//           rating: "4.6 ★ (128 reviews)",
//           action: "Get directions",
//           accepts: "Offers $12-18 for your item",
//           price: "$12-18",
//           type: "resell"
//         },
//         {
//           icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#4ECDC4">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
//             </svg>
//           ),
//           store: "Vintage Vogue Exchange",
//           distance: "2.5 miles away",
//           rating: "4.6 ★ (94 reviews)",
//           action: "Get directions",
//           accepts: "Specializes in vintage items",
//           price: "$8-15",
//           type: "resell"
//         },
//         {
//           icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#4ECDC4">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//             </svg>
//           ),
//           store: "GreenThread Buyback",
//           distance: "0.9 miles away",
//           rating: "4.9 ★ (210 reviews)",
//           action: "Check prices",
//           accepts: "Sustainable brands premium",
//           price: "$10-20",
//           type: "resell"
//         }
//       ]
//     },
//     donate: {
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#45B7D1">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//         </svg>
//       ),
//       title: "Donate Options",
//       description: "Give your item a second life",
//       color: "#45B7D1",
//       options: [
//         {
//           icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#45B7D1">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//           ),
//           organization: "Community Clothing Bank",
//           distance: "3.1 miles away",
//           rating: "4.7 ★ (56 reviews)",
//           action: "See hours",
//           accepts: "Accepts all wearable clothing",
//           type: "donate"
//         },
//         {
//           icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#45B7D1">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//             </svg>
//           ),
//           organization: "Refugee Support Center",
//           distance: "4.3 miles away",
//           rating: "4.9 ★ (102 reviews)",
//           action: "Learn more",
//           accepts: "Accepts gently used items",
//           type: "donate"
//         },
//         {
//           icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#45B7D1">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
//             </svg>
//           ),
//           organization: "GreenThread Donation Box",
//           distance: "1.7 miles away",
//           rating: "4.8 ★ (78 reviews)",
//           action: "View map",
//           accepts: "24/7 drop-off available",
//           type: "donate"
//         }
//       ]
//     }
//   };

//   const handleCardClick = (option, type) => {
//     setSelectedOption({ ...option, type, title: disposalData[type].title, description: disposalData[type].description });
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#F87171] to-[#1AA890] rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-[#1AA890] to-[#7DCDDF] rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-[#7DCDDF] to-[#F87171] rounded-full blur-2xl"></div>
//       </div>

//         {/* Title Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center mb-6">
//             <div className="w-3 h-12 bg-gradient-to-b from-[#F87171] to-[#1AA890] rounded-full mr-4"></div>
//             <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#F87171] via-[#1AA890] to-[#7DCDDF] bg-clip-text text-transparent">
//               End-of-Life Options
//             </h1>
//             <div className="w-3 h-12 bg-gradient-to-b from-[#1AA890] to-[#7DCDDF] rounded-full ml-4"></div>
//           </div>
//           <p className="text-[#2B2B2B]/80 text-xl font-medium max-w-3xl mx-auto">
//             Choose the best sustainable way to give your item a second life while supporting the circular economy
//           </p>
//         </div>
      
//       {/* Discard Section */}
//       <div className="mb-16">
//         <div className="flex items-center mb-8">
//           <div className="p-3 rounded-lg bg-[#FF6B6B]/10 mr-4">
//             {disposalData.discard.icon}
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold text-[#FF6B6B]">{disposalData.discard.title}</h2>
//             <p className="text-gray-600">{disposalData.discard.description}</p>
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {disposalData.discard.options.map((option, index) => (
//             <div 
//               key={index} 
//               onClick={() => handleCardClick(option, 'discard')}
//               className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer hover:-translate-y-1"
//             >
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="p-2 rounded-lg bg-[#FF6B6B]/10 mr-3">
//                     {option.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800">{option.method}</h3>
//                 </div>
//                 <p className="text-gray-600 mb-4 line-clamp-2">{option.details}</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-medium text-[#FF6B6B]">{option.price}</span>
//                   <span className="text-xs text-gray-500">{option.distance.split('|')[0].trim()}</span>
//                 </div>
//               </div>
//               <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
//                 <span className="text-sm text-gray-600">{option.rating}</span>
//                 <button className="text-[#FF6B6B] text-sm font-semibold group-hover:underline flex items-center">
//                   {option.action} 
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Resell Section */}
//       <div className="mb-16">
//         <div className="flex items-center mb-8">
//           <div className="p-3 rounded-lg bg-[#4ECDC4]/10 mr-4">
//             {disposalData.resell.icon}
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold text-[#4ECDC4]">{disposalData.resell.title}</h2>
//             <p className="text-gray-600">{disposalData.resell.description}</p>
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {disposalData.resell.options.map((option, index) => (
//             <div 
//               key={index} 
//               onClick={() => handleCardClick(option, 'resell')}
//               className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer hover:-translate-y-1"
//             >
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="p-2 rounded-lg bg-[#4ECDC4]/10 mr-3">
//                     {option.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800">{option.store}</h3>
//                 </div>
//                 <p className="text-gray-600 mb-4 line-clamp-2">{option.accepts}</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-medium text-[#4ECDC4]">{option.price}</span>
//                   <span className="text-xs text-gray-500">{option.distance}</span>
//                 </div>
//               </div>
//               <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
//                 <span className="text-sm text-gray-600">{option.rating}</span>
//                 <button className="text-[#4ECDC4] text-sm font-semibold group-hover:underline flex items-center">
//                   {option.action} 
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Donate Section */}
//       <div className="mb-16">
//         <div className="flex items-center mb-8">
//           <div className="p-3 rounded-lg bg-[#45B7D1]/10 mr-4">
//             {disposalData.donate.icon}
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold text-[#45B7D1]">{disposalData.donate.title}</h2>
//             <p className="text-gray-600">{disposalData.donate.description}</p>
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {disposalData.donate.options.map((option, index) => (
//             <div 
//               key={index} 
//               onClick={() => handleCardClick(option, 'donate')}
//               className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer hover:-translate-y-1"
//             >
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="p-2 rounded-lg bg-[#45B7D1]/10 mr-3">
//                     {option.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800">{option.organization}</h3>
//                 </div>
//                 <p className="text-gray-600 mb-4 line-clamp-2">{option.accepts}</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-medium text-[#45B7D1]">{option.distance}</span>
//                   <span className="text-xs text-gray-500">{option.rating}</span>
//                 </div>
//               </div>
//               <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
//                 <span className="text-sm text-gray-600">Open now</span>
//                 <button className="text-[#45B7D1] text-sm font-semibold group-hover:underline flex items-center">
//                   {option.action} 
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <DisposalModal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//         data={selectedOption} 
//       />
//     </div>
//   );
// };

// export default DisposalOptions;

"use client"

import { useState } from "react"
import DisposalModal from "./DisposalModal"
import { Trash2, DollarSign, Heart } from "lucide-react" // Import Lucide icons

const DisposalOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const disposalData = {
    discard: {
      icon: <Trash2 className="h-8 w-8" />,
      title: "Responsible Disposal",
      description: "Eco-friendly ways to discard your item sustainably",
      color: "#F87171",
      options: [
        {
          icon: <Trash2 className="h-6 w-6" />,
          method: "Textile Recycling Bin",
          details: "Specialized bins that ensure your clothing is properly recycled into new materials",
          action: "Find locations",
          price: "Free service",
          distance: "Multiple locations | 1.2km nearest",
          rating: "4.5 ★ (120+ reviews)",
          type: "discard",
        },
        {
          icon: <Trash2 className="h-6 w-6" />,
          method: "Brand Take-Back Program",
          details: "Return to our stores for professional recycling and receive sustainability credits",
          action: "Find stores",
          price: "Free + 10% discount",
          distance: "3 stores within 5km",
          rating: "4.8 ★ (85+ reviews)",
          type: "discard",
        },
        {
          icon: <Trash2 className="h-6 w-6" />,
          method: "Municipal Collection",
          details: "Scheduled pickups for textile waste with certified processing facilities",
          action: "View schedule",
          price: "Free service",
          distance: "Weekly pickup",
          rating: "City certified",
          type: "discard",
        },
      ],
    },
    resell: {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Sell Your Item",
      description: "Get the best price from verified local buyers",
      color: "#1AA890",
      options: [
        {
          icon: <DollarSign className="h-6 w-6" />,
          store: "Second Life Fashion",
          distance: "1.2 miles away",
          rating: "4.6 ★ (128 reviews)",
          action: "Get directions",
          accepts: "Premium offers for sustainable brands with authentication guarantee",
          price: "$12-18",
          type: "resell",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          store: "Vintage Vogue Exchange",
          distance: "2.5 miles away",
          rating: "4.6 ★ (94 reviews)",
          action: "Get directions",
          accepts: "Specializes in vintage and designer items with expert valuation",
          price: "$8-15",
          type: "resell",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          store: "GreenThread Buyback",
          distance: "0.9 miles away",
          rating: "4.9 ★ (210 reviews)",
          action: "Check prices",
          accepts: "Sustainable brands premium with instant price matching",
          price: "$10-20",
          type: "resell",
        },
      ],
    },
    donate: {
      icon: <Heart className="h-8 w-8" />,
      title: "Donate Options",
      description: "Give your item a second life while helping others",
      color: "#7DCDDF",
      options: [
        {
          icon: <Heart className="h-6 w-6" />,
          organization: "Community Clothing Bank",
          distance: "3.1 miles away",
          rating: "4.7 ★ (56 reviews)",
          action: "See hours",
          accepts: "Accepts all wearable clothing for families in need",
          type: "donate",
        },
        {
          icon: <Heart className="h-6 w-6" />,
          organization: "Refugee Support Center",
          distance: "4.3 miles away",
          rating: "4.9 ★ (102 reviews)",
          action: "Learn more",
          accepts: "Accepts gently used items for refugee families",
          type: "donate",
        },
        {
          icon: <Heart className="h-6 w-6" />,
          organization: "GreenThread Donation Box",
          distance: "1.7 miles away",
          rating: "4.8 ★ (78 reviews)",
          action: "View map",
          accepts: "24/7 drop-off available with tracking system",
          type: "donate",
        },
      ],
    },
  }

  const handleCardClick = (option, type) => {
    setSelectedOption({ ...option, type, title: disposalData[type].title, description: disposalData[type].description })
    setIsModalOpen(true)
  }

  const getCategoryColors = (type) => {
    switch (type) {
      case "discard":
        return {
          main: "#F87171",
          light: "#FECACA",
          gradient: "from-[#F87171]/10 to-[#FECACA]/10",
          border: "border-[#F87171]/20",
        }
      case "resell":
        return {
          main: "#1AA890",
          light: "#A4E1D9",
          gradient: "from-[#1AA890]/10 to-[#A4E1D9]/10",
          border: "border-[#1AA890]/20",
        }
      case "donate":
        return {
          main: "#7DCDDF",
          light: "#C3EEF4",
          gradient: "from-[#7DCDDF]/10 to-[#C3EEF4]/10",
          border: "border-[#7DCDDF]/20",
        }
      default:
        return {
          main: "#2B2B2B",
          light: "#F5F5F5",
          gradient: "from-gray-100/10 to-gray-200/10",
          border: "border-gray-300/20",
        }
    }
  }

  return (
    <div className="relative py-8 px-4 bg-gradient-to-br from-[#F5F5F5] via-white to-[#C3EEF4]/20 min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#F87171] to-[#1AA890] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-[#1AA890] to-[#7DCDDF] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-[#7DCDDF] to-[#F87171] rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-6">
            <div className="w-3 h-12 bg-gradient-to-b from-[#F87171] to-[#1AA890] rounded-full mr-4"></div>
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#F87171] via-[#1AA890] to-[#7DCDDF] bg-clip-text text-transparent">
              End-of-Life Options
            </h1>
            <div className="w-3 h-12 bg-gradient-to-b from-[#1AA890] to-[#7DCDDF] rounded-full ml-4"></div>
          </div>
          <p className="text-[#2B2B2B]/80 text-xl font-medium max-w-3xl mx-auto">
            Choose the best sustainable way to give your item a second life while supporting the circular economy
          </p>
        </div>

        {/* Categories Container */}
        <div className="space-y-10">
          {Object.entries(disposalData).map(([key, category]) => {
            const colors = getCategoryColors(key)
            return (
              <div
                key={key}
                className={`bg-white rounded-3xl md:p-4 shadow-xl border-2 ${colors.border} hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden`}
              >
                {/* Category Stats at Top */}
                <div
                  className={`flex items-center justify-between mb-4 md:p-6 rounded-2xl bg-gradient-to-r ${colors.gradient} border ${colors.border}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-white/30 backdrop-blur-sm" style={{ color: colors.main }}>
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-[#2B2B2B]">{category.title}</h2>
                      <p className="text-[#2B2B2B]/70 font-medium">{category.description}</p>
                    </div>
                  </div>
                  <div className="text-center mr-2 md:mr-0">
                    <p className="text-4xl font-black" style={{ color: colors.main }}>
                      {category.options.length}
                    </p>
                    <p className="hidden md:block text-[#2B2B2B]/70 font-medium">Options Available</p>
                  </div>
                </div>

                {/* Gigs/Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.options.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => handleCardClick(option, key)}
                      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 overflow-hidden cursor-pointer hover:-translate-y-2 hover:scale-105"
                      style={{ borderColor: `${colors.main}50` }}
                    >
                      <div className="p-2 md:p-8">
                        <div className="flex items-center mb-6">
                          <div
                            className="p-3 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 mr-4 border border-white/30"
                            style={{ color: colors.main }}
                          >
                            {option.icon}
                          </div>
                          <h3 className="text-xl font-black text-[#2B2B2B] group-hover:text-opacity-80 transition-colors">
                            {option.method || option.store || option.organization}
                          </h3>
                        </div>
                        <p className="text-[#2B2B2B]/70 mb-6 leading-relaxed">{option.details || option.accepts}</p>
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className="text-lg font-bold px-3 py-1 rounded-full"
                            style={{ color: colors.main, backgroundColor: `${colors.main}10` }}
                          >
                            {option.price || option.distance}
                          </span>
                          <span className="text-sm text-[#2B2B2B]/60 font-medium">{option.rating}</span>
                        </div>
                      </div>
                      <div
                        className="px-8 py-4 bg-gradient-to-r from-[#F5F5F5] to-white/10 border-t border-gray-100 flex justify-between items-center"
                        style={{ borderColor: `${colors.main}10` }}
                      >
                        <span className="text-sm text-[#2B2B2B]/70 font-medium">
                          {key === "donate" ? "Open now" : option.distance?.split("|")[0]?.trim()}
                        </span>
                        <button
                          className={`text-sm font-bold group-hover:underline flex items-center hover:text-opacity-80 transition-colors`}
                          style={{ color: colors.main }}
                        >
                          {option.action}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <DisposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={selectedOption} />
    </div>
  )
}

export default DisposalOptions
