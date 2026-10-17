import React from 'react';
import { HeartHandshake, Sparkles, Store, Scissors, Crown, Users } from 'lucide-react';

export default function PartnershipSection() {
  const partners = [
    {
      title: 'محلات وبوتيكات فساتين السهرة والأعراس',
      role: 'شريك الأناقة الفورية',
      desc: 'نوفر لزبونات البوتيكات خدمة تعديل وقياس سريعة للفساتين المشتراة حديثاً لضمان جلوس الفستان على القوام في نفس أسبوع المناسبة.',
      icon: <Crown className="w-6 h-6 text-[#E0B1CB]" />
    },
    {
      title: 'صالونات ومراكز التجميل الراقية',
      role: 'شبكة الثقة المتبادلة',
      desc: 'تبادل التوصيات وبناء سمعة طيبة، وتقديم بطاقات إهداء وتخفيضات متبادلة للعرائس والسيدات أثناء تحضيراتهن للمناسبات الكبرى.',
      icon: <Sparkles className="w-6 h-6 text-[#E0B1CB]" />
    },
    {
      title: 'مصممات الأزياء والمبدعات المستقلات',
      role: 'دعم الإنتاج والتشطيب الحرفي',
      desc: 'التعاون مع المصممات الواعدات لتنفيذ التعديلات الدقيقة وإنهاء التشطيبات اليدوية والبطانات الفاخرة لقطعهن المميزة.',
      icon: <Scissors className="w-6 h-6 text-[#E0B1CB]" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0B1CB]/30 border border-[#E0B1CB] text-[#231942] text-xs font-semibold mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#5E548E]" />
            <span>التسويق المجتمعي والشراكات • Strategic Alliances</span>
          </div>
          <h2 className="font-amiri text-3xl sm:text-5xl font-bold text-[#231942] mb-4">
            شبكة شركاء الثقة والأناقة
          </h2>
          <p className="font-tajawal text-gray-600 text-base sm:text-lg leading-relaxed">
            وفقاً لإستراتيجية البراند، نعتمد على بناء قاعدة زبونات ثابتة قائمة على السمعة العطرة والتعاون الوثيق مع أبرز دور التجميل وبوتيكات الأزياء النسائية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <div 
              key={idx}
              className="bg-[#FAF5F9] rounded-3xl p-8 border border-[#E0B1CB]/50 hover:border-[#5E548E] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#231942] flex items-center justify-center mb-6 shadow-sm">
                  {partner.icon}
                </div>
                <span className="text-xs font-bold text-[#5E548E] block mb-1">
                  {partner.role}
                </span>
                <h3 className="font-amiri text-2xl font-bold text-[#231942] mb-3">
                  {partner.title}
                </h3>
                <p className="font-tajawal text-sm text-gray-600 leading-relaxed">
                  {partner.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E0B1CB]/40 flex items-center gap-2 text-xs text-[#231942] font-semibold">
                <Users className="w-4 h-4 text-[#5E548E]" />
                <span>تبادل توصيات مبني على السمعة الطيبة</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
