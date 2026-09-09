import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Sparkles, Phone, Mail, GraduationCap } from 'lucide-react';
import { contactInfo } from '../data/navigation';

export default function ApplicationModal({ isOpen, onClose, prefillProgram = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    campus: 'Chennai Campus',
    program: '',
    state: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillProgram) {
      setFormData(prev => ({ ...prev, program: prefillProgram }));
    }
  }, [prefillProgram]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-[#0c1322] text-white rounded-3xl shadow-[0_0_50px_rgba(255,102,0,0.3)] max-w-lg w-full overflow-hidden border border-orange-500/40 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#18080c] via-[#241018] to-[#121a30] text-white p-6 relative border-b border-orange-500/20">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Admissions 2026-27 Portal</span>
          </div>

          <h3 className="text-2xl font-black text-white uppercase tracking-tight">
            Apply / Quick Inquiry
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Fill in your details below and our Admissions Dean will get in touch with you within 24 hours.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Application Inquiry Received!
              </h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-amber-400">{formData.name}</strong>. Your inquiry for <strong className="text-amber-400">{formData.program || 'George Institute Degree'}</strong> has been registered. Our counselors will call you at <strong className="text-amber-400">{formData.phone}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,102,0,0.6)] transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mohammed Tariq"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#080d19] border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#080d19] border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 95516 59999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#080d19] border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Campus Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Select Campus *
                </label>
                <select
                  value={formData.campus}
                  onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#080d19] border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="Chennai Campus" className="bg-slate-900">Main Tech Campus — Chennai (High-Tech Corridor)</option>
                  <option value="City Innovation Campus" className="bg-slate-900">City Innovation Campus & Venture Hub</option>
                </select>
              </div>

              {/* Interested Program */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Interested Program / Department
                </label>
                <input
                  type="text"
                  placeholder="e.g. B.Tech Artificial Intelligence / Robotics / MBA / Cyber Law"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#080d19] border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-orange-500 to-red-600 hover:shadow-[0_0_25px_rgba(255,102,0,0.6)] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry (2026-27)</span>
                </button>
              </div>

              {/* Helplines Info inside modal */}
              <div className="pt-3 border-t border-slate-800 text-center">
                <p className="text-[11px] text-slate-400">
                  Or reach admissions directly: <strong className="text-orange-400">{contactInfo.ugPhone}</strong>
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
