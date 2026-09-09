import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, ArrowUp, Users } from 'lucide-react';
import { contactInfo } from '../data/navigation';

export default function FloatingCTAs({ onOpenApplyModal }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Right Edge Floating Enquire/Chat Tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col space-y-2 translate-x-[4.5rem] hover:translate-x-0 transition-transform duration-300">
        <button
          onClick={() => onOpenApplyModal('Chat with Student Ambassador')}
          className="bg-[#0e1628] text-white text-xs font-bold py-2.5 px-4 rounded-l-xl shadow-2xl flex items-center space-x-2 border-l-2 border-orange-400 hover:bg-slate-800 border-t border-b border-slate-700/60"
        >
          <Users className="w-4 h-4 text-orange-400" />
          <span>Chat with Student</span>
        </button>

        <button
          onClick={() => onOpenApplyModal('Enquire Now')}
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold py-2.5 px-4 rounded-l-xl shadow-2xl flex items-center space-x-2 hover:shadow-[0_0_20px_rgba(255,102,0,0.6)]"
        >
          <Send className="w-4 h-4" />
          <span>Enquire Now</span>
        </button>
      </div>

      {/* 2. Bottom Right Floating WhatsApp and Back-to-Top Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
        
        {/* WhatsApp Direct Helpdesk */}
        <a
          href={contactInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
          title="Chat with Admissions on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="sr-only">WhatsApp Chat</span>
        </a>

        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-slate-900/90 text-white hover:bg-orange-600 rounded-full shadow-xl flex items-center justify-center transition-all hover:-translate-y-1 border border-slate-700"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

      </div>
    </>
  );
}
