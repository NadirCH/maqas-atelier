import React, { useState } from 'react';
import MaqasLogo from './MaqasLogo';
import { Phone, MessageSquare, RotateCw, Sparkles, MapPin, QrCode, Shield } from 'lucide-react';

export default function BusinessCard3D() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="business-card" className="py-20 md:py-28 bg-[#F5F5F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0B1CB]/30 border border-[#E0B1CB] text-[#231942] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#5E548E]" />
            <span>مواصفات بطاقة العمل الرسمية • Business Card 300 DPI</span>
          </div>
          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#231942] mb-4">
            بطاقة عمل محل الخياطة المعتمدة
          </h2>
          <p className="font-tajawal text-gray-600 text-base sm:text-lg leading-relaxed">
            وفقاً لدليل الهوية (صفحة 3): مقاس 9.4 × 5.4 سم بدقة 300 DPI. وجه أمامي فاتح يحمل اللوغو، ووجه خلفي داكن بدرجة #231942 يبرز الخدمات وقناة الواتساب.
          </p>
        </div>

        {/* 3D Card Stage */}
        <div className="flex flex-col items-center">
          
          {/* Flip instruction pill */}
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-gray-100 text-[#231942] border border-gray-300 shadow-sm text-xs font-bold transition-all active:scale-95"
          >
            <RotateCw className="w-4 h-4 text-[#5E548E] animate-spin" style={{ animationDuration: '6s' }} />
            <span>{isFlipped ? 'عرض الوجه الأمامي (الفاتح)' : 'اقلبي البطاقة لرؤية الوجه الخلفي (الداكن)'}</span>
          </button>

          {/* Perspective Container */}
          <div 
            className="w-full max-w-md sm:max-w-lg aspect-[9.4/5.4] cursor-pointer"
            style={{ perspective: '1200px' }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Flippable Inner Container */}
            <div 
              className="relative w-full h-full transition-transform duration-700 ease-in-out"
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              
              {/* FRONT FACE: Light #F5F5F5 with Logo and MAQAS */}
              <div 
                className="absolute inset-0 w-full h-full rounded-2xl p-6 sm:p-8 bg-[#F5F5F5] border-2 border-gray-200 shadow-2xl flex flex-col justify-between select-none"
                style={{ 
                  backfaceVisibility: 'hidden',
                  backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #f1ecf1 100%)'
                }}
              >
                {/* Top Corner specs */}
                <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
                  <span>9.4 × 5.4 cm • 300 DPI</span>
                  <span className="text-[#5E548E] font-bold">مخصص للنساء فقط</span>
                </div>

                {/* Center Brand Identity */}
                <div className="text-center my-auto">
                  <div className="flex justify-center mb-3">
                    <MaqasLogo className="w-16 h-16 sm:w-20 sm:h-20" variant="light" />
                  </div>
                  <h3 className="font-amiri text-3xl sm:text-4xl font-bold text-[#231942] tracking-wider mb-1">
                    مَقاس | MAQAS
                  </h3>
                  <div className="text-xs sm:text-sm font-tajawal text-[#5E548E] font-medium tracking-wide">
                    للخياطة النسائية وتعديل الملابس
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex items-center justify-between border-t border-gray-200/80 pt-3 text-[11px] text-gray-600 font-tajawal">
                  <span>محل خياطة نسائي خاص</span>
                  <span className="text-[#5E548E] font-medium">النسخة الاحترافية 2026</span>
                </div>
              </div>

              {/* BACK FACE: Dark #231942 with Services & WhatsApp */}
              <div 
                className="absolute inset-0 w-full h-full rounded-2xl p-6 sm:p-8 bg-[#231942] text-[#F5F5F5] border-2 border-[#5E548E] shadow-2xl flex flex-col justify-between select-none"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                {/* Back Top */}
                <div className="flex items-center justify-between border-b border-[#5E548E]/50 pb-2">
                  <div className="flex items-center gap-2">
                    <MaqasLogo className="w-7 h-7" variant="dark" />
                    <span className="font-amiri text-lg font-bold text-[#F5F5F5]">مَقاس</span>
                  </div>
                  <span className="text-[10px] text-[#E0B1CB] font-mono">#231942 Deep Violet</span>
                </div>

                {/* Back Center: Services & QR code */}
                <div className="grid grid-cols-12 gap-4 items-center my-auto">
                  <div className="col-span-8 text-right space-y-1 text-xs sm:text-sm text-gray-200 font-tajawal">
                    <div className="text-[#E0B1CB] font-bold text-xs mb-1">قائمة الخدمات الرئيسية:</div>
                    <div>• تعديل فساتين السهرة والأعراس</div>
                    <div>• تضييق وتجسيم القوام بدقة مليمترية</div>
                    <div>• تقصير حواشي مخفية وسحابات راقية</div>
                  </div>

                  {/* WhatsApp QR Simulation */}
                  <div className="col-span-4 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white p-1.5 rounded-xl shadow-md flex items-center justify-center">
                      <QrCode className="w-full h-full text-[#231942]" />
                    </div>
                    <span className="text-[9px] text-[#E0B1CB] mt-1 font-tajawal">امسحي للتواصل</span>
                  </div>
                </div>

                {/* Back Bottom: WhatsApp and Call */}
                <div className="border-t border-[#5E548E]/50 pt-2 flex items-center justify-between text-xs text-gray-300">
                  <div className="flex items-center gap-1.5 text-[#E0B1CB] font-mono" dir="ltr">
                    <Phone className="w-3.5 h-3.5" />
                    <span>+966 50 000 0000</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-gray-300">
                    <MessageSquare className="w-3 h-3 text-[#E0B1CB]" />
                    <span>واتساب للأعمال</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <p className="text-xs text-gray-500 mt-6 font-tajawal text-center">
            * اضغطي على البطاقة في أي وقت لتجربة التدوير التفاعلي والمقارنة بين الوجهين.
          </p>

        </div>

      </div>
    </section>
  );
}
