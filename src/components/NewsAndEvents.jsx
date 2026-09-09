import React from 'react';
import { Calendar, MapPin, ArrowRight, Bell, Sparkles } from 'lucide-react';
import { campusEvents, campusNews } from '../data/newsEvents';

export default function NewsAndEvents({ onOpenApplyModal }) {
  return (
    <section className="py-24 bg-[#060a12] text-slate-200 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(255,102,0,0.15)]">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Campus Pulse</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              Conferences & Campus News
            </h2>
          </div>
          <button 
            onClick={() => onOpenApplyModal('Events & Conferences')}
            className="text-xs font-bold text-orange-400 hover:text-amber-300 flex items-center space-x-1"
          >
            <span>View All Notifications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Featured Events (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Featured International Conferences & Events</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {campusEvents.map((evt) => (
                <div 
                  key={evt.id}
                  className="bg-gradient-to-br from-[#0c1322] to-[#080d19] p-5 rounded-2xl border border-slate-800 hover:border-orange-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold text-orange-300 bg-orange-500/20 border border-orange-500/30 px-2.5 py-0.5 rounded-full">
                        {evt.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {evt.date}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                      {evt.title}
                    </h4>

                    <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {evt.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="flex items-center space-x-1 text-slate-400 text-[11px]">
                      <MapPin className="w-3 h-3 text-orange-400" />
                      <span className="line-clamp-1">{evt.venue}</span>
                    </span>
                    <button 
                      onClick={() => onOpenApplyModal(evt.title)}
                      className="font-bold text-orange-400 hover:text-amber-300 hover:underline"
                    >
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Latest News List (4 Cols) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#0c1322] to-[#080d19] p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center space-x-2">
                <Bell className="w-4 h-4 text-amber-400" />
                <span>Latest University News</span>
              </h3>

              <div className="space-y-4">
                {campusNews.map((news) => (
                  <div key={news.id} className="pb-3 border-b border-slate-800 last:border-0 last:pb-0">
                    <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-medium">
                      <span className="bg-slate-800 text-orange-400 font-bold px-1.5 py-0.5 rounded border border-slate-700">
                        {news.category}
                      </span>
                      <span>• {news.date}</span>
                    </div>
                    <h4 className="text-xs font-bold text-white mt-1 hover:text-amber-300 cursor-pointer">
                      {news.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug line-clamp-2">
                      {news.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <button 
                onClick={() => onOpenApplyModal('News Bulletin Subscription')}
                className="w-full text-center text-xs font-bold text-orange-400 hover:text-amber-300 transition-colors"
              >
                Subscribe to George Institute Press Releases →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
