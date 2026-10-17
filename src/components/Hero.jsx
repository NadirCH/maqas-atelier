import React from 'react';
import { Calendar, MessageSquare, Sparkles, ShieldCheck, Scissors, Ruler, Heart, Clock } from 'lucide-react';
import MaqasLogo from './MaqasLogo';
import { getWhatsAppUrl } from '../config/siteConfig';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F5F5F5] via-[#FAF5F9] to-[#F5F5F5]">
      {/* Decorative Atelier Background Motifs */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#E0B1CB]/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-20 w-80 h-80 bg-[#5E548E]/15 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Subtle Tailor Thread Line in Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100,100 C300,50 400,300 800,200 C1200,100 1300,400 1700,250" fill="none" stroke="#5E548E" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M-50,300 C200,450 600,200 1000,400 C1400,600 1500,200 1800,350" fill="none" stroke="#E0B1CB" strokeWidth="1.2" strokeDasharray="4 8" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content (Arabic Text) */}
          <div className="lg:col-span-7 text-right">
            
            {/* Exclusive Atelier Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0B1CB]/30 border border-[#E0B1CB] text-[#231942] text-xs sm:text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#5E548E] animate-ping"></span>
              <Sparkles className="w-4 h-4 text-[#5E548E]" />
              <span>أتيلييه نسائي خاص • مخصص للنساء فقط</span>
            </div>

            {/* Main Brand Title in Amiri */}
            <h1 className="font-amiri text-4xl sm:text-6xl lg:text-7xl font-bold text-[#231942] leading-[1.18] tracking-tight mb-6">
              قياسكِ وتعديلاتكِ..
              <br />
              <span className="text-[#5E548E] relative inline-block">
                وكأنكِ في غرفتكِ الخاصة
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#E0B1CB]" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                  <path d="M1 5.5C50 1.5 150 1.5 199 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Subtext describing Brand Overview from guidelines */}
            <p className="font-tajawal text-lg sm:text-xl text-[#231942]/80 leading-relaxed max-w-2xl mb-8">
              في <strong className="text-[#231942] font-bold">مَقاس (MAQAS)</strong>، حولنا صغر المساحة إلى تجربة استثنائية من الراحة والخصوصية المطلقة. ابتعدي عن صخب المحلات العامة واستمتعي بجلسة قياس هادئة وتعديل راقٍ لفساتينكِ وأزيائكِ بأعلى درجات الإتقان.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="bg-[#231942] hover:bg-[#5E548E] text-[#F5F5F5] px-7 py-4 rounded-2xl font-bold text-base sm:text-lg flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5 text-[#E0B1CB]" />
                <span>احجزي موعد قياس خاص</span>
              </button>

              <a
                href="#services"
                className="bg-white hover:bg-gray-50 text-[#231942] border-2 border-[#5E548E]/30 hover:border-[#5E548E] px-6 py-4 rounded-2xl font-semibold text-base sm:text-lg flex items-center gap-2.5 transition-all duration-300"
              >
                <Scissors className="w-5 h-5 text-[#5E548E]" />
                <span>كتالوج الخدمات والأسعار</span>
              </a>
            </div>

            {/* Key Trust Highlights (Three Pillars) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#E0B1CB]/40">
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-[#E0B1CB]/25 flex items-center justify-center shrink-0 text-[#231942]">
                  <ShieldCheck className="w-5 h-5 text-[#5E548E]" />
                </div>
                <div>
                  <div className="font-bold text-xs text-[#231942]">خصوصية تامة 100%</div>
                  <div className="text-[11px] text-gray-500">للنساء فقط دون أي تصوير</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-[#E0B1CB]/25 flex items-center justify-center shrink-0 text-[#231942]">
                  <Ruler className="w-5 h-5 text-[#5E548E]" />
                </div>
                <div>
                  <div className="font-bold text-xs text-[#231942]">دقة مليمترية بالحياكة</div>
                  <div className="text-[11px] text-gray-500">فساتين سهرة وأعراس وأطقم</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-[#E0B1CB]/25 flex items-center justify-center shrink-0 text-[#231942]">
                  <Clock className="w-5 h-5 text-[#5E548E]" />
                </div>
                <div>
                  <div className="font-bold text-xs text-[#231942]">مواعيد بدون انتظار</div>
                  <div className="text-[11px] text-gray-500">جلسة قياس فردية ومخصصة</div>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Showcase Card & Haute Atelier Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5E548E]/20 via-[#E0B1CB]/30 to-transparent rounded-3xl transform rotate-3 filter blur-md"></div>
              
              {/* Main Atelier Visual Card */}
              <div className="relative bg-[#231942] text-[#F5F5F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#5E548E]/40 overflow-hidden">
                
                {/* Background delicate stitch pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 border-b-2 border-l-2 border-dashed border-[#E0B1CB]/20 rounded-bl-3xl"></div>
                
                {/* Card Header with Logo */}
                <div className="flex items-center justify-between pb-6 border-b border-[#5E548E]/40">
                  <div className="flex items-center gap-3">
                    <MaqasLogo className="w-14 h-14" variant="dark" />
                    <div>
                      <div className="font-amiri text-2xl font-bold tracking-wide text-[#F5F5F5]">مَقاس | MAQAS</div>
                      <div className="text-xs text-[#E0B1CB] font-tajawal">هوية الخياطة النسائية المعتمدة 2026</div>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-[#E0B1CB]/15 border border-[#E0B1CB]/30 text-[#E0B1CB] text-[11px] font-medium">
                    أتيلييه خاص
                  </div>
                </div>

                {/* Central Emblem Artpiece */}
                <div className="my-8 text-center relative py-6">
                  {/* Circular Glow */}
                  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-b from-[#5E548E]/40 to-[#E0B1CB]/20 p-1 flex items-center justify-center relative">
                    <div className="w-full h-full rounded-full bg-[#1e1539] flex items-center justify-center p-4 border border-[#E0B1CB]/40">
                      <MaqasLogo className="w-24 h-24" variant="dark" />
                    </div>
                    {/* Floating mini badges */}
                    <span className="absolute -top-2 right-4 bg-[#E0B1CB] text-[#231942] text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                      نساء فقط
                    </span>
                    <span className="absolute -bottom-2 left-4 bg-[#5E548E] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow">
                      خياطة راقية
                    </span>
                  </div>

                  <p className="mt-5 font-amiri text-lg text-gray-200 italic">
                    "حيث تلتقي راحة منزلكِ بدقة أيدي الخياطة المحترفة"
                  </p>
                </div>

                {/* Live Atelier Feature Box */}
                <div className="bg-[#1a1233] rounded-2xl p-4 border border-[#5E548E]/50">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-gray-300 font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      قناة واتساب للأعمال الرسمية
                    </span>
                    <span className="text-[#E0B1CB] text-[11px]">متاحة للاستفسار</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">
                    تصفحي كتالوج الأسعار التقديرية، وتابعي يومياً القطع الجاهزة للاستلام عبر خاصية "الحالة".
                  </p>
                  <a
                    href={getWhatsAppUrl('مرحباً مقاس، أرغب في حجز موعد قياس')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#E0B1CB] hover:bg-[#d89fbe] text-[#231942] py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>مراسلة واتساب للأعمال الآن</span>
                  </a>
                </div>

              </div>

              {/* Floating Pill on bottom right */}
              <div className="absolute -bottom-5 -right-4 bg-white text-[#231942] p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 text-xs animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="w-8 h-8 rounded-full bg-[#E0B1CB]/40 flex items-center justify-center text-[#5E548E]">
                  <Heart className="w-4 h-4 fill-current text-[#5E548E]" />
                </div>
                <div>
                  <div className="font-bold">أمان تام واطمئنان</div>
                  <div className="text-[10px] text-gray-500">أتيلييه معتمد ومحمي بالكامل</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
