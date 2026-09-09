import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials({ onOpenApplyModal }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const item = testimonials[currentIdx];

  return (
    <section className="py-24 bg-[#080d19] text-slate-200 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-orange-400 font-bold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(255,102,0,0.15)]">
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>Student & Alumni Voices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Hear from Our George Scholars
          </h2>
          <p className="mt-2 text-slate-400 text-sm">
            Read authentic stories of personal transformation, campus life, and stellar career placements.
          </p>
        </div>

        {/* Testimonial Card (Dark Glassmorphic Box) */}
        <div className="relative bg-gradient-to-br from-[#0e1628] to-[#090e1a] border border-slate-800 hover:border-orange-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl transition-all">
          <Quote className="w-24 h-24 text-slate-800 absolute top-6 right-8 -z-0 opacity-40" />

          <div className="relative z-10">
            
            {/* Stars */}
            <div className="flex items-center space-x-1 text-amber-400 mb-6">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Quote Body */}
            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed italic">
              "{item.quote}"
            </p>

            {/* Author Profile */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-orange-400/80 shadow-md"
                />
                <div>
                  <h4 className="font-bold text-base text-white">{item.name}</h4>
                  <div className="text-xs text-slate-400 font-medium">{item.course}</div>
                  <div className="text-xs text-orange-400 font-bold">{item.company}</div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 hover:bg-orange-500 hover:text-slate-950 hover:border-orange-500 text-slate-300 flex items-center justify-center transition-all shadow-md"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-slate-400 font-mono px-2">
                  {currentIdx + 1} / {testimonials.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 hover:bg-orange-500 hover:text-slate-950 hover:border-orange-500 text-slate-300 flex items-center justify-center transition-all shadow-md"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
