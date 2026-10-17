import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, User, Sparkles, ShieldCheck, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import MaqasLogo from './MaqasLogo';
import { sanitizeText, sanitizeNotes, validatePhone } from '../utils/sanitize';
import { getWhatsAppUrl } from '../config/siteConfig';

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'تعديل فستان سهرة ومناسبات',
    date: '',
    timeSlot: 'مساءً (05:00 م - 07:30 م)',
    urgency: 'عادي (خلال 3-4 أيام)',
    notes: ''
  });

  const [validationError, setValidationError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Today in YYYY-MM-DD format for min date
  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError('');

    // Input Validation (Security Rule)
    const sanitizedName = sanitizeText(formData.name, 80);
    if (!sanitizedName || sanitizedName.length < 2) {
      setValidationError('يرجى إدخال اسم صحيح مكون من حرفين على الأقل.');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setValidationError('يرجى إدخال رقم هاتف صحيح مكون من 8 إلى 15 رقماً.');
      return;
    }

    setFormData({
      ...formData,
      name: sanitizedName,
      phone: formData.phone.trim(),
      notes: sanitizeNotes(formData.notes, 400)
    });

    setSubmitted(true);
  };

  const getWhatsAppBookingLink = () => {
    const safeName = sanitizeText(formData.name, 80) || 'عميلة مقاس';
    const safeService = sanitizeText(formData.service, 80);
    const safeDate = sanitizeText(formData.date, 30) || 'أقرب موعد متاح';
    const safeTime = sanitizeText(formData.timeSlot, 50);
    const safeUrgency = sanitizeText(formData.urgency, 50);
    const safeNotes = sanitizeNotes(formData.notes, 300);

    const message = `السلام عليكم أتيلييه مقاس، أود تأكيد حجز موعد قياس خاص:
- الاسم: ${safeName}
- نوع الخدمة: ${safeService}
- التاريخ المفضل: ${safeDate}
- الفترة: ${safeTime}
- الاستعجال: ${safeUrgency}
${safeNotes ? `- ملاحظات: ${safeNotes}` : ''}
شكراً لكم، بانتظار التأكيد.`;

    return getWhatsAppUrl(message);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <MaqasLogo className="w-10 h-10" variant="light" />
              <div>
                <h3 className="font-amiri text-2xl font-bold text-[#231942]">
                  حجز موعد قياس خاص
                </h3>
                <span className="text-xs text-[#5E548E] font-tajawal font-medium">
                  جلسة فردية هادئة مخصصة لكِ وحدكِ
                </span>
              </div>
            </div>

            {/* Privacy Alert */}
            <div className="bg-[#FAF5F9] border border-[#E0B1CB] rounded-2xl p-3 mb-6 flex items-center gap-2.5 text-xs text-[#231942]">
              <ShieldCheck className="w-5 h-5 text-[#5E548E] shrink-0" />
              <span>
                <strong>تذكير مهم:</strong> الأتيلييه مخصص للنساء فقط 100%. نضمن لكِ خصوصية تامة دون أي انتظار.
              </span>
            </div>

            {/* Validation Error Banner */}
            {validationError && (
              <div className="bg-rose-50 border border-rose-300 text-rose-800 rounded-xl p-3 mb-4 flex items-center gap-2 text-xs">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  الاسم الكريم:
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
                  <input
                    type="text"
                    required
                    maxLength={80}
                    placeholder="مثال: سارة الأحمد"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5E548E] text-sm font-tajawal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  رقم الواتساب للتواصل وتأكيد الحجز:
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
                  <input
                    type="tel"
                    required
                    maxLength={20}
                    placeholder="05XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5E548E] text-sm font-tajawal"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  نوع الخدمة المطلوبة:
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5E548E] text-sm font-tajawal bg-white"
                >
                  <option value="تعديل فستان سهرة ومناسبات">تعديل فستان سهرة ومناسبات</option>
                  <option value="تضييق وتجسيم قوام">تضييق وتجسيم قوام (Contouring)</option>
                  <option value="تقصير حاشية مخفية">تقصير حاشية مخفية</option>
                  <option value="استبدال وتصليح سحاب مخفي">استبدال وتصليح سحاب مخفي</option>
                  <option value="تعديل فستان عروس / زفاف">تعديل فستان عروس / زفاف</option>
                  <option value="استشارة خياطة خاصة وتعديل عام">استشارة خياطة خاصة وتعديل عام</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    اليوم المفضل:
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5E548E] text-xs font-tajawal bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    الفترة المفضلة:
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5E548E] text-xs font-tajawal bg-white"
                  >
                    <option value="مساءً (04:30 م - 07:00 م)">مساءً (04:30 م - 07:00 م)</option>
                    <option value="ليلاً (07:30 م - 10:30 م)">ليلاً (07:30 م - 10:30 م)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  ملاحظات إضافية (موعد المناسبة، نوع القماش، تفاصيل):
                </label>
                <textarea
                  rows="2"
                  maxLength={400}
                  placeholder="مثال: فستان كريب حريري، موعد مناسبتي بعد 5 أيام..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5E548E] text-xs font-tajawal"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#231942] hover:bg-[#5E548E] text-[#F5F5F5] py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4 text-[#E0B1CB]" />
                <span>تأكيد طلب الموعد</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-amiri text-2xl sm:text-3xl font-bold text-[#231942] mb-2">
              تم تسجيل طلب موعدكِ بنجاح!
            </h3>

            <p className="font-tajawal text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed mb-6">
              أهلاً بكِ أخت {formData.name || 'الكريمة'}. لإتمام تأكيد الموعد فورياً مع مسؤولة القياس، يُرجى النقر على الزر أدناه لإرسال التفاصيل مباشرة عبر الواتساب.
            </p>

            <a
              href={getWhatsAppBookingLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all mb-3"
            >
              <MessageSquare className="w-4 h-4" />
              <span>إرسال التفاصيل عبر واتساب الأعمال الآن</span>
            </a>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs text-gray-500 hover:text-gray-800 font-medium py-2"
            >
              إغلاق النافذة
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
