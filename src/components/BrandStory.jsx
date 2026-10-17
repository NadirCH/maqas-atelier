import React from 'react';
import MaqasLogo from './MaqasLogo';
import { Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export default function BrandStory() {

  return (
    <section id="philosophy" className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Background Stitches */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#E0B1CB] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0B1CB]/25 text-[#5E548E] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>نظرة عامة وفلسفة البراند • Brand Overview</span>
          </div>
          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#231942] mb-4">
            تحويل التحدي إلى ميزة تنافسية فريدة
          </h2>
          <p className="font-tajawal text-gray-600 text-base sm:text-lg leading-relaxed">
            لم تكن المساحة المحدودة يوماً عائقاً في "مَقاس"، بل كانت الإلهام الأكبر لخلق تجربة حصرية تحاكي أجنحة الخياطة الخاصة بالقصور.
          </p>
        </div>

        {/* Narrative & Philosophy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Main Philosophy Card */}
          <div className="lg:col-span-7 bg-[#FAF5F9] rounded-3xl p-8 sm:p-10 border border-[#E0B1CB]/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#5E548E] flex items-center justify-center text-white shadow">
                  <Shield className="w-6 h-6 text-[#E0B1CB]" />
                </div>
                <div>
                  <h3 className="font-amiri text-2xl sm:text-3xl font-bold text-[#231942]">
                    محل خياطة نسائي خاص (Private Tailoring Boutique)
                  </h3>
                  <span className="text-xs font-tajawal text-[#5E548E] font-medium">الراحة التامة والخصوصية المطلقة</span>
                </div>
              </div>

              <p className="font-tajawal text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                يتحول صغر مساحة محل <strong>"مَقاس (MAQAS)"</strong> من تحدٍ لوجستي إلى ميزة تنافسية فريدة؛ حيث يُعاد تعريفه ليكون <strong>"محل خياطة نسائي خاص"</strong> يمنح الزبونة شعوراً بالراحة التامة والخصوصية المطلقة أثناء القياس والتعديل.
              </p>

              <blockquote className="border-r-4 border-[#5E548E] pr-4 py-2 my-6 bg-white/70 rounded-l-xl text-[#231942] font-amiri text-xl italic leading-relaxed">
                "تدخل السيدة إلى مَقاس، فتنسى صخب الأسواق ومحلات الخياطة العامة، لتشعر بأعلى درجات الراحة والاطمئنان، مع اهتمام كامل بكل ثنية وسنتيمتر في إطلالتها."
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#5E548E] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-medium">مخصص للنساء فقط بدون أي استثناء</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#5E548E] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-medium">جلسات قياس فردية مجدولة مسبقاً</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#5E548E] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-medium">حماية كاملة للخصوصية والراحة النفسية</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#5E548E] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-medium">خياطة هادئة ودقيقة خالية من العشوائية</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E0B1CB]/40 flex items-center justify-end text-xs text-[#5E548E]">
              <span className="font-bold">MAQAS Haute Couture & Tailoring</span>
            </div>
          </div>

          {/* Logo Story & Symbolism */}
          <div className="lg:col-span-5 bg-[#231942] text-white rounded-3xl p-8 sm:p-10 border border-[#5E548E] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#E0B1CB]/20 text-[#E0B1CB] border border-[#E0B1CB]/30">
                  فلسفة اللوغو الرسمي
                </span>
                <span className="text-xs text-gray-400">شعار مَقاس الرسمي</span>
              </div>

              <div className="flex justify-center my-6">
                <div className="p-4 rounded-2xl bg-[#1b1333] border border-[#5E548E]">
                  <MaqasLogo className="w-28 h-28" variant="dark" />
                </div>
              </div>

              <h3 className="font-amiri text-2xl font-bold text-center text-[#F5F5F5] mb-6">
                عناصر الشعار الرسمية
              </h3>

              <div className="space-y-4">
                <div className="bg-[#1b1333]/80 p-4 rounded-xl border border-[#5E548E]/40">
                  <div className="flex items-center gap-2 text-[#E0B1CB] font-bold text-sm mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#E0B1CB]"></span>
                    الرمز الدائري المزدوج
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-tajawal">
                    يرمز لاحتواء المكان، الخصوصية الفائقة، والأمان التام للنساء، كحلقة حماية تمنح السيدة الطمأنينة الكاملة.
                  </p>
                </div>

                <div className="bg-[#1b1333]/80 p-4 rounded-xl border border-[#5E548E]/40">
                  <div className="flex items-center gap-2 text-[#E0B1CB] font-bold text-sm mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#E0B1CB]"></span>
                    المانيكان والإبرة والخيط
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-tajawal">
                    قوام أنثوي رشيق متصل بخيط وإبرة خياطة دقيقة توحي بالحرفية العالية والإتقان المتقن لكل غرزة وتفصيلة.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#5E548E]/60 text-center">
              <span className="text-xs text-[#E0B1CB]">خطوط ناعمة ومبسطة تعبر عن الرقي والهدوء</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
