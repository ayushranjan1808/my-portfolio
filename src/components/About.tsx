"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Activity, GraduationCap, Code2, LineChart } from "lucide-react";

const principles = [
  {
    icon: <Cpu className="w-5 h-5 text-brand-cyan" />,
    title: "AI systems architecture",
    desc: "Implementing localized LLM architectures, fine-tuning neural embeddings, and deploying optimized inference pipelines.",
  },
  {
    icon: <Code2 className="w-5 h-5 text-brand-violet" />,
    title: "Full-Stack engineering",
    desc: "Building highly responsive Next.js apps connected to robust transactional backends with sub-millisecond updates.",
  },
  {
    icon: <LineChart className="w-5 h-5 text-brand-emerald" />,
    title: "ML for quantitative trading",
    desc: "Applying multi-layered LSTM neural structures and ARIMA statistical modeling to time-series stock analytics.",
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-yellow-500" />,
    title: "Quantum exploration",
    desc: "Studying Quantum Information Science, experimenting with quantum gate matrices, and rendering vector transformations.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative vector meshes */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-brand-violet/5 rounded-full glow-orb" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-brand-cyan/5 rounded-full glow-orb" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col gap-2 mb-16">
          <span className="text-xs font-mono text-brand-cyan tracking-widest uppercase">// 01. PHILOSOPHY &amp; MISSION</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Architecting intelligent systems, <br />
            from bits to qubits.
          </h2>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story (Left Side) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-gray-300 leading-relaxed text-base">
            <p>
              I am <strong className="text-white">Ayush</strong>, a product engineer and systems strategist. 
              My work exists at the intersection of high-performance backend systems, large-scale machine learning, and quantum information research. 
              I design websites, frameworks, and data pipelines that combine elite technical implementation with clean visual beauty.
            </p>
            <p>
              My philosophy is centered on <strong className="text-white">ownership</strong> and <strong className="text-white">scientific curiosity</strong>. 
              Whether managing complex database systems with high transactional reliability or exploring mathematical operations on simulated Bloch spheres, I believe that great engineering requires deep systems understanding.
            </p>
            
            {/* Core Stats / Tech Specs in terminal layout */}
            <div className="mt-6 p-5 rounded-xl border border-white/5 bg-white/5 font-mono text-xs text-gray-400">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-brand-cyan font-bold">SYSTEM TELEMETRY:</span>
                <span className="text-gray-500">AYUSH_V2.0</span>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <span className="text-gray-500 block mb-1">CORE LANGUAGES:</span>
                  <span className="text-white font-medium">TypeScript, Python, C++, Go</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">AI DOMAINS:</span>
                  <span className="text-white font-medium">Deep Learning, LSTMs, RAG</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">INFRASTRUCTURE:</span>
                  <span className="text-white font-medium">Docker, AWS, Vercel, Firebase</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">QUANTUM GATES:</span>
                  <span className="text-white font-medium">Hadamard, Pauli X/Y/Z, CNOT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Priorities Grid (Right Side) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {principles.map((pr, idx) => (
              <motion.div
                key={pr.title}
                className="p-5 rounded-xl border border-white/5 bg-white/5 flex gap-4 glass-panel glass-panel-hover"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="p-2.5 rounded-lg bg-white/5 h-fit border border-white/5">
                  {pr.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-mono text-white tracking-wide uppercase font-bold">
                    {pr.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
