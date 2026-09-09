import React from 'react';
import { Bell, Flame, Award, ChevronRight } from 'lucide-react';
import { announcements, quickBadges } from '../data/navigation';

export default function AnnouncementMarquee({ onOpenApplyModal }) {
  return (
    <div className="bg-gradient-to-r from-[#18080c] via-[#2a0e14] to-[#1a1005] text-white relative z-20 border-b border-orange-500/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Label Badge */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-black uppercase px-2.5 py-1 rounded-md flex items-center space-x-1 shadow-sm">
              <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Announcements</span>
            </span>
          </div>

          {/* Marquee Ticker */}
          <div className="overflow-hidden whitespace-nowrap w-full text-xs sm:text-sm font-medium">
            <div className="inline-flex space-x-12 animate-marquee">
              {announcements.concat(announcements).map((item, index) => (
                <div key={index} className="inline-flex items-center space-x-2 cursor-pointer hover:underline">
                  <span className="bg-white/20 text-amber-300 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">
                    {item.tag}
                  </span>
                  <span>{item.text}</span>
                  <span className="text-amber-400">★</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fast Trigger */}
          <button 
            onClick={() => onOpenApplyModal('General Enquiry')}
            className="flex-shrink-0 text-xs font-bold bg-white/10 hover:bg-white/20 border border-white/30 text-white px-3 py-1 rounded-md transition-all flex items-center space-x-1"
          >
            <span>Enquire</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>

      {/* Quick Accreditations Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 border-t border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <span className="text-slate-400 font-semibold uppercase text-[11px] tracking-wider flex items-center space-x-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Accreditations & Recognitions:</span>
          </span>
          <div className="flex items-center space-x-6 overflow-x-auto text-[11px]">
            {quickBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center space-x-1.5 flex-shrink-0">
                <span className="text-emerald-400 font-bold">✓</span>
                <span className="text-white font-medium">{badge.label}</span>
                <span className="bg-slate-800 text-amber-400 font-bold px-1.5 py-0.2 rounded text-[10px]">
                  {badge.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
