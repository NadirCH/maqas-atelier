import React, { useState } from 'react';
import { Clock, Phone, Sparkles, Check, AlertCircle, MessageCircle } from 'lucide-react';
import MaqasLogo from './MaqasLogo';

export default function DoorSignWidget({ atelierStatus, setAtelierStatus }) {
  const [returnTime, setReturnTime] = useState('05:30 مساءً');
  const [phone] = useState('050 000 0000');

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-md">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-gray-100 gap-4">
        <div>
          <span className="text-xs font-bold text-[#5E548E] block mb-1">
            مواصفات المطبوعات واللافتات (Signage Specifications)
          </span>
          <h3 className="font-amiri text-2xl sm:text-3xl font-bold text-[#231942]">
            لافتة الباب التفاعلية للأتيلييه
          </h3>
          <p className="font-tajawal text-xs text-gray-500 mt-1">
            كما نص دليل الهوية: لافتات ذات وجهين (مغلق / سنعود بعد قليل مع وقت العودة ورقم الهاتف).
          </p>
        </div>

        {/* Status Mode Switcher */}
        <div className="flex items-center gap-2 bg-[#F5F5F5] p-1.5 rounded-2xl border border-gray-200">
          <button
            onClick={() => setAtelierStatus('open')}
            className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all ${
              atelierStatus === 'open'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            🟢 مفتوح الآن
          </button>

          <button
            onClick={() => setAtelierStatus('returnSoon')}
            className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all ${
              atelierStatus === 'returnSoon'
                ? 'bg-amber-500 text-white shadow'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            🟡 سنعود بعد قليل
          </button>

          <button
            onClick={() => setAtelierStatus('closed')}
            className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all ${
              atelierStatus === 'closed'
                ? 'bg-[#231942] text-white shadow'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            🔴 المحل مغلق
          </button>
        </div>
      </div>

      {/* The Hanging Physical Sign Replica */}
      <div className="relative max-w-lg mx-auto py-8">
        
        {/* Hanging Leather / Chain straps */}
        <div className="flex justify-between px-16 -mb-3 relative z-0">
          <div className="w-1.5 h-12 bg-[#5E548E] rounded-t-sm shadow"></div>
          <div className="w-1.5 h-12 bg-[#5E548E] rounded-t-sm shadow"></div>
        </div>

        {/* The Signboard Body */}
        <div className={`relative z-10 rounded-3xl p-8 border-4 shadow-2xl transition-all duration-500 text-center ${
          atelierStatus === 'open' 
            ? 'bg-[#FAF5F9] border-[#5E548E] text-[#231942]' 
            : atelierStatus === 'returnSoon'
              ? 'bg-[#FFFBEB] border-amber-400 text-amber-950'
              : 'bg-[#231942] border-[#5E548E] text-[#F5F5F5]'
        }`}>

          {/* Hanging eyelets */}
          <div className="flex justify-between px-12 -mt-10 mb-4">
            <div className="w-5 h-5 rounded-full bg-[#5E548E] border-2 border-white shadow-inner"></div>
            <div className="w-5 h-5 rounded-full bg-[#5E548E] border-2 border-white shadow-inner"></div>
          </div>

          <div className="flex justify-center mb-4">
            <MaqasLogo 
              className="w-12 h-12" 
              variant={atelierStatus === 'closed' ? 'dark' : 'light'} 
            />
          </div>

          <div className="font-amiri text-lg tracking-widest opacity-80 mb-1">
            مَقاس | MAQAS
          </div>
          <div className="text-[11px] font-tajawal opacity-75 mb-4">
            أتيلييه الخياطة النسائية وتعديل الملابس
          </div>

          {/* Sign State Specific Content */}
          {atelierStatus === 'open' && (
            <div className="animate-fadeIn">
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3 border border-emerald-300">
                🟢 الأتيلييه مفتوح حالياً
              </div>
              <h4 className="font-amiri text-3xl font-bold mb-2">
                تفضلي بالدخول بكل سرور
              </h4>
              <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed mb-4">
                نستقبلكم لجلسات القياس الفردية واستلام القطع الجاهزة بكل ترحاب وأمان.
              </p>
              <div className="text-[11px] font-bold text-[#5E548E]">
                ✦ الدخول مخصص للنساء فقط ✦
              </div>
            </div>
          )}

          {atelierStatus === 'returnSoon' && (
            <div className="animate-fadeIn">
              <div className="inline-block px-4 py-1.5 rounded-full bg-amber-200 text-amber-900 text-xs font-bold mb-3 border border-amber-300">
                ⏳ جلسة قياس خاصة / استراحة مؤقتة
              </div>
              <h4 className="font-amiri text-3xl font-bold mb-2 text-amber-950">
                سنعود بعد قليل
              </h4>
              
              {/* Form fields as specified in guide: وقت العودة ورقم الهاتف */}
              <div className="bg-white/80 rounded-2xl p-4 my-4 border border-amber-200 max-w-xs mx-auto text-xs space-y-2 text-right">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-medium">وقت العودة التقديري:</span>
                  <span className="font-bold text-amber-800 flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    {returnTime}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-amber-100 pt-2">
                  <span className="text-gray-500 font-medium">رقم التواصل / واتساب:</span>
                  <span className="font-bold text-[#231942] flex items-center gap-1 font-mono" dir="ltr">
                    <Phone className="w-3.5 h-3.5 text-[#5E548E]" />
                    {phone}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-amber-800">
                نعتذر عن الانتظار، نحن نكرس وقتنا بالكامل لمنح كل زبونة جلستها الهادئة.
              </p>
            </div>
          )}

          {atelierStatus === 'closed' && (
            <div className="animate-fadeIn">
              <div className="inline-block px-4 py-1.5 rounded-full bg-rose-950/60 text-rose-300 text-xs font-bold mb-3 border border-rose-800">
                🔴 المحل مغلق
              </div>
              <h4 className="font-amiri text-3xl font-bold mb-2 text-[#F5F5F5]">
                شكراً لزيارتكم • نلقاكم غداً
              </h4>
              <p className="text-xs text-gray-300 max-w-xs mx-auto leading-relaxed mb-4">
                انتهت أوقات العمل الرسمية لهذا اليوم. حجوزات الغد واستفساراتكم متاحة عبر الواتساب على مدار الساعة.
              </p>
              
              <div className="bg-[#18102d] rounded-2xl p-3 border border-[#5E548E] max-w-xs mx-auto flex items-center justify-between text-xs text-gray-300">
                <span>ساعات العمل غداً:</span>
                <span className="font-bold text-[#E0B1CB]">04:00 م - 10:30 م</span>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
