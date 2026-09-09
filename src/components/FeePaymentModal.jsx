import React from 'react';
import { X, CreditCard, ExternalLink, ShieldCheck } from 'lucide-react';
import { contactInfo } from '../data/navigation';

export default function FeePaymentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const paymentOptions = [
    {
      title: "Tuition Fee Payment",
      desc: "Pay semester and annual academic tuition fees securely through MasterSoft ERP gateway.",
      url: "https://portal.gist.edu.in/fees",
      badge: "Academic"
    },
    {
      title: "Examination Fee Portal",
      desc: "Semester end examination fees, arrear fees, and revaluation online applications.",
      url: "https://portal.gist.edu.in/fees",
      badge: "Controller of Exams"
    },
    {
      title: "Transport / Bus Pass Fees",
      desc: "Official bus transport subscription covering 40+ routes across Chennai and suburbs.",
      url: "https://portal.gist.edu.in/fees",
      badge: "Transport"
    },
    {
      title: "Hostel & Miscellaneous Fees",
      desc: "Boarding, air-conditioned and non-AC hostel rooms, mess deposits and certifications.",
      url: "https://portal.gist.edu.in/fees",
      badge: "Hostels"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-[#0c1322] text-white rounded-3xl shadow-[0_0_50px_rgba(255,102,0,0.3)] max-w-lg w-full overflow-hidden border border-orange-500/40 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#18080c] via-[#241018] to-[#121a30] p-6 relative border-b border-orange-500/20">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">
            <CreditCard className="w-4 h-4 text-amber-400" />
            <span>Digital Payment Desk</span>
          </div>

          <h3 className="text-xl font-black text-white uppercase tracking-tight">
            Online Fee Payment Portals
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            All payments are processed via 256-bit encrypted MasterSoft ERP bank gateways.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          {paymentOptions.map((opt, i) => (
            <a
              key={i}
              href={opt.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-2xl border border-slate-800 bg-[#080d19] hover:border-orange-500/60 hover:shadow-[0_0_20px_rgba(255,102,0,0.2)] transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-orange-400 bg-orange-500/15 border border-orange-500/30 px-2 py-0.5 rounded">
                    {opt.badge}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 mt-2 flex items-center space-x-1.5">
                    <span>{opt.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-400" />
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    {opt.desc}
                  </p>
                </div>
              </div>
            </a>
          ))}

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified GIST Secure Payment Gateway</span>
            </span>
            <button 
              onClick={onClose}
              className="font-bold text-slate-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
