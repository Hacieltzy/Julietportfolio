import React from "react";
import { Mail, MessageCircle, Linkedin, Facebook, Heart, ArrowUp } from "lucide-react";
import { PORTFOLIO_NAME, CONTACT_INFO } from "../data";

export const Footer: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  const currentYear = 2026; // Set to current system year from metadata

  return (
    <footer className="bg-slate-950 text-zinc-500 border-t border-zinc-200 py-16 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={() => handleScrollTo("hero")}
          id="scroll-to-top-footer"
          className="w-12 h-12 rounded-full bg-white border border-zinc-200 hover:border-amber-500 text-amber-600 hover:text-amber-700 flex items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-zinc-200">
          
          {/* Column 1: Brand & Description */}
          <div className="col-span-1 md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center font-serif font-black text-xs text-amber-600 shadow-sm">
                JC
              </div>
              <span className="text-zinc-900 font-sans font-bold text-base tracking-tight">
                {PORTFOLIO_NAME}
              </span>
            </div>
            
            <p className="text-xs leading-relaxed max-w-sm text-zinc-500">
              Supporting executives, entrepreneurs, and global growing teams with high-discretion virtual assistance, calendar optimization, and flawless operational coordination.
            </p>

            <div className="flex space-x-3.5 pt-2">
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-zinc-400 hover:text-amber-600 transition-colors" aria-label="Mail Address">
                <Mail size={16} />
              </a>
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-600 transition-colors" aria-label="WhatsApp Phone">
                <MessageCircle size={16} />
              </a>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-600 transition-colors" aria-label="LinkedIn profile">
                <Linkedin size={16} />
              </a>
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-600 transition-colors" aria-label="Facebook page">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick navigation anchors */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-zinc-800 font-mono text-[10px] uppercase tracking-widest font-bold">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleScrollTo("about")} className="text-zinc-500 hover:text-amber-600 transition-colors text-left cursor-pointer font-sans">About Overview</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("services")} className="text-zinc-500 hover:text-amber-600 transition-colors text-left cursor-pointer font-sans">Executive Services</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("experience")} className="text-zinc-500 hover:text-amber-600 transition-colors text-left cursor-pointer font-sans">Professional History</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("skills")} className="text-zinc-500 hover:text-amber-600 transition-colors text-left cursor-pointer font-sans">Skills & Software</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("testimonials")} className="text-zinc-500 hover:text-amber-600 transition-colors text-left cursor-pointer font-sans">Client Reviews</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Focus Specialties list */}
          <div className="col-span-1 md:col-span-4 space-y-4">
            <h4 className="text-zinc-800 font-mono text-[10px] uppercase tracking-widest font-bold">Specialty Sectors</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center space-x-2 text-zinc-500">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Executive Inbox Management</span>
              </li>
              <li className="flex items-center space-x-2 text-zinc-500">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Asynchronous Operations Support</span>
              </li>
              <li className="flex items-center space-x-2 text-zinc-500">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Lead Scraping & Database Entry</span>
              </li>
              <li className="flex items-center space-x-2 text-zinc-500">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Task Automations & GHL Setup</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Sub-bottom segment */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between text-[11px] gap-4">
          <div>
            &copy; {currentYear} {PORTFOLIO_NAME}. All rights reserved under SLA terms.
          </div>
          <div className="flex items-center space-x-1 font-sans text-zinc-500">
            <span>Developed by:</span>
            <span className="font-semibold text-zinc-700">Haciel Casihan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
