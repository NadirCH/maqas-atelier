import React, { useState, useRef } from 'react';
import MaqasLogo from './MaqasLogo';
import { Phone, MessageSquare, RotateCw, Sparkles, QrCode, Shield, Layers } from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';

export default function BusinessCard3D() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Dynamic 3D Spatial Physics tracking
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0 to 1
    const y = (e.clientY - rect.top) / rect.height; // 0 to 1

    // Antigravity micro-tilt angles
    const tiltX = (0.5 - y) * 22; // rotate around X (up/down)
    const tiltY = (x - 0.5) * 24; // rotate around Y (left/right)

    setTilt({ x: tiltX, y: tiltY });
    setGlare({ x: x * 100, y: y * 100, opacity: 0.35 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <section id="business-card" className="py-20 md:py-28 bg-[#F5F5F5] relative overflow-hidden select-none">
      
      {/* Antigravity Ambient Depth Spheres */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#E0B1CB]/25 rounded-full blur-3xl pointer-events-none animate-pulse-aurora"></div>
      <div className="absolute bottom-10 -right-28 w-96 h-96 bg-[#5E548E]/15 rounded-full blur-3xl pointer-events-none animate-pulse-aurora" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0B1CB]/30 border border-[#E0B1CB] text-[#231942] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#5E548E]" />
            <span>تجربة تفاعلية ثلاثية الأبعاد • Spatial 3D Card Stage</span>
          </div>
          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#231942] mb-4">
            بطاقة التعريف الفاخرة لمحل مَقاس
          </h2>
          <p className="font-tajawal text-gray-600 text-base sm:text-lg leading-relaxed">
            حركي المؤشر لاستكشاف فيزياء الأبعاد الثلاثية وانعكاس الضوء، أو انقري لقلب البطاقة ومعاينة الوجهين.
          </p>
        </div>

        {/* 3D Card Stage */}
        <div className="flex flex-col items-center">
          
          {/* Flip instruction & Control Pill */}
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white hover:bg-gray-50 text-[#231942] border border-[#E0B1CB]/60 shadow-md hover:shadow-lg text-xs font-bold transition-all duration-300 active:scale-95 hover:-translate-y-0.5"
            >
              <RotateCw className="w-4 h-4 text-[#5E548E] transition-transform duration-500" style={{ transform: isFlipped ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              <span>{isFlipped ? 'معاينة الوجه الأمامي (العاجي الفاتح)' : 'معاينة الوجه الخلفي (البنفسجي المخملي)'}</span>
            </button>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-gray-500 font-tajawal bg-white/70 backdrop-blur-sm px-3.5 py-2 rounded-full border border-gray-200">
              <Layers className="w-3.5 h-3.5 text-[#5E548E]" />
              <span>تتبع حركة المؤشر (Tilt Physics)</span>
            </div>
          </div>

          {/* Perspective Container */}
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full max-w-md sm:max-w-lg aspect-[9.4/5.4] cursor-pointer relative"
            style={{ perspective: '1400px' }}
          >
            {/* Soft Ambient Floating Shadow (Inverted tilt physics for weightlessness) */}
            <div 
              className="absolute -inset-4 bg-gradient-to-b from-[#231942]/10 via-[#5E548E]/25 to-transparent rounded-[32px] blur-2xl pointer-events-none transition-all duration-500"
              style={{
                transform: `translate3d(${-tilt.y * 1.5}px, ${-tilt.x * 1.5 + 20}px, -40px) scale(${isHovered ? 1.05 : 0.95})`,
                opacity: isHovered ? 0.75 : 0.45
              }}
            />

            {/* Flippable and Tilting Inner 3D Container */}
            <div 
              className="relative w-full h-full rounded-2xl transition-transform ease-out"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${tilt.x}deg) rotateY(${isFlipped ? 180 - tilt.y : tilt.y}deg) translateZ(${isHovered ? '25px' : '0px'})`,
                transitionDuration: isHovered ? '120ms' : '600ms'
              }}
            >
              
              {/* FRONT FACE: Light Silk Ivory (#F5F5F5) with Logo and MAQAS */}
              <div 
                className="absolute inset-0 w-full h-full rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-white via-[#FAF5F9] to-[#F1ECF1] border-2 border-[#E0B1CB]/40 shadow-2xl flex flex-col justify-between overflow-hidden"
                style={{ 
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  boxShadow: isHovered 
                    ? '0 30px 60px -15px rgba(35, 25, 66, 0.2), 0 0 25px rgba(224, 177, 203, 0.3) inset' 
                    : '0 20px 45px -12px rgba(35, 25, 66, 0.12)'
                }}
              >
                {/* Dynamic Optical Glare Refraction Sheen */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0) 60%)`,
                    opacity: glare.opacity
                  }}
                />

                {/* Subtle Haute Stitch Perimeter */}
                <div className="absolute inset-2 border border-dashed border-[#5E548E]/20 rounded-xl pointer-events-none" />

                {/* Top Corner specs */}
                <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono relative z-10">
                  <span className="flex items-center gap-1.5 font-tajawal text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5E548E]"></span>
                    بطاقة تعريف فاخرة • 300 DPI
                  </span>
                  <span className="text-[#5E548E] font-bold bg-[#E0B1CB]/30 px-2 py-0.5 rounded-full text-[10px]">
                    مخصص للنساء فقط
                  </span>
                </div>

                {/* Center Brand Identity */}
                <div className="text-center my-auto relative z-10">
                  <div className="flex justify-center mb-3">
                    <div className="p-2.5 rounded-2xl bg-white shadow-sm border border-[#E0B1CB]/40">
                      <MaqasLogo className="w-14 h-14 sm:w-16 sm:h-16" variant="light" />
                    </div>
                  </div>
                  <h3 className="font-amiri text-3xl sm:text-4xl font-bold text-[#231942] tracking-wider mb-1">
                    مَقاس | MAQAS
                  </h3>
                  <div className="text-xs sm:text-sm font-tajawal text-[#5E548E] font-medium tracking-wide">
                    للخياطة النسائية وتعديل الملابس
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex items-center justify-between border-t border-gray-200/80 pt-3 text-[11px] text-gray-600 font-tajawal relative z-10">
                  <span className="font-medium text-[#231942]">محل خياطة نسائي خاص</span>
                  <span className="text-[#5E548E] font-medium font-sans">Haute Tailoring Atelier</span>
                </div>
              </div>

              {/* BACK FACE: Dark Velvet (#231942) with Services, QR & Algerian WhatsApp */}
              <div 
                className="absolute inset-0 w-full h-full rounded-2xl p-6 sm:p-8 bg-[#231942] text-[#F5F5F5] border-2 border-[#5E548E] shadow-2xl flex flex-col justify-between overflow-hidden"
                style={{ 
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  boxShadow: isHovered 
                    ? '0 32px 70px -15px rgba(23, 16, 45, 0.7), 0 0 30px rgba(94, 84, 142, 0.35) inset' 
                    : '0 20px 45px -12px rgba(23, 16, 45, 0.5)'
                }}
              >
                {/* Dynamic Optical Glare Refraction Sheen (Dark side) */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${100 - glare.x}% ${glare.y}%, rgba(224, 177, 203, 0.28) 0%, rgba(224, 177, 203, 0) 65%)`,
                    opacity: glare.opacity ? glare.opacity * 1.3 : 0
                  }}
                />

                {/* Delicate Stitch Perimeter */}
                <div className="absolute inset-2 border border-dashed border-[#E0B1CB]/25 rounded-xl pointer-events-none" />

                {/* Back Top */}
                <div className="flex items-center justify-between border-b border-[#5E548E]/60 pb-2 relative z-10">
                  <div className="flex items-center gap-2">
                    <MaqasLogo className="w-7 h-7" variant="dark" />
                    <span className="font-amiri text-lg font-bold text-[#F5F5F5]">مَقاس | MAQAS</span>
                  </div>
                  <span className="text-[10px] text-[#E0B1CB] font-mono bg-[#1a1233] px-2 py-0.5 rounded-md border border-[#5E548E]/50">
                    VIP Atelier
                  </span>
                </div>

                {/* Back Center: Services & QR code */}
                <div className="grid grid-cols-12 gap-4 items-center my-auto relative z-10">
                  <div className="col-span-8 text-right space-y-1.5 text-xs sm:text-sm text-gray-200 font-tajawal">
                    <div className="text-[#E0B1CB] font-bold text-xs mb-1">الخدمات والحياكة الراقية:</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E0B1CB]"></span>
                      <span>تعديل وتجسيم فساتين السهرة والأعراس</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E0B1CB]"></span>
                      <span>تضييق وتعديل قياسات الخصر والأكتاف بدقة</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E0B1CB]"></span>
                      <span>تقصير الحواشي المخفية وسحابات YKK الأصلية</span>
                    </div>
                  </div>

                  {/* WhatsApp QR Simulation */}
                  <div className="col-span-4 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white p-1.5 rounded-xl shadow-lg flex items-center justify-center border border-[#E0B1CB]/40">
                      <QrCode className="w-full h-full text-[#231942]" />
                    </div>
                    <span className="text-[9px] text-[#E0B1CB] mt-1.5 font-tajawal font-medium">مسح الرمز للتواصل</span>
                  </div>
                </div>

                {/* Back Bottom: Algerian WhatsApp and Direct Call */}
                <div className="border-t border-[#5E548E]/60 pt-2.5 flex items-center justify-between text-xs text-gray-300 relative z-10">
                  <div className="flex items-center gap-1.5 text-[#E0B1CB] font-mono tracking-wider" dir="ltr">
                    <Phone className="w-3.5 h-3.5 text-[#E0B1CB]" />
                    <span>+213 550 00 00 00</span>
                  </div>
                  <a
                    href={getWhatsAppUrl('السلام عليكم، أود الاستفسار وحجز موعد عبر بطاقة التعريف')}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-[11px] text-white bg-[#5E548E] hover:bg-[#6c619e] px-2.5 py-1 rounded-lg transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3 h-3 text-[#E0B1CB]" />
                    <span>مراسلة واتساب</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* User Hint */}
          <p className="text-xs text-gray-500 mt-6 font-tajawal text-center flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5E548E] animate-ping"></span>
            <span>حركي المؤشر لمعاينة التأثير ثلاثي الأبعاد، أو انقري مباشرة على البطاقة لقلبها.</span>
          </p>

        </div>

      </div>
    </section>
  );
}
