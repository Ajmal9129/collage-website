import React, { useState } from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, TrendingUp, DollarSign, MessageSquare, User, CheckCircle2, ChevronRight } from 'lucide-react';
import { quickNumbers } from '../data/stats';

export default function Hero({ onOpenApplyModal, onOpenFeeModal }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      badge: "Autonomous University | NAAC A++ Grade | NIRF Top 50",
      title: "GEORGE INSTITUTE",
      subtitle: "OF SCIENCE & TECHNOLOGY",
      tagline: "Empowering Next-Gen Innovators, Engineers & Global Leaders",
      desc: "Pioneering technological breakthroughs under the visionary leadership of Dr. Ajmal Khan. Ranked among India's elite institutions with ₹45 LPA highest placement and cutting-edge research in AI, Quantum Systems, and Autonomous Robotics.",
    },
    {
      badge: "Admissions Open 2026-27 | GEAT Entrance Exam",
      title: "ADMISSIONS 2026",
      subtitle: "HIGH-TECH SMART CAMPUS, CHENNAI",
      tagline: "48+ Industry-Aligned Programs in AI, Robotics, Law, Business & Biotech",
      desc: "Direct merit scholarships up to 100%, 65-acre zero-carbon eco-campus, George Venture Foundry with ₹35+ Cr startup seed fund, and 280+ Fortune 500 recruiting partners.",
    },
    {
      badge: "Global Research & Supercomputing Citadel",
      title: "RESEARCH EXCELLENCE",
      subtitle: "H-INDEX 118 | 74,500+ CITATIONS",
      tagline: "NVIDIA SuperPOD AI Cluster & Advanced Cleanrooms",
      desc: "₹38.5 Crore funded research, 140+ international patents filed, and interdisciplinary doctoral fellowships across 8 autonomous schools.",
    }
  ];

  const current = slides[activeSlide];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#060a12] text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      
      {/* 1. Futuristic Ambient Background & Diagonal Light Beams (Exact match to reference image) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Deep ambient dark radial glow */}
        <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-gradient-to-br from-orange-600/25 via-red-600/15 to-transparent rounded-full blur-[120px] transform rotate-12"></div>
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-900/15 rounded-full blur-[140px]"></div>

        {/* Dynamic Diagonal Light Beam slicing across top-right (As seen in image) */}
        <div className="absolute -top-20 right-0 w-[800px] h-[1200px] bg-gradient-to-b from-orange-500/20 via-red-600/20 to-transparent transform -rotate-[35deg] origin-top-right blur-2xl"></div>
        <div className="absolute top-10 right-20 w-[240px] h-[900px] bg-gradient-to-b from-amber-400/30 via-orange-500/15 to-transparent transform -rotate-[35deg] blur-xl"></div>
        
        {/* Subtle grid pattern for isometric depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* 2. Main Hero Container (Framed Infographic Landing Page Layout) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Headline, Details & Glowing CTA (Matching reference image) */}
          <div className="lg:col-span-6 xl:col-span-5 text-left space-y-6">
            
            {/* Accreditation / Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/15 via-red-500/10 to-transparent border border-orange-500/30 text-orange-400 text-xs font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{current.badge}</span>
            </div>

            {/* Bold Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white uppercase font-sans leading-none drop-shadow-sm">
                {current.title}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-orange-400 via-amber-300 to-red-400 bg-clip-text text-transparent uppercase tracking-wider">
                {current.subtitle}
              </h2>
            </div>

            {/* Tagline & Institution Summary */}
            <p className="text-lg font-medium text-slate-200">
              {current.tagline}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
              {current.desc}
            </p>

            {/* Action Buttons: Glowing Orange Gradient Pill (Direct Match to reference image) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenApplyModal()}
                className="relative group overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-white font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(255,102,0,0.5)] hover:shadow-[0_0_35px_rgba(255,102,0,0.8)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>LEARN MORE / APPLY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Internal button shine effect */}
                <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-full transition-all duration-700"></span>
              </button>

              <button
                onClick={onOpenFeeModal}
                className="px-6 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white text-sm font-semibold border border-slate-700/70 hover:border-orange-500/40 transition-all backdrop-blur-md"
              >
                Pay Fees Online
              </button>
            </div>

            {/* Carousel Pagination Dots (Matching reference image ● ○ ○) */}
            <div className="pt-6 flex items-center space-x-2.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    activeSlide === idx 
                      ? 'w-7 h-2.5 bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_0_10px_rgba(255,102,0,0.8)]' 
                      : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
              <span className="text-xs text-slate-500 pl-2">0{activeSlide + 1} / 0{slides.length}</span>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800/80">
              <div>
                <div className="text-2xl font-black text-amber-400">₹45 LPA</div>
                <div className="text-[11px] text-slate-400 uppercase font-medium">Highest Package</div>
              </div>
              <div>
                <div className="text-2xl font-black text-orange-400">118</div>
                <div className="text-[11px] text-slate-400 uppercase font-medium">h-Index Score</div>
              </div>
              <div>
                <div className="text-2xl font-black text-red-400">NAAC A++</div>
                <div className="text-[11px] text-slate-400 uppercase font-medium">Top Accreditation</div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D Isometric Holographic Dashboard & Character Silhouette (Exact reference image replica) */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center mt-6 lg:mt-0">
            
            {/* 3D Perspective Stage Container */}
            <div className="relative w-full max-w-[560px] iso-perspective">
              
              {/* Isometric Board (Tilted in 3D space) */}
              <div className="iso-board relative w-full rounded-2xl bg-gradient-to-br from-slate-900/90 via-[#0a1120]/95 to-[#050811]/90 p-5 sm:p-7 border border-orange-500/30 shadow-[0_30px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(255,102,0,0.25)] backdrop-blur-xl">
                
                {/* Board Top Edge Glass Highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/60 to-transparent"></div>

                {/* Dashboard Grid inside the 3D screen (2x2 layout matching reference image) */}
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  
                  {/* 1. TOP-LEFT CARD: Student & Scholar Profile Card (With glowing orange outline) */}
                  <div className="rounded-xl bg-[#0e1628]/80 border border-orange-500/40 p-4 relative overflow-hidden group hover:border-orange-400 transition-colors shadow-lg">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/10 rounded-full blur-xl"></div>
                    
                    {/* User Avatar Outline (Direct match to reference image icon) */}
                    <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-b from-orange-500/20 to-transparent border border-orange-400/50 flex items-center justify-center shadow-[0_0_15px_rgba(255,102,0,0.25)]">
                      <User className="w-8 h-8 text-orange-400" />
                    </div>

                    <div className="text-center space-y-1">
                      <div className="text-xs font-bold text-white tracking-wide">George Scholar</div>
                      <div className="text-[10px] text-orange-300/80 font-medium">B.Tech / MBA / Ph.D</div>
                      <div className="pt-2 flex justify-center">
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-semibold border border-emerald-500/30">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          <span>Active 2026</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 2. TOP-RIGHT CARD: Analytics & Donut Progress Metric (Matching reference image) */}
                  <div className="rounded-xl bg-[#0e1628]/80 border border-slate-700/60 p-4 relative overflow-hidden group hover:border-amber-500/40 transition-colors shadow-lg flex flex-col justify-between">
                    
                    {/* Header with dialogue icon and donut chart */}
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-400/40 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-orange-400" />
                      </div>
                      
                      {/* Mini Glowing Donut Chart */}
                      <div className="relative w-11 h-11 flex items-center justify-center">
                        <svg className="w-11 h-11 transform -rotate-90">
                          <circle cx="22" cy="22" r="16" stroke="#1e293b" strokeWidth="4" fill="transparent" />
                          <circle 
                            cx="22" 
                            cy="22" 
                            r="16" 
                            stroke="url(#orangeGradient)" 
                            strokeWidth="4" 
                            strokeDasharray="100" 
                            strokeDashoffset="25" 
                            strokeLinecap="round" 
                            fill="transparent" 
                          />
                          <defs>
                            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#f59e0b" />
                              <stop offset="100%" stopColor="#ef4444" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <span className="absolute text-[9px] font-bold text-amber-300">92%</span>
                      </div>
                    </div>

                    {/* Progress bars mimic data streams */}
                    <div className="space-y-1.5 pt-2">
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-full w-4/5 rounded-full animate-pulse"></div>
                      </div>
                      <div className="w-3/4 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 h-full w-3/5 rounded-full"></div>
                      </div>
                      <div className="text-[10px] text-slate-400 text-right pt-0.5">Placement Index</div>
                    </div>
                  </div>

                  {/* 3. BOTTOM-LEFT CARD: Exponential Research Curve Graph (Matching reference image) */}
                  <div className="rounded-xl bg-[#0e1628]/80 border border-slate-700/60 p-4 relative overflow-hidden group hover:border-cyan-500/40 transition-colors shadow-lg">
                    
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-slate-200">Publications</span>
                      <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/30">+24.8%</span>
                    </div>

                    {/* Futuristic Glowing Line Chart SVG (Direct reference to graph in image) */}
                    <div className="h-16 w-full flex items-end">
                      <svg viewBox="0 0 120 50" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Area fill */}
                        <path 
                          d="M 0,45 Q 25,40 45,30 T 80,18 T 120,4 L 120,50 L 0,50 Z" 
                          fill="url(#chartGradient)" 
                        />
                        {/* Glow curve */}
                        <path 
                          d="M 0,45 Q 25,40 45,30 T 80,18 T 120,4" 
                          fill="none" 
                          stroke="#06b6d4" 
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                        />
                        {/* Key nodes */}
                        <circle cx="45" cy="30" r="3" fill="#ff6600" stroke="#fff" strokeWidth="1" />
                        <circle cx="80" cy="18" r="3" fill="#ff6600" stroke="#fff" strokeWidth="1" />
                        <circle cx="120" cy="4" r="3.5" fill="#22c55e" stroke="#fff" strokeWidth="1" />
                      </svg>
                    </div>

                    <div className="flex justify-between items-center text-[9px] text-slate-400 pt-1 border-t border-slate-800">
                      <span>2020</span>
                      <span>2023</span>
                      <span className="text-cyan-300 font-semibold">9,400+ SCOPUS</span>
                    </div>
                  </div>

                  {/* 4. BOTTOM-RIGHT CARD: Financial & Highest Package Tile (Matching reference image with currency symbol) */}
                  <div className="rounded-xl bg-[#0e1628]/80 border border-orange-500/40 p-4 relative overflow-hidden group hover:border-orange-400 transition-colors shadow-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Peak Salary Package</div>
                        <div className="text-xl font-black text-amber-300 pt-0.5">₹45 LPA</div>
                        <div className="text-[10px] text-slate-400">Google, Apple, NVIDIA, Tesla</div>
                      </div>

                      {/* Glowing Currency Badge (As shown in image) */}
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 font-black text-base flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.6)]">
                        ₹
                      </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px]">
                      <span className="text-slate-400">Average: ₹7.8 LPA</span>
                      <span className="text-amber-400 font-bold">100% Offers</span>
                    </div>
                  </div>

                </div>

                {/* Floating Chat / Consultation Bubble (Matching reference image speech bubble) */}
                <div className="absolute -top-5 -left-5 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3.5 py-1.5 rounded-xl rounded-bl-none shadow-[0_10px_25px_rgba(255,102,0,0.5)] border border-white/20 text-xs font-bold flex items-center space-x-1.5 animate-bounce">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Admissions Open 2026</span>
                </div>

                {/* Floating accreditation badge pill */}
                <div className="absolute -bottom-4 right-8 bg-[#0b1322] border border-amber-400/50 text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full shadow-xl flex items-center space-x-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>NIRF Top 50 Ranked</span>
                </div>

              </div>

              {/* 3. Foreground Stylized Character / Observer Silhouette (Direct replica from reference image!) */}
              <div className="absolute -bottom-10 -right-4 pointer-events-none z-20">
                <div className="relative w-28 h-32 flex flex-col items-center">
                  
                  {/* Head */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#1b253b] to-[#0d1424] border-2 border-slate-700/80 shadow-[0_0_20px_rgba(255,102,0,0.25)] relative overflow-hidden">
                    {/* Glowing visor / ear piece highlight */}
                    <div className="absolute top-4 left-1 w-3 h-4 bg-orange-400/90 rounded-full blur-[1px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10"></div>
                  </div>

                  {/* Body & Shoulders Silhouette with warm ambient light rim */}
                  <div className="w-24 h-16 -mt-2 rounded-t-full bg-gradient-to-b from-[#1a2337] to-[#080d19] border-t-2 border-orange-500/40 shadow-2xl relative overflow-hidden">
                    {/* Warm light beam rim reflection on shoulder (as seen in image) */}
                    <div className="absolute top-0 right-2 w-12 h-12 bg-gradient-to-bl from-orange-500/40 to-transparent rounded-full blur-sm"></div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
