import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageCircle, Linkedin, Facebook, Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { CONTACT_INFO } from "../data";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage("Please complete all fields prior to sending your message.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    // Simulate standard outbound server proxy delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-zinc-650 relative w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-100/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <span className="text-amber-600 font-mono text-[11px] font-bold tracking-widest uppercase block mb-1">
            Initiate Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-zinc-900 animate-fade-in">
            Let's Work Together
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 rounded" />
          <p className="text-zinc-500 text-xs sm:text-sm mt-4 leading-relaxed font-sans">
            Ready to delegate tasks and grow your business? Let's discuss how I can support your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Communication Card details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xs uppercase font-mono tracking-widest text-zinc-400 font-extrabold mb-2 block">
                Contact Channels
              </h3>

              <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm border border-slate-850">
                {/* Back ambient accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />

                <h4 className="text-zinc-800 font-sans font-bold text-2xl tracking-tight mb-2">Juliet Chinye</h4>
                <p className="text-amber-600 font-mono text-[10px] uppercase tracking-widest mb-6 border-b border-zinc-100 pb-4 font-bold">
                  Virtual Assistant Specialist
                </p>

                <div className="space-y-6">
                  
                  {/* Email Channel */}
                  <div className="flex items-center space-x-4">
                    <div className="w-11 h-11 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center justify-center text-amber-500">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-mono">Email Address</span>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-zinc-800 hover:text-amber-600 transition-colors text-xs sm:text-sm font-sans font-semibold">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp Channel */}
                  <div className="flex items-center space-x-4">
                    <div className="w-11 h-11 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center justify-center text-amber-500">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-mono">Instant Chat</span>
                      <a
                        href={`https://wa.me/${CONTACT_INFO.whatsapp.replace("+", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-800 hover:text-amber-600 transition-colors text-xs sm:text-sm font-sans font-semibold inline-flex items-center space-x-1"
                      >
                        <span>+234 704 770 7469</span>
                      </a>
                    </div>
                  </div>

                </div>

                {/* Social Channels Button Cluster */}
                <div className="mt-10 border-t border-zinc-100 pt-6">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-mono mb-4">Professional Networks</span>
                  <div className="flex space-x-3">
                    
                    {/* LinkedIn */}
                    <a
                      href={CONTACT_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-zinc-50 border border-zinc-200 hover:border-amber-500/20 text-zinc-500 hover:text-amber-600 rounded-xl flex items-center justify-center transition-all duration-200"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={18} />
                    </a>

                    {/* Facebook */}
                    <a
                      href={CONTACT_INFO.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-zinc-50 border border-zinc-200 hover:border-amber-500/20 text-zinc-500 hover:text-amber-600 rounded-xl flex items-center justify-center transition-all duration-200"
                      aria-label="Facebook Page"
                    >
                      <Facebook size={18} />
                    </a>

                  </div>
                </div>

              </div>
            </div>

            {/* Quick Slogan Box */}
            <div className="p-5 bg-amber-500/5 border border-amber-500/15 rounded-2xl flex items-start space-x-3.5">
              <Sparkles className="text-amber-600 shrink-0 mt-0.5" size={18} />
              <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
                <strong>Hassle-Free Delegations:</strong> All communications represent high levels of discretion, security, and strict enterprise classification standards.
              </p>
            </div>
          </div>

          {/* Right Block: Dynamic Form / Success Overlay */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-850 rounded-3xl p-6 sm:p-8 shadow-sm relative w-full overflow-hidden self-stretch flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-mono text-zinc-500 font-bold tracking-wider">Your Name <span className="text-amber-600">*</span></label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-950 border border-zinc-200 focus:border-amber-500 focus:outline-none rounded-xl py-3 px-4 text-xs text-zinc-800 placeholder-zinc-400 transition-all font-sans"
                      />
                    </div>
                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-mono text-zinc-500 font-bold tracking-wider">Email Address <span className="text-amber-600">*</span></label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@example.com"
                        className="w-full bg-slate-950 border border-zinc-200 focus:border-amber-500 focus:outline-none rounded-xl py-3 px-4 text-xs text-zinc-800 placeholder-zinc-400 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Subject input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono text-zinc-500 font-bold tracking-wider">Subject <span className="text-amber-600">*</span></label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Calendar Execution Support"
                      className="w-full bg-slate-950 border border-zinc-200 focus:border-amber-500 focus:outline-none rounded-xl py-3 px-4 text-xs text-zinc-800 placeholder-zinc-400 transition-all font-sans"
                    />
                  </div>

                  {/* Message Input text area */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono text-zinc-500 font-bold tracking-wider">Project / Task Details <span className="text-amber-600">*</span></label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Detail your operational bottleneck, email volume, or support schedules..."
                      className="w-full bg-slate-950 border border-zinc-200 focus:border-amber-500 focus:outline-none rounded-xl py-3 px-4 text-xs text-zinc-800 placeholder-zinc-400 transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Error Notification Bar */}
                  {errorMessage && (
                    <div className="p-3.5 bg-red-100 text-red-700 text-xs rounded-xl font-sans border border-red-200">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-amber-500 hover:bg-amber-600 disabled:bg-zinc-100 disabled:text-zinc-400 text-white font-mono text-xs uppercase font-bold tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin text-white" size={16} />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 px-4 space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 border border-green-200 flex items-center justify-center shadow-sm">
                    <CheckCircle2 size={32} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-sans font-bold text-zinc-800 leading-tight">Message Sent Successfully!</h4>
                    <p className="text-zinc-500 text-xs sm:text-sm mt-3 leading-relaxed max-w-sm mx-auto font-sans">
                      Thank you, <strong className="text-zinc-800">{formData.name}</strong>. Your message has been successfully sent. We will get back to you within 12 business hours.
                    </p>
                  </div>
                  
                  <div className="bg-zinc-50 border border-zinc-200 px-5 py-4 rounded-2xl w-full text-left">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">Receipt Summary</span>
                    <strong className="text-xs text-zinc-700 block truncate font-sans">{formData.subject}</strong>
                    <span className="text-xs text-zinc-400 block truncate font-sans">{formData.email}</span>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-amber-500 text-white font-mono text-[11px] font-bold uppercase tracking-wider rounded-xl hover:bg-amber-600 transition-colors cursor-pointer shadow-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
};
export default ContactSection;
