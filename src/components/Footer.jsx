import React from 'react';
import MaqasLogo from './MaqasLogo';
import { Phone, MessageSquare, ShieldCheck, Heart, Clock, MapPin, Sparkles, Video } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

export default function Footer({ onOpenBooking }) {
  return (
    <>
      <footer className="bg-[#231942] text-[#F5F5F5] pt-16 pb-24 md:pb-12 border-t-2 border-[#5E548E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#5E548E]/50">
            
            {/* Brand Column */}
            <div className="lg:col-span-5 text-right">
              <div className="flex items-center gap-3 mb-4">
                <MaqasLogo className="w-14 h-14" variant="dark" />
                <div>
                  <div className="font-amiri text-3xl font-bold tracking-wide text-[#F5F5F5]">مَقاس | MAQAS</div>
                  <div className="text-xs text-[#E0B1CB] font-tajawal">للخياطة النسائية وتعديل الملابس</div>
                </div>
              </div>

              <p className="font-tajawal text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md mb-6">
                محل خياطة نسائي خاص يعيد تعريف تجربة تعديل الملابس الراقية. نوفر لكِ الخصوصية المطلقة والراحة التامة أثناء القياس بأعلى درجات الاطمئنان.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1333] border border-[#5E548E] text-[11px] text-[#E0B1CB]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>خصوصية تامة وجودة حياكة احترافية</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 text-right">
              <h4 className="font-amiri text-lg font-bold text-[#E0B1CB] mb-4">
                أقسام الموقع
              </h4>
              <ul className="space-y-2 text-xs text-gray-300 font-tajawal">
                <li><a href="#philosophy" className="hover:text-white transition-colors">فلسفة البراند والشعار</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">كتالوج الخدمات والأسعار</a></li>
                <li><a href="#before-after" className="hover:text-white transition-colors">معرض قبل وبعد</a></li>
                <li><a href="#privacy" className="hover:text-white transition-colors">دستور الخصوصية والأمان</a></li>
                <li><a href="#business-card" className="hover:text-white transition-colors">بطاقة العمل 300 DPI</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              </ul>
            </div>

            {/* Working Hours */}
            <div className="lg:col-span-2 text-right">
              <h4 className="font-amiri text-lg font-bold text-[#E0B1CB] mb-4">
                أوقات استقبال القياسات
              </h4>
              <ul className="space-y-2 text-xs text-gray-300 font-tajawal">
                <li className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E0B1CB]" />
                  <span>السبت - الخميس:</span>
                </li>
                <li className="text-white font-medium pr-5">04:30 م - 10:30 م</li>
                <li className="flex items-center gap-1.5 mt-2">
                  <Clock className="w-3.5 h-3.5 text-rose-300" />
                  <span>الجمعة:</span>
                </li>
                <li className="text-gray-400 pr-5">مخصص للطلبات المستعجلة</li>
                <li className="text-[11px] text-[#E0B1CB] mt-2">
                  * يُفضل دائماً حجز الموعد مسبقاً
                </li>
              </ul>
            </div>

            {/* Social & Contact Channels (Page 4 Strategy) */}
            <div className="lg:col-span-3 text-right">
              <h4 className="font-amiri text-lg font-bold text-[#E0B1CB] mb-4">
                القنوات الرقمية والتواصل
              </h4>
              
              <div className="space-y-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-[#1a1233] hover:bg-[#251949] p-2.5 rounded-xl border border-[#5E548E] text-xs text-gray-200 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">واتساب للأعمال (القناة الأساسية)</div>
                    <div className="text-[10px] text-gray-400">الكتالوج والحالة اليومية للقطع</div>
                  </div>
                </a>

                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-[#1a1233] hover:bg-[#251949] p-2.5 rounded-xl border border-[#5E548E] text-xs text-gray-200 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-white">إنستغرام وتيك توك</div>
                    <div className="text-[10px] text-gray-400">فيديوهات الحياكة على طاولة العمل</div>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Manifesto */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-tajawal gap-4 text-center sm:text-right">
            <div>
              جميع الحقوق محفوظة © 2026 <strong>محل مَقاس (MAQAS) للخياطة</strong> النسائية وتعديل الملابس.
            </div>
            <div className="flex items-center gap-2 text-[#E0B1CB]">
              <Heart className="w-3.5 h-3.5 text-[#E0B1CB] fill-current" />
              <span>مخصص للنساء فقط • محل خياطة نسائي خاص</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Sticky Mobile Floating Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#231942]/95 backdrop-blur-md border-t border-[#5E548E] py-2 px-4 md:hidden flex items-center justify-between gap-3 shadow-2xl">
        <button
          onClick={onOpenBooking}
          className="flex-1 bg-[#E0B1CB] text-[#231942] py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#231942]" />
          <span>حجز موعد قياس</span>
        </button>

        <a
          href={getWhatsAppUrl('مرحباً مقاس، أرغب في الاستفسار')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>مراسلة واتساب</span>
        </a>
      </div>
    </>
  );
}
