import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function LocationSection() {
  return (
    <section id="location" className="py-20 md:py-28 bg-white relative overflow-hidden select-none">
      
      {/* Background Decorative Gradient */}
      <div 
        className="absolute top-1/2 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(224, 177, 203, 0.4) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-0 -left-32 w-80 h-80 rounded-full pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(94, 84, 142, 0.3) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0B1CB]/25 border border-[#E0B1CB]/50 text-[#5E548E] text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#5E548E]" />
            <span>موقع الأتليه وخريطة الوصول • Atelier Location</span>
          </div>
          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#231942]">
            موقع محل مَقاس وخريطة الوصول
          </h2>
        </div>

        {/* Map Frame Container (Wide, Minimalist & Focused) */}
        <div className="bg-[#FAF5F9] rounded-[32px] p-3 sm:p-5 border border-[#E0B1CB]/40 shadow-xl overflow-hidden">
          <div className="relative w-full h-[360px] sm:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#5E548E]/20 shadow-inner bg-[#231942]">
            <iframe
              title="موقع محل مَقاس على الخريطة"
              src="https://www.openstreetmap.org/export/embed.html?bbox=3.0300%2C36.7350%2C3.0800%2C36.7650&amp;layer=mapnik&amp;marker=36.7500%2C3.0550"
              className="w-full h-full border-0 filter contrast-105"
              loading="lazy"
            />

            {/* Atelier Floating Marker Badge */}
            <div className="absolute top-4 right-4 bg-[#231942]/95 backdrop-blur-md text-white p-3.5 rounded-2xl border border-[#E0B1CB]/30 shadow-xl max-w-xs text-right">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#E0B1CB] text-[#231942] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-amiri font-bold text-base text-white">محل مَقاس (MAQAS)</div>
                  <div className="text-[10px] text-[#E0B1CB]">للخياطة النسائية وتعديل الملابس</div>
                </div>
              </div>
              <div className="text-[11px] text-gray-300 font-tajawal pt-1 border-t border-white/10">
                مخصص للنساء حصراً
              </div>
            </div>

            {/* Bottom Quick Directions Bar */}
            <div className="absolute bottom-4 inset-x-4 flex items-center justify-between gap-2 bg-[#231942]/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-white/10 text-xs">
              <span className="text-gray-200 font-tajawal text-xs pr-2 hidden sm:inline">
                اضغطي لفتح اتجاهات القيادة مباشرة
              </span>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E0B1CB] hover:bg-[#d69dbf] text-[#231942] font-bold text-xs py-2 px-4 rounded-xl flex items-center gap-2 transition-colors mr-auto shadow"
              >
                <Navigation className="w-4 h-4" />
                <span>فتح في خرائط Google</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
