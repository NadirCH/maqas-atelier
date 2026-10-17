import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'هل محل الخياطة مخصص للنساء فقط؟',
      a: 'نعم، بكل تأكيد وصرامة؛ إذ يتكون طاقم العمل من نساء حصراً، ويُحظر دخول الرجال تحت أي ظرف. وقد صُمم المحل ليكون بيئة آمنة تتيح لكِ كامل الراحة والحشمة والحرية أثناء أخذ القياسات وتجربة الملابس بأعلى درجات الاطمئنان.'
    },
    {
      q: 'هل يتعين عليّ حجز موعد مسبق أم يمكنني الحضور مباشرة؟',
      a: 'نوصي بشدة بحجز موعد مسبق عبر تطبيق واتساب تجنباً للانتظار، ولضمان تخصيص جلسة القياس في المحل لكِ وحدكِ في أجواء يسودها الهدوء التام.'
    },
    {
      q: 'ما هي أنواع الفساتين والأقمشة الدقيقة التي تستقبلونها؟',
      a: 'نستقبل كافة فساتين السهرة والأعراس والمناسبات، بما في ذلك الأنسجة الرقيقة مثل الكريب الحريري، والشيفون، والتول متعدد الطبقات، والدانتيل الفرنسي، والأقمشة المرصعة بالتطريز والخرز اليدوي، فضلاً عن السترات والعباءات الراقية.'
    },
    {
      q: 'لديّ مناسبة بعد يومين، هل تقدمون خدمة التعديل المستعجل؟',
      a: 'نعم، نوفر خدمة التعديل السريع للحالات الطارئة خلال 24 إلى 48 ساعة وفق طبيعة القطعة وحجم العمل المطلوب، مع إيلاء العناية القصوى لإنجاز فستانكِ بأعلى درجات الإتقان لتكوني جاهزة لمناسبتكِ.'
    },
    {
      q: 'كيف يتم تحديد التكلفة النهائية للتعديل؟',
      a: 'نقدم تقديراً أولياً واضحاً عبر حاسبة الموقع ورسائل واتساب. وعند حضوركِ إلى المحل، تعاين خبيرة الخياطة خامة القماش، والبطانة، ونوع التعديل المطلوب، وتعتمد معكِ السعر النهائي بدقة قبل البدء بالعمل.'
    },
    {
      q: 'هل يتم تصوير فستاني أو نشر صور العميلات؟',
      a: 'يُمنع تصوير العميلات منعاً باتاً وقاطعاً. وتقتصر المواد المعروضة على منصاتنا حصراً على إبراز تفاصيل الحياكة اليدوية ودقة الغرز على طاولة العمل والمانيكان دون إظهار أي ملامح شخصية، صوناً تاماً لخصوصيتكِ وحرمتكِ.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF5F9] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0B1CB]/30 border border-[#E0B1CB] text-[#231942] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#5E548E]" />
            <span>الأسئلة الشائعة والمعلومات الهامة</span>
          </div>
          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#231942] mb-4">
            كل ما تودين معرفته قبل زيارتنا
          </h2>
          <p className="font-tajawal text-gray-600 text-base sm:text-lg">
            إجابات وافية تضمن لكِ تجربة خياطة سلسة، مريحة وموثوقة بنسبة 100%.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-[#E0B1CB]/40 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-right p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-amiri text-lg sm:text-xl font-bold text-[#231942]">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full bg-[#FAF5F9] flex items-center justify-center shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 bg-[#5E548E] text-white' : 'text-[#231942]'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {openIdx === idx && (
                <div className="px-5 pb-6 sm:px-6 pt-0 text-sm text-gray-700 font-tajawal leading-relaxed border-t border-gray-100 animate-fadeIn">
                  <p className="mt-3">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
