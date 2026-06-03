import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import WhyHireMeSection from './components/WhyHireMeSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-350 font-sans selection:bg-amber-400 selection:text-slate-950 antialiased scroll-smooth">
      {/* Dynamic Sticky Header Navigation */}
      <Navbar />

      <main>
        {/* Hero Banner Grid (Profile image, Title, Contact action targets) */}
        <HeroSection />

        {/* Narrative bio detailed with academic details and counters card block */}
        <AboutSection />

        {/* 14 Custom categorized services with search bar filtering capabilities */}
        <ServicesSection />

        {/* Vertical Career history tracking timelines */}
        <ExperienceSection />

        {/* Competencies Progress Bars & tech stack badging grids */}
        <SkillsSection />

        {/* Competitive value proposition highlight shields */}
        <WhyHireMeSection />

        {/* Reviewers deck slider carrying golden ratings stars */}
        <TestimonialsSection />

        {/* Communication contact detail clusters & messaging forms */}
        <ContactSection />
      </main>

      {/* Semantic Footing grids carrying direct anchors */}
      <Footer />
    </div>
  );
}
