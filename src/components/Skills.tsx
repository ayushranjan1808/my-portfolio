"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code2, Database, GitBranch, Binary, Globe } from "lucide-react";

interface SkillItem {
  name: string;
  level: string;
  usage: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "LANGUAGES",
    icon: <Code2 className="w-4 h-4" />,
    skills: [
      { name: "TypeScript", level: "Expert", usage: "Next.js applications, serverless handlers" },
      { name: "Python", level: "Advanced", usage: "ML model notebooks, data pipelines" },
      { name: "C++", level: "Intermediate", usage: "Performance algorithms, quantum math" },
      { name: "Go", level: "Intermediate", usage: "High-throughput API microservices" },
      { name: "SQL", level: "Advanced", usage: "Relational queries and transactions" },
    ],
  },
  {
    id: "frontend",
    title: "FRONTEND FRAMEWORKS",
    icon: <Globe className="w-4 h-4" />,
    skills: [
      { name: "Next.js (latest)", level: "Expert", usage: "Edge routing, dynamic SSR" },
      { name: "React 19", level: "Expert", usage: "Context, custom hooks, transitions" },
      { name: "Tailwind CSS v4", level: "Expert", usage: "Utility styles, custom themes" },
      { name: "Framer Motion", level: "Expert", usage: "High-fps spring physics loops" },
    ],
  },
  {
    id: "backend",
    title: "BACKEND & DATABASES",
    icon: <Database className="w-4 h-4" />,
    skills: [
      { name: "Node.js / Express", level: "Advanced", usage: "Backend architectures" },
      { name: "FastAPI", level: "Advanced", usage: "High-speed Python inference service" },
      { name: "PostgreSQL", level: "Advanced", usage: "Transactional queries and locks" },
      { name: "Firebase", level: "Advanced", usage: "Auth and Realtime database sockets" },
      { name: "Redis", level: "Intermediate", usage: "API response caching layer" },
    ],
  },
  {
    id: "ai-ml",
    title: "AI / MACHINE LEARNING",
    icon: <Cpu className="w-4 h-4" />,
    skills: [
      { name: "LSTM Recurrent Networks", level: "Advanced", usage: "Time-series predictive trends" },
      { name: "ARIMA Forecasting", level: "Advanced", usage: "Linear statistical indicators" },
      { name: "Gemini LLM API", level: "Advanced", usage: "NLP embeddings classification" },
      { name: "PyTorch", level: "Intermediate", usage: "Tensor computations, model validation" },
    ],
  },
  {
    id: "quantum",
    title: "QUANTUM INFORMATION",
    icon: <Binary className="w-4 h-4" />,
    skills: [
      { name: "Bloch Sphere Vectors", level: "Research", usage: "Interactive 3D qubit mapping" },
      { name: "Quantum Gate Math", level: "Research", usage: "Unitary matrices, Hadamard, Pauli" },
      { name: "Qubit Superposition", level: "Research", usage: "Visualizing probability amplitudes" },
    ],
  },
  {
    id: "devops",
    title: "TOOLS & DEVOPS",
    icon: <GitBranch className="w-4 h-4" />,
    skills: [
      { name: "Docker", level: "Advanced", usage: "Containerized environments" },
      { name: "Git / GitHub Actions", level: "Expert", usage: "CI/CD automated testing" },
      { name: "AWS S3 / EC2", level: "Advanced", usage: "Cloud storage and deployment" },
      { name: "Vercel / Netlify", level: "Expert", usage: "Edge serving architectures" },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("languages");

  const currentCategory = skillCategories.find((cat) => cat.id === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-100/5 rounded-full glow-orb animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 select-none">
          <span className="text-xs font-mono text-orange-600 font-bold tracking-widest uppercase">// 03. CAPABILITIES</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900 leading-tight">
            Technical Skill Ecosystem
          </h2>
          <p className="text-stone-600 text-sm max-w-xl mt-2 leading-relaxed font-semibold">
            I don't believe in arbitrary skill percentage bars. Instead, this ecosystem displays categorized frameworks alongside their specific deployment contexts within my stack.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Categories Selector Tabs (Left Col) */}
          <div className="lg:col-span-4 flex flex-col gap-3 font-mono">
            <span className="text-[10px] text-stone-400 tracking-widest uppercase mb-1 font-bold">
              // CLUSTER SELECTOR
            </span>
            {skillCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3.5 p-4 rounded-2xl border text-left transition-all text-xs font-bold tracking-wider cursor-pointer ${
                    isActive
                      ? "bg-white/70 border-orange-500 text-orange-700 shadow-md shadow-orange-500/5"
                      : "bg-white/30 border-white/50 text-stone-500 hover:text-stone-800 hover:border-stone-300"
                  }`}
                >
                  <div className={`p-2 rounded-xl bg-white/60 border border-white/80 shadow-sm ${isActive ? "text-orange-650" : "text-stone-400"}`}>
                    {category.icon}
                  </div>
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Categories Display Node Panel (Right Col) */}
          <div className="lg:col-span-8 p-6 md:p-8 glass-card-premium rounded-[2rem] flex flex-col justify-between min-h-[420px] text-stone-900 border-white/60">
            
            {/* Header info */}
            <div className="flex items-center gap-3 pb-6 border-b border-stone-200/60 font-mono text-xs text-stone-500">
              <span>CATEGORY_VIEW:</span>
              <span className="text-stone-850 font-bold bg-white/70 px-2 py-0.5 rounded-md border border-stone-200 shadow-sm">
                {currentCategory.title}
              </span>
            </div>

            {/* List of Skills with spring dynamic items */}
            <div className="flex flex-col gap-4 py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {currentCategory.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      className="p-4 rounded-2xl border border-stone-200/80 bg-white/70 flex flex-col gap-1 hover:border-orange-500/35 hover:shadow-sm transition-all"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-stone-900 text-xs">{skill.name}</span>
                        <span className="text-[9px] font-mono font-bold text-orange-700 bg-orange-50 border border-orange-200/50 px-1.5 py-0.25 rounded">
                          {skill.level}
                        </span>
                      </div>
                      <span className="text-[10px] text-stone-400 leading-normal mt-1.5 font-mono font-bold">
                        // {skill.usage}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Simulated compiler stats info footer */}
            <div className="mt-auto pt-6 border-t border-stone-200/60 flex items-center justify-between font-mono text-[9px] text-stone-400 font-bold">
              <span>COMPILING_SYSTEM_METADATA... SUCCESS</span>
              <span>AYUSH_ENV // V2.0</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
