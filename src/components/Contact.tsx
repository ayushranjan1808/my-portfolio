"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ArrowUpRight, Github, Linkedin, Mail, CheckCircle, Instagram } from "lucide-react";

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
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-orange-100/5 rounded-full glow-orb animate-pulse-slow" />
      <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] bg-amber-100/5 rounded-full glow-orb animate-pulse-slow" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 select-none">
          <span className="text-xs font-mono text-orange-600 font-bold tracking-widest uppercase">// 06. CONNECT WITH AYUSH</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900 leading-tight">
            Connect Telemetry
          </h2>
          <p className="text-stone-600 text-sm max-w-xl mt-2 leading-relaxed font-semibold">
            Initiate a secure socket connection directly to my database. Submit a pipeline proposal, invite me for collaborative research, or coordinate high-performance product architectures.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Terminal Details & Socials (Left 5 Cols) */}
          <div className="lg:col-span-5 p-6 glass-card-premium rounded-[2rem] border-white/60 flex flex-col justify-between text-stone-900">
            <div className="flex flex-col gap-6">
              
              {/* Terminal Screen Mock */}
              <div className="p-4 rounded-xl bg-white/60 border border-stone-200/80 font-mono text-xs text-stone-600 leading-relaxed shadow-inner-sm">
                <div className="flex items-center gap-1.5 border-b border-stone-200/60 pb-2.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[10px] text-stone-400 ml-2 font-bold">AYUSH_CONNECT_SYS // ACTIVE</span>
                </div>
                <p className="text-orange-655 text-orange-600 font-bold">&gt; CONNECTING_TO_GATEWAY... SUCCESS</p>
                <p className="text-amber-655 text-amber-600 font-bold">&gt; USER_HOST: Client_Telemetry_IPv4</p>
                <p className="font-bold">&gt; SECURE ENCRYPTED SOCKET: TLS_v1.3 ESTABLISHED</p>
                <p className="font-bold">&gt; READY FOR DATA TRANSMISSION</p>
              </div>

              {/* Communication Links details */}
              <div className="flex flex-col gap-4 font-mono text-xs text-stone-900">
                <span className="text-[10px] text-stone-450 font-bold tracking-widest uppercase">
                  // CONTACT CREDENTIALS
                </span>
                
                <a
                  href="mailto:ayush@example.com"
                  className="flex items-center justify-between p-3 rounded-2xl border border-stone-200 bg-white/70 hover:border-orange-500/35 hover:shadow-sm transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-orange-50 text-orange-600 border border-orange-100 shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-stone-400 block mb-0.5 text-[9px] font-bold">SECURE_MAIL</span>
                      <span className="text-stone-900 font-black">ayush@example.com</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-orange-600 transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ayush-ranjan-41513a33b"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl border border-stone-200 bg-white/70 hover:border-orange-500/35 hover:shadow-sm transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 shadow-sm">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-stone-400 block mb-0.5 text-[9px] font-bold">LINKEDIN_PROFILE</span>
                      <span className="text-stone-900 font-black text-xs md:text-[11px] lg:text-[10px] xl:text-[11px] truncate max-w-[210px] md:max-w-none block">linkedin.com/in/ayush-ranjan-41513a33b</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-orange-600 transition-colors" />
                </a>

                <a
                  href="https://github.com/ayushranjan1808"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl border border-stone-200 bg-white/70 hover:border-orange-500/35 hover:shadow-sm transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-stone-100 text-stone-900 border border-stone-200 shadow-sm">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-stone-400 block mb-0.5 text-[9px] font-bold">GITHUB_REPOS</span>
                      <span className="text-stone-900 font-black">github.com/ayushranjan1808</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-orange-600 transition-colors" />
                </a>

                <a
                  href="https://www.instagram.com/_ayush_4698/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl border border-stone-200 bg-white/70 hover:border-orange-500/35 hover:shadow-sm transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-pink-50 text-pink-600 border border-pink-100 shadow-sm">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-stone-400 block mb-0.5 text-[9px] font-bold">INSTAGRAM_HANDLE</span>
                      <span className="text-stone-900 font-black">@_ayush_4698</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-orange-600 transition-colors" />
                </a>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200/60 flex items-center justify-between font-mono text-[9px] text-stone-400 font-bold select-none">
              <span>ESTABLISHED SESSIONS: 01</span>
              <span>TLS_RSA_AES_256 // GCM</span>
            </div>
          </div>

          {/* Contact Form (Right 7 Cols) */}
          <div className="lg:col-span-7 p-6 md:p-8 glass-card-premium rounded-[2rem] border-white/60 relative flex flex-col justify-center text-stone-900">
            
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
                    <label className="text-stone-500 font-bold tracking-wider">01 // CLIENT_NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/70 border border-stone-200/80 rounded-xl px-4 py-3 text-stone-900 font-semibold placeholder-stone-400 focus:outline-none focus:border-orange-500 transition-colors shadow-inner-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-stone-500 font-bold tracking-wider">02 // SECURE_EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/70 border border-stone-200/80 rounded-xl px-4 py-3 text-stone-900 font-semibold placeholder-stone-400 focus:outline-none focus:border-orange-500 transition-colors shadow-inner-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-stone-500 font-bold tracking-wider">03 // PROPOSAL_PAYLOAD</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Specify your technical architectures, operational systems proposal, or research outline..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/70 border border-stone-200/80 rounded-xl px-4 py-3 text-stone-900 font-semibold placeholder-stone-400 focus:outline-none focus:border-orange-500 transition-colors shadow-inner-sm resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 flex items-center justify-center gap-2 py-4 rounded-xl bg-stone-900 text-white font-bold tracking-wider text-xs hover:bg-stone-800 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md group cursor-pointer"
                  >
                    <span>{isSubmitting ? "TRANSMITTING_PACKET..." : "SEND TRANSMISSION"}</span>
                    <Send className={`w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform ${isSubmitting ? "animate-pulse" : ""}`} />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center font-mono"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                >
                  <div className="p-4 rounded-full bg-orange-50 border border-orange-200/50 text-orange-600 mb-6 animate-bounce shadow-sm">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-black text-stone-900 mb-2">PACKET TRANSMITTED</h3>
                  <p className="text-xs text-stone-600 max-w-sm leading-relaxed mb-6 font-sans font-semibold">
                    Secure handshake established. Your telemetry proposal has been delivered to Ayush's central listener endpoint. Expect an encryption response within 24 hours.
                  </p>
                  <div className="p-3.5 border border-stone-200/60 bg-white/60 text-stone-450 font-bold rounded-xl shadow-sm">
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
