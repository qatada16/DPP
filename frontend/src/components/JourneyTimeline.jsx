import React, { useState } from 'react';
import JourneyModal from './JourneyModal';

const JourneyTimeline = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (step) => {
    setSelectedStep(step);
    setIsModalOpen(true);
  };
  const roadmapSteps = [
    {
      id: 1,
      title: "Cotton Harvesting",
      location: "Multan, Pakistan",
      date: "December 2022",
      description: "Organic cotton picked from sustainable farms",
      status: "completed",
      image: "https://cdn-icons-png.flaticon.com/512/3606/3606515.png",
      backgroundImage: "https://st2.depositphotos.com/1912239/5868/i/450/depositphotos_58682819-stock-photo-cotton-fields-at-sunset.jpg",
      transport: "truck"
    },
    {
      id: 2,
      title: "Spinning",
      location: "Lahore, Pakistan",
      date: "February 2023",
      description: "Cotton spun into yarn using eco-friendly processes",
      status: "completed",
      image: "https://cdn-icons-png.flaticon.com/512/190/190626.png",
      backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOv5_xGpKazY0_n7yG1P_0M8NpGCSJYEFZfw&s",
      transport: "truck"
    },
    {
      id: 3,
      title: "Fabric Dyeing",
      location: "Faisalabad, Pakistan",
      date: "March 2023",
      description: "Yarn dyed with natural colors and woven into fabric",
      status: "completed",
      image: "https://cdn-icons-png.flaticon.com/512/8774/8774102.png",
      backgroundImage: "https://img.freepik.com/premium-photo/textile-dyeing-factory-worker-preparing-fabrics-production_124507-51384.jpg",
      transport: "truck"
    },
    {
      id: 4,
      title: "Garment Assembly",
      location: "Karachi, Pakistan",
      date: "April 2023",
      description: "Fabric cut into precise patterns for garment construction and sewn together",
      status: "completed",
      image: "https://cdn-icons-png.flaticon.com/512/3176/3176290.png",
      backgroundImage: "https://media.istockphoto.com/id/1311325107/photo/male-fashion-designer-working-in-workshop.jpg?s=612x612&w=0&k=20&c=S-jGJC7jaFACUfiWhwEsMfgVkq2SFL2lSitctalG6bs=",
      transport: "plane"
    },
    {
      id: 5,
      title: "Outlet",
      location: "Coppenhagen, Denmark",
      date: "May 2023",
      description: "Garments shipped to retail outlet for sale",
      status: "current",
      image: "https://cdn-icons-png.flaticon.com/512/3163/3163270.png",
      backgroundImage: "https://i0.wp.com/fashion2apparel.com/wp-content/uploads/2024/09/garment-manufacturing-process.jpg?fit=598%2C400&quality=100&ssl=1",
      transport: "ship"
    },
  ];

  const transportIcons = {
    truck: "🚚",
    ship: "🚢",
    plane: "✈️"
  };

  return (
    <div className="relative py-2 px-2 md:px-2 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#1AA890] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#ED9BA0] rounded-full blur-3xl"></div>
      </div>

      {/* Title */}
      <div className="text-center mb-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1AA890] to-[#ED9BA0] bg-clip-text text-transparent mb-4">
          Product Journey
        </h1>
        <p className="text-gray-600 text-lg">From raw materials to finished product</p>
      </div>

      {/* Roadmap Container */}
      <div className="relative max-w-7xl mx-auto px-4 rounded-4xl overflow-hidden">
        {/* Ladybug background */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50 opacity-30 z-0"
          style={{
            backgroundImage: "url('https://png.pngtree.com/png-clipart/20240724/original/pngtree-top-view-flat-lay-ladybug-seamless-pattern-on-a-bright-yellow-png-image_15623646.png')"
          }}
        ></div>
        {/* Desktop Connection Path with Transport Icons */}
        <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
          <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none">
            <path
              d="M 50 100 
                 C 200 50, 250 50, 350 100
                 C 450 150, 500 150, 600 150
                 C 700 150, 750 200, 700 300
                 C 650 400, 550 350, 500 350
                 C 450 350, 350 300, 300 350
                 C 250 400, 150 450, 150 500"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              strokeDasharray="10,5"
              fill="none"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1AA890" />
                <stop offset="50%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#ED9BA0" />
              </linearGradient>
            </defs>
            
            <text x="295" y="80" className="text-4xl" textAnchor="middle" fill="#1AA890">
              {transportIcons.truck}
            </text>
            <text x="620" y="150" className="text-4xl" textAnchor="middle" fill="#1AA890">
              {transportIcons.truck}
            </text>
            <text x="650" y="360" className="text-4xl" textAnchor="middle" fill="#60A5FA">
              {transportIcons.plane}
            </text>
            <text x="290" y="360" className="text-4xl" textAnchor="middle" fill="#ED9BA0">
              {transportIcons.ship}
            </text>
          </svg>
        </div>

        {/* Mobile Connection Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#1AA890] via-[#60A5FA] to-[#ED9BA0] h-full z-0 md:hidden"></div>

        {/* Roadmap Steps */}
        <div className="relative z-10 py-8 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-12 gap-2 overflow-y-auto md:overflow-x-auto scrollbar-hide md:h-auto h-[70vh]">
          {roadmapSteps.map((step, index) => {
            const positions = [
              "md:col-start-1 md:row-start-1",
              "md:col-start-5 md:row-start-1 md:mt-12",
              "md:col-start-9 md:row-start-1 md:mt-8",
              "md:col-start-5 md:row-start-2 md:-mt-8",
              "md:col-start-1 md:row-start-2 md:mt-4",
            ]

            return (
              <div 
                key={step.id} 
                onClick={() => handleCardClick(step)} // Add this line
                className={`relative ${positions[index] || ""} ${
                  index % 2 === 0 ? 'md:mr-auto mr-0 self-start' : 'md:ml-auto ml-0 self-end'
                } cursor-pointer`} // Add cursor-pointer class
              >
                {/* Mobile Connection Dot */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#1AA890] z-10 md:hidden"></div>

                {/* Step Card */}
                <div className="relative group w-[280px] md:w-full">
                  <div
                    className={`mt-8 p-6 pb-0 pl-0 pr-0 rounded-2xl shadow-xl border-2 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 ${
                      step.status === "current"
                        ? "border-[#1AA890]"
                        : "border-[#ED9BA0]"
                    } relative overflow-visible backdrop-blur-sm h-full md:min-w-[300px] max-w-[300px] min-h-[280px] flex flex-col justify-between`}
                  >
                    {/* Background Image with reduced brightness */}
                    <div className="absolute inset-0 bg-cover bg-center brightness-80 rounded-2xl z-0"
                      style={{ backgroundImage: `url(${step.backgroundImage})` }}
                    ></div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/5 z-1 rounded-2xl backdrop-blur-[1px] transition-all duration-300 hover:backdrop-blur-[4px]"></div>
                    
                    {/* Content overlay with semi-transparent background */}
                    <div className={'relative z-10 p-2 rounded-lg'}>
                      {/* Step Number */}
                      <div className="absolute left-1/2 -translate-x-1/3 -top-10 w-16 h-8 rounded-full bg-[#4ECDC4] text-white text-md font-extrabold flex items-center justify-center shadow-lg z-20 border-2 border-[#63c29f]">
                        {step.id}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-extrabold text-white mb-3 transition-all duration-300 group-hover:text-[#86dcce]">
                        {step.title}
                      </h3>

                      {/* Location and Date */}
                      <div className="flex items-center text-sm text-gray-600 mb-3 space-x-2">
                        {/* <span className="text-white text-2xl">📍</span> */}
                        <span className="font-semibold text-white">{step.location}</span>
                        <span className="font-bold text-white text-2xl">•</span>
                        <span className="text-white font-semibold">{step.date}</span>
                      </div>

                      {/* Description */}
                      <p
                        className={`text-white font-bold text-sm mt-2 leading-relaxed mb-2 absolute right-0 top-18 w-full bg-black/30 rounded-xl px-2 py-2 shadow-lg
                          transition-all duration-500 ease-in-out
                          opacity-0 translate-x-8
                          group-hover:opacity-100 group-hover:translate-x-0`}
                      >
                        {step.description}
                      </p>

                      
                    </div>
                    {/* Status Badge */}
                    <div className="absolute bottom-3 right-2 flex justify-end z-50">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          step.status === "current"
                            ? "bg-[#1AA890] text-white shadow-lg"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {step.status === "current" ? "🔄 In Progress" : "✅ Completed"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <JourneyModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            data={selectedStep} 
          />
        </div>

        {/* Progress Indicator */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <div className="flex space-x-1">
              {roadmapSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    step.status === "completed"
                      ? "bg-green-500"
                      : step.status === "current"
                        ? "bg-[#1AA890] animate-pulse"
                        : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700 ml-3">
              {roadmapSteps.filter((s) => s.status === "completed").length} of {roadmapSteps.length} completed
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JourneyTimeline;