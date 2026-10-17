import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesCatalog from './components/ServicesCatalog';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import BusinessCard3D from './components/BusinessCard3D';
import LocationSection from './components/LocationSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#231942] font-cairo selection:bg-[#E0B1CB] selection:text-[#231942]">
      
      {/* Top Fixed Navbar */}
      <Navbar 
        onOpenBooking={() => setIsBookingOpen(true)} 
      />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenBooking={() => setIsBookingOpen(true)} 
        />

        {/* 2. Services Catalog & Interactive Cost Estimator */}
        <ServicesCatalog 
          onOpenBooking={() => setIsBookingOpen(true)} 
        />

        {/* 3. Interactive Before & After Tailoring Showcase */}
        <BeforeAfterSlider />

        {/* 4. Business Card 3D Showcase */}
        <BusinessCard3D />

        {/* 5. Location & Map Section */}
        <LocationSection 
          onOpenBooking={() => setIsBookingOpen(true)} 
        />

        {/* 6. Frequently Asked Questions */}
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
