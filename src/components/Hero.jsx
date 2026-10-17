import React from 'react';
import { Calendar, MessageSquare, Sparkles, ShieldCheck, Scissors, Ruler, Clock } from 'lucide-react';
import MaqasLogo from './MaqasLogo';
import { getWhatsAppUrl } from '../config/siteConfig';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F5F5F5] via-[#FAF5F9] to-[#F5F5F5] select-none">
      
      {/* Lightweight GPU-composited Ambient Accents */}
      <div 
        className="absolute top-1/4 -right-24 w-96 h-96 rounded-full pointer-events-none opacity-35" 
        style={{ background: 'radial-gradient(circle, rgba(224, 177, 203, 0.35) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute -bottom-10 -left-20 w-80 h-80 rounded-full pointer-events-none opacity-25" 
        style={{ background: 'radial-gradient(circle, rgba(94, 84, 142, 0.25) 0%, transparent 70%)' }}
      />
      
      {/* Delicate Tailor Thread Line in Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100,100 C300,50 400,300 800,200 C1200,100 1300,400 1700,250" fill="none" stroke="#5E548E" strokeWidth="1.2" strokeDasharray="6 6" />
        <path d="M-50,300 C200,450 600,200 1000,400 C1400,600 1500,200 1800,350" fill="none" stroke="#E0B1CB" strokeWidth="1" strokeDasharray="4 8" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Main Hero Content (Arabic Text) */}
          <div className="lg:col-span-7 text-right">
            
            {/* Exclusive Atelier Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0B1CB]/30 border border-[#E0B1CB]/60 text-[#231942] text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#5E548E] animate-ping"></span>
              <Sparkles className="w-4 h-4 text-[#5E548E]" />
              <span>محل خياطة نسائي خاص • مخصص للنساء حصراً</span>
            </div>

            {/* Main Brand Title in Amiri */}
            <h1 className="font-amiri text-4xl sm:text-6xl lg:text-7xl font-bold text-[#231942] leading-[1.18] tracking-tight mb-6">
              قياسكِ وتعديلاتكِ..
              <br />
              <span className="text-[#5E548E] relative inline-block">
                بأعلى درجات الخصوصية والإتقان
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#E0B1CB]" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                  <path d="M1 5.5C50 1.5 150 1.5 199 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Subtext describing Brand Overview */}
            <p className="font-tajawal text-lg sm:text-xl text-[#231942]/85 leading-relaxed max-w-2xl mb-8">
              في <strong className="text-[#231942] font-bold">مَقاس (MAQAS)</strong>، نعتني بإطلالتكِ ونمنحكِ تجربة استثنائية تجمع بين الراحة والخصوصية التامة. ابتعدي عن صخب المحلات المزدحمة، واستمتعي بأخذ قياسات متقنة وتعديل رفيع المستوى لفساتينكِ وأزيائكِ بأيدي خياطة خبيرة.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="group relative bg-[#231942] hover:bg-[#342461] text-[#F5F5F5] px-7 py-4 rounded-2xl font-bold text-base sm:text-lg flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95 overflow-hidden"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                <Calendar className="w-5 h-5 text-[#E0B1CB] transition-transform group-hover:rotate-6" />
                <span>حجز موعد قياس خاص</span>
              </button>

              <a
                href="#services"
                className="bg-white/80 hover:bg-white text-[#231942] border-2 border-[#5E548E]/30 hover:border-[#5E548E] px-6 py-4 rounded-2xl font-semibold text-base sm:text-lg flex items-center gap-2.5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:scale-95 backdrop-blur-sm"
              >
                <Scissors className="w-5 h-5 text-[#5E548E]" />
                <span>كتالوج الخدمات والأسعار</span>
              </a>
            </div>

            {/* Key Trust Highlights (Three Glassmorphic Pillars) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-[#E0B1CB]/40">
              <div className="flex items-center gap-3 bg-white/75 backdrop-blur-md p-3.5 rounded-2xl border border-[#E0B1CB]/30 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#E0B1CB]/25 flex items-center justify-center shrink-0 text-[#231942]">
                  <ShieldCheck className="w-5 h-5 text-[#5E548E]" />
                </div>
                <div>
                  <div className="font-bold text-xs text-[#231942]">خصوصية تامة 100%</div>
                  <div className="text-[11px] text-gray-500">بيئة نسائية آمنة ومحمية بالكامل</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/75 backdrop-blur-md p-3.5 rounded-2xl border border-[#E0B1CB]/30 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#E0B1CB]/25 flex items-center justify-center shrink-0 text-[#231942]">
                  <Ruler className="w-5 h-5 text-[#5E548E]" />
                </div>
                <div>
                  <div className="font-bold text-xs text-[#231942]">دقة متناهية في الحياكة</div>
                  <div className="text-[11px] text-gray-500">فساتين سهرة وأعراس وأزياء راقية</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/75 backdrop-blur-md p-3.5 rounded-2xl border border-[#E0B1CB]/30 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#E0B1CB]/25 flex items-center justify-center shrink-0 text-[#231942]">
                  <Clock className="w-5 h-5 text-[#5E548E]" />
                </div>
                <div>
                  <div className="font-bold text-xs text-[#231942]">مواعيد دقيقة دون انتظار</div>
                  <div className="text-[11px] text-gray-500">استقبال منظم في بيئة هادئة ومريحة</div>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Showcase Card & Spatial Haute Atelier Composition (Clean, Uncluttered, Elegant) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Soft, Centered Ambient Aurora Glow (Zero GPU overhead) */}
              <div 
                className="absolute -inset-4 rounded-[36px] pointer-events-none opacity-45" 
                style={{ background: 'radial-gradient(ellipse at center, rgba(94, 84, 142, 0.35) 0%, rgba(224, 177, 203, 0.2) 50%, transparent 72%)' }} 
              />
              
              {/* Main Atelier Visual Card (Serene, Spacious Haute Couture Glass) */}
              <div className="relative bg-[#231942]/95 backdrop-blur-xl text-[#F5F5F5] rounded-[32px] p-7 sm:p-9 shadow-2xl border border-[#5E548E]/60 overflow-hidden card-luxury">
                
                {/* Background delicate stitch perimeter */}
                <div className="absolute inset-3 border border-dashed border-[#E0B1CB]/15 rounded-2xl pointer-events-none"></div>
                
                {/* Card Header with Logo & Status */}
                <div className="flex items-center justify-between pb-5 border-b border-[#5E548E]/40 relative z-10">
                  <div className="flex items-center gap-3">
                    <MaqasLogo className="w-12 h-12" variant="dark" />
                    <div>
                      <div className="font-amiri text-2xl font-bold tracking-wide text-[#F5F5F5]">مَقاس | MAQAS</div>
                      <div className="text-xs text-[#E0B1CB] font-tajawal">للخياطة النسائية وتعديل الملابس</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#E0B1CB]/15 border border-[#E0B1CB]/30 text-[#E0B1CB] text-[11px] font-medium backdrop-blur-sm">
                    محل خياطة خاص
                  </div>
                </div>

                {/* Central Emblem Artpiece (Spacious, Serene Floating Stage) */}
                <div className="my-8 text-center relative py-4">
                  {/* Circular Glow with Weightless Float Physics */}
                  <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-b from-[#5E548E]/50 to-[#E0B1CB]/25 p-1 flex items-center justify-center relative animate-float-gentle shadow-xl">
                    <div className="w-full h-full rounded-full bg-[#1e1539] flex items-center justify-center p-5 border border-[#E0B1CB]/40 shadow-inner">
                      <MaqasLogo className="w-20 h-20" variant="dark" />
                    </div>
                  </div>

                  <p className="mt-6 font-amiri text-lg text-gray-200 tracking-wide">
                    "حيث تجتمع راحة المكان مع براعة الحياكة اليدوية"
                  </p>
                </div>

                {/* Sleek Minimalist WhatsApp Reception Pill (Uncluttered & Clean) */}
                <a
                  href={getWhatsAppUrl('السلام عليكم، أرغب في حجز موعد قياس لدى مَقاس')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/10 hover:bg-white/15 border border-[#E0B1CB]/30 rounded-2xl p-3.5 text-xs text-gray-200 transition-all duration-300 group hover:-translate-y-0.5 active:scale-98 shadow-sm backdrop-blur-md relative z-10"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-white text-xs flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        <span>واتساب للأعمال المعتمد</span>
                      </div>
                      <div className="text-[10px] text-gray-400">متاح للاستفسار وحجز المواعيد</div>
                    </div>
                  </div>
                  <span className="text-[#E0B1CB] font-mono text-xs font-medium" dir="ltr">
                    +213 550 00 00 00
                  </span>
                </a>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
