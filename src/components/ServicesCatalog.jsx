import React, { useState } from 'react';
import { 
  Scissors, 
  Ruler, 
  Sparkles, 
  Check, 
  Clock, 
  MessageSquare, 
  Calculator, 
  ArrowRight,
  ShieldCheck,
  Star
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';

export default function ServicesCatalog({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Interactive Calculator State
  const [selectedGarment, setSelectedGarment] = useState('evening-dress');
  const [selectedService, setSelectedService] = useState('contouring');
  const [urgency, setUrgency] = useState('normal'); // 'normal' or 'express'

  const categories = [
    { id: 'all', name: 'جميع الخدمات' },
    { id: 'evening', name: 'فساتين السهرة والأعراس' },
    { id: 'fitting', name: 'تضييق وتجسيم القوام' },
    { id: 'hemming', name: 'التقصير والتشطيب' },
    { id: 'zippers', name: 'السحابات والمثبتات' },
  ];

  const catalog = [
    {
      id: 1,
      category: 'evening',
      title: 'تعديل فساتين السهرة والأعراس',
      subtitle: 'Evening & Bridal Gown Alterations',
      desc: 'تعديل دقيق للفساتين المعقدة متعددة الطبقات (تول، ساتان، دانتيل، شك يدوي) مع الحفاظ على انسيابية الموديل الأصلي.',
      price: 'من 2,500 إلى 6,000 د.ج',
      time: '3 إلى 5 أيام',
      featured: true,
      features: ['تعديل طبقات التول والبطانة يدوياً', 'حماية التطريز والخرز الحساس', 'قياس فردي وتجربة في محل الخياطة']
    },
    {
      id: 2,
      category: 'fitting',
      title: 'تضييق وتجسيم القوام (Contouring)',
      subtitle: 'Precision Silhouette Fitting',
      desc: 'إعادة ضبط مقاس الخصر والوسط والأكتاف لتناسب تفاصيل قوامكِ بدقة مليمترية دون شد أو انتفاخ في القماش.',
      price: 'من 1,200 إلى 2,800 د.ج',
      time: '2 إلى 3 أيام',
      featured: false,
      features: ['تجسيم خصر وبنسات داخلية', 'خياطة مطابقة للغرزة الأصلية', 'إمكانية التوسيع مستقبلاً']
    },
    {
      id: 3,
      category: 'hemming',
      title: 'تقصير الحواشي المخفية (Blind Hem)',
      subtitle: 'Invisible Length Shortening',
      desc: 'تقصير احترافي للتنانير والفساتين والبنطلونات بغرزة مخفية بالكامل تحافظ على المظهر الفاخر للقطعة.',
      price: 'من 400 إلى 900 د.ج',
      time: '24 إلى 48 ساعة',
      featured: false,
      features: ['غرزة خفية لا تظهر من الخارج', 'كي بالبخار الإيطالي المضغوط', 'ضبط الطول مع الكعب المفضل']
    },
    {
      id: 4,
      category: 'zippers',
      title: 'استبدال وتصليح السحابات المخفية',
      subtitle: 'Invisible Zipper Repair & Replacement',
      desc: 'استبدال السحابات التالفة بسحابات يابانية عالية الجودة مدمجة بإتقان فائق ضمن درزات الفستان أو العباية.',
      price: 'من 500 إلى 1,000 د.ج',
      time: '24 إلى 48 ساعة',
      featured: false,
      features: ['سحابات مخفية قوية وناعمة الانزلاق', 'تطابق لوني تام مع القماش', 'تثبيت هوك داخلي للأمان']
    },
    {
      id: 5,
      category: 'fitting',
      title: 'تعديل أكمام وأكتاف البليزرات والعبايات',
      subtitle: 'Shoulder & Sleeve Refinement',
      desc: 'رفع الأكتاف وتقصير الأكمام مع الحفاظ على الأزرار وشقوق البطانة الأصلية كما صُممت من دار الأزياء.',
      price: 'من 1,000 إلى 2,200 د.ج',
      time: '2 إلى 3 أيام',
      featured: false,
      features: ['الحفاظ على تفاصيل الأساور والفتحات', 'إعادة وزن حشوة الكتف', 'تشطيب داخلي بالساتان']
    },
    {
      id: 6,
      category: 'evening',
      title: 'إعادة تصميم وإضافة بطانات/أكمام',
      subtitle: 'Restyling & Modest Lining Additions',
      desc: 'إضافة بطانات حريرية أو أكمام شيفون متناسقة مع فساتين السهرة لتوفير الراحة والاحتشام حسب رغبتكِ.',
      price: 'من 2,000 إلى 4,500 د.ج',
      time: '3 إلى 5 أيام',
      featured: true,
      features: ['اختيار أقمشة مطابقة تماماً للموديل', 'تثبيت غير مرئي ومريح للبشرة', 'استشارة خياطة خاصة أثناء القياس']
    }
  ];

  const filteredCatalog = activeCategory === 'all' 
    ? catalog 
    : catalog.filter(item => item.category === activeCategory);

  // Calculator Pricing logic (in Algerian Dinars DZD - د.ج)
  const garmentRates = {
    'evening-dress': { name: 'فستان سهرة أو مناسبات', base: 2500 },
    'abaya': { name: 'عباية راقية / كيمونو', base: 1200 },
    'trousers': { name: 'بنطال قماش أو جينز راقٍ', base: 600 },
    'skirt': { name: 'تنورة بليسيه أو مستقيمة', base: 700 },
    'blazer': { name: 'بليزر أو جاكيت رسمي', base: 1500 },
  };

  const serviceRates = {
    'contouring': { name: 'تضييق وتجسيم القوام بالكامل', mult: 1.3, days: 3 },
    'hemming': { name: 'تقصير حاشية بغرزة مخفية', mult: 0.8, days: 2 },
    'zipper': { name: 'استبدال سحاب مخفي مع تقوية', mult: 0.8, days: 2 },
    'shoulders': { name: 'تعديل أكتاف وأكمام', mult: 1.1, days: 3 },
    'full-revamp': { name: 'تعديل شامل (طول + خصر + بطانة)', mult: 2.0, days: 4 },
  };

  const currentGarment = garmentRates[selectedGarment];
  const currentService = serviceRates[selectedService];
  const baseCost = Math.round(currentGarment.base * currentService.mult);
  const urgencyMultiplier = urgency === 'express' ? 1.3 : 1.0;
  const estimatedMin = Math.round(baseCost * urgencyMultiplier);
  const estimatedMax = Math.round((baseCost + 500) * urgencyMultiplier);
  const estimatedDays = urgency === 'express' ? '24 - 48 ساعة (خدمة سريعة)' : `${currentService.days} إلى ${currentService.days + 1} أيام عمل`;

  const getWhatsAppBookingUrl = (serviceName, estPrice) => {
    const text = `مرحباً محل مقاس للخياطة، أود الاستفسار وحجز موعد لخدمة: ${serviceName} (التقدير: ${estPrice}). هل يمكن تحديد موعد قياس مناسب؟`;
    return getWhatsAppUrl(text);
  };

  const getCalculatorWhatsAppUrl = () => {
    const text = `مرحباً محل مقاس للخياطة، استخدمت حاسبة الأسعار وأرغب في حجز موعد لتعديل:
- نوع القطعة: ${currentGarment.name}
- التعديل المطلوب: ${currentService.name}
- نوع الموعد: ${urgency === 'express' ? 'مستعجل VIP (24-48 ساعة)' : 'عادي'}
- التكلفة التقديرية: ${estimatedMin.toLocaleString()} - ${estimatedMax.toLocaleString()} د.ج
هل يتوفر موعد قياس في محل الخياطة؟`;
    return getWhatsAppUrl(text);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F5F5F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0B1CB]/30 border border-[#E0B1CB] text-[#231942] text-xs font-semibold mb-3">
            <Scissors className="w-3.5 h-3.5 text-[#5E548E]" />
            <span>كتالوج الخدمات الثابت والأسعار التقديرية</span>
          </div>
          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#231942] mb-4">
            حرفية خياطة رفيعة تمنح قطعكِ رونقها المثالي
          </h2>
          <p className="font-tajawal text-gray-600 text-base sm:text-lg leading-relaxed">
            نعتمد معايير شفافة ومحددة للأسعار والمواعيد عبر كتالوج واتساب للأعمال، لنضمن لكِ أعلى مستويات الدقة والالتزام التام.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-tajawal text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#231942] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-[#E0B1CB]/20 border border-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredCatalog.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between relative group ${
                item.featured 
                  ? 'border-[#5E548E] shadow-lg ring-1 ring-[#5E548E]/20' 
                  : 'border-gray-200 shadow-sm hover:shadow-md hover:border-[#E0B1CB]'
              }`}
            >
              {item.featured && (
                <div className="absolute -top-3.5 right-6 bg-[#5E548E] text-[#F5F5F5] text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                  <Star className="w-3 h-3 text-[#E0B1CB] fill-current" />
                  <span>الأكثر طلباً للأعراس والسهرات</span>
                </div>
              )}

              <div>
                <div className="text-xs font-medium text-[#5E548E] mb-1 font-mono">
                  {item.subtitle}
                </div>
                <h3 className="font-amiri text-2xl font-bold text-[#231942] mb-3">
                  {item.title}
                </h3>
                <p className="font-tajawal text-sm text-gray-600 leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6 border-t border-b border-gray-100 py-4">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                      <div className="w-4 h-4 rounded-full bg-[#FAF5F9] border border-[#E0B1CB] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#5E548E]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Price and Time Badge */}
                <div className="bg-[#FAF5F9] rounded-2xl p-4 mb-4 flex items-center justify-between border border-[#E0B1CB]/40">
                  <div>
                    <span className="text-[11px] text-gray-500 block">السعر التقديري:</span>
                    <span className="font-bold text-sm text-[#231942]">{item.price}</span>
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] text-gray-500 block">مدة الإنجاز:</span>
                    <span className="text-xs font-semibold text-[#5E548E] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.time}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <a
                    href={getWhatsAppBookingUrl(item.title, item.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#231942] hover:bg-[#5E548E] text-[#F5F5F5] py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#E0B1CB]" />
                    <span>طلب الخدمة عبر واتساب</span>
                  </a>

                  <button
                    onClick={onOpenBooking}
                    className="bg-[#E0B1CB]/30 hover:bg-[#E0B1CB]/60 text-[#231942] p-2.5 rounded-xl text-xs transition-colors"
                    title="حجز موعد في محل الخياطة"
                  >
                    <Ruler className="w-4 h-4 text-[#5E548E]" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Cost & Timeline Calculator */}
        <div className="bg-gradient-to-br from-[#231942] to-[#1c1335] text-white rounded-3xl p-6 sm:p-12 border border-[#5E548E] shadow-2xl relative overflow-hidden">
          
          {/* Subtle Sewing Background Line */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E0B1CB]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0B1CB]/20 text-[#E0B1CB] text-xs font-semibold mb-4">
                <Calculator className="w-4 h-4" />
                <span>حاسبة التكلفة والموعد الفورية</span>
              </div>
              <h3 className="font-amiri text-2xl sm:text-4xl font-bold text-[#F5F5F5] mb-3">
                احسبي تكلفة تعديل قطعتكِ قبل الزيارة
              </h3>
              <p className="font-tajawal text-gray-300 text-sm leading-relaxed mb-6">
                حددي نوع القطعة والتعديل المطلوب للحصول على تقدير فوري شفاف، وإرسال تفاصيل طلبكِ مباشرة لكتالوج الواتساب دون أي مفاجآت.
              </p>

              <div className="space-y-4">
                {/* Select Garment */}
                <div>
                  <label className="block text-xs font-semibold text-[#E0B1CB] mb-1.5">
                    1. ما نوع القطعة المراد تعديلها؟
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {Object.entries(garmentRates).map(([key, val]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedGarment(key)}
                        className={`text-xs py-2.5 px-3 rounded-xl border text-right transition-all ${
                          selectedGarment === key
                            ? 'bg-[#E0B1CB] text-[#231942] font-bold border-[#E0B1CB]'
                            : 'bg-[#2b1f4f] text-gray-200 border-[#5E548E]/40 hover:bg-[#34265f]'
                        }`}
                      >
                        {val.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Select Service */}
                <div>
                  <label className="block text-xs font-semibold text-[#E0B1CB] mb-1.5">
                    2. ما هو نوع التعديل الرئيسي؟
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {Object.entries(serviceRates).map(([key, val]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedService(key)}
                        className={`text-xs py-2.5 px-3 rounded-xl border text-right transition-all flex items-center justify-between ${
                          selectedService === key
                            ? 'bg-[#E0B1CB] text-[#231942] font-bold border-[#E0B1CB]'
                            : 'bg-[#2b1f4f] text-gray-200 border-[#5E548E]/40 hover:bg-[#34265f]'
                        }`}
                      >
                        <span>{val.name}</span>
                        {selectedService === key && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Select Urgency */}
                <div>
                  <label className="block text-xs font-semibold text-[#E0B1CB] mb-1.5">
                    3. موعد التسليم المطلوب:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setUrgency('normal')}
                      className={`text-xs py-2.5 px-3 rounded-xl border transition-all text-center ${
                        urgency === 'normal'
                          ? 'bg-[#5E548E] text-white font-bold border-[#E0B1CB]'
                          : 'bg-[#2b1f4f] text-gray-300 border-[#5E548E]/40'
                      }`}
                    >
                      موعد قياسي (3-4 أيام)
                    </button>
                    <button
                      onClick={() => setUrgency('express')}
                      className={`text-xs py-2.5 px-3 rounded-xl border transition-all text-center ${
                        urgency === 'express'
                          ? 'bg-[#E0B1CB] text-[#231942] font-bold border-[#E0B1CB]'
                          : 'bg-[#2b1f4f] text-gray-300 border-[#5E548E]/40'
                      }`}
                    >
                      ⚡ مستعجل VIP (24-48 ساعة)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculator Result Box */}
            <div className="lg:col-span-5 bg-[#17102D] rounded-2xl p-6 sm:p-8 border border-[#5E548E]/60 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#5E548E]/40 mb-4">
                  <span className="text-xs text-gray-400">ملخص التقدير المبدئي:</span>
                  <span className="text-xs font-bold text-[#E0B1CB]">محل مَقاس للخياطة</span>
                </div>

                <div className="space-y-3 mb-6 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">القطعة:</span>
                    <span className="font-semibold text-white">{currentGarment.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">التعديل:</span>
                    <span className="font-semibold text-white">{currentService.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">المدة المتوقعة:</span>
                    <span className="font-semibold text-[#E0B1CB]">{estimatedDays}</span>
                  </div>
                </div>

                <div className="bg-[#231942] rounded-xl p-4 border border-[#5E548E] text-center mb-6">
                  <span className="text-xs text-gray-300 block mb-1">التكلفة التقديرية المتوقعة:</span>
                  <div className="font-amiri text-3xl sm:text-4xl font-bold text-[#E0B1CB]">
                    {estimatedMin.toLocaleString()} - {estimatedMax.toLocaleString()} <span className="text-lg font-tajawal text-white">د.ج</span>
                  </div>
                  <span className="text-[11px] text-gray-400 mt-1 block">
                    * يتم تأكيد السعر النهائي بدقة عند فحص القطعة بجلسة القياس
                  </span>
                </div>
              </div>

              <div>
                <a
                  href={getCalculatorWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#E0B1CB] hover:bg-[#d69bbe] text-[#231942] py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>إرسال هذا التقدير وحجز موعد عبر واتساب</span>
                </a>

                <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 mt-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>خصوصية تامة واستجابة سريعة خلال دقائق العمل</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
