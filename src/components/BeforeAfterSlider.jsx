import React, { useState } from 'react';
import { Sparkles, Scissors, ShieldAlert, Eye, CheckCircle2, ArrowLeftRight } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100

  const cases = [
    {
      title: 'فستان سهرة كريب حريري • تجسيم الخصر والوسط',
      subtitle: 'Silk Crepe Evening Gown — Bespoke Waist Contouring',
      category: 'تجسيم قوام وسهرة',
      before: {
        status: 'قبل التعديل (Before)',
        desc: 'ترهل واضح في منطقة الخصر، تجاعيد غير منتظمة حول الورك، وأكتاف ساقطة تشوه قوام الفستان.',
        highlight: 'اتساع غير متناسق +4.5 سم مع انحراف خط الخياطة الجانبي'
      },
      after: {
        status: 'بعد التعديل (After)',
        desc: 'قوام ممشوق ومنحوت بانسيابية تامة، غرز خفية 100% بدون أي أثر أو شد على النسيج الحريري الحساس.',
        highlight: 'تطابق مليمتر مع مقاس السيدة وكي بالبخار الإيطالي المضغوط'
      },
      tags: ['قماش كريب حريري', 'بنسات مخفية', 'كي بخار مضغوط'],
      craftsmanshipNote: 'تمت الحياكة بإبرة ميكروتيكس 60/8 الدقيقة وخيط حرير مخصص لعدم إتلاف أنسجة القماش.'
    },
    {
      title: 'فستان مناسبات مع دانتيل • استبدال سحاب مخفي ياباني',
      subtitle: 'Evening Dress with French Lace — Invisible Zipper Repair',
      category: 'سحابات مخفية ودانتيل',
      before: {
        status: 'قبل التعديل (Before)',
        desc: 'سحاب تالف ومنفصل جزئياً، تمزق طفيف في طبقة الدانتيل الفرنسي، وانفتاح غير آمن عند الظهر.',
        highlight: 'أسنان السحاب مكسورة وتعرج حواف الدانتيل الأصلية'
      },
      after: {
        status: 'بعد التعديل (After)',
        desc: 'دمج سحاب مخفي YKK أصلي فائق النعومة، مع تقوية دعامة الدانتيل وتثبيت مشبك أمان علوي.',
        highlight: 'إخفاء كامل للسحاب بحيث يبدو كأنه درزة قماشية طبيعية'
      },
      tags: ['دانتيل فرنسي', 'سحاب YKK خفي', 'تقوية بطانة داخلية'],
      craftsmanshipNote: 'تم ترقيع وتدعيم خيوط الدانتيل بغرزة يدوية دقيقة قبل تثبيت السحاب الجديد.'
    },
    {
      title: 'فستان تول بطبقات متعددة • تقصير حواشي هورس هير',
      subtitle: 'Multi-layer Tulle Ballgown — Layered Hem Shortening',
      category: 'فساتين أعراس وتقصير طبقات',
      before: {
        status: 'قبل التعديل (Before)',
        desc: 'طول مفرط يعيق الحركة ويتعرض للتمزق تحت الكعب، مع عدم توازن بين طبقات التول والبطانة.',
        highlight: 'تفاوت في الأطوال بمقدار 7 سم وسحب للأرضية'
      },
      after: {
        status: 'بعد التعديل (After)',
        desc: 'قص متدرج لـ 5 طبقات تول مع شريط تقوية الحاشية (Horsehair Braid) لمنح الفستان تموجاً ملكياً منتظماً.',
        highlight: 'ارتفاع مثالي بمقدار 2 سم عن الكعب لحرية الحركة والأناقة'
      },
      tags: ['5 طبقات تول', 'شريط هورس هير', 'قص ليزري متدرج'],
      craftsmanshipNote: 'تم قياس وضبط كل طبقة على حدة مع مراعاة ثقل الجيبون وحركة المشي الطبيعية.'
    }
  ];

  const current = cases[activeCase];

  return (
    <section id="before-after" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0B1CB]/30 border border-[#E0B1CB] text-[#231942] text-xs font-semibold mb-3">
            <Scissors className="w-3.5 h-3.5 text-[#5E548E]" />
            <span>معرض قبل وبعد على طاولة العمل • Before & After</span>
          </div>
          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#231942] mb-4">
            إتقان ناطق في كل غرزة وتفصيلة
          </h2>
          <p className="font-tajawal text-gray-600 text-base sm:text-lg leading-relaxed">
            وفقاً لسياسة مَقاس الرقمية، نستعرض نتائج التعديل على طاولة العمل والمانيكان فقط، حفاظاً على الخصوصية المطلقة لزبوناتنا الكريمات.
          </p>
        </div>

        {/* Case Studies Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {cases.map((c, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCase(idx);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-tajawal font-bold transition-all ${
                activeCase === idx
                  ? 'bg-[#231942] text-[#F5F5F5] shadow-md scale-105'
                  : 'bg-[#F5F5F5] text-gray-700 hover:bg-[#E0B1CB]/20 border border-gray-200'
              }`}
            >
              {c.title.split('•')[0]}
            </button>
          ))}
        </div>

        {/* The Visual Comparison Stage */}
        <div className="bg-[#FAF5F9] rounded-3xl border border-[#E0B1CB]/50 p-6 sm:p-10 shadow-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            
            {/* Visual Interactive Slider (Simulated Work Table Split View) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#231942] aspect-[16/10] select-none">
                
                {/* "Before" Side (Left/Under) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2d224e] to-[#1a1233] p-6 sm:p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="bg-rose-500/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      قبل الحياكة (BEFORE)
                    </span>
                    <span className="text-gray-400 text-xs font-mono">طاولة العمل #01</span>
                  </div>

                  {/* Stylized Visual Mockup for BEFORE */}
                  <div className="my-auto text-center py-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full border-2 border-dashed border-rose-400/50 flex items-center justify-center bg-rose-950/30 mb-3">
                      <Scissors className="w-10 h-10 text-rose-300 opacity-80 rotate-45" />
                    </div>
                    <div className="text-sm sm:text-base font-amiri text-rose-200 font-bold">
                      {current.before.highlight}
                    </div>
                    <p className="text-xs text-gray-300 mt-1 max-w-sm mx-auto">
                      {current.before.desc}
                    </p>
                  </div>

                  <div className="text-[11px] text-gray-400 border-t border-rose-500/20 pt-2 flex items-center justify-between">
                    <span>حالة القطعة عند الاستلام</span>
                    <span className="text-rose-300 font-mono">غير متناسق</span>
                  </div>
                </div>

                {/* "After" Overlay (Controlled by slider width) */}
                <div 
                  className="absolute inset-y-0 right-0 bg-gradient-to-bl from-[#18102d] via-[#231942] to-[#3a2c66] p-6 sm:p-8 flex flex-col justify-between overflow-hidden border-l-2 border-[#E0B1CB]"
                  style={{ width: `${100 - sliderPos}%` }}
                >
                  <div className="flex items-center justify-between w-full min-w-[280px]">
                    <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>بعد الإتقان (AFTER)</span>
                    </span>
                    <span className="text-[#E0B1CB] text-xs font-mono">معتمد 100%</span>
                  </div>

                  {/* Stylized Visual Mockup for AFTER */}
                  <div className="my-auto text-center py-4 w-full min-w-[280px]">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full border-2 border-[#E0B1CB] flex items-center justify-center bg-[#E0B1CB]/20 mb-3 shadow-lg">
                      <Sparkles className="w-10 h-10 text-[#E0B1CB]" />
                    </div>
                    <div className="text-sm sm:text-base font-amiri text-[#E0B1CB] font-bold">
                      {current.after.highlight}
                    </div>
                    <p className="text-xs text-gray-200 mt-1 max-w-sm mx-auto">
                      {current.after.desc}
                    </p>
                  </div>

                  <div className="text-[11px] text-gray-300 border-t border-[#E0B1CB]/30 pt-2 flex items-center justify-between w-full min-w-[280px]">
                    <span>جاهز للاستلام والتسليم</span>
                    <span className="text-emerald-400 font-bold">حياكة متقنة</span>
                  </div>
                </div>

                {/* Draggable Divider Handle Line */}
                <div 
                  className="absolute inset-y-0 w-1 bg-[#E0B1CB] shadow-2xl pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#231942] shadow-xl flex items-center justify-center border-2 border-[#5E548E] cursor-ew-resize">
                    <ArrowLeftRight className="w-4 h-4 text-[#5E548E]" />
                  </div>
                </div>

              </div>

              {/* Slider Control Bar */}
              <div className="mt-4 flex items-center gap-4">
                <span className="text-xs font-bold text-gray-500 shrink-0">قبل الحياكة</span>
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#5E548E]"
                  aria-label="تحريك شريط المقارنة بين قبل وبعد"
                />
                <span className="text-xs font-bold text-[#5E548E] shrink-0">بعد التعديل</span>
              </div>
            </div>

            {/* Case Details & Atelier Craftsmanship Notes */}
            <div className="lg:col-span-5 text-right flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#5E548E]/15 text-[#5E548E] mb-2 inline-block">
                  {current.category}
                </span>

                <h3 className="font-amiri text-2xl sm:text-3xl font-bold text-[#231942] mb-2">
                  {current.title}
                </h3>
                <p className="text-xs font-mono text-gray-500 mb-6">
                  {current.subtitle}
                </p>

                {/* Craftsmanship Note */}
                <div className="bg-white rounded-2xl p-5 border border-[#E0B1CB]/40 shadow-sm mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#231942] mb-2">
                    <Sparkles className="w-4 h-4 text-[#5E548E]" />
                    <span>ملاحظة الخبيرة على طاولة العمل:</span>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed font-tajawal">
                    {current.craftsmanshipNote}
                  </p>
                </div>

                {/* Fabric & Materials Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {current.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-[#E0B1CB]/25 text-[#231942] font-medium px-3 py-1 rounded-lg border border-[#E0B1CB]/50"
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Privacy Notice Reminder (Page 4) */}
              <div className="bg-[#231942] text-white p-4 rounded-2xl flex items-center gap-3 border border-[#5E548E]">
                <div className="w-9 h-9 rounded-xl bg-[#E0B1CB]/20 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5 text-[#E0B1CB]" />
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  <strong className="text-[#E0B1CB]">التزام أخلاقي وخصوصية تامة:</strong> جميع الصور والفيديوهات تُصور حصرياً على طاولة العمل ودون تصوير الزبونات نهائياً لحفظ الأمان والستر التام.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
