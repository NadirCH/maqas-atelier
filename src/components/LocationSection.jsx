import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Car, ExternalLink, Copy, Check, Sparkles, Calendar } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import MaqasLogo from './MaqasLogo';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

export default function LocationSection({ onOpenBooking }) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(siteConfig.addressText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0B1CB]/25 border border-[#E0B1CB]/50 text-[#5E548E] text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#5E548E]" />
            <span>موقع الأتليه وخريطة الوصول • Atelier Location</span>
          </div>
          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#231942] mb-4">
            موقع محل مَقاس وخريطة الوصول
          </h2>
          <p className="font-tajawal text-gray-600 text-base sm:text-lg leading-relaxed">
            موقع هادئ وسهل الوصول يضمن لكِ تجربة زيارة مريحة وخاصة بأعلى درجات الاطمئنان.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Interactive Visual Box */}
          <div className="lg:col-span-7 bg-[#FAF5F9] rounded-3xl p-4 sm:p-6 border border-[#E0B1CB]/40 shadow-sm flex flex-col justify-between overflow-hidden">
            
            {/* Map Frame Container */}
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#5E548E]/20 shadow-inner bg-[#231942]">
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
                  مخصص للنساء حصراً • استقبال بموعد مسبق
                </div>
              </div>

              {/* Bottom Quick Directions Bar */}
              <div className="absolute bottom-3 inset-x-3 flex items-center justify-between gap-2 bg-[#231942]/90 backdrop-blur-md p-2 rounded-xl border border-white/10 text-xs">
                <span className="text-gray-200 font-tajawal text-[11px] pr-2 hidden sm:inline">
                  اضغطي لفتح اتجاهات القيادة مباشرة
                </span>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E0B1CB] hover:bg-[#d69dbf] text-[#231942] font-bold text-xs py-1.5 px-3 rounded-lg flex items-center gap-1.5 transition-colors mr-auto"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>فتح في خرائط Google</span>
                </a>
              </div>
            </div>

            {/* Direct Map Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 border border-gray-200 text-[#231942] py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#5E548E]" />
                <span>المعاينة في تطبيق الخرائط</span>
              </a>

              <a
                href={getWhatsAppUrl('السلام عليكم، أود الحصول على الموقع الجغرافي الدقيق لمحل مَقاس (Google Maps Pin)')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#231942] hover:bg-[#342461] text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>طلب إرسال اللوكيشن عبر واتساب</span>
              </a>
            </div>

          </div>

          {/* Details & Location Features Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Address Card with Copy Button */}
            <div className="bg-[#FAF5F9] rounded-2xl p-5 border border-[#E0B1CB]/40 shadow-sm text-right">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#5E548E] font-tajawal flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#5E548E]" />
                  <span>العنوان المعتمد:</span>
                </span>
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1 text-[11px] text-[#5E548E] hover:text-[#231942] bg-white px-2.5 py-1 rounded-lg border border-gray-200 transition-colors shadow-2xs"
                  title="نسخ نص العنوان"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ العنوان</span>
                    </>
                  )}
                </button>
              </div>
              <p className="font-tajawal text-sm text-[#231942] font-semibold leading-relaxed">
                {siteConfig.addressText}
              </p>
            </div>

            {/* Working Hours Summary */}
            <div className="bg-[#FAF5F9] rounded-2xl p-5 border border-[#E0B1CB]/40 shadow-sm text-right">
              <div className="flex items-center gap-2 text-xs font-bold text-[#5E548E] font-tajawal mb-2">
                <Clock className="w-4 h-4 text-[#5E548E]" />
                <span>أوقات استقبال القياسات:</span>
              </div>
              <p className="font-tajawal text-sm text-gray-700 font-medium leading-relaxed">
                كل أيام الأسبوع (ما عدا الجمعة): <strong>من 08:00 صباحاً إلى 15:00 مساءً</strong>
              </p>
              <span className="text-[11px] text-[#5E548E] font-tajawal block mt-1">
                * يُستحسن دوماً تأكيد الموعد مسبقاً قبل الحضور
              </span>
            </div>

            {/* Parking & Privacy Feature */}
            <div className="bg-[#FAF5F9] rounded-2xl p-5 border border-[#E0B1CB]/40 shadow-sm text-right">
              <div className="flex items-center gap-2 text-xs font-bold text-[#5E548E] font-tajawal mb-2">
                <Car className="w-4 h-4 text-[#5E548E]" />
                <span>سهولة الركن والخصوصية التامة:</span>
              </div>
              <p className="font-tajawal text-xs sm:text-sm text-gray-700 leading-relaxed">
                المحل يقع في منطقة هادئة بعيدة عن اكتظاظ الأسواق الشعبية، مع توفر أماكن سهلة لركن السيارات ومدخل مستقل ومريح مخصص للسيدات فقط.
              </p>
            </div>

            {/* Ready to Book CTA Card */}
            <div className="bg-[#231942] rounded-2xl p-5 text-white shadow-lg border border-[#5E548E] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
              <div>
                <div className="font-amiri font-bold text-lg text-white">
                  هل ترغبين في حجز موعد قياس؟
                </div>
                <div className="text-xs text-gray-300 font-tajawal">
                  نجهز لكِ غرفة القياس لتستمتعي بالراحة التامة فور وصولكِ
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="bg-[#E0B1CB] hover:bg-[#d69dbf] text-[#231942] py-2 px-4 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors shrink-0 shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>حجز موعد الآن</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
