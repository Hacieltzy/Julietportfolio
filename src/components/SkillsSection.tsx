import React from "react";
import { motion } from "motion/react";
import { Sliders, Wrench, ShieldCheck, Check } from "lucide-react";
import { SKILLS, TOOLS } from "../data";
import { LucideIcon } from "./LucideIcon";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950 text-zinc-650 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(181,144,32,0.03),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-amber-600 font-mono text-[11px] font-bold tracking-widest uppercase block mb-1">
            Proficiencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-zinc-900">
            Skills & Software Ecosystem
          </h2>
          <div className="w-12 h-1 bg-amber-500 mt-3 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Wing: Professional Skills Progress Bars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-text-amber-500 flex items-center justify-center">
                <Sliders size={18} className="text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-sans font-bold text-zinc-800">Executive Competencies</h3>
                <p className="text-xs text-zinc-400 font-sans">Core operational & soft skills performance</p>
              </div>
            </div>

            <div className="space-y-5 bg-slate-900 border border-slate-850 rounded-3xl p-6 md:p-8 shadow-sm">
              {SKILLS.map((skill, index) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-sans font-extrabold text-zinc-700 tracking-wide">
                      {skill.name}
                    </span>
                    <span className="font-mono text-amber-650 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Outer Bar */}
                  <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/50">
                    {/* Inner Progress indicator */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Wing: Modern Branded Tools Tiles */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-text-amber-500 flex items-center justify-center">
                <Wrench size={18} className="text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-sans font-bold text-zinc-800">Software & Digital Stack</h3>
                <p className="text-xs text-zinc-400 font-sans">Industry platforms I utilize daily</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {TOOLS.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-900 border border-slate-850 hover:border-amber-500/20 p-4 rounded-2xl flex items-center space-x-3.5 transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  {/* Tool icon */}
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-amber-500 shrink-0">
                    <LucideIcon name={tool.iconName || "Layers"} size={18} strokeWidth={1.5} />
                  </div>
                  
                  {/* Tool text */}
                  <div className="min-w-0">
                    <h4 className="text-xs font-sans font-bold text-zinc-800 truncate">
                      {tool.name}
                    </h4>
                    <p className="text-[10px] font-mono text-zinc-450 uppercase tracking-tight truncate mt-0.5">
                      {tool.category}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Integration Seal */}
            <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-2xl mt-8 flex items-center space-x-3 shadow-inner">
              <ShieldCheck className="text-amber-600 shrink-0" size={20} />
              <p className="text-xs text-zinc-500 leading-normal font-sans">
                Highly adapted to cross-platform digital collaborations, asynchronous communication rituals, and enterprise safety setups.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default SkillsSection;
