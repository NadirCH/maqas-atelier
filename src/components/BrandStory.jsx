import React, { useState } from 'react';
import MaqasLogo from './MaqasLogo';
import { Eye, Shield, Sparkles, Scissors, Layers, CheckCircle2, Copy, Check } from 'lucide-react';

export default function BrandStory() {
  const [activeTab, setActiveTab] = useState('philosophy');
  const [copiedHex, setCopiedHex] = useState(null);

  const colors = [
    {
      name: 'أبيض دخاني ناعم (Off-White)',
      hex: '#F5F5F5',
      use: 'الخلفيات الأساسية وبطن البطاقات والبانرات',
      border: 'border-gray-300'
    },
    {
      name: 'وردي لافندر (Mauve)',
      hex: '#E0B1CB',
      use: 'اللمسات الأنثوية، الشارات البارزة، والخلفيات الناعمة',
      border: 'border-[#d09ab7]'
    },
    {
      name: 'بنفسجي متوسط (Medium Purple)',
      hex: '#5E548E',
      use: 'الإطارات الفاصلة، العناوين الفرعية، وإبرة الخياطة',
      border: 'border-[#4e4577]'
    },
    {
      name: 'بنفسجي ليلي عميق (Deep Violet)',
      hex: '#231942',
      use: 'النصوص الرئيسية، اسم البراند، وخلفية البطاقات',
      border: 'border-[#1b1333]'
    }
  ];

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

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
                    أتيلييه نسائي خاص (Private Atelier)
                  </h3>
                  <span className="text-xs font-tajawal text-[#5E548E] font-medium">الراحة التامة والخصوصية المطلقة</span>
                </div>
              </div>

              <p className="font-tajawal text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                يتحول صغر مساحة محل <strong>"مَقاس (MAQAS)"</strong> من تحدٍ لوجستي إلى ميزة تنافسية فريدة؛ حيث يُعاد تعريفه ليكون <strong>"أتيلييه نسائي خاص"</strong> يمنح الزبونة شعوراً بالراحة التامة والخصوصية المطلقة أثناء القياس والتعديل.
              </p>

              <blockquote className="border-r-4 border-[#5E548E] pr-4 py-2 my-6 bg-white/70 rounded-l-xl text-[#231942] font-amiri text-xl italic leading-relaxed">
                "تدخل السيدة إلى مَقاس، فتنسى صخب الأسواق ومحلات الخياطة العامة، لتشعر وكأنها في غرفتها الخاصة، مع اهتمام كامل بكل ثنية وسنتيمتر في إطلالتها."
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

            <div className="mt-8 pt-6 border-t border-[#E0B1CB]/40 flex items-center justify-between text-xs text-[#5E548E]">
              <span>دليل الهوية البصرية • الإصدار المعتمد 2026</span>
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
                <span className="text-xs text-gray-400">Minimalist Line Art</span>
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

        {/* Color Palette & Typography Showcase from Guidelines */}
        <div className="bg-[#F5F5F5] rounded-3xl p-6 sm:p-10 border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-gray-200 gap-4">
            <div>
              <h3 className="font-amiri text-2xl sm:text-3xl font-bold text-[#231942]">
                لوحة الألوان المعتمدة (Brand Color Palette)
              </h3>
              <p className="font-tajawal text-sm text-gray-600 mt-1">
                تدرج لمسات الباستيل الهادئة مع التباين الداكن للوضوح والأناقة الاحترافية
              </p>
            </div>
            <div className="text-xs text-gray-500 font-mono">
              اضغطي على أي لون لنسخ كود الـ Hex
            </div>
          </div>

          {/* Color Swatches Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {colors.map((color) => (
              <div 
                key={color.hex}
                onClick={() => handleCopy(color.hex)}
                className={`bg-white rounded-2xl p-4 border ${color.border} shadow-sm hover:shadow-md transition-all cursor-pointer group relative`}
              >
                {/* Color Swatch Block */}
                <div 
                  className="h-28 rounded-xl w-full mb-3 shadow-inner flex items-center justify-center transition-transform group-hover:scale-[1.02] relative"
                  style={{ backgroundColor: color.hex }}
                >
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1 ${
                    color.hex === '#F5F5F5' || color.hex === '#E0B1CB' 
                      ? 'bg-black/80 text-white' 
                      : 'bg-white/90 text-[#231942]'
                  }`}>
                    {copiedHex === color.hex ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        تم النسخ!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 opacity-60" />
                        {color.hex}
                      </>
                    )}
                  </span>
                </div>

                <div className="text-right">
                  <div className="font-bold text-sm text-[#231942] mb-1">
                    {color.name}
                  </div>
                  <p className="text-xs text-gray-600 font-tajawal leading-relaxed">
                    {color.use}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Typography Specs Summary */}
          <div className="mt-10 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-gray-200">
              <span className="text-xs font-bold text-[#5E548E] block mb-1">خط العناوين الرسمية والرئيسية:</span>
              <div className="font-amiri text-2xl text-[#231942] font-bold">
                Amiri / Traditional Arabic
              </div>
              <p className="text-xs text-gray-500 mt-2 font-tajawal">
                مخصص للعناوين الكبرى (76-88pt) والشعارات واسم البراند لإضفاء طابع عربي أصيل وفخم.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200">
              <span className="text-xs font-bold text-[#5E548E] block mb-1">خط النصوص والوصف والتفاصيل:</span>
              <div className="font-tajawal text-xl text-[#231942] font-bold">
                Tajawal / Cairo
              </div>
              <p className="text-xs text-gray-500 mt-2 font-tajawal">
                مخصص للنصوص التوضيحية، أرقام الهاتف، وقوائم الخدمات لسهولة القراءة والوضوح العصري.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
