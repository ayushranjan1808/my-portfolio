"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, ArrowUpRight, Github, Linkedin, Mail, CheckCircle, Shield, Instagram } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("System Warn: Form incomplete. Please fill out all fields.");
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000); // Clear after 5 seconds
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-brand-cyan/5 rounded-full glow-orb animate-pulse-slow" />
      <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] bg-brand-violet/5 rounded-full glow-orb animate-pulse-slow" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16">
          <span className="text-xs font-mono text-brand-cyan tracking-widest uppercase">// 07. CONNECT WITH HOST</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-mono">
            Connect Telemetry
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-2 leading-relaxed font-sans">
            Initiate a secure socket connection directly to my database. Submit a pipeline proposal, invite me for collaborative research, or coordinate high-performance product architectures.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Terminal Details & Socials (Left 5 Cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl border border-white/5 bg-white/5 glass-panel flex flex-col justify-between select-none">
            <div className="flex flex-col gap-6">
              
              {/* Terminal Screen Mock */}
              <div className="p-4 rounded-xl bg-dark-bg/60 border border-white/5 font-mono text-xs text-gray-400 leading-relaxed shadow-inner">
                <div className="flex items-center gap-1.5 border-b border-white/5 pb-2.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[10px] text-gray-500 ml-2">AYUSH_CONNECT_SYS // ACTIVE</span>
                </div>
                <p className="text-brand-cyan">&gt; CONNECTING_TO_GATEWAY... SUCCESS</p>
                <p className="text-brand-violet">&gt; USER_HOST: Client_Telemetry_IPv4</p>
                <p>&gt; SECURE ENCRYPTED SOCKET: TLS_v1.3 ESTABLISHED</p>
                <p>&gt; READY FOR DATA TRANSMISSION</p>
              </div>

              {/* Communication Links details */}
              <div className="flex flex-col gap-4 font-mono text-xs">
                <span className="text-[10px] text-gray-500 tracking-widest uppercase">
                  // CONTACT CREDENTIALS
                </span>
                
                <a
                  href="mailto:ayush@example.com"
                  className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/5 hover:border-brand-cyan/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-white/5 text-brand-cyan">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-gray-500 block mb-0.5 text-[9px]">SECURE_MAIL</span>
                      <span className="text-white font-bold">ayush@example.com</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-brand-cyan transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ayush-ranjan-41513a33b"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/5 hover:border-brand-violet/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-white/5 text-brand-violet">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-gray-500 block mb-0.5 text-[9px]">LINKEDIN_PROFILE</span>
                      <span className="text-white font-bold">linkedin.com/in/ayush-ranjan-41513a33b</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-brand-violet transition-colors" />
                </a>

                <a
                  href="https://github.com/ayushranjan1808"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/5 hover:border-brand-emerald/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-white/5 text-brand-emerald">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-gray-500 block mb-0.5 text-[9px]">GITHUB_REPOS</span>
                      <span className="text-white font-bold">github.com/ayushranjan1808</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-brand-emerald transition-colors" />
                </a>

                <a
                  href="https://www.instagram.com/_ayush_4698/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/5 hover:border-pink-500/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-white/5 text-pink-500">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-gray-500 block mb-0.5 text-[9px]">INSTAGRAM_HANDLE</span>
                      <span className="text-white font-bold">@_ayush_4698</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-pink-500 transition-colors" />
                </a>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-gray-500">
              <span>ESTABLISHED SESSIONS: 01</span>
              <span>TLS_RSA_AES_256 // GCM</span>
            </div>
          </div>

          {/* Contact Glowing Form (Right 7 Cols) */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl border border-white/5 bg-white/5 glass-panel relative flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 font-mono text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 font-bold tracking-wider">01 // CLIENT_NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-dark-bg/60 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 font-bold tracking-wider">02 // SECURE_EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-dark-bg/60 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 font-bold tracking-wider">03 // PROPOSAL_PAYLOAD</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Specify your technical architectures, operational systems proposal, or research outline..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-dark-bg/60 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 flex items-center justify-center gap-2 py-4 rounded-xl bg-white text-dark-bg font-bold tracking-wider text-xs hover:bg-gray-200 transition-colors shadow-[0_4px_25px_rgba(255,255,255,0.08)] group"
                  >
                    <span>{isSubmitting ? "TRANSMITTING_PACKET..." : "SEND TRANSMISSION"}</span>
                    <Send className={`w-3.5 h-3.5 text-dark-bg group-hover:translate-x-0.5 transition-transform ${isSubmitting ? "animate-pulse" : ""}`} />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center font-mono"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                >
                  <div className="p-4 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan mb-6 animate-bounce">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">PACKET TRANSMITTED</h3>
                  <p className="text-xs text-gray-400 max-w-sm leading-relaxed mb-6 font-sans">
                    Secure handshake established. Your telemetry proposal has been delivered to Ayush's central listener endpoint. Expect an encryption response within 24 hours.
                  </p>
                  <div className="p-3.5 border border-white/5 bg-white/5 rounded-xl text-[10px] text-gray-500 max-w-xs">
                    SYS_TX: OK // RES_CODE: 202_ACCEPTED
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
