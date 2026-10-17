import React, { useState } from 'react';
import { 
  Scissors, 
  Ruler, 
  Sparkles, 
  Check, 
  Clock, 
  MessageSquare, 
  Star
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';

export default function ServicesCatalog({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');

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
      desc: 'تعديل دقيق للفساتين المعقدة متعددة الطبقات (التول، الساتان، الدانتيل، والتطريز اليدوي) مع الحفاظ على انسيابية التصميم الأصلي.',
      price: 'من 2,500 إلى 6,000 د.ج',
      time: '3 إلى 5 أيام',
      featured: true,
      features: ['تعديل طبقات التول والبطانة بعناية يدوية', 'صيانة التطريز وحبات الخرز الدقيقة', 'أخذ قياسات دقيقة وعناية خاصة بكل قطعة']
    },
    {
      id: 2,
      category: 'fitting',
      title: 'تضييق وتجسيم القوام (Contouring)',
      subtitle: 'Precision Silhouette Fitting',
      desc: 'إعادة ضبط مقاسات الخصر والصدر والأكتاف لتلائم تفاصيل قوامكِ بدقة متناهية دون شد أو تشوه في النسيج.',
      price: 'من 1,200 إلى 2,800 د.ج',
      time: '2 إلى 3 أيام',
      featured: false,
      features: ['تجسيم الخصر بطيات ودرزات داخلية متقنة', 'حياكة مطابقة تماماً للغرزة الأصلية', 'إمكانية التوسيع مستقبلاً عند الحاجة']
    },
    {
      id: 3,
      category: 'hemming',
      title: 'تقصير الحواشي بغرزة خفية (Blind Hem)',
      subtitle: 'Invisible Length Shortening',
      desc: 'تقصير احترافي للتنانير والفساتين والسراويل بغرزة غير مرئية تحافظ على الهيئة الفاخرة للقطعة.',
      price: 'من 400 إلى 900 د.ج',
      time: '24 إلى 48 ساعة',
      featured: false,
      features: ['غرزة خفية لا تظهر من الخارج نهائياً', 'كي احترافي بالبخار المضغوط', 'ملاءمة الطول بدقة مع الحذاء المختار']
    },
    {
      id: 4,
      category: 'zippers',
      title: 'استبدال وإصلاح السحابات المخفية',
      subtitle: 'Invisible Zipper Repair & Replacement',
      desc: 'استبدال السحابات التالفة بسحابات ناعمة ومتينة مدمجة بمهارة فائقة ضمن درزات الثوب.',
      price: 'من 500 إلى 1,000 د.ج',
      time: '24 إلى 48 ساعة',
      featured: false,
      features: ['سحابات مخفية متينة وسلسة الانزلاق', 'تطابق لوني تام مع لون القماش', 'تثبيت مشبك أمان داخلي']
    },
    {
      id: 5,
      category: 'fitting',
      title: 'تعديل أكمام وأكتاف السترات والعباءات',
      subtitle: 'Shoulder & Sleeve Refinement',
      desc: 'رفع الأكتاف وتقصير الأكمام مع الحفاظ على الأزرار والفتحات والبطانة الأصلية كما صممتها دار الأزياء.',
      price: 'من 1,000 إلى 2,200 د.ج',
      time: '2 إلى 3 أيام',
      featured: false,
      features: ['المحافظة على تفاصيل الأساور والفتحات', 'إعادة ضبط حشوة الكتف باتزان', 'تشطيب داخلي بالساتان الناعم']
    },
    {
      id: 6,
      category: 'evening',
      title: 'إعادة تصميم وإضافة بطانات وأكمام',
      subtitle: 'Restyling & Modest Lining Additions',
      desc: 'إضافة بطانات حريرية أو أكمام شيفون متناسقة مع فساتين السهرة لتوفير الراحة والاحتشام حسب رغبتكِ.',
      price: 'من 2,000 إلى 4,500 د.ج',
      time: '3 إلى 5 أيام',
      featured: true,
      features: ['انتقاء أقمشة مطابقة تماماً للموديل', 'تثبيت مريح وغير مرئي على البشرة', 'استشارة خياطة خاصة أثناء القياس']
    }
  ];

  const filteredCatalog = activeCategory === 'all' 
    ? catalog 
    : catalog.filter(item => item.category === activeCategory);

  const getWhatsAppBookingUrl = (serviceName, estPrice) => {
    const text = `السلام عليكم ورحمة الله، أود الاستفسار وحجز موعد لخدمة: ${serviceName} (التقدير المبدئي: ${estPrice}). هل يمكن تحديد موعد قياس مناسب؟`;
    return getWhatsAppUrl(text);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F5F5F5] relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0B1CB]/30 border border-[#E0B1CB] text-[#231942] text-xs font-semibold mb-3">
            <Scissors className="w-3.5 h-3.5 text-[#5E548E]" />
            <span>دليل الخدمات والأسعار التقديرية</span>
          </div>
          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#231942] mb-4">
            حرفية حياكة رفيعة تمنح أزياءكِ رونقاً مثالياً
          </h2>
          <p className="font-tajawal text-gray-600 text-base sm:text-lg leading-relaxed">
            نعتمد معايير شفافة ومحددة للأسعار والمواعيد عبر واتساب للأعمال، لنضمن لكِ أعلى مستويات الدقة والالتزام التام.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      </div>
    </section>
  );
}
