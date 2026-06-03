import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Clock, Award, Check } from "lucide-react";
import { PORTFOLIO_NAME, PORTFOLIO_TITLE, PORTFOLIO_SUBTITLE, PROFILE_IMAGE } from "../data";

export const HeroSection: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-slate-950 overflow-hidden"
    >
      {/* Subtle Minimal Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(181,144,32,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,244,245,0.8),transparent_50%)] pointer-events-none" />
      
      {/* Decorative Gold Grid Accent */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Master Bento Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto items-stretch">
          
          {/* Bento Cell 1: Main Introduction & CTAs (Span 12 for high-end minimalist focus) */}
          <div className="md:col-span-12 bg-slate-900 border border-slate-850 p-6 sm:p-10 md:p-14 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-sm hover:border-amber-400/10 transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl group-hover:bg-amber-400/10 transition-colors duration-300 pointer-events-none" />
            
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full w-fit mb-6"
              >
                <Sparkles size={12} className="text-amber-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-amber-600 font-bold uppercase">
                  ACTIVE EXECUTIVE PARTNER
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-zinc-900 mb-4 leading-tight"
              >
                Julient Chinye
                <span className="text-sm font-semibold text-zinc-500 block mt-1 font-mono tracking-widest uppercase">
                  {PORTFOLIO_TITLE}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xs sm:text-sm text-zinc-600 mb-8 max-w-2xl leading-relaxed font-sans"
              >
                {PORTFOLIO_SUBTITLE}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <button
                onClick={() => handleScrollTo("contact")}
                id="hero-cta-contact"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white text-xs uppercase font-mono font-bold tracking-wider rounded-xl shadow-lg shadow-amber-500/10 transition-all duration-200 flex items-center justify-center space-x-2 group hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Hire Julient Chinye</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => handleScrollTo("services")}
                id="hero-cta-services"
                className="px-6 py-3.5 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs uppercase font-mono font-semibold tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
              >
                <span>View Executive Services</span>
              </button>
            </motion.div>
          </div>

          {/* Bento Cell 3: Quality Bullet 1 Focus (Span 4) */}
          <div className="md:col-span-4 bg-slate-900 border border-slate-850 rounded-3xl p-5 shadow-sm flex items-center space-x-4 hover:border-amber-400/15 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200/50 flex items-center justify-center text-amber-500 shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <span className="text-[9px] text-zinc-400 block uppercase font-mono tracking-widest font-bold">DISCIPLINED BACKGROUND</span>
              <span className="text-xs text-zinc-800 font-bold font-sans">Legal Academic Education</span>
            </div>
          </div>

          {/* Bento Cell 4: Quality Bullet 2 Attendance (Span 4) */}
          <div className="md:col-span-4 bg-slate-900 border border-slate-850 rounded-3xl p-5 shadow-sm flex items-center space-x-4 hover:border-amber-400/15 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200/50 flex items-center justify-center text-amber-500 shrink-0">
              <Clock size={18} />
            </div>
            <div>
              <span className="text-[9px] text-zinc-400 block uppercase font-mono tracking-widest font-bold">RELIABILITY SCALE</span>
              <span className="text-xs text-zinc-800 font-bold font-sans">99.9% Operational Uptime</span>
            </div>
          </div>

          {/* Bento Cell 5: Quality Bullet 3 Authority (Span 4) */}
          <div className="md:col-span-4 bg-slate-900 border border-slate-850 rounded-3xl p-5 shadow-sm flex items-center space-x-4 hover:border-amber-400/15 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200/50 flex items-center justify-center text-amber-500 shrink-0">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <span className="text-[9px] text-zinc-400 block uppercase font-mono tracking-widest font-bold">MANAGEMENT TIER</span>
              <span className="text-xs text-zinc-800 font-bold font-sans">Executive Level Operations</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default HeroSection;
