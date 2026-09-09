import React from 'react';
import { Phone, MessageCircle, MapPin, LogIn, CreditCard, Mail } from 'lucide-react';
import { contactInfo } from '../data/navigation';

export default function TopBar({ onOpenFeeModal }) {
  return (
    <div className="bg-[#04070e] text-slate-300 text-xs border-b border-slate-800/80 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          
          {/* Left: Contact Helplines */}
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1.5 text-amber-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Admissions 2026:</span>
            </div>

            <a 
              href={`tel:${contactInfo.ugPhone.replace(/\s+/g, '')}`} 
              className="flex items-center space-x-1 hover:text-white transition-colors"
              title="Undergraduate Admissions Helpdesk"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>UG: {contactInfo.ugPhone}</span>
            </a>

            <span className="text-slate-500">|</span>

            <a 
              href={`tel:${contactInfo.pgPhone.replace(/\s+/g, '')}`} 
              className="flex items-center space-x-1 hover:text-white transition-colors"
              title="Postgraduate Admissions Helpdesk"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>PG: {contactInfo.pgPhone}</span>
            </a>

            <span className="text-slate-500">|</span>

            <a 
              href={contactInfo.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-1 hover:text-emerald-400 transition-colors text-emerald-400 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: {contactInfo.whatsapp}</span>
            </a>
          </div>

          {/* Right: Portals & Actions */}
          <div className="flex items-center space-x-4">
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{contactInfo.email}</span>
            </a>

            <span className="text-slate-500">|</span>

            <a 
              href={contactInfo.mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-1 hover:text-amber-400 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Locate Us</span>
            </a>

            <span className="text-slate-500">|</span>

            <button 
              onClick={onOpenFeeModal}
              className="flex items-center space-x-1 hover:text-amber-400 transition-colors"
            >
              <CreditCard className="w-3.5 h-3.5 text-amber-400" />
              <span>Online Payments</span>
            </button>

            <span className="text-slate-500">|</span>

            <a 
              href={contactInfo.erpLoginUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-1.5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-2.5 py-1 rounded transition-colors shadow-sm"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Student ERP</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
