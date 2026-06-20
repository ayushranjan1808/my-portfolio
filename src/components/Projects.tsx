"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowUpRight, Blocks, Database, Brain, X, Sparkles } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tech: string[];
  problem: string;
  architecture: string;
  aiFeatures?: string;
  challenges: string;
  liveLink?: string;
  githubLink?: string;
  features?: string[];
  visualType: "eco" | "hostel" | "trading" | "quantum";
}

const projectsData: Project[] = [
  {
    id: "classic-board-games",
    title: "Classic Board Games Hub",
    subtitle: "Interactive Real-Time Multiplayer Platform",
    category: "FULL-STACK GAMING",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
    problem: "Building responsive, zero-latency multiplayer web games requires precise state synchronization and seamless client-server interaction.",
    architecture: "Real-time gaming architecture utilizing Next.js edge capabilities and WebSocket integration for sub-50ms latency state updates across distributed clients.",
    challenges: "Resolved complex race conditions during simultaneous player inputs by implementing strict state-locking and optimistic UI rendering techniques.",
    features: ["Real-time multiplayer synchronization", "Optimistic state rendering", "Responsive interactive UI"],
    githubLink: "https://github.com/ayushranjan1808/classic-board-games-hub",
    liveLink: "https://classic-board-games-hub.vercel.app",
    visualType: "eco",
  },
  {
    id: "study-to-do",
    title: "Study To-Do Engine",
    subtitle: "High-Performance Task Management Architecture",
    category: "PRODUCTIVITY SYSTEMS",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "LocalStorage"],
    problem: "Traditional to-do apps lack academic-focused features and often suffer from bloated state management resulting in UI lag during high-volume task entries.",
    architecture: "Optimized client-side state machine using React Context and custom hooks, paired with persistent local storage serialization for instantaneous load times.",
    challenges: "Engineered a custom re-rendering strategy that prevents the entire list from repainting when a single task status is toggled, improving UI performance significantly.",
    features: ["Zero-latency task tracking", "Academic workflow optimized", "Client-side state persistence"],
    githubLink: "https://github.com/ayushranjan1808/study-to-do-",
    liveLink: "https://study-to-do.vercel.app",
    visualType: "hostel",
  },
  {
    id: "trading-predictor",
    title: "AI Trading Predictor",
    subtitle: "Neural Trend Forecasting Pipeline",
    category: "QUANT & MACHINE LEARNING",
    tech: ["Python", "FastAPI", "LSTM", "ARIMA", "Next.js", "TypeScript"],
    problem: "Traditional stock moving averages lag behind market changes and fail to model complex non-linear time-series relationships.",
    architecture: "FastAPI inference microservice serving deep LSTM tensor forecasts and ARIMA parameters, visualized through highly optimized SVG chart layers in React.",
    challenges: "Mitigated forecasting overfitting by creating robust data pipelines that run scaling normalization (MinMax) alongside rolling-window indicators.",
    features: ["LSTM recurrent neural layers", "RSI / MACD forecasting layers", "Live trend visualizer"],
    githubLink: "#",
    liveLink: "#",
    visualType: "trading",
  },
  {
    id: "quantum-research",
    title: "Quantum Learning Lab",
    subtitle: "Interactive Bloch Sphere & Gate Visualizer",
    category: "QUANTUM INFORMATION",
    tech: ["Next.js", "TypeScript", "Canvas API", "Quantum Gate Matrices"],
    problem: "Quantum Computing concepts like superposition, phase rotation, and quantum logic gates are highly abstract and mathematically difficult to learn visually.",
    architecture: "Client-side matrix physics sandbox projecting custom 3D vector transformations on a 2D HTML5 canvas Bloch sphere diagram.",
    challenges: "Designed custom linear algebra vector multiplication methods in pure TypeScript to avoid heavy external matrix calculations.",
    features: ["Real-time Bloch Sphere simulator", "Hadamard & Pauli gate controls", "Interactive Qubit research logs"],
    githubLink: "#",
    liveLink: "#",
    visualType: "quantum",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />

      {/* Decorative side lights */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-orange-100/5 rounded-full glow-orb animate-pulse-slow" />
      <div className="absolute bottom-[30%] right-[-10%] w-[350px] h-[350px] bg-amber-100/5 rounded-full glow-orb animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 select-none">
          <span className="text-xs font-mono text-orange-600 font-bold tracking-widest uppercase">// 02. PORTFOLIO WORK</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900 leading-tight">
            Technical Systems &amp; Advanced R&amp;D
          </h2>
          <p className="text-stone-600 text-sm max-w-2xl mt-2 leading-relaxed font-semibold">
            A curated showcase of production-ready software platforms, real-world machine learning architectures, and interactive quantum computing simulators. Click a card to read full architectural blueprints.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="group p-6 md:p-8 glass-card-premium glass-card-premium-hover cursor-pointer select-none text-stone-900 rounded-3xl flex flex-col justify-between"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-orange-700 bg-orange-100/70 border border-orange-200/50 px-2 py-0.5 rounded">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-500 flex items-center gap-1 group-hover:text-orange-600 transition-colors">
                    <span>SYS_SPEC</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-stone-900 mb-1 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-stone-500 mb-6">
                  {project.subtitle}
                </p>

                {/* Mini Interactive Preview Graphic */}
                <div className="w-full h-40 rounded-2xl bg-white/50 border border-stone-200/60 shadow-inner-sm mb-6 overflow-hidden flex items-center justify-center p-4 relative">
                  <div className="absolute inset-0 grid-overlay opacity-15" />
                  
                  {project.visualType === "eco" && (
                    <div className="flex flex-col items-center gap-2 font-mono text-[10px]">
                      <div className="flex items-center gap-2 text-orange-600 font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-orange-600 animate-pulse" />
                        <span>QUERY: "zero-latency multiplayer lobby"</span>
                      </div>
                      <div className="w-36 h-[3px] bg-stone-200 relative overflow-hidden rounded">
                        <div className="absolute left-0 top-0 h-full w-4/5 bg-orange-500" />
                      </div>
                      <span className="text-stone-400 font-bold">SYNC STATUS: ONLINE [SUB_50MS]</span>
                    </div>
                  )}

                  {project.visualType === "hostel" && (
                    <div className="grid grid-cols-2 gap-4 w-full text-[10px] font-mono">
                      <div className="p-2.5 border border-stone-200/80 bg-white/70 rounded-xl shadow-sm">
                        <span className="text-stone-400 font-bold block">RENDERING TIMELINE</span>
                        <span className="text-orange-600 font-black text-sm">PREVENT_REPAINT</span>
                      </div>
                      <div className="p-2.5 border border-stone-200/80 bg-white/70 rounded-xl shadow-sm">
                        <span className="text-stone-400 font-bold block">STATE SPEED</span>
                        <span className="text-amber-600 font-black text-sm">ZERO_UI_LAG</span>
                      </div>
                    </div>
                  )}

                  {project.visualType === "trading" && (
                    <div className="w-full h-full flex flex-col justify-end gap-1.5 font-mono text-[9px] text-stone-400">
                      <div className="flex justify-between items-center text-orange-600 font-bold">
                        <span>LSTM FORECAST ENGINE</span>
                        <span>R_TREND: +1.4%</span>
                      </div>
                      <svg className="w-full h-20 overflow-visible" viewBox="0 0 100 40">
                        {/* Actual Line */}
                        <path d="M 0,35 L 20,30 L 40,32 L 60,25 L 80,28 L 100,15" fill="none" stroke="rgba(28,25,23,0.15)" strokeWidth="1.5" />
                        {/* Forecast Line */}
                        <path d="M 60,25 L 80,22 L 100,10" fill="none" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="3,3" />
                        {/* Highlight Dot */}
                        <circle cx="100" cy="10" r="2.5" fill="#d97706" />
                      </svg>
                    </div>
                  )}

                  {project.visualType === "quantum" && (
                    <div className="flex flex-col items-center justify-center relative">
                      <div className="w-20 h-20 rounded-full border border-stone-200/80 flex items-center justify-center relative bg-white/40 shadow-sm">
                        {/* Bloch Sphere sphere lines */}
                        <div className="absolute w-full h-[1px] bg-stone-300/40" />
                        <div className="absolute h-full w-[1px] bg-stone-300/40" />
                        <div className="absolute w-4 h-20 border border-stone-300/40 rounded-full" />
                        {/* State Vector arrow */}
                        <div className="absolute w-12 h-[1.5px] bg-orange-600 origin-left rotate-[40deg]" style={{ left: "50%" }} />
                        <div className="absolute top-1 right-1 text-stone-700 font-mono text-[9px] font-bold">|ψ⟩</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Technology badges */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono font-bold text-stone-600 bg-stone-100 border border-stone-200/50 px-2.5 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modern Light Luxury Specification Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Box */}
            <motion.div
              className="relative w-full max-w-2xl rounded-[2rem] border border-white/60 bg-white/90 p-6 md:p-8 shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto text-stone-900 backdrop-blur-2xl"
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

              {/* Header */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-orange-600 font-bold tracking-widest uppercase">
                    PROJECT ARCHITECTURE SUMMARY
                  </span>
                  <h3 className="text-2xl md:text-3xl font-mono font-black text-stone-900 mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg border border-stone-200 bg-stone-55 hover:bg-stone-100 text-stone-500 hover:text-stone-850 transition-colors shadow-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Technical Specifications Container */}
              <div className="flex flex-col gap-5 font-mono text-xs text-stone-700 relative z-10">
                
                {/* Problem Statement */}
                <div className="flex flex-col gap-2 p-4 rounded-xl border border-stone-200/80 bg-white/70 shadow-sm">
                  <div className="flex items-center gap-2 text-orange-650 font-black">
                    <Terminal className="w-4 h-4" />
                    <span>01 // PROBLEM_STATEMENT</span>
                  </div>
                  <p className="leading-relaxed text-[11px] text-stone-600 font-bold">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Architecture Blueprint */}
                <div className="flex flex-col gap-2 p-4 rounded-xl border border-stone-200/80 bg-white/70 shadow-sm">
                  <div className="flex items-center gap-2 text-amber-650 font-black">
                    <Blocks className="w-4 h-4" />
                    <span>02 // ARCHITECTURE_BLUEPRINT</span>
                  </div>
                  <p className="leading-relaxed text-[11px] text-stone-600 font-bold">
                    {selectedProject.architecture}
                  </p>
                </div>

                {/* Challenges & Solutions */}
                <div className="flex flex-col gap-2 p-4 rounded-xl border border-stone-200/80 bg-white/70 shadow-sm">
                  <div className="flex items-center gap-2 text-stone-800 font-black">
                    <Database className="w-4 h-4" />
                    <span>03 // SYSTEM_CHALLENGES_SOLVED</span>
                  </div>
                  <p className="leading-relaxed text-[11px] text-stone-600 font-bold">
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* Core Technologies Used */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-stone-500 font-bold mr-2 self-center">DEPLOYED_WITH:</span>
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="bg-stone-100 border border-stone-200 px-2.5 py-1 rounded-md text-stone-800 font-bold text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions inside Modal */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-900 text-white font-bold text-center hover:bg-stone-800 transition-colors shadow-md"
                  >
                    <span>SOURCE CODE</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={selectedProject.liveLink && selectedProject.liveLink !== "#" ? selectedProject.liveLink : "#"}
                    target={selectedProject.liveLink !== "#" ? "_blank" : undefined}
                    rel="noreferrer"
                    onClick={(e) => {
                      if (selectedProject.liveLink === "#") {
                        e.preventDefault();
                        alert(`Initiating connection pipeline to live simulator for: ${selectedProject.title}`);
                      }
                    }}
                    className="flex-1 flex items-center justify-center py-3 rounded-xl border border-stone-200 bg-white font-bold text-stone-850 hover:bg-stone-50 transition-colors shadow-sm"
                  >
                    DEPLOY LIVE ENGINE
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
