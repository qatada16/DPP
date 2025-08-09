// import React from 'react';

// const Header = ({ activeTab, setActiveTab }) => {
//   const tabs = [
//     { id: "overview", label: "Overview" },
//     { id: "journey", label: "Product Journey" },
//     { id: "disposal", label: "End of Life" },
//     { id: "due-diligence", label: "Due Diligence" },
//   ]

//   return (
//     <header className="bg-[#45B7D1] text-[#1f2937] shadow-2xl relative top-0 z-50 overflow-hidden">
//       {/* Subtle decorative elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 -translate-y-48"></div>
//         <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1AA890] rounded-full -translate-x-40 translate-y-40"></div>
//       </div>

//       <div className="relative bg-white/30 backdrop-blur-md border-b-2 border-[#1AA890]/30">
//         <div className="container mx-auto md:px-2 md:pl-0">
//           <div className="flex flex-col md:flex-row justify-start items-center py-4">
//             {/* Logo + Title with enhanced styling */}
//             <div className="flex items-center space-x-2 group">
//               <div className="relative">
//                 {/* Logo background with subtle shadow */}
//                 <div className="absolute inset-0 bg-white/50 rounded-3xl shadow-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
//                 <div className="relative bg-white/80 p-3 rounded-3xl shadow-xl border-2 border-white/60 hidden sm:block">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/512/3875/3875432.png"
//                     alt="Logo"
//                     className="w-16 md:w-20 h-auto object-contain transform group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-3">
//                 <h1 className="text-3xl md:text-4xl text-center font-black text-[#1f2937] tracking-tight drop-shadow-lg">
//                   DPP
//                 </h1>
//                 <div className="flex items-center space-x-1">
//                   <div className="w-6 h-1 bg-[#1AA890] rounded-full"></div>
//                   <p className="text-lg md:text-xl text-center text-[#1f2937]/90 font-semibold tracking-wide">
//                     Digital Product Passport
//                   </p>
//                   <div className="w-6 h-1 bg-[#1AA890] rounded-full"></div>
//                 </div>
//               </div>
//             </div>
//             {/* Navigation Tabs with glass effect - keeping functionality unchanged */}
//             <nav className="flex justify-center overflow-x-auto scrollbar-hide py-2">
//               <div className="flex space-x-1 md:space-x-2 bg-white/40 backdrop-blur-md rounded-2xl p-1 md:p-3 py-1 md:py-3 border-2 border-white/50 shadow-2xl">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`px-2 md:px-6 py-2 font-normal md:font-medium text-sm md:text-base whitespace-nowrap rounded-xl transition-all duration-200 transform hover:scale-105 ${
//                       activeTab === tab.id
//                         ? "bg-[#1AA890] text-white shadow-lg font-semibold border-2 border-white/30"
//                         : "text-[#1f2937]/80 hover:bg-[#1AA890]/20 hover:text-[#1f2937] hover:shadow-md"
//                     }`}
//                   >
//                     {tab.label}
//                   </button>
//                 ))}
//               </div>
//             </nav>
//             {/* Enhanced Badge */}
//             <div className="flex items-center space-x-4 mt-1 md:mt-0">
//               <div className="relative group cursor-pointer">
//                 {/* Glow effect */}
//                 <div className="absolute inset-0 bg-[#1AA890] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
//                 <div className="relative bg-[#1AA890] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl transform group-hover:scale-110 transition-all duration-300 flex items-center space-x-3 border-4 border-white/30">
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                     <path
//                       fillRule="evenodd"
//                       d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span>Eco-Friendly</span>
//                   <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

          
//         </div>
//       </div>

//       {/* Bottom accent line */}
//       <div className="h-1 bg-[#1AA890] shadow-lg"></div>
//     </header>
//   )
// }

// export default Header



"use client"

const Header = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "journey", label: "Product Journey" },
    { id: "disposal", label: "End of Life" },
    { id: "due-diligence", label: "Due Diligence" },
  ]

  return (
    <header className="bg-gradient-to-r from-[#1AA890] to-[#148773] text-white shadow-2xl relative top-0 z-50 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7DCDDF] rounded-full -translate-x-40 translate-y-40"></div>
      </div>

      <div className="relative bg-white/10 backdrop-blur-md border-b-2 border-white/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            {/* Logo + Title with enhanced styling */}
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                {/* Logo background with subtle shadow */}
                <div className="absolute inset-0 bg-white/20 rounded-3xl shadow-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                  <div className="relative bg-white/80 rounded-3xl shadow-xl border-2 border-white/60 sm:block">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtblqx2p4Lfhknw8CKoUyD_BMaGsawFFkZTA&s"
                      alt="Logo"
                      className="rounded-2xl w-16 md:w-20 h-auto object-contain transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl ml-2 font-black text-white tracking-tight drop-shadow-lg">
                  DPP
                </h1>
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-1 bg-[#7DCDDF] rounded-full"></div>
                  <p className="text-lg md:text-xl text-center text-white/90 font-semibold tracking-wide">
                    Digital Product Passport
                  </p>
                  <div className="w-6 h-1 bg-[#7DCDDF] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs with glass effect - Centered on larger screens */}
            <nav className="flex-grow flex justify-center overflow-x-auto scrollbar-hide py-2 mt-4 md:mt-0">
              <div className="flex space-x-1 md:space-x-2 bg-white/20 backdrop-blur-md rounded-2xl p-1 md:p-3 py-1 md:py-3 border-2 border-white/30 shadow-2xl">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-2 md:px-6 py-2 font-normal md:font-medium text-sm md:text-base whitespace-nowrap rounded-xl transition-all duration-200 transform hover:scale-105 ${
                      activeTab === tab.id
                        ? "bg-white text-[#1AA890] shadow-lg font-semibold border-2 border-white/30"
                        : "text-white/90 hover:bg-white/20 hover:text-white hover:shadow-md"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Enhanced Badge */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="relative group cursor-pointer">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#7DCDDF] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white text-[#1AA890] px-8 py-4 rounded-full font-bold text-lg shadow-2xl transform group-hover:scale-110 transition-all duration-300 flex items-center space-x-3 border-4 border-[#7DCDDF]/30">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Eco-Friendly</span>
                  <div className="w-3 h-3 bg-[#1AA890] rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-[#7DCDDF] to-[#1AA890] shadow-lg"></div>
    </header>
  )
}

export default Header
