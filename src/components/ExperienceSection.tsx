import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { EXPERIENCES } from "../data";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950 text-zinc-600 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-amber-600 font-mono text-[11px] font-bold tracking-widest uppercase block mb-1">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-zinc-900">
            Professional Experience
          </h2>
          <div className="w-12 h-1 bg-amber-500 mt-3 rounded" />
        </div>

        {/* Timeline Desktop/Mobile responsive container */}
        <div className="relative border-l border-zinc-200 ml-4 md:ml-6 space-y-12 pb-4">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Bullet Anchor */}
              <div className="absolute -left-[13px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-slate-950 shadow-sm flex items-center justify-center text-amber-500 group-hover:scale-115 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <Briefcase size={10} />
              </div>

              {/* Timeline Card modeled as Bento Grid element */}
              <div className="bg-slate-900 border border-slate-850 hover:border-amber-400/20 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                {/* Visual Top Decorative Accent line using gold color */}
                <div className="absolute top-0 left-0 h-1 w-full bg-zinc-100 group-hover:bg-amber-500 transition-colors" />

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  {/* Company & Role info */}
                  <div>
                    <h3 className="text-xl font-sans font-bold text-zinc-800 group-hover:text-amber-600 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm text-zinc-500 font-semibold font-sans mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  {/* Period, Location badges */}
                  <div className="flex flex-wrap items-center gap-2 lg:flex-col lg:items-end">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-600 text-[11px] font-mono font-bold tracking-tight rounded-full">
                      <Calendar size={11} className="mr-0.5" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-zinc-50 border border-zinc-200 text-zinc-500 text-[11px] font-mono rounded-full">
                      <MapPin size={11} className="mr-0.5" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Achievements block */}
                <h4 className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-zinc-400 mb-4 block">
                  Core Responsibilities & Deliverables
                </h4>
                
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-zinc-650">
                      <span className="mt-1 shrink-0 p-0.5 text-amber-500">
                        <CheckCircle size={14} className="fill-amber-500/5" />
                      </span>
                      <span className="leading-relaxed font-sans">{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default ExperienceSection;
