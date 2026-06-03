import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, SlidersHorizontal, Check } from "lucide-react";
import { SERVICES } from "../data";
import { LucideIcon } from "./LucideIcon";

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Map service ID to logical category grouping for the filter
  const getServiceCategory = (id: string): string => {
    switch (id) {
      case "email":
      case "calendar":
      case "admin":
      case "travel":
      case "file-org":
      case "data-entry":
        return "operations"; // Administrative & Operations
      case "customer":
      case "cold-calling":
      case "appointment":
      case "client-comm":
        return "outreach"; // Outreach & Communications
      case "lead-gen":
      case "research":
      case "social-media":
      case "document":
        return "growth"; // Strategy & Growth
      default:
        return "operations";
    }
  };

  const categories = [
    { key: "all", label: "All Services" },
    { key: "operations", label: "Operations & Admin" },
    { key: "outreach", label: "Outreach & Clients" },
    { key: "growth", label: "Strategy & Growth" },
  ];

  const filteredServices = SERVICES.filter((service) => {
    const categoryMatch =
      activeCategory === "all" || getServiceCategory(service.id) === activeCategory;
    const searchMatch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <section id="services" className="py-24 bg-slate-900 text-zinc-650 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-amber-600 font-mono text-[11px] font-bold tracking-widest uppercase block mb-1">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-zinc-900">
              Professional Services
            </h2>
            <div className="w-12 h-1 bg-amber-500 mt-3 rounded" />
          </div>
          <p className="text-zinc-500 text-sm max-w-sm">
            High-level operational support structured to ensure your business operations execute smoothly, on time, and with administrative perfection.
          </p>
        </div>

        {/* Controls Layout (Category Filters + Live Search) */}
        <div className="bg-slate-950/40 p-4 border border-zinc-200 rounded-2xl mb-12 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-sm bg-zinc-50/50">
          
          {/* Categories Tab list */}
          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal size={14} className="text-zinc-400 mr-2 latent-icon hidden sm:inline" />
            <div className="flex flex-wrap gap-1">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    activeCategory === cat.key
                      ? "bg-amber-500 text-white shadow-sm"
                      : "bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Live Search Input Bar */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-zinc-200 focus:border-amber-500 focus:outline-none rounded-xl py-2 px-4 pl-10 text-xs font-sans text-zinc-800 placeholder-zinc-400 transition-colors shadow-sm"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
          </div>

        </div>

        {/* Dynamic Display Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-slate-950 border border-zinc-200/65 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/30 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                {/* Decorative Accent Ring */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl group-hover:bg-amber-500/10 transition-colors pointer-events-none" />
                
                <div>
                  {/* Top line mapping category & elegant icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 group-hover:border-amber-500/20 text-amber-500 group-hover:text-amber-600 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <LucideIcon name={service.iconName} size={22} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 bg-white px-2.5 py-1 rounded-full border border-zinc-200">
                      {getServiceCategory(service.id)}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-lg font-sans font-extrabold text-zinc-800 mb-2 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-650 text-xs leading-relaxed font-sans mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Quality Seal Footer representation */}
                <div className="flex items-center space-x-2 text-[10px] font-mono text-amber-600 border-t border-zinc-100/80 pt-4 mt-auto">
                  <Check size={11} className="shrink-0" />
                  <span className="uppercase tracking-widest font-bold">SLA Compliant Support</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Query state */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white border border-dashed border-zinc-200 rounded-3xl shadow-sm">
            <h4 className="text-sm font-mono text-zinc-500">No services match your criteria.</h4>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="text-xs uppercase font-mono font-bold text-amber-600 mt-2 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
export default ServicesSection;
