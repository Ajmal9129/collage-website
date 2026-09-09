import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, ArrowRight, ExternalLink, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';
import { navLinks } from '../data/navigation';

export default function Navbar({ onOpenApplyModal, onOpenSearchModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileSubmenu = (name) => {
    setMobileExpanded(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#060a12]/95 backdrop-blur-xl shadow-2xl border-b border-orange-500/20' 
        : 'bg-[#060a12]/80 backdrop-blur-lg border-b border-slate-800/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center space-x-3.5 group text-left">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] flex items-center justify-center p-1.5 shadow-lg border border-amber-400/50 group-hover:scale-105 transition-transform">
                <img src="/george-crest.svg" alt="GIST Crest" className="w-full h-full object-contain" />
              </div>
              <span className="absolute -bottom-1 -right-1 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 text-[9px] font-black px-1.5 rounded uppercase tracking-wider shadow">
                A++
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-white font-extrabold text-base sm:text-lg tracking-tight leading-tight group-hover:text-amber-400 transition-colors">
                GEORGE
              </span>
              <span className="text-slate-300 text-[10px] sm:text-[11px] font-bold tracking-wide uppercase leading-tight line-clamp-1">
                INSTITUTE OF SCIENCE & TECHNOLOGY
              </span>
              <span className="text-amber-400/90 text-[9px] font-semibold tracking-wider uppercase">
                Autonomous University • Estd. 1998 • GIST
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.path}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-semibold text-slate-100 hover:text-amber-400 hover:bg-white/5 transition-all"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                      {link.badge}
                    </span>
                  )}
                  {link.submenu && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === link.name ? 'rotate-180 text-amber-400' : 'text-slate-400'
                    }`} />
                  )}
                </a>

                {/* Submenu Dropdown */}
                {link.submenu && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-80 bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-xl shadow-2xl py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="space-y-1">
                      {link.submenu.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target={item.external ? "_blank" : "_self"}
                          rel={item.external ? "noopener noreferrer" : ""}
                          className="flex items-start justify-between p-2.5 rounded-lg hover:bg-slate-800/80 transition-colors group"
                        >
                          <div>
                            <div className="text-sm font-semibold text-white group-hover:text-amber-400 flex items-center space-x-1.5">
                              <span>{item.name}</span>
                              {item.external && <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-400" />}
                            </div>
                            {item.desc && (
                              <p className="text-xs text-slate-400 group-hover:text-slate-300 mt-0.5 leading-snug">
                                {item.desc}
                              </p>
                            )}
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all mt-1" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearchModal}
              className="p-2 text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors"
              title="Search Courses, Departments & Info"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Apply Now Primary CTA */}
            <button
              onClick={onOpenApplyModal}
              className="relative group overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-red-600 rounded-lg animate-shimmer"></span>
              <span className="relative flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg group-hover:brightness-110 transition-all shadow-lg">
                <Sparkles className="w-4 h-4 text-amber-300 animate-bounce" />
                <span>Apply Now 2026</span>
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-2xl border-b border-slate-700/80 px-4 pt-3 pb-8 space-y-4 max-h-[85vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-slate-800 pb-2">
              <div 
                className="flex items-center justify-between py-2 text-slate-200 font-semibold text-base"
                onClick={() => link.submenu ? toggleMobileSubmenu(link.name) : setMobileMenuOpen(false)}
              >
                <a href={link.path} className="flex items-center space-x-2">
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </a>
                {link.submenu && (
                  <button className="p-1 text-slate-400">
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded[link.name] ? 'rotate-180 text-amber-400' : ''}`} />
                  </button>
                )}
              </div>

              {/* Submenu Accordion */}
              {link.submenu && mobileExpanded[link.name] && (
                <div className="pl-3 pr-1 py-2 space-y-2 bg-slate-950/60 rounded-lg mt-1">
                  {link.submenu.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      target={sub.external ? "_blank" : "_self"}
                      rel={sub.external ? "noopener noreferrer" : ""}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-sm text-slate-300 hover:text-amber-400"
                    >
                      <div className="font-medium text-white flex items-center justify-between">
                        <span>{sub.name}</span>
                        {sub.external && <ExternalLink className="w-3 h-3 text-slate-400" />}
                      </div>
                      {sub.desc && <p className="text-xs text-slate-400 mt-0.5">{sub.desc}</p>}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Quick Mobile Action Buttons */}
          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 rounded-xl shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Apply for Admissions 2026</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
