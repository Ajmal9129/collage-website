import React, { useState } from 'react';
import { Award, Compass, History, Target, Users, ArrowRight, Quote, CheckCircle2 } from 'lucide-react';
import { leadershipData } from '../data/leadership';

export default function AboutOverview({ onOpenApplyModal }) {
  const [activeTab, setActiveTab] = useState('patrons');
  const [selectedPatron, setSelectedPatron] = useState(0);

  const tabs = [
    { id: 'patrons', label: 'Patrons & Leadership', icon: Users },
    { id: 'history', label: 'History & Heritage', icon: History },
    { id: 'vision', label: 'Our Vision', icon: Compass },
    { id: 'mission', label: 'Mission & Goals', icon: Target },
  ];

  return (
    <section id="about" className="py-24 bg-[#080d19] text-slate-200 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(255,102,0,0.2)]">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Over Two Decades of Technological Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            George Institute of Science & Technology
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Guided by the visionary leadership of Chancellor Dr. Ajmal Khan, George Institute of Science & Technology (GIST) is an autonomous epicenter of advanced scientific learning and engineering situated in Chennai's High-Tech Corridor. Offering 48+ cutting-edge degree programs across 8 autonomous schools, we prepare next-gen pioneers for global industry leadership.
          </p>
        </div>

        {/* Tab Navigation Controls (Dark Glassmorphic Pill) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto max-w-full backdrop-blur-md">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black shadow-[0_0_20px_rgba(255,102,0,0.5)]'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panels (Dark Glass Card) */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative">
          
          {/* 1. PATRONS & LEADERSHIP TAB */}
          {activeTab === 'patrons' && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Patron Selector List */}
                <div className="lg:col-span-4 space-y-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    <span>Institutional Leaders:</span>
                  </h3>
                  {leadershipData.patrons.map((patron, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPatron(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                        selectedPatron === idx
                          ? 'bg-[#0f172a] border-orange-500/60 shadow-[0_0_20px_rgba(255,102,0,0.2)] text-white'
                          : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/60 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <img 
                          src={patron.photo} 
                          alt={patron.name} 
                          className="w-10 h-10 rounded-lg object-cover object-top border border-orange-400/40 flex-shrink-0 shadow-sm"
                        />
                        <div>
                          <div className="font-bold text-sm leading-tight">{patron.name}</div>
                          <div className="text-[11px] text-orange-400/90 font-medium mt-0.5">{patron.title}</div>
                        </div>
                      </div>
                      <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
                        selectedPatron === idx ? 'text-orange-400 translate-x-1' : 'text-slate-600'
                      }`} />
                    </button>
                  ))}
                </div>

                {/* Active Patron Detailed Card */}
                <div className="lg:col-span-8 bg-[#0b1220]/90 p-6 sm:p-8 rounded-2xl border border-orange-500/30 shadow-xl relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-slate-800/40 pointer-events-none">
                    <Quote className="w-36 h-36 opacity-30 text-slate-700" />
                  </div>

                  <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <img
                        src={leadershipData.patrons[selectedPatron].photo}
                        alt={leadershipData.patrons[selectedPatron].name}
                        className="w-32 h-44 sm:w-44 sm:h-56 rounded-2xl object-cover object-top shadow-2xl border-2 border-orange-400/60 flex-shrink-0"
                      />
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                        {leadershipData.patrons[selectedPatron].role}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 sm:pt-0">
                      <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                        {leadershipData.patrons[selectedPatron].name}
                      </h4>
                      <p className="text-sm font-semibold text-amber-400">
                        {leadershipData.patrons[selectedPatron].title}
                      </p>

                      <blockquote className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed italic bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                        "{leadershipData.patrons[selectedPatron].message}"
                      </blockquote>

                      <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                        <span className="text-xs text-slate-500">George Institute of Science & Technology</span>
                        <button 
                          onClick={() => onOpenApplyModal('Campus Visit / Admission')}
                          className="text-xs font-bold text-orange-400 hover:text-amber-300 flex items-center space-x-1"
                        >
                          <span>Connect with Admissions</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* 2. HISTORY TAB */}
          {activeTab === 'history' && (
            <div className="space-y-8">
              <div className="max-w-3xl">
                <span className="text-amber-400 font-extrabold text-xl">Since {leadershipData.history.year}</span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {leadershipData.history.title}
                </h3>
                <div className="mt-4 space-y-3 text-slate-300 text-sm leading-relaxed">
                  {leadershipData.history.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Milestones timeline */}
              <div className="pt-6 border-t border-slate-800">
                <h4 className="font-bold text-sm uppercase text-slate-400 tracking-wider mb-6">
                  Key Historical Milestones
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {leadershipData.history.milestones.map((m, idx) => (
                    <div key={idx} className="bg-[#0b1220] p-4 rounded-xl border border-slate-800/80 hover:border-orange-500/40 transition-colors shadow-sm">
                      <span className="bg-orange-500/20 text-orange-400 border border-orange-500/40 text-xs font-extrabold px-2.5 py-1 rounded">
                        {m.year}
                      </span>
                      <p className="text-xs font-medium text-slate-300 mt-2.5 leading-snug">
                        {m.event}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. VISION TAB */}
          {activeTab === 'vision' && (
            <div className="max-w-3xl mx-auto text-center py-6">
              <div className="w-16 h-16 bg-orange-500/20 text-amber-400 border border-orange-500/40 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(255,102,0,0.3)]">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Our Institutional Vision
              </h3>
              <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed italic bg-[#0b1220] p-8 rounded-2xl border border-slate-800 shadow-lg">
                "{leadershipData.vision}"
              </p>
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => onOpenApplyModal('Academic Inquiry')}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold px-8 py-3.5 rounded-full hover:shadow-[0_0_25px_rgba(255,102,0,0.6)] transition-all"
                >
                  Join Our Vision - Apply for 2026
                </button>
              </div>
            </div>
          )}

          {/* 4. MISSION TAB */}
          {activeTab === 'mission' && (
            <div>
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h3 className="text-2xl font-extrabold text-white">
                  7 Core Pillars of Our Mission
                </h3>
                <p className="text-xs text-slate-400 mt-1">Guiding academic principles driving our student and research community</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {leadershipData.mission.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-[#0b1220] p-4 rounded-xl border border-slate-800/80 hover:border-orange-500/40 transition-colors shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-200 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
