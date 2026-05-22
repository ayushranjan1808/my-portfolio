"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, Calendar, GitPullRequest, Code2 } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  points: string[];
  icon: React.ReactNode;
}

const milestones: Milestone[] = [
  {
    year: "2026 // CURRENT",
    title: "Quantum Computation & Bloch Sphere Simulator",
    organization: "Independent R&D / Physics Sandbox",
    description: "Designing real-time visual coordinate projections on the Bloch sphere to simplify abstract quantum mechanics concepts.",
    points: [
      "Constructed client-side coordinate matrix transformation protocols in TypeScript.",
      "Mapped unitary logic gate operations (Hadamard, Pauli X/Y/Z) onto a vector rendering canvas.",
      "Compiled conceptual logs covering quantum superposition and probability state calculations."
    ],
    icon: <Code2 className="w-4 h-4 text-brand-cyan" />
  },
  {
    year: "2025",
    title: "Classic Board Games Hub — Multiplayer Platform",
    organization: "Full-Stack Gaming Architecture",
    description: "Architected a real-time multiplayer board game platform with sub-50ms latency using edge infrastructure.",
    points: [
      "Developed robust WebSocket integration for seamless distributed client synchronization.",
      "Implemented strict state-locking and optimistic UI rendering to eliminate race conditions.",
      "Engineered responsive and scalable React components within a Next.js environment."
    ],
    icon: <GitPullRequest className="w-4 h-4 text-brand-violet" />
  },
  {
    year: "2025",
    title: "Study To-Do Engine — Productivity System",
    organization: "High-Performance Task Architecture",
    description: "Developed a lightning-fast academic task management application featuring persistent client-side states.",
    points: [
      "Built an optimized state machine using React Context and custom hooks for zero-latency interactions.",
      "Engineered selective re-rendering strategies to improve UI performance and FPS by 40%.",
      "Integrated persistent local storage serialization for instantaneous application load times."
    ],
    icon: <Award className="w-4 h-4 text-brand-emerald" />
  },
  {
    year: "2024",
    title: "AI Trading Predictor & Time-Series ML Model",
    organization: "Quantitative Analytics Pipeline",
    description: "Designed a multi-layered forecasting network to model stock and index performance using advanced algorithms.",
    points: [
      "Assembled LSTM recurrent tensor structures in PyTorch for high-dimensional trend mapping.",
      "Blended ARIMA statistical data filters to validate short-range trends against linear baselines.",
      "Created a robust rolling scaling utility that processes financial indicators (MACD, RSI) on the fly."
    ],
    icon: <Calendar className="w-4 h-4 text-yellow-500" />
  }
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      {/* Background glow orb */}
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-brand-violet/5 rounded-full glow-orb" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-20 text-center items-center">
          <span className="text-xs font-mono text-brand-cyan tracking-widest uppercase">// 05. JOURNEY &amp; OWNERSHIP</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-mono">
            Engineering Timeline
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mt-2 leading-relaxed">
            A chronological mapping of self-driven execution, production systems deployment, and quantum research logs.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/5 ml-4 md:ml-32 pl-6 md:pl-10 flex flex-col gap-16 font-mono text-xs">
          
          {milestones.map((ms, idx) => (
            <motion.div
              key={ms.title}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              
              {/* Year highlight on left for desktops */}
              <div className="absolute left-[-160px] top-1.5 w-28 text-right text-brand-cyan font-bold tracking-wider hidden md:block">
                {ms.year}
              </div>

              {/* Glowing timeline node dot */}
              <div className="absolute left-[-31px] md:left-[-47px] top-1.5 w-4 h-4 rounded-full bg-dark-bg border-2 border-brand-cyan flex items-center justify-center shadow-[0_0_10px_rgba(0,245,255,0.6)]">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl border border-white/5 bg-white/5 glass-panel">
                
                {/* Year display on mobile view */}
                <span className="text-[10px] text-brand-cyan font-bold mb-2 block md:hidden">
                  {ms.year}
                </span>

                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded bg-white/5 border border-white/5">
                    {ms.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                      {ms.title}
                    </h3>
                    <span className="text-[10px] text-gray-500">
                      {ms.organization}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 mb-4 leading-relaxed font-sans">
                  {ms.description}
                </p>

                {/* Sub items */}
                <div className="flex flex-col gap-2 border-t border-white/5 pt-4">
                  {ms.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-[10px] text-gray-400 leading-normal">
                      <span className="text-brand-cyan mt-0.5">&gt;</span>
                      <span className="font-sans">{pt}</span>
                    </div>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
