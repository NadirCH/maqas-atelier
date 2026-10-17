import React, { useState, useEffect } from 'react';
import MaqasLogo from './MaqasLogo';
import { Phone, Calendar, Clock, Menu, X, Shield, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';

export default function Navbar({ onOpenBooking, atelierStatus }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الخدمات والأسعار', href: '#services' },
    { name: 'معرض الأعمال (قبل وبعد)', href: '#before-after' },
    { name: 'الخصوصية والأمان', href: '#privacy' },
    { name: 'بطاقة التعريف', href: '#business-card' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
  ];

  const statusConfig = {
    open: {
      text: 'المحل مفتوح لاستقبال المواعيد والقياسات',
      color: 'bg-emerald-500',
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    fridayClosed: {
      text: 'المحل مغلق اليوم (عطلة الجمعة) • الحجز متاح عبر واتساب',
      color: 'bg-rose-500',
      badge: 'bg-rose-50 text-rose-800 border-rose-200'
    },
    returnSoon: {
      text: 'سنعود قريباً (فترة استراحة)',
      color: 'bg-amber-500',
      badge: 'bg-amber-50 text-amber-800 border-amber-200'
    },
    closed: {
      text: 'المحل مغلق حالياً • الحجز متاح عبر واتساب',
      color: 'bg-rose-500',
      badge: 'bg-rose-50 text-rose-800 border-rose-200'
    }
  };

  // Automatically detect Friday (Day 5 in JS Date) or test override via ?day=friday
  const isFriday = typeof window !== 'undefined' && (
    new Date().getDay() === 5 || 
    new URLSearchParams(window.location.search).get('day') === 'friday'
  );

  const activeStatusKey = isFriday ? 'fridayClosed' : (atelierStatus || 'open');
  const currentStatus = statusConfig[activeStatusKey] || statusConfig.open;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Women-Only Privacy Banner (as per guidelines page 1 & 3) */}
      <div className="bg-[#231942] text-[#F5F5F5] text-xs py-1.5 px-4 text-center font-medium border-b border-[#5E548E]/40 flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5 text-[#E0B1CB]">
          <Shield className="w-3.5 h-3.5" />
          <span>مخصص للنساء فقط 100%</span>
        </span>
        <span className="opacity-40">•</span>
        <span className="hidden sm:inline text-gray-200">
          محل خياطة نسائي خاص لتعديل الملابس والفساتين الراقية
        </span>
        <span className="hidden sm:inline opacity-40">•</span>
        <span className="flex items-center gap-1 text-[#E0B1CB]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>مواعيد خاصة دون انتظار</span>
        </span>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#F5F5F5]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#E0B1CB]/40' 
          : 'bg-[#F5F5F5]/90 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with Brand Name */}
          <a href="#" className="flex items-center group">
            <MaqasLogo 
              className="w-10 h-10 sm:w-12 sm:h-12" 
              variant="light" 
              showText={true} 
              textClass="text-2xl sm:text-3xl"
              subtextClass="text-xs sm:text-sm"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#231942] hover:text-[#5E548E] font-medium text-sm transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#E0B1CB] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action CTAs & Status Indicator */}
          <div className="hidden md:flex items-center gap-3">
            {/* Atelier Status Indicator */}
            <div className={`text-xs px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${currentStatus.badge}`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${currentStatus.color}`}></span>
              <span className="font-medium">{currentStatus.text}</span>
            </div>

            {/* Book Fitting Button */}
            <button
              onClick={onOpenBooking}
              className="bg-[#231942] hover:bg-[#5E548E] text-[#F5F5F5] px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow hover:scale-105 active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#E0B1CB]" />
              <span>حجز موعد قياس</span>
            </button>

            {/* Direct WhatsApp Quick Contact */}
            <a
              href={getWhatsAppUrl('مرحباً مقاس، أرغب في الاستفسار عن تعديل قطعة')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E0B1CB]/40 hover:bg-[#E0B1CB]/70 text-[#231942] p-2 rounded-full transition-colors"
              title="تواصل مباشر عبر واتساب"
            >
              <Phone className="w-4 h-4 text-[#231942]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#231942] text-[#F5F5F5] text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E0B1CB]" />
              <span>حجز موعد</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#231942] p-2 rounded-lg hover:bg-gray-200/60 focus:outline-none"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F5F5F5] border-t border-[#E0B1CB]/40 px-4 pt-3 pb-6 mt-2 shadow-lg animate-fadeIn">
            <div className="flex flex-col gap-3">
              <div className={`text-xs px-3 py-1.5 rounded-md border flex items-center gap-2 mb-2 ${currentStatus.badge}`}>
                <span className={`w-2 h-2 rounded-full animate-pulse ${currentStatus.color}`}></span>
                <span>{currentStatus.text}</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#231942] hover:text-[#5E548E] font-medium py-2 border-b border-gray-200/50 text-base"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-[#231942] text-[#F5F5F5] py-2.5 rounded-xl font-medium flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#E0B1CB]" />
                  <span>حجز موعد قياس خاص</span>
                </button>
                <a
                  href={getWhatsAppUrl('مرحباً مقاس، أرغب في الاستفسار عن تعديل قطعة')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#5E548E] text-[#F5F5F5] py-2.5 rounded-xl font-medium flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#E0B1CB]" />
                  <span>تواصل عبر واتساب الأعمال</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
