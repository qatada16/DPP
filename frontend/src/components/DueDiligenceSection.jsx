import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Hourglass, Users, DollarSign, Shield, Leaf, Droplet, Recycle, Heart, Handshake, Search } from 'lucide-react';

const DueDiligenceSection = () => {
  const esgData = {
    labor: [
      { 
        title: "No Child Labor", 
        icon: <Users className="w-8 h-8" />,
        status: "verified",
        description: "Verified through rigorous supply chain audits and third-party inspections.",
        img: "https://study.com/cimages/videopreview/videopreview-full/o6aurft9sk.jpg"
      },
      { 
        title: "Fair Wages", 
        icon: <DollarSign className="w-8 h-8" />,
        status: "non-compliant",
        description: "Ongoing efforts to address wage inconsistencies and ensure living wages across all operations.",
        img: "https://enirefeurope.b-cdn.net/wp-content/uploads/sites/3/2024/06/minwage-1024x538.png"
      },
      { 
        title: "Safe Conditions", 
        icon: <Shield className="w-8 h-8" />,
        status: "verified",
        description: "Workplace safety certifications maintained with regular training and risk assessments.",
        img: "https://www.firstsafetysigns.co.uk/cdn/shop/products/FE0004_Fire_Exit_Sign_-_Running_Man_Arrow_Right_500x_crop_center.jpg?v=1559116144"
      }
    ],
    environment: [
      { 
        title: "Low Carbon Footprint", 
        icon: <Leaf className="w-8 h-8" />,
        status: "verified",
        description: "40% lower than industry average, achieved through renewable energy and efficient logistics.",
        img: "https://cdn.prod.website-files.com/66229f886492496a05d4258b/668f5bc824a3987f8ebf50b2_Frame%20207.jpg"
      },
      { 
        title: "Water Conservation", 
        icon: <Droplet className="w-8 h-8" />,
        status: "in-progress",
        description: "Implementation of closed-loop water systems in pilot phase, targeting 80% reduction.",
        img: "https://www.gyanipandit.com/en/wp-content/uploads/2021/05/conservation-of-water-2cdf1593.jpg"
      },
      { 
        title: "Zero Waste", 
        icon: <Recycle className="w-8 h-8" />,
        status: "non-compliant",
        description: "Waste audit pending, with new initiatives to reduce production waste and promote recycling.",
        img: "https://media.istockphoto.com/id/1150887050/photo/zero-waste-paper-text-and-eco-bags-glass-jars.jpg?s=612x612&w=0&k=20&c=Hkyv2wuwRKw21LlHlyfrjgVrzRCckcGFSX1NFcbr5ok="
      }
    ],
    ethics: [
      { 
        title: "Animal Cruelty Free", 
        icon: <Heart className="w-8 h-8" />,
        status: "verified",
        description: "PETA-certified vegan materials and ethical sourcing policies strictly enforced.",
        img: "https://assets.unileversolutions.com/v1/133175731.png"
      },
      { 
        title: "Conflict-Free", 
        icon: <Handshake className="w-8 h-8" />,
        status: "verified",
        description: "Guaranteed no materials from conflict zones, verified by independent third parties.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTfahat4WVAtUIWZ29ikXO_1xy6hPwx7kmng&s"
      },
      { 
        title: "Transparent Supply Chain", 
        icon: <Search className="w-8 h-8" />,
        status: "in-progress",
        description: "Blockchain tracking system roll-out mid-stage for full traceability from farm to factory.",
        img: "https://qodenext.com/wp-content/uploads/2023/05/Supply-chain-transparency-compressed.jpg"
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Flatten all ESG items into a single array
  const allESGItems = Object.values(esgData).flat();

  const getStatusColors = (status) => {
    switch (status) {
      case 'verified':
        return {
          bgGradient: 'from-[#1AA890]/20 to-[#A4E1D9]/20',
          border: 'border-[#1AA890]/40',
          text: 'text-[#1AA890]',
          badgeBg: 'bg-[#1AA890]',
          badgeText: 'text-white',
          iconColor: '#1AA890',
          accent: '#1AA890', // Added accent color for overlay
          statusIcon: <CheckCircle className="w-4 h-4 mr-1" />
        };
      case 'in-progress':
        return {
          bgGradient: 'from-[#7DCDDF]/20 to-[#C3EEF4]/20',
          border: 'border-[#7DCDDF]/40',
          text: 'text-[#7DCDDF]',
          badgeBg: 'bg-[#7DCDDF]',
          badgeText: 'text-white',
          iconColor: '#7DCDDF',
          accent: '#7DCDDF', // Added accent color for overlay
          statusIcon: <Hourglass className="w-4 h-4 mr-1" />
        };
      case 'non-compliant':
        return {
          bgGradient: 'from-[#F87171]/20 to-[#FECACA]/20',
          border: 'border-[#F87171]/40',
          text: 'text-[#F87171]',
          badgeBg: 'bg-[#F87171]',
          badgeText: 'text-white',
          iconColor: '#F87171',
          accent: '#F87171', // Added accent color for overlay
          statusIcon: <XCircle className="w-4 h-4 mr-1" />
        };
      default:
        return {
          bgGradient: 'from-gray-100/20 to-gray-200/20',
          border: 'border-gray-300/40',
          text: 'text-gray-700',
          badgeBg: 'bg-gray-500',
          badgeText: 'text-white',
          iconColor: 'gray',
          accent: 'gray', // Added accent color for overlay
          statusIcon: null
        };
    }
  };

  return (
    <div className="relative py-8 px-4 bg-gradient-to-br from-[#F5F5F5] via-white to-[#C3EEF4]/20 min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#1AA890] to-[#7DCDDF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-[#F87171] to-[#1AA890] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-[#7DCDDF] to-[#A4E1D9] rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-6">
            <div className="w-3 h-12 bg-gradient-to-b from-[#1AA890] to-[#7DCDDF] rounded-full mr-4"></div>
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#1AA890] via-[#7DCDDF] to-[#148773] bg-clip-text text-transparent">
              ESG Due Diligence
            </h1>
            <div className="w-3 h-12 bg-gradient-to-b from-[#7DCDDF] to-[#1AA890] rounded-full ml-4"></div>
          </div>
          <p className="text-[#2B2B2B]/80 text-xl font-medium max-w-3xl mx-auto">
            Our unwavering commitment to responsible practices and transparent operations
          </p>
        </div>

        {/* ESG Items Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allESGItems.map((item, index) => {
            const colors = getStatusColors(item.status);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative bg-white rounded-3xl shadow-lg border-2 ${colors.border} transition-all duration-500 hover:shadow-2xl overflow-hidden group`}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>

                {/* NEW: Subtle color overlay (below the black gradient for text) */}
                <div className="absolute inset-0 z-5" style={{ backgroundColor: `${colors.accent}20` }}></div>

                {/* Black gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20 z-10 rounded-3xl backdrop-blur-[2px] group-hover:backdrop-blur-[4px]"></div>
                
                {/* Content */}
                <div className="relative z-20 p-8 px-4 flex flex-col justify-between h-full">
                 <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl ${colors.bgGradient} mr-4 bg-black/40 border-2 ${colors.border}`} style={{ color: colors.iconColor }}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-black text-white drop-shadow-lg">{item.title}</h3>
                  </div>
                  <p className="text-white/90 font-semibold leading-relaxed mb-6 rounded-xl p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {item.description}
                  </p>
                  <div className="flex justify-end">
                    <span className={`px-5 py-2 rounded-full text-sm font-bold shadow-md ${colors.badgeBg} ${colors.badgeText} border-2 border-white/30 flex items-center`}>
                      {colors.statusIcon}
                      {item.status === 'verified' ? 'Verified' :
                      item.status === 'in-progress' ? 'In Progress' :
                      'Non-Compliant'}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Progress Summary */}
        <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-[#7DCDDF]/30">
          <h3 className="text-2xl font-bold text-[#2B2B2B] mb-4 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-[#1AA890] to-[#7DCDDF] rounded-full mr-3"></div>
            Overall Compliance Status
          </h3>
          <div className="w-full bg-[#F5F5F5] rounded-full h-4 mb-3 border border-gray-200">
            <div 
              className="h-4 rounded-full bg-gradient-to-r from-[#1AA890] to-[#7DCDDF] transition-all duration-1000 ease-out shadow-lg" 
              style={{ width: '92%' }}
            ></div>
          </div>
          <p className="text-[#2B2B2B]/80 text-lg font-medium">
            <span className="font-bold text-[#1AA890]">92%</span> of ESG criteria fully met • <span className="font-bold text-[#7DCDDF]">8%</span> in active improvement phase
          </p>
        </div>
      </div>
    </div>
  );
};

export default DueDiligenceSection;
