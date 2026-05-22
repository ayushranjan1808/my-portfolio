"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, ArrowUpRight, Blocks, Database, Brain, Sparkles, X, ChevronRight } from "lucide-react";

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
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = cardRefs.current[id];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      {/* Decorative side lights */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-brand-cyan/5 rounded-full glow-orb" />
      <div className="absolute bottom-[30%] right-[-10%] w-[350px] h-[350px] bg-brand-violet/5 rounded-full glow-orb" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16">
          <span className="text-xs font-mono text-brand-cyan tracking-widest uppercase">// 02. PORTFOLIO HEART</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Technical Systems &amp; Advanced R&amp;D
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-2 leading-relaxed">
            A curated showcase of production-ready SaaS systems, real-world machine learning architectures, and interactive quantum computing simulators. Click a card to read full architectural blueprints.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              ref={(el) => { cardRefs.current[project.id] = el; }}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              className="group relative rounded-2xl border border-white/5 bg-white/5 p-6 md:p-8 spotlight-card glass-panel cursor-pointer select-none"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Radial Mouse Follow Highlight managed by CSS custom variables */}
              
              <div className="flex items-start justify-between mb-4">
                <span className="text-[10px] font-mono tracking-widest text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 px-2 py-0.5 rounded">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-gray-500 flex items-center gap-1 group-hover:text-brand-cyan transition-colors">
                  <span>SYS_SPEC</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-gray-400 mb-4">
                {project.subtitle}
              </p>

              {/* Mini Interactive Preview Graphic */}
              <div className="w-full h-40 rounded-xl bg-dark-bg/60 border border-white/5 mb-6 overflow-hidden flex items-center justify-center p-4 relative">
                <div className="absolute inset-0 grid-overlay opacity-20" />
                
                {project.visualType === "eco" && (
                  <div className="flex flex-col items-center gap-2 font-mono text-[10px]">
                    <div className="flex items-center gap-2 text-brand-emerald">
                      <Sparkles className="w-3.5 h-3.5 text-brand-emerald animate-pulse" />
                      <span>NLP QUERY: "I traveled 20 miles in hybrid car"</span>
                    </div>
                    <div className="w-36 h-[2px] bg-white/10 relative overflow-hidden rounded">
                      <div className="absolute left-0 top-0 h-full w-2/3 bg-brand-emerald" />
                    </div>
                    <span className="text-gray-500">CARBON OUTPUT: 3.2 KG [EMISSION_ESTIMATE]</span>
                  </div>
                )}

                {project.visualType === "hostel" && (
                  <div className="grid grid-cols-2 gap-4 w-full text-[10px] font-mono">
                    <div className="p-2 border border-white/5 bg-white/5 rounded">
                      <span className="text-gray-500 block">ROOMS OCCUPIED</span>
                      <span className="text-brand-cyan font-bold text-sm">88 / 92</span>
                    </div>
                    <div className="p-2 border border-white/5 bg-white/5 rounded">
                      <span className="text-gray-500 block">PENDING FEES</span>
                      <span className="text-yellow-500 font-bold text-sm">$320.00</span>
                    </div>
                  </div>
                )}

                {project.visualType === "trading" && (
                  <div className="w-full h-full flex flex-col justify-end gap-1.5 font-mono text-[9px] text-gray-500">
                    <div className="flex justify-between items-center text-brand-cyan">
                      <span>LSTM FORECAST</span>
                      <span>PREDICTED R: +1.4%</span>
                    </div>
                    <svg className="w-full h-20 overflow-visible" viewBox="0 0 100 40">
                      {/* Actual Line */}
                      <path d="M 0,35 L 20,30 L 40,32 L 60,25 L 80,28 L 100,15" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                      {/* Forecast Line */}
                      <path d="M 60,25 L 80,22 L 100,10" fill="none" stroke="#00f5ff" strokeWidth="1.5" strokeDasharray="3,3" />
                      {/* Highlight Dot */}
                      <circle cx="100" cy="10" r="2.5" fill="#8b5cf6" />
                    </svg>
                  </div>
                )}

                {project.visualType === "quantum" && (
                  <div className="flex flex-col items-center justify-center relative">
                    <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center relative">
                      {/* Bloch Sphere sphere lines */}
                      <div className="absolute w-full h-[1px] bg-white/10" />
                      <div className="absolute h-full w-[1px] bg-white/10" />
                      <div className="absolute w-4 h-20 border border-white/10 rounded-full" />
                      {/* State Vector arrow */}
                      <div className="absolute w-12 h-[1.5px] bg-brand-cyan origin-left rotate-[40deg]" style={{ left: "50%" }} />
                      <div className="absolute top-1 right-1 text-white font-mono text-[9px]">|ψ⟩</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Technology badges */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono text-gray-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modern High-End Specification Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-dark-bg/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Box */}
            <motion.div
              className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-dark-card p-6 md:p-8 shadow-[0_20px_50px_rgba(0,245,255,0.05)] overflow-hidden max-h-[85vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />

              {/* Header */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-brand-cyan tracking-widest uppercase">
                    PROJECT ARCHITECTURE SUMMARY
                  </span>
                  <h3 className="text-2xl md:text-3xl font-mono font-bold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg border border-white/5 bg-white/5 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Technical Specifications Container */}
              <div className="flex flex-col gap-6 font-mono text-xs text-gray-300 relative z-10">
                
                {/* Problem Statement */}
                <div className="flex flex-col gap-2 p-4 rounded-xl border border-white/5 bg-white/5">
                  <div className="flex items-center gap-2 text-red-400 font-bold">
                    <Terminal className="w-4 h-4" />
                    <span>01 // PROBLEM_STATEMENT</span>
                  </div>
                  <p className="leading-relaxed text-[11px] text-gray-400">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Architecture Blueprint */}
                <div className="flex flex-col gap-2 p-4 rounded-xl border border-white/5 bg-white/5">
                  <div className="flex items-center gap-2 text-brand-cyan font-bold">
                    <Blocks className="w-4 h-4" />
                    <span>02 // ARCHITECTURE_BLUEPRINT</span>
                  </div>
                  <p className="leading-relaxed text-[11px] text-gray-400">
                    {selectedProject.architecture}
                  </p>
                </div>

                {/* AI Features (Optional) */}
                {selectedProject.aiFeatures && (
                  <div className="flex flex-col gap-2 p-4 rounded-xl border border-white/5 bg-white/5">
                    <div className="flex items-center gap-2 text-brand-violet font-bold">
                      <Brain className="w-4 h-4" />
                      <span>03 // AI_INTEGRATION_SPEC</span>
                    </div>
                    <p className="leading-relaxed text-[11px] text-gray-400">
                      {selectedProject.aiFeatures}
                    </p>
                  </div>
                )}

                {/* Challenges & Solutions */}
                <div className="flex flex-col gap-2 p-4 rounded-xl border border-white/5 bg-white/5">
                  <div className="flex items-center gap-2 text-brand-emerald font-bold">
                    <Database className="w-4 h-4" />
                    <span>04 // SYSTEM_CHALLENGES_SOLVED</span>
                  </div>
                  <p className="leading-relaxed text-[11px] text-gray-400">
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* Core Technologies Used */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-gray-500 font-bold mr-2 self-center">DEPLOYED_WITH:</span>
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded text-white text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions inside Modal */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={selectedProject.githubLink}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-white text-dark-bg font-semibold text-center hover:bg-gray-200 transition-colors"
                  >
                    <span>SOURCE CODE</span>
                    <ArrowUpRight className="w-4 h-4 text-dark-bg" />
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
                    className="flex-1 flex items-center justify-center py-3 rounded-lg border border-white/10 bg-white/5 font-semibold text-white hover:bg-white/10 transition-colors"
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
