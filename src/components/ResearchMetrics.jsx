import React from 'react';
import { Microscope, TrendingUp, BookOpen, Award, FileCheck, Share2, BarChart3, ArrowRight, ExternalLink } from 'lucide-react';
import { researchStats } from '../data/stats';

const iconMap = {
  TrendingUp,
  BookOpen,
  Award,
  FileCheck,
  Share2,
  BarChart3
};

export default function ResearchMetrics({ onOpenApplyModal }) {
  return (
    <section id="research" className="py-24 bg-[#080d19] text-white relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background ambient neon glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(255,102,0,0.2)]">
            <Microscope className="w-3.5 h-3.5 text-amber-400" />
            <span>Research & Innovation Paradigm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            High-Impact Global Research Metrics
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            From high-impact nanotechnology and cancer biology to autonomous robotics and green energy — our scholars and faculty continually advance global frontiers of science and technology.
          </p>
        </div>

        {/* 6 Research HUD Counters (Holographic Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {researchStats.map((item, idx) => {
            const IconComp = iconMap[item.icon] || BarChart3;
            return (
              <div 
                key={idx}
                className="bg-gradient-to-br from-[#0c1322] to-[#080d19] border border-slate-800/90 rounded-2xl p-5 text-center backdrop-blur-md hover:border-orange-500/60 hover:shadow-[0_0_25px_rgba(255,102,0,0.2)] transition-all duration-300 group shadow-lg flex flex-col justify-between"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
                
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-mono group-hover:text-amber-300 transition-colors">
                    {item.value.toLocaleString()}{item.suffix}
                  </div>

                  <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mt-1.5 line-clamp-1">
                    {item.label}
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mt-2 leading-tight line-clamp-2">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Featured Research Initiatives (CSIF & CIIC) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: GCNSF */}
          <div className="bg-gradient-to-br from-[#0e1628] to-[#090e1a] border border-slate-800 hover:border-orange-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all">
            <div>
              <span className="text-xs font-black bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-3 py-1 rounded-full uppercase tracking-wider">
                Central Supercomputing & Cleanroom
              </span>
              <h3 className="text-xl font-bold text-white mt-3">
                GCNSF — George Central Nanotechnology & Supercomputing Facility
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Equipped with NVIDIA SuperPOD AI Clusters, Cryogenic Quantum Rigs, High-Resolution TEM, and Class-100 Cleanrooms to accelerate breakthrough semiconductor, material, and life-science discoveries.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-500">Open to Global Scholars</span>
              <button 
                onClick={() => onOpenApplyModal('GCNSF Supercomputing & Instrumentation')}
                className="text-xs font-bold text-orange-400 hover:text-amber-300 flex items-center space-x-1"
              >
                <span>Facility Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Ph.D. Admissions */}
          <div className="bg-gradient-to-br from-[#0e1628] to-[#090e1a] border border-slate-800 hover:border-orange-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all">
            <div>
              <span className="text-xs font-black bg-orange-500/20 text-orange-300 border border-orange-500/40 px-3 py-1 rounded-full uppercase tracking-wider">
                Doctoral Programs
              </span>
              <h3 className="text-xl font-bold text-white mt-3">
                Admission to Ph.D. (Full-Time & Part-Time)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Prestigious George Research Fellowships (GRF) with monthly stipends up to ₹40,000 and ₹5 Lakhs annual seed grants available across all Engineering, AI, Business, Law, and Life Sciences departments.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-500">Fellowships Available</span>
              <button 
                onClick={() => onOpenApplyModal('Ph.D. Doctoral Admissions')}
                className="text-xs font-bold text-orange-400 hover:text-amber-300 flex items-center space-x-1"
              >
                <span>Apply for Ph.D. 2026</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
