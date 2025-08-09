import React, { useState } from 'react';
import { tshirtData } from './data/tshirtData';
import Header from './components/Header';
import ProductImage from './components/ProductImage';
import SustainabilityCard from './components/SustainabilityCard';
import MaterialsSection from './components/MaterialsSection';
import LifecycleSection from './components/LifecycleSection';
import CircularitySection from './components/CircularitySection';
import Footer from './components/Footer';
import QRCodeModal from './components/QRCodeModal';
import JourneyTimeline from './components/JourneyTimeline';
import DisposalOptions from './components/DisposalOptions';
import DueDiligenceSection from './components/DueDiligenceSection';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showQRModal, setShowQRModal] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Row 1: Product Information Card - Full Width */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-[#2B2B2B] mb-6 flex items-center">
                <div className="w-2 h-8 bg-[#1AA890] rounded-full mr-3"></div>
                Product Information
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#F5F5F5] rounded-xl p-4">
                  <span className="text-[#2B2B2B] font-semibold block mb-1">Price</span>
                  <span className="text-[#1AA890] font-bold text-lg">{tshirtData.productInfo.price}</span>
                </div>
                <div className="bg-[#F5F5F5] rounded-xl p-4">
                  <span className="text-[#2B2B2B] font-semibold block mb-1">Size</span>
                  <span className="text-[#1AA890] font-bold text-lg">{tshirtData.productInfo.size}</span>
                </div>
                <div className="bg-[#F5F5F5] rounded-xl p-4">
                  <span className="text-[#2B2B2B] font-semibold block mb-1">Color</span>
                  <span className="text-[#1AA890] font-bold text-lg">{tshirtData.productInfo.color}</span>
                </div>
                <div className="bg-[#F5F5F5] rounded-xl p-4">
                  <span className="text-[#2B2B2B] font-semibold block mb-1">Material</span>
                  <span className="text-[#1AA890] font-bold text-lg">Organic Cotton</span>
                </div>
              </div>
            </div>

            {/* Row 2: Product Image + Sustainability Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column: Product Image */}
              <div>
                <ProductImage 
                  imageUrl={tshirtData.productInfo.imageUrl} 
                  name={tshirtData.productInfo.name} 
                />
              </div>

              {/* Right Column: Sustainability Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-fit">
                <SustainabilityCard 
                  title="Water Usage" 
                  value={tshirtData.sustainability.waterUsage} 
                  description="Total water consumed in production"
                  icon="water"
                />
                <SustainabilityCard 
                  title="Carbon Footprint" 
                  value={tshirtData.sustainability.carbonFootprint} 
                  description="Total CO₂ equivalent emissions"
                  icon="carbon"
                />
                <SustainabilityCard 
                  title="Energy Usage" 
                  value={tshirtData.sustainability.energyUsage} 
                  description="Total energy consumed"
                  icon="energy"
                />
                <SustainabilityCard 
                  title="Impact Comparison" 
                  value={tshirtData.sustainability.comparison} 
                  description="vs conventional cotton t-shirts"
                  icon="comparison"
                />
              </div>
            </div>

            {/* Row 3: Technical Specifications + Materials Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column: Technical Specifications */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#2B2B2B] mb-12 flex items-center">
                  <div className="w-2 h-8 bg-[#7DCDDF] rounded-full mr-3"></div>
                  Technical Specifications
                </h3>
                <ProductImage 
                  imageUrl="https://cdn.fastpixel.io/fp/ret_img+v_9f50+w_759+h_466+q_lossy+to_webp/www.uphance.com/wp-content/uploads/2023/05/Technical-sketches.png" 
                  name="Technical Drawing" 
                />
              </div>

              {/* Right Column: Materials Section */}
              <MaterialsSection materials={tshirtData.materials} />
            </div>

            {/* Row 4: Lifecycle and Circularity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <LifecycleSection lifecycle={tshirtData.lifecycle} />
              <CircularitySection circularity={tshirtData.circularity} />
            </div>
          </div>
        );
      case 'journey':
        return <JourneyTimeline />;
      case 'disposal':
        return <DisposalOptions />;
      case 'due-diligence':
        return <DueDiligenceSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow container mx-auto px-4 py-6" style={{ maxWidth: '90%' }}>
        {renderTabContent()}
      </main>
      
      <Footer onShowQRCode={() => setShowQRModal(true)} />
      
      {showQRModal && (
        <QRCodeModal 
          qrCodeUrl={tshirtData.qrCodeUrl} 
          onClose={() => setShowQRModal(false)} 
        />
      )}
    </div>
  );
};

export default App;
