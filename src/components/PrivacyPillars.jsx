import React from 'react';
import { Shield, Lock, EyeOff, Sparkles, UserCheck, CheckCircle2, Home } from 'lucide-react';
import MaqasLogo from './MaqasLogo';

export default function PrivacyPillars() {
  const pillars = [
    {
      icon: <Lock className="w-6 h-6 text-[#E0B1CB]" />,
      title: 'مخصص للنساء فقط 100%',
      desc: 'بيئة نسائية مغلقة بالكامل، لا يُسمح بدخول الرجال تحت أي ظرف، لتتمكني من أخذ قياساتكِ وتجربة ملابسكِ بأقصى درجات الراحة والحشمة والاطمئنان.'
    },
    {
      icon: <EyeOff className="w-6 h-6 text-[#E0B1CB]" />,
      title: 'منع التصوير تماماً',
      desc: 'لا نقوم بتصوير الزبونات أبداً. جميع مقاطع الحياكة المعروضة على حساباتنا الرسمية هي لتفاصيل القماش والغرز اليدوية على طاولة العمل والمانيكان فقط.'
    },
    {
      icon: <Home className="w-6 h-6 text-[#E0B1CB]" />,
      title: 'محل خياطة خاص ومريح كغرفتكِ الخاصة',
      desc: 'صُممت مساحة مَقاس لتكون ملاذاً هادئاً، بعيداً عن زحام وهرج الأسواق العامة. أريكة مريحة، إضاءة دافئة، ومرآة ثلاثية لتأمل إطلالتكِ بهدوء.'
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#E0B1CB]" />,
      title: 'مواعيد فردية خاصة دون تداخل',
      desc: 'نظام مواعيد فردي مدروس؛ عند حضوركِ لجلسة القياس، يكون محل الخياطة مكرساً لكِ وحدكِ دون وجود زبونات أخريات ينتظرن، لمنحكِ الوقت الكافي.'
    }
  ];

  return (
    <section id="privacy" className="py-20 md:py-28 bg-[#FAF5F9] relative overflow-hidden">
      
      {/* Decorative thread curve */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#E0B1CB]/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner from Guide: "بانر الباب: إبراز عبارة مخصص للنساء فقط بخط واضح" */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-[#231942] text-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#5E548E] relative overflow-hidden text-center">
            
            {/* Top decorative stitch line */}
            <div className="w-24 h-1 bg-[#E0B1CB] mx-auto rounded-full mb-4"></div>

            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#E0B1CB]/20 border border-[#E0B1CB]/40 text-[#E0B1CB] text-xs font-bold mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>مواصفات لافتة الباب والمدخل المعتمدة</span>
            </div>

            <h3 className="font-amiri text-3xl sm:text-5xl font-bold text-[#F5F5F5] tracking-wide mb-3">
              ✦ مخصص للنساء فقط ✦
            </h3>

            <p className="font-tajawal text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              هذه العبارة ليست مجرد لافتة على مدخلنا، بل هي ميثاق الأمان والراحة التامة لكل سيدة تضع ثقتها في محل "مَقاس" للخياطة.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-[#E0B1CB]">
              <span className="flex items-center gap-1.5 bg-[#1a1233] px-3.5 py-1.5 rounded-full border border-[#5E548E]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                طاقم عمل نسائي محترف
              </span>
              <span className="flex items-center gap-1.5 bg-[#1a1233] px-3.5 py-1.5 rounded-full border border-[#5E548E]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                حرمة المكان وخصوصية القياس
              </span>
              <span className="flex items-center gap-1.5 bg-[#1a1233] px-3.5 py-1.5 rounded-full border border-[#5E548E]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                باب محمي ومغلق بالكامل
              </span>
            </div>

          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#231942] mb-4">
            أربعة أركان تحفظ راحتكِ وطمأنينتكِ
          </h2>
          <p className="font-tajawal text-gray-600 text-base sm:text-lg leading-relaxed">
            نعلم كم هي ثمينة فساتينكِ وأوقاتكِ، لذلك حرصنا على توفير بيئة تتفوق على كل ما عهدتِه في أسواق الخياطة المزدحمة.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-7 border border-[#E0B1CB]/40 shadow-sm hover:shadow-md hover:border-[#5E548E] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#231942] flex items-center justify-center mb-6 shadow-sm">
                  {p.icon}
                </div>
                <h3 className="font-amiri text-xl font-bold text-[#231942] mb-3">
                  {p.title}
                </h3>
                <p className="font-tajawal text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-[#5E548E]">
                <Sparkles className="w-3 h-3 text-[#E0B1CB]" />
                <span>معيار معتمد في محل مَقاس للخياطة</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
