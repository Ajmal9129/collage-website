import React, { useState, useMemo } from 'react';
import { Search, GraduationCap, Clock, Sparkles, ArrowUpRight, Cpu, Briefcase, Building2, Scale, FlaskConical, Terminal, Dna, Check } from 'lucide-react';
import { schoolsData } from '../data/schools';

const iconMap = {
  Cpu,
  Briefcase,
  Building2,
  Scale,
  FlaskConical,
  Terminal,
  Dna,
  GraduationCap
};

export default function SchoolsShowcase({ onOpenApplyModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Engineering & Tech', 'Management', 'Architecture & Design', 'Law & Legal Studies', 'Pharmacy & Healthcare', 'Computing & IT', 'Life Sciences', 'Social Sciences & Commerce'];

  const filteredSchools = useMemo(() => {
    return schoolsData.filter((school) => {
      const matchesCategory = selectedCategory === 'All' || school.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.programs.some(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="schools" className="py-24 bg-[#060a12] text-slate-100 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full mb-3 shadow-[0_0_15px_rgba(255,102,0,0.15)]">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Academic Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              8 Autonomous Schools, 48+ Degree Programs
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              From Artificial Intelligence & Quantum Robotics to Sustainable Architecture and Techno-Legal Studies — discover programs tailored for high-growth global careers.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search course or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#0d1527] border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 shadow-[0_0_20px_rgba(255,102,0,0.45)] font-black'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Schools & Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchools.map((school) => {
            const IconComponent = iconMap[school.icon] || GraduationCap;
            return (
              <div
                key={school.id}
                className="rounded-2xl bg-gradient-to-br from-[#0c1322] to-[#080d19] border border-slate-800/90 hover:border-orange-500/50 shadow-xl hover:shadow-[0_0_30px_rgba(255,102,0,0.2)] transition-all duration-300 p-6 flex flex-col justify-between group hover:-translate-y-1.5 backdrop-blur-md"
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-400 group-hover:scale-110 group-hover:border-orange-400 flex items-center justify-center transition-all shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {school.badge && (
                      <span className="bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                        {school.badge}
                      </span>
                    )}
                  </div>

                  {/* School Title & Category */}
                  <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">
                    {school.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                    {school.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {school.desc}
                  </p>

                  {/* Program List inside Card */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Offered Programs:
                    </span>
                    <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                      {school.programs.map((prog, pIdx) => (
                        <div 
                          key={pIdx} 
                          className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                            <span className="text-xs font-medium text-slate-200">{prog.name}</span>
                          </div>
                          <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                            {prog.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onOpenApplyModal(school.name)}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 hover:from-orange-500 hover:to-red-600 border border-orange-500/40 text-orange-300 hover:text-white py-2.5 rounded-xl font-bold text-xs transition-all duration-300 shadow-sm"
                  >
                    <span>Apply for this School</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search Fallback */}
        {filteredSchools.length === 0 && (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
            <GraduationCap className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No Programs Found</h3>
            <p className="text-xs text-slate-400 mt-1">Try searching for other keywords like "computer", "law", "mba", or "biotech".</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 text-xs font-bold text-orange-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
