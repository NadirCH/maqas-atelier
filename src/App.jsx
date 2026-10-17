import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import ServicesCatalog from './components/ServicesCatalog';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import PrivacyPillars from './components/PrivacyPillars';
import DoorSignWidget from './components/DoorSignWidget';
import BusinessCard3D from './components/BusinessCard3D';
import PartnershipSection from './components/PartnershipSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [atelierStatus, setAtelierStatus] = useState('open'); // 'open', 'returnSoon', 'closed'

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#231942] font-cairo selection:bg-[#E0B1CB] selection:text-[#231942]">
      
      {/* Top Fixed Navbar */}
      <Navbar 
        onOpenBooking={() => setIsBookingOpen(true)} 
        atelierStatus={atelierStatus}
      />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenBooking={() => setIsBookingOpen(true)} 
        />

        {/* 2. Brand Philosophy & Visual Identity */}
        <BrandStory />

        {/* 3. Services Catalog & Interactive Cost Estimator */}
        <ServicesCatalog 
          onOpenBooking={() => setIsBookingOpen(true)} 
        />

        {/* 4. Interactive Before & After Tailoring Showcase */}
        <BeforeAfterSlider />

        {/* 5. Privacy Manifesto & Women-Only Pillars */}
        <PrivacyPillars />

        {/* 6. Interactive Door Signboard & Business Card Specifications */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <DoorSignWidget 
            atelierStatus={atelierStatus} 
            setAtelierStatus={setAtelierStatus} 
          />
        </div>

        <BusinessCard3D />

        {/* 7. Community Partnerships & Collaborations */}
        <PartnershipSection />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => setIsBookingOpen(true)} 
      />

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

    </div>
  );
}
