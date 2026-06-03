import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, MessageSquare, Zap, Activity } from "lucide-react";
import { WHY_HIRE_ME } from "../data";

export const WhyHireMeSection: React.FC = () => {
  const icons = [
    <ShieldCheck className="text-amber-600" size={26} />,
    <MessageSquare className="text-amber-600" size={26} />,
    <Zap className="text-amber-600" size={26} />,
    <Activity className="text-amber-600" size={26} />,
  ];

  return (
    <section id="why-hire" className="py-24 bg-slate-950 text-zinc-650 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <span className="text-amber-600 font-mono text-[11px] font-bold tracking-widest uppercase block mb-1">
            Why Partner With Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-zinc-900 animate-fade-in">
            Why Hire Julient?
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 rounded" />
        </div>

        {/* Feature Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {WHY_HIRE_ME.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-850 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-amber-400/20 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:space-x-6 gap-4 shadow-sm"
            >
              {/* Gold light ring on hover */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-400/5 rounded-full blur-2xl group-hover:bg-amber-400/10 transition-colors pointer-events-none" />

              {/* Icon container */}
              <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                {icons[index]}
              </div>

              {/* Text Blocks */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-sans font-bold text-zinc-800 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default WhyHireMeSection;
