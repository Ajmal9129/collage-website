import React from 'react';
import { Briefcase, Building, TrendingUp, CheckCircle, ArrowRight, Award } from 'lucide-react';
import { topRecruiters, placementHighlights } from '../data/recruiters';

export default function PlacementRecruiters({ onOpenApplyModal }) {
  return (
    <section id="placements" className="py-24 bg-[#080d19] text-white overflow-hidden relative border-t border-slate-800/80">
      
      {/* Ambient background light beam */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(255,102,0,0.2)]">
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            <span>Career Development Centre (CDC)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Top Global Recruiters & Placements
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            With over 280+ Fortune 500 multinationals actively recruiting on campus each year, George Institute graduates secure exceptional global careers with packages up to ₹45 LPA.
          </p>
        </div>

        {/* 6 Placement Metrics (Holographic HUD Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {placementHighlights.stats.map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-[#0c1322] to-[#080d19] border border-slate-800 hover:border-orange-500/50 rounded-xl p-4 text-center transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,102,0,0.2)]">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                {stat.number}
              </div>
              <div className="text-[11px] font-semibold text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Top Recruiters Infinite Marquee */}
        <div className="relative py-4 border-y border-slate-800">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080d19] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080d19] to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-flex space-x-6 animate-marquee">
              {topRecruiters.concat(topRecruiters).map((recruiter, i) => (
                <div 
                  key={i} 
                  className="bg-[#0e1628] border border-slate-800 hover:border-orange-500/60 px-5 py-3.5 rounded-xl flex items-center space-x-4 flex-shrink-0 shadow-md transition-all group hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center font-black text-amber-400 group-hover:scale-110 transition-transform">
                    {recruiter.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      {recruiter.name}
                    </div>
                    <div className="text-[10px] text-slate-400 flex items-center space-x-2">
                      <span>{recruiter.role}</span>
                      <span className="text-emerald-400 font-bold">• {recruiter.lpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CDC Training Tracks & Placement Assistance */}
        <div className="mt-14 bg-gradient-to-r from-[#0e1628] via-[#121c32] to-[#0e1628] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <div className="flex items-center space-x-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>CDC Advantage</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              End-to-End Corporate Readiness from Semester 1
            </h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
              {placementHighlights.cdcPrograms.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onOpenApplyModal('Placement Enquiry')}
            className="flex-shrink-0 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-red-600 hover:shadow-[0_0_25px_rgba(255,102,0,0.6)] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-full shadow-lg transition-all flex items-center space-x-2"
          >
            <span>Explore Placement Records</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
