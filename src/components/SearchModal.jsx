import React, { useState } from 'react';
import { X, Search, GraduationCap, ArrowRight } from 'lucide-react';
import { schoolsData } from '../data/schools';

export default function SearchModal({ isOpen, onClose, onSelectProgram }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  // Flatten programs with their school context
  const allItems = schoolsData.flatMap(school => 
    school.programs.map(p => ({
      ...p,
      schoolName: school.name,
      category: school.category
    }))
  );

  const searchResults = query.trim() === '' 
    ? allItems.slice(0, 6) 
    : allItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.schoolName.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-start justify-center pt-16 px-4">
      <div className="relative bg-[#0c1322] text-white rounded-3xl shadow-[0_0_50px_rgba(255,102,0,0.3)] max-w-2xl w-full overflow-hidden border border-orange-500/40 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Header Input */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center space-x-3 bg-[#080d19]">
          <Search className="w-5 h-5 text-orange-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search programs (e.g. B.Tech, MBA, Law, Biotech, Pharmacy)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-500 text-base font-medium focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-2">
          <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
            {query.trim() === '' ? 'Popular Degree Programs' : `Results (${searchResults.length})`}
          </div>

          {searchResults.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                onSelectProgram(item.name);
                onClose();
              }}
              className="p-3.5 rounded-xl border border-slate-800/80 bg-[#090f1e] hover:border-orange-500/50 hover:bg-slate-800/60 cursor-pointer transition-all flex items-center justify-between group"
            >
              <div>
                <div className="text-sm font-bold text-white group-hover:text-amber-300 flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-orange-400" />
                  <span>{item.name}</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5 flex items-center space-x-2">
                  <span>{item.schoolName}</span>
                  <span>•</span>
                  <span className="text-slate-500">{item.duration}</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
            </div>
          ))}

          {searchResults.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              No matching degree programs found for "{query}".
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#080d19] border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Tip: Click any course to open direct inquiry</span>
          <span>Click outside or ESC to close</span>
        </div>

      </div>
    </div>
  );
}
