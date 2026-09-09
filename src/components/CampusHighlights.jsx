import React from 'react';
import { Leaf, Rocket, Globe, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { keyPillars } from '../data/stats';

const iconMap = {
  Leaf,
  Rocket,
  Globe,
  MapPin
};

export default function CampusHighlights({ onOpenApplyModal }) {
  return (
    <section id="campus-life" className="py-24 bg-[#060a12] text-slate-200 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(255,102,0,0.15)]">
            <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Why Choose George Institute?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Distinctions That Set Us Apart
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            More than just degrees — George Institute of Science & Technology provides an inspiring ecosystem designed for environmental mindfulness, deep-tech entrepreneurship, and international career mobility.
          </p>
        </div>

        {/* 4 Pillars Grid (Dark Glassmorphic HUD cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyPillars.map((pillar) => {
            const IconComp = iconMap[pillar.icon] || CheckCircle;
            return (
              <div 
                key={pillar.id}
                className="rounded-2xl border border-slate-800 bg-gradient-to-br from-[#0c1322] to-[#080d19] p-6 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(255,102,0,0.2)] hover:border-orange-500/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} text-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/30">
                    {pillar.badge}
                  </span>

                  <h3 className="text-lg font-bold text-white mt-2 group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-400 mt-1">
                    {pillar.subtitle}
                  </p>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">Verified Distinction</span>
                  <button 
                    onClick={() => onOpenApplyModal(pillar.title)}
                    className="text-xs font-bold text-orange-400 hover:text-amber-300 flex items-center space-x-1"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
