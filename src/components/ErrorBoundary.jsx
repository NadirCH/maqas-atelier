import React from 'react';
import { AlertTriangle, RotateCw } from 'lucide-react';

/**
 * Production-hardened ErrorBoundary
 * Prevents stack traces, line numbers, and internal system details
 * from leaking to the client DOM.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // In production, internal stack traces and module paths must NOT be exposed to the DOM
    // Log only in non-production or to a secure logging endpoint without leaking to UI
    if (import.meta.env.DEV) {
      console.error('Safe ErrorBoundary intercepted error:', error?.message);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-6 text-center" dir="rtl">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-gray-200 shadow-xl">
            <div className="w-14 h-14 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h2 className="font-amiri text-2xl font-bold text-[#231942] mb-2">
              عذراً، حدث خطأ غير متوقع
            </h2>

            <p className="font-tajawal text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
              نعتذر عن هذا الخلل المؤقت. تم تأمين الجلسة، يُرجى إعادة تحميل الصفحة للمتابعة.
            </p>

            <button
              onClick={this.handleReload}
              className="w-full bg-[#231942] hover:bg-[#5E548E] text-[#F5F5F5] py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow transition-colors"
            >
              <RotateCw className="w-4 h-4 text-[#E0B1CB]" />
              <span>إعادة تحميل الصفحة</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
