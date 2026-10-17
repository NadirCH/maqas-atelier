import React from 'react';
import { Shield, Lock, EyeOff, Sparkles, UserCheck, CheckCircle2, Home } from 'lucide-react';
import MaqasLogo from './MaqasLogo';

export default function PrivacyPillars() {
  const pillars = [
    {
      icon: <Lock className="w-6 h-6 text-[#E0B1CB]" />,
      title: 'مخصص للنساء فقط 100%',
      desc: 'بيئة نسائية مغلقة بالكامل؛ يُحظر دخول الرجال تحت أي ظرف، لتتمكني من أخذ قياساتكِ وتجربة ملابسكِ بأعلى درجات الحشمة والاطمئنان.'
    },
    {
      icon: <EyeOff className="w-6 h-6 text-[#E0B1CB]" />,
      title: 'حظر التصوير تماماً',
      desc: 'لا نقوم بتصوير العميلات إطلاقاً. تقتصر المواد المعروضة على حساباتنا الرسمية حصراً على استعراض تفاصيل القماش ودقة الحياكة اليدوية على طاولة العمل والمانيكان فقط.'
    },
    {
      icon: <Home className="w-6 h-6 text-[#E0B1CB]" />,
      title: 'محل خياطة خاص وهادئ',
      desc: 'صُممت مساحة مَقاس لتكون ملاذاً هادئاً بعيداً عن صخب الأسواق العامة، مع مقاعد مريحة وإضاءة هادئة ومرآة متكاملة لمعاينة إطلالتكِ بكل طمأنينة.'
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#E0B1CB]" />,
      title: 'مواعيد فردية خاصة دون تداخل',
      desc: 'نظام مواعيد فردي محكم؛ عند حضوركِ لجلسة القياس، يُخصص المحل لكِ وحدكِ دون وجود عميلات أخريات في الانتظار، لمنحكِ كامل الوقت والاهتمام.'
    }
  ];

  return (
    <section id="privacy" className="py-20 md:py-28 bg-[#FAF5F9] relative overflow-hidden select-none">
      
      {/* Decorative Antigravity Thread Curve & Aurora */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#E0B1CB]/25 rounded-full blur-3xl pointer-events-none animate-pulse-aurora"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#5E548E]/15 rounded-full blur-3xl pointer-events-none animate-pulse-aurora" style={{ animationDelay: '2.5s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Door Plaque (بانر الباب: مخصص للنساء فقط) */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          
          {/* Spatial glowing backlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#5E548E]/30 via-[#E0B1CB]/40 to-[#5E548E]/30 rounded-[32px] blur-xl transform -rotate-1 pointer-events-none"></div>

          <div className="relative bg-[#231942]/95 backdrop-blur-xl text-white rounded-3xl p-7 sm:p-10 shadow-2xl border-2 border-[#5E548E]/70 overflow-hidden text-center card-luxury">
            
            {/* Top decorative stitch line */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E0B1CB] to-transparent mx-auto rounded-full mb-4"></div>

            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#E0B1CB]/20 border border-[#E0B1CB]/40 text-[#E0B1CB] text-xs font-bold mb-4 backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5" />
              <span>مواصفات لافتة الباب والمدخل المعتمدة</span>
            </div>

            <h3 className="font-amiri text-3xl sm:text-5xl font-bold text-[#F5F5F5] tracking-wide mb-3">
              ✦ مخصص للنساء فقط ✦
            </h3>

            <p className="font-tajawal text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              هذه العبارة ليست مجرد لافتة على مدخلنا، بل هي ميثاق الأمان والراحة التامة لكل سيدة تضع ثقتها في محل "مَقاس" للخياطة.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5 text-xs text-[#E0B1CB]">
              <span className="flex items-center gap-1.5 bg-[#1a1233]/90 px-4 py-2 rounded-full border border-[#5E548E]/70 shadow-sm backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                طاقم عمل نسائي محترف
              </span>
              <span className="flex items-center gap-1.5 bg-[#1a1233]/90 px-4 py-2 rounded-full border border-[#5E548E]/70 shadow-sm backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                حرمة المكان وخصوصية القياس
              </span>
              <span className="flex items-center gap-1.5 bg-[#1a1233]/90 px-4 py-2 rounded-full border border-[#5E548E]/70 shadow-sm backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                باب محمي ومغلق بالكامل
              </span>
            </div>

          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#231942] mb-4">
            أربعة أركان تصون راحتكِ وطمأنينتكِ
          </h2>
          <p className="font-tajawal text-gray-600 text-base sm:text-lg leading-relaxed">
            ندرك تماماً قيمة أزيائكِ ووقتكِ؛ لذا حرصنا على توفير بيئة تتفوق على ما عهدتِه في المحلات العامة المزدحمة.
          </p>
        </div>

        {/* 4 Pillars Grid with Antigravity Glass & Hover Levitation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div 
              key={idx}
              className="bg-white/85 backdrop-blur-md rounded-3xl p-7 border border-[#E0B1CB]/40 shadow-sm hover:shadow-xl hover:border-[#5E548E] transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#231942] group-hover:bg-[#342461] group-hover:rotate-3 flex items-center justify-center mb-6 shadow-md transition-all duration-300">
                  {p.icon}
                </div>
                <h3 className="font-amiri text-xl font-bold text-[#231942] mb-3 group-hover:text-[#5E548E] transition-colors">
                  {p.title}
                </h3>
                <p className="font-tajawal text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-[#5E548E]">
                <Sparkles className="w-3.5 h-3.5 text-[#E0B1CB] animate-pulse" />
                <span>معيار معتمد في محل مَقاس للخياطة</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
