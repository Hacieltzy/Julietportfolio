import React from "react";
import { motion } from "motion/react";
import { Award, FolderKanban, HeartHandshake, BookOpen, Quote } from "lucide-react";
import { ABOUT_ME_TEXT, METRICS } from "../data";

export const AboutSection: React.FC = () => {
  // Map icons based on metric ID
  const getMetricIcon = (id: string) => {
    switch (id) {
      case "experience":
        return <Award className="text-amber-400" size={24} />;
      case "projects":
        return <FolderKanban className="text-amber-400" size={24} />;
      case "satisfaction":
        return <HeartHandshake className="text-amber-400" size={24} />;
      default:
        return <Award className="text-amber-400" size={24} />;
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-950 text-zinc-600 relative">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-100/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-amber-600 font-mono text-[11px] font-bold tracking-widest uppercase block mb-1">
            Professional Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-zinc-900 animate-fade-in">
            About Julient Chinye
          </h2>
          <div className="w-12 h-1 bg-amber-500 mt-3 rounded" />
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Bio Card - Span 7 */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-sm group hover:border-amber-400/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl group-hover:bg-amber-400/10 transition-colors pointer-events-none" />
            
            <div className="space-y-6">
              <div className="relative">
                {/* Giant quote mark back decoration */}
                <Quote className="absolute -top-4 -left-4 text-zinc-200/50 w-16 h-16 pointer-events-none -z-10" />
                <p className="text-lg text-zinc-800 leading-relaxed font-sans first-letter:text-5xl first-letter:font-black first-letter:text-amber-500 first-letter:mr-3 first-letter:float-left first-letter:font-serif">
                  {ABOUT_ME_TEXT.split("\n\n")[0]}
                </p>
              </div>
              
              <p className="text-zinc-600 leading-relaxed font-sans text-sm sm:text-base">
                {ABOUT_ME_TEXT.split("\n\n")[1]}
              </p>

              <p className="text-zinc-650 leading-relaxed font-sans text-xs sm:text-sm border-l-4 border-amber-500/40 pl-4 italic bg-zinc-50/50 py-1 rounded-r-lg">
                {ABOUT_ME_TEXT.split("\n\n")[2]}
              </p>
            </div>

            {/* Academic Advantage Highlight */}
            <div className="mt-8 p-5 bg-zinc-50/70 border border-zinc-200/40 rounded-2xl flex items-start space-x-4">
              <div className="p-3 bg-amber-400/10 border border-amber-400/25 text-amber-600 rounded-xl shrink-0 mt-0.5">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-sans font-bold text-zinc-800 uppercase tracking-wider">
                  The Legal & Academic Edge
                </h4>
                <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
                  My structured legal education equips me with high logical analysis, precision formatting skills, and meticulous organizational habits.
                </p>
              </div>
            </div>
          </div>

          {/* Right Metrics/Counters Stack - Span 5 */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex-1 space-y-4">
              <h3 className="text-xs uppercase font-mono tracking-widest text-zinc-400 font-extrabold block">
                Proven Track Record
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-1 gap-4 h-full">
                {METRICS.map((metric, idx) => (
                  <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-sm hover:shadow-md hover:border-amber-400/20 transition-all duration-300 relative overflow-hidden group flex flex-row items-center space-x-4"
                  >
                    {/* Decorative giant metric digit label */}
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 text-9xl font-black font-mono text-zinc-100/30 -z-10 group-hover:text-amber-500/5 transition-colors duration-300 pointer-events-none select-none">
                      {metric.id === "experience" ? "04" : metric.id === "projects" ? "85" : "99"}
                    </div>
                    
                    {/* Icon Block */}
                    <div className="p-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl shrink-0 group-hover:scale-105 transition-transform">
                      {getMetricIcon(metric.id)}
                    </div>
                    
                    {/* Data Text */}
                    <div className="space-y-0.5">
                      <div className="flex items-baseline space-x-0.5">
                        <span className="text-3xl font-sans font-black tracking-tight text-zinc-900">
                          {metric.value}
                        </span>
                        <span className="text-lg font-black text-amber-500 font-mono">
                          {metric.suffix}
                        </span>
                      </div>
                      <h4 className="text-xs font-sans font-semibold text-zinc-700">
                        {metric.label}
                      </h4>
                      {metric.description && (
                        <p className="text-[10px] text-zinc-400 leading-normal max-w-[180px]">
                          {metric.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default AboutSection;
