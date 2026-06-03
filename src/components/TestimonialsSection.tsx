import React from "react";
import { motion } from "motion/react";
import { Star, Quote, Heart } from "lucide-react";
import { TESTIMONIALS } from "../data";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 text-zinc-650 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <span className="text-amber-600 font-mono text-[11px] font-bold tracking-widest uppercase block mb-1">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-zinc-900">
            Client Testimonials
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 rounded" />
        </div>

        {/* Reviews Deck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-850 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-amber-400/25 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              {/* Massive decorative quotation marks */}
              <Quote className="absolute top-6 right-6 text-zinc-100 w-12 h-12 pointer-events-none -z-10 group-hover:text-amber-500/5 transition-colors" />

              <div>
                {/* Visual Gold Star Rating system */}
                <div className="flex items-center space-x-1.5 mb-6">
                  {Array.from({ length: review.rating }).map((_, i) => (
                     <Star key={i} size={15} className="fill-amber-400 text-amber-500" />
                  ))}
                </div>

                {/* Actual quote copy */}
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-sans italic mb-8 relative">
                  "{review.feedback}"
                </p>
              </div>

              {/* Client Profile details footer */}
              <div className="flex items-center space-x-4 border-t border-zinc-100 pt-6 mt-auto">
                <div className="w-11 h-11 rounded-full border border-zinc-200 p-0.5 overflow-hidden flex items-center justify-center bg-white shadow-sm shrink-0">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-500/10 to-amber-600/5 group-hover:from-amber-500 group-hover:to-amber-600 flex items-center justify-center text-amber-700 group-hover:text-white font-serif font-black text-xs select-none transition-all duration-300">
                    {review.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-sans font-bold text-zinc-800 uppercase tracking-tight">{review.name}</h4>
                  <p className="text-[10px] font-mono text-amber-600 uppercase tracking-widest mt-0.5 font-bold">
                    {review.role}, <span className="text-zinc-400 font-normal">{review.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Highlight Trust Bottom Segment */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-zinc-50 border border-zinc-200 rounded-full text-[11px] font-mono text-zinc-500">
            <Heart size={12} className="text-red-500 animate-pulse" />
            <span>Trusted partner by NGO organizers and education agencies internationally.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
export default TestimonialsSection;
