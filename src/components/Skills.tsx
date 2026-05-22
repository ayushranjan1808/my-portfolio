"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code2, Database, GitBranch, Binary, Globe, Blocks } from "lucide-react";

interface SkillItem {
  name: string;
  level: string;
  usage: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "LANGUAGES",
    icon: <Code2 className="w-4 h-4" />,
    color: "from-brand-cyan to-blue-500",
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
    color: "from-brand-cyan to-brand-violet",
    skills: [
      { name: "Next.js (latest)", level: "Expert", usage: "Edge routing, dynamic SSR" },
      { name: "React 19", level: "Expert", usage: "Context, custom hooks, transitions" },
      { name: "Tailwind CSS v4", level: "Expert", usage: "Utility styles, custom themes" },
      { name: "Framer Motion", level: "Expert", usage: "High-fps spring physics physics" },
    ],
  },
  {
    id: "backend",
    title: "BACKEND & DATABASES",
    icon: <Database className="w-4 h-4" />,
    color: "from-brand-violet to-brand-emerald",
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
    color: "from-brand-cyan to-brand-emerald",
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
    color: "from-yellow-500 to-orange-500",
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
    color: "from-brand-emerald to-teal-500",
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
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      {/* Lighting orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full glow-orb" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16">
          <span className="text-xs font-mono text-brand-cyan tracking-widest uppercase">// 03. SYSTEM CAPABILITIES</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Technical Skill Ecosystem
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mt-2 leading-relaxed">
            I don't believe in arbitrary skill percentage bars. Instead, this ecosystem displays categorized frameworks alongside their specific deployment contexts within my stack.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Categories Selector Tabs (Left Col) */}
          <div className="lg:col-span-4 flex flex-col gap-3 font-mono">
            <span className="text-[10px] text-gray-500 tracking-widest uppercase mb-1">
              // CLUSTER SELECTOR
            </span>
            {skillCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3.5 p-4 rounded-xl border text-left transition-all text-xs font-bold tracking-wider ${
                    isActive
                      ? "bg-white/10 border-brand-cyan text-white shadow-[0_0_15px_rgba(0,245,255,0.05)]"
                      : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/15"
                  }`}
                >
                  <div className={`p-2 rounded-lg bg-white/5 border border-white/5 ${isActive ? "text-brand-cyan" : "text-gray-500"}`}>
                    {category.icon}
                  </div>
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Categories Display Node Panel (Right Col) */}
          <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl border border-white/5 bg-white/5 glass-panel flex flex-col justify-between min-h-[420px]">
            
            {/* Header info */}
            <div className="flex items-center gap-3 pb-6 border-b border-white/5 font-mono text-xs">
              <span className="text-gray-500">CATEGORY_VIEW:</span>
              <span className="text-white font-bold bg-white/5 px-2 py-0.5 rounded border border-white/10">
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
                      className="p-4 rounded-xl border border-white/5 bg-dark-bg/60 flex flex-col gap-1 hover:border-brand-cyan/20 transition-colors"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-white text-xs">{skill.name}</span>
                        <span className="text-[9px] font-mono text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 px-1.5 py-0.25 rounded">
                          {skill.level}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-500 leading-normal mt-1.5 font-mono">
                        // {skill.usage}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Simulated compiler stats info footer */}
            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-gray-500">
              <span>COMPILING_SYSTEM_METADATA... SUCCESS</span>
              <span>AYUSH_ENV // V2.0</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
