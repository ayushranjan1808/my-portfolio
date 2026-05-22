"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Cpu, Sparkles, Terminal, FileText, Blocks } from "lucide-react";
import confetti from "canvas-confetti";

const roles = [
  "Building Hyper-scale AI Infrastructure",
  "Optimizing ML Predictive Systems",
  "Researching Quantum Gate Operations",
  "Architecting Real-World SaaS Platforms",
];

const badges = [
  { text: "AI Systems", color: "border-brand-cyan/30 text-brand-cyan" },
  { text: "Quantum Info", color: "border-brand-violet/30 text-brand-violet" },
  { text: "Full-Stack SaaS", color: "border-brand-emerald/30 text-brand-emerald" },
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
      }, 35);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentFullRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 75);
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
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#00f5ff", "#8b5cf6", "#10b981"],
    });
    alert("System Dispatch: Ayush's engineering resume has been generated and compiled successfully! (Simulated download initiated)");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background radial spotlights */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-brand-cyan/10 rounded-full glow-orb animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-brand-violet/10 rounded-full glow-orb animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />

      {/* Futuristic line indicators */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/0 via-white/5 to-white/0 hidden lg:block" />
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/0 via-white/5 to-white/0 hidden lg:block" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center">
        {/* Glowing floating status tag */}
        <motion.div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-xs font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
          <span className="text-gray-400">STATUS:</span>
          <span className="text-white font-semibold">AVAILABLE_FOR_SYSTEMS_R&D</span>
        </motion.div>

        {/* Big Name */}
        <motion.div
          className="relative inline-block"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <h1 className="text-7xl md:text-9xl font-mono font-black tracking-tighter text-white select-none">
            AYUSH
          </h1>
          <div className="absolute -inset-2 bg-gradient-to-r from-brand-cyan to-brand-violet opacity-10 filter blur-xl -z-10 animate-pulse-slow" />
        </motion.div>

        {/* Primary Title */}
        <motion.h2
          className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-200 mt-6 max-w-3xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          AI Systems Engineer &amp; Quantum Computing Explorer
        </motion.h2>

        {/* Typewriter Rotator */}
        <motion.div
          className="h-8 font-mono text-sm md:text-base text-brand-cyan font-bold tracking-wide mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <span className="text-gray-500 mr-1">&gt; </span>
          <span className="typing-cursor">{typedText}</span>
        </motion.div>

        {/* Secondary Statement */}
        <motion.p
          className="text-gray-400 mt-6 max-w-xl text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          Building intelligent systems, real-world operational platforms, and next-generation AI interfaces.
        </motion.p>

        {/* Badges Container */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {badges.map((b) => (
            <span
              key={b.text}
              className={`text-xs font-mono px-3 py-1 rounded-full border bg-white/5 backdrop-blur-sm ${b.color}`}
            >
              {b.text.toUpperCase()}
            </span>
          ))}
        </motion.div>

        {/* Action Button Grid */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-12 w-full max-w-md sm:max-w-none justify-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-dark-bg font-semibold text-sm hover:bg-gray-200 transition-colors shadow-[0_4px_20px_rgba(255,255,255,0.15)] group"
          >
            <Blocks className="w-4 h-4 text-dark-bg" />
            <span>VIEW PROJECTS</span>
          </a>

          <a
            href="#lab"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all font-semibold text-sm group"
          >
            <Terminal className="w-4 h-4 text-brand-violet" />
            <span>RESEARCH LAB</span>
          </a>

          <a
            href="#resume"
            onClick={handleTriggerResume}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/15 hover:border-brand-cyan/40 text-brand-cyan font-semibold text-sm transition-all"
          >
            <FileText className="w-4 h-4 text-brand-cyan" />
            <span>SYNC_RESUME</span>
          </a>
        </motion.div>

        {/* Floating Down Arrow */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <span className="text-[10px] font-mono tracking-widest text-gray-500">SCROLL_DOWN</span>
          <ArrowDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
}
