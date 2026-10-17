import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'هل الأتيلييه مخصص للنساء فقط 100%؟',
      a: 'نعم، بكل تأكيد وصرامة. طاقم العمل نسائي بالكامل، ولا يُسمح بدخول الرجال تحت أي ظرف. تم تصميم الأتيلييه ليكون ملاذاً آمناً وخاصاً يمنحكِ كامل الراحة والحشمة والحرية أثناء أخذ القياسات والتجربة وكأنكِ في غرفتكِ الخاصة.'
    },
    {
      q: 'هل يتوجب عليّ حجز موعد مسبق أم يمكنني الزيارة مباشرة؟',
      a: 'نوصي بشدة بحجز موعد مسبق عبر الواتساب لتفادي أي انتظار، ولضمان تخصيص الأتيلييه لكِ وحدكِ خلال وقت القياس. في حال الزيارة المباشرة، يُرجى التأكد من لافتة الباب (مفتوح / سنعود بعد قليل).'
    },
    {
      q: 'ما هي أنواع الفساتين والأقمشة الدقيقة التي تستقبلونها؟',
      a: 'نستقبل كافة فساتين السهرة والأعراس والمناسبات، بما في ذلك الأقمشة الحساسة مثل الكريب الحريري، الشيفون، التول متعدد الطبقات، الدانتيل الفرنسي، الأقمشة المطرزة بالشك اليدوي، إضافة إلى العبايات الراقية والبليزرات الرسمية.'
    },
    {
      q: 'لدي مناسبة بعد يومين، هل تقدمون خدمة التعديل المستعجل؟',
      a: 'نعم، نوفر خدمة "VIP المستعجلة" للتعديلات الطارئة خلال 24 إلى 48 ساعة حسب طبيعة القطعة وحجم العمل، مع إعطاء الأولوية القصوى لإتمام فستانكِ بأعلى دقة ممكنة لتكوني جاهزة لمناسبتكِ.'
    },
    {
      q: 'كيف يتم تحديد التكلفة النهائية للتعديل؟',
      a: 'نقدم تقديراً أولياً شفافاً عبر حاسبة الموقع وكتالوج الواتساب. وعند حضوركِ للأتيلييه، تقوم الخبيرة بفحص خامة القماش، البطانة، وطريقة التعديل وتأكيد السعر النهائي المعتمد معكِ قبل البدء بأي خطوة.'
    },
    {
      q: 'هل يتم تصوير فستاني أو نشر صور الزبونات؟',
      a: 'ممنوع تصوير الزبونات منعاً باتاً وقاطعاً. كل ما قد ننشره على منصاتنا (إنستغرام وتيك توك) يقتصر فقط على تصوير حركات الإبرة وجودة الغرز على طاولة العمل دون إظهار أي معالم شخصية، حمايةً تامة لخصوصيتكِ.'
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
