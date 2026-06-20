"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Cpu, Sparkles, Terminal, FileText, Blocks } from "lucide-react";
import confetti from "canvas-confetti";

const roles = [
  "Building Hyper-scale AI Infrastructure",
  "Optimizing ML Predictive Systems",
  "Researching Quantum Gate Operations",
  "Architecting Real-World SaaS Platforms",
];

const badges = [
  { text: "AI Systems", color: "border-orange-500/20 text-orange-700 bg-orange-500/5" },
  { text: "Quantum Info", color: "border-amber-500/20 text-amber-700 bg-amber-500/5" },
  { text: "Full-Stack SaaS", color: "border-stone-500/20 text-stone-700 bg-stone-500/5" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentFullRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentFullRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 30);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentFullRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 60);
    }

    if (!isDeleting && charIndex === currentFullRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2500); // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const handleTriggerResume = (e: React.MouseEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#ea580c", "#d97706", "#b45309"],
    });
    alert("System Dispatch: Ayush's engineering resume has been generated and compiled successfully! (Simulated download initiated)");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Subtle warm spotlights */}
      <div className="absolute top-[15%] left-[5%] w-[450px] h-[450px] bg-orange-200/20 rounded-full glow-orb animate-pulse-slow" />
      <div className="absolute bottom-[15%] right-[5%] w-[450px] h-[450px] bg-amber-200/20 rounded-full glow-orb animate-pulse-slow" style={{ animationDelay: "2.5s" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Split Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-10rem)]">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left select-none">
            
            {/* Systems Badge */}
            <motion.div
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-xs font-mono font-bold text-orange-850 mb-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-600 animate-pulse" />
              <span>Systems Engineer &amp; Quantum Explorer</span>
            </motion.div>

            {/* Giant Title Name with Warm Gradient clip */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-stone-900 leading-none">
                AYUSH
              </h1>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-3 bg-gradient-to-r from-orange-600 via-amber-600 to-amber-700 bg-clip-text text-transparent">
                INTELLIGENT SYSTEMS
              </h2>
            </motion.div>

            {/* Typewriter text block */}
            <motion.div
              className="h-8 font-mono text-sm md:text-base text-orange-700 font-bold tracking-wide mt-4 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-stone-400 mr-2">&gt; </span>
              <span className="typing-cursor">{typedText}</span>
            </motion.div>

            {/* Core statement */}
            <motion.p
              className="text-stone-600 mt-6 max-w-xl text-sm md:text-base leading-relaxed font-sans font-medium"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              Designing production-ready full-stack software, deep systems architecture, and quantum circuit simulations. Exploring operational luxury and visual elegance.
            </motion.p>

            {/* Badges */}
            <motion.div
              className="flex flex-wrap gap-2.5 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {badges.map((b) => (
                <span
                  key={b.text}
                  className={`text-xs font-mono font-bold px-3 py-1 rounded-full border shadow-sm ${b.color}`}
                >
                  {b.text.toUpperCase()}
                </span>
              ))}
            </motion.div>

            {/* Action buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-10 w-full sm:w-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            >
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-stone-850 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-stone-900/10"
              >
                <Blocks className="w-4 h-4 text-white" />
                <span>VIEW PROJECTS</span>
              </a>

              <a
                href="#lab"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-stone-200 bg-white/60 backdrop-blur-md text-stone-800 font-bold text-xs uppercase tracking-wider hover:bg-white hover:border-stone-300 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
              >
                <Terminal className="w-4 h-4 text-orange-600" />
                <span>RESEARCH LAB</span>
              </a>

              <a
                href="#resume"
                onClick={handleTriggerResume}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-orange-200 bg-orange-50/50 hover:bg-orange-100/50 hover:border-orange-300 text-orange-700 font-bold text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-orange-600" />
                <span>SYNC_RESUME</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Floating Photo Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <motion.div
              className="relative w-full max-w-[340px] md:max-w-[380px]"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              {/* Decorative orange glowing background panel */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-orange-500 to-amber-500 opacity-20 filter blur-2xl rounded-[3rem] -z-10 animate-pulse-slow" />
              
              {/* High-end Asymmetric Glass Photo Frame widget */}
              <div className="group relative bg-white/30 p-4 rounded-[2.5rem] border border-white/50 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-orange-500/10">
                <div className="overflow-hidden rounded-[1.8rem] aspect-[3/4] relative bg-stone-100">
                  <img
                    src="/profile.jpg"
                    alt="Ayush"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-95 transition-all duration-700 ease-out"
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20 pointer-events-none" />
                </div>
              </div>

              {/* Decorative tech brackets */}
              <div className="absolute top-2 left-2 text-stone-400/50 font-mono text-[9px] pointer-events-none select-none">[ AYUSH_HQ_SYS_2.0 ]</div>
              <div className="absolute bottom-6 right-6 text-stone-400/50 font-mono text-[9px] pointer-events-none select-none">[ PORTRAIT_ENV ]</div>
            </motion.div>
          </div>

        </div>

        {/* Floating Down Arrow */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <span className="text-[9px] font-mono tracking-widest text-stone-500 font-bold">SCROLL_DOWN</span>
          <ArrowDown className="w-3.5 h-3.5 text-stone-600 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
