import React, { useState, useEffect } from "react";
import { animate, motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, UserCheck } from "lucide-react";
import { PORTFOLIO_NAME } from "../data";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = ["hero", "about", "services", "experience", "skills", "why-hire", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Skills & Tools", href: "#skills" },
    { label: "Why VA", href: "#why-hire" },
    { label: "Reviews", href: "#testimonials" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.getElementById(id.replace("#", ""));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-zinc-200 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#hero"
            id="nav-logo-link"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="flex items-center space-x-2 group hover:scale-105 transition-transform duration-200"
          >
            <div className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center shadow-sm relative overflow-hidden group">
              <span className="text-amber-600 font-serif font-extrabold tracking-widest text-lg">JC</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-zinc-900 font-sans font-bold tracking-tight text-lg group-hover:text-amber-600 transition-colors">
                {PORTFOLIO_NAME}
              </span>
              <span className="text-[10px] text-amber-600 font-mono tracking-widest uppercase -mt-1 hidden sm:inline-block font-bold">
                Virtual Executive Support
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const currentId = link.href.replace("#", "");
              const isActive = activeSection === currentId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  id={`nav-link-${currentId}`}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`relative text-xs uppercase font-mono tracking-wider transition-colors duration-200 py-2 cursor-pointer ${
                    isActive ? "text-amber-600 font-bold" : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Hire Me CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              id="cta-nav-hire"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-xs uppercase font-mono font-bold tracking-wider rounded-lg shadow-sm transition-all duration-200 flex items-center space-x-2 border border-amber-600/20 group hover:-translate-y-[2px]"
            >
              <span>Hire Me</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-btn"
              className="text-zinc-650 hover:text-zinc-900 hover:bg-zinc-100 p-2 rounded-lg transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav sliding sidebar drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              id="mobile-sidebar-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Sidebar Control Panel container */}
            <motion.div
              id="mobile-sidebar-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-screen w-[280px] sm:w-[325px] bg-slate-900 border-l border-slate-850 shadow-2xl z-50 md:hidden flex flex-col justify-between"
            >
              {/* Header inside Sidebar */}
              <div className="p-5 border-b border-slate-850">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full border border-zinc-200/20 bg-slate-800 flex items-center justify-center shadow-sm relative overflow-hidden">
                      <span className="text-amber-500 font-serif font-extrabold tracking-widest text-sm">JC</span>
                    </div>
                    <span className="text-zinc-100 font-sans font-extrabold tracking-tight text-sm">
                      {PORTFOLIO_NAME}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors focus:outline-none cursor-pointer"
                    aria-label="Close Menu"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Navigation list items */}
              <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
                <span className="block text-[10px] uppercase tracking-widest text-zinc-500 font-mono mb-4 px-3 font-semibold">
                  Navigation Menu
                </span>
                {navLinks.map((link) => {
                  const currentId = link.href.replace("#", "");
                  const isActive = activeSection === currentId;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      id={`mobile-nav-link-${currentId}`}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className={`block px-4 py-3.5 text-xs font-mono tracking-wider rounded-xl transition-all cursor-pointer ${
                        isActive
                          ? "bg-amber-500/10 text-amber-500 border-l-4 border-amber-500 font-bold"
                          : "text-zinc-400 hover:bg-slate-800/40 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>

              {/* Sidebar Footer Contacts */}
              <div className="p-5 border-t border-slate-850 bg-slate-950/40 space-y-4">
                <div className="space-y-2">
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
                    Quick Contact
                  </div>
                  <a 
                    href="mailto:chinyejuliet01@gmail.com"
                    className="block text-xs font-mono text-zinc-300 hover:text-amber-500 transition-colors break-all"
                  >
                    chinyejuliet01@gmail.com
                  </a>
                  <a 
                    href="https://wa.me/2347047707469"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs font-mono text-zinc-300 hover:text-amber-500 transition-colors"
                  >
                    WhatsApp: +234 704 770 7469
                  </a>
                </div>

                <a
                  href="#contact"
                  id="mobile-nav-cta"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white text-center font-mono text-xs font-bold tracking-wider rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer shadow-sm"
                >
                  <UserCheck size={14} />
                  <span>LET'S WORK TOGETHER</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
