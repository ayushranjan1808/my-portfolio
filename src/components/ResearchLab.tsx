"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Binary, Sparkles, ChevronRight } from "lucide-react";

interface ResearchNote {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  mathSymbol: string;
}

const researchNotes: ResearchNote[] = [
  {
    id: "quantum-rotations",
    title: "Qubit Matrix Gates & Phase Rotations",
    category: "QUANTUM INFORMATION",
    summary: "Deriving mathematical transformations of Hadamard, Pauli-X, Pauli-Y, and Pauli-Z gate operators on the Bloch sphere.",
    content: "Quantum computation relies on manipulating complex state vectors in a Hilbert space. The state vector is expressed as |ψ⟩ = α|0⟩ + β|1⟩, where |α|² + |β|² = 1. Gate operations are unitary matrices that rotate this vector: \n\n• Hadamard (H): Projects |0⟩ to superposition (|0⟩+|1⟩)/√2. Mathematically maps X ↔ Z axes.\n• Pauli-X (NOT): Swaps probability amplitudes, rotating the state vector 180° around the X-axis.\n• Pauli-Z (Phase Flip): Reverses the phase sign of the |1⟩ state vector component, rotating 180° around the Z-axis.",
    mathSymbol: "Ĥ |ψ⟩",
  },
  {
    id: "time-series-forecasting",
    title: "Deep LSTM Layer Architectures for Market Predictions",
    category: "DEEP LEARNING / ML",
    summary: "Analyzing gating cell configurations and rolling time-window normalization techniques in recurrent networks.",
    content: "Recurrent neural architectures like LSTMs (Long Short-Term Memory) address vanishing gradient pitfalls during long series sequences. By employing three distinct mathematical gates—forget, input, and output—the network maintains a cell state (C_t) that stores historical trends over dozens of sequences. Rolling MinMax scaling is vital to ensure index data points are scaled relative to local standard deviations, preventing model weight distortion.",
    mathSymbol: "f_t = σ(W_f · [h_{t-1}, x_t] + b_f)",
  },
  {
    id: "database-concurrency",
    title: "Concurrency Control & Row Locking in Allocation SaaS",
    category: "SYSTEMS DESIGN",
    summary: "Evaluating isolation levels (Serializable vs Repeatable Read) in room allocations and mess registers.",
    content: "High-concurrency database booking apps face double-booking hazards when two transactions query room status simultaneously. Utilizing 'SELECT FOR UPDATE' forces a row-level lock in PostgreSQL, preventing transaction B from reading room availability until transaction A commits or rolls back. This ensures absolute transactional integrity, maintaining ACID principles under concurrent request volumes.",
    mathSymbol: "SELECT ... FOR UPDATE",
  },
  {
    id: "sockets-osi-layers",
    title: "Low-Level Web Socket Telemetry & OSI Virtualization",
    category: "NETWORKING",
    summary: "Comparing TCP socket pipelines against HTTP long polling for high-frequency telemetry dashboards.",
    content: "TCP Sockets open a full-duplex persistent connection between client and server, operating at Layer 4 (Transport) of the OSI model. By bypassing the high HTTP header overhead (which average 800 bytes per request) and handshaking cycles of standard REST, WebSockets stream telemetry packages in lightweight 2-to-6 byte framing boundaries, minimizing CPU load and rendering sub-5ms UI updates.",
    mathSymbol: "ws://socket.client.rx",
  },
];

export default function ResearchLab() {
  const [selectedNote, setSelectedNote] = useState<ResearchNote | null>(null);
  
  // Bloch Sphere State
  const [theta, setTheta] = useState(0); // Polar angle (0 to PI)
  const [phi, setPhi] = useState(0);   // Azimuthal angle (0 to 2*PI)
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Apply Quantum Gates
  const applyGate = (gate: "H" | "X" | "Y" | "Z" | "RST") => {
    if (gate === "RST") {
      setTheta(0);
      setPhi(0);
    } else if (gate === "H") {
      if (Math.abs(theta - 0) < 0.05) {
        setTheta(Math.PI / 2);
        setPhi(0);
      } else if (Math.abs(theta - Math.PI) < 0.05) {
        setTheta(Math.PI / 2);
        setPhi(Math.PI);
      } else {
        setTheta(0);
        setPhi(0);
      }
    } else if (gate === "X") {
      setTheta((prev) => Math.PI - prev);
      setPhi((prev) => -prev);
    } else if (gate === "Y") {
      setTheta((prev) => Math.PI - prev);
      setPhi((prev) => prev + Math.PI);
    } else if (gate === "Z") {
      setPhi((prev) => prev + Math.PI);
    }
  };

  // Render Bloch Sphere on Canvas (Dark coordinates on light background)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const sphereRadius = 75;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const drawSphere = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background sphere circles (dark lines for light background)
      ctx.strokeStyle = "rgba(28, 25, 23, 0.08)";
      ctx.lineWidth = 1;
      
      // Outer sphere circle
      ctx.beginPath();
      ctx.arc(cx, cy, sphereRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Equator ellipse
      ctx.beginPath();
      ctx.ellipse(cx, cy, sphereRadius, 25, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Prime Meridian ellipse
      ctx.beginPath();
      ctx.ellipse(cx, cy, 20, sphereRadius, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Axis lines Z, X, Y
      ctx.strokeStyle = "rgba(28, 25, 23, 0.2)";
      // Z Axis
      ctx.beginPath();
      ctx.moveTo(cx, cy - sphereRadius - 10);
      ctx.lineTo(cx, cy + sphereRadius + 10);
      ctx.stroke();
      
      // Axis labels
      ctx.fillStyle = "rgba(28, 25, 23, 0.5)";
      ctx.font = "bold 10px monospace";
      ctx.fillText("|0⟩", cx - 5, cy - sphereRadius - 12);
      ctx.fillText("|1⟩", cx - 5, cy + sphereRadius + 20);

      // Convert spherical coordinates to 3D Cartesian
      const x = Math.sin(theta) * Math.cos(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(theta);

      // 2D Projection: Project Y slightly diagonally for 3D depth perspective
      const px = cx + x * sphereRadius + y * 18;
      const py = cy - z * sphereRadius + y * -8;

      // Draw State Vector Arrow in radiant orange
      ctx.strokeStyle = "#ea580c";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(px, py);
      ctx.stroke();

      // Draw Arrow head
      ctx.fillStyle = "#ea580c";
      ctx.beginPath();
      ctx.arc(px, py, 4.5, 0, Math.PI * 2);
      ctx.fill();

      // Draw vector shadow / tracer dot in amber
      ctx.fillStyle = "#d97706";
      ctx.beginPath();
      ctx.arc(cx + x * sphereRadius, cy - z * sphereRadius, 2, 0, Math.PI * 2);
      ctx.fill();

      animId = requestAnimationFrame(drawSphere);
    };

    drawSphere();
    return () => cancelAnimationFrame(animId);
  }, [theta, phi]);

  return (
    <section id="lab" className="py-24 relative">
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />

      {/* Decorative warm glows */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-orange-100/10 rounded-full glow-orb animate-pulse-slow" />
      <div className="absolute left-0 bottom-1/3 w-[300px] h-[300px] bg-amber-100/10 rounded-full glow-orb animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 select-none">
          <span className="text-xs font-mono text-orange-600 font-bold tracking-widest uppercase">// 04. RESEARCH LABORATORY</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900 leading-tight">
            Ayush's Research Lab
          </h2>
          <p className="text-stone-600 text-sm max-w-xl mt-2 leading-relaxed font-semibold">
            Exploring concepts in quantum mechanics, mathematical predictive forecasting, database scaling, and low-level OSI networking protocols.
          </p>
        </div>

        {/* Lab Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bloch Sphere Interactive Visualizer (Left 5 Cols) */}
          <div className="lg:col-span-5 p-6 glass-card-premium rounded-[2rem] flex flex-col items-center select-none text-center border-white/60 text-stone-900">
            <div className="w-full flex items-center justify-between border-b border-stone-200/60 pb-4 font-mono text-[10px] text-stone-500 mb-6 font-bold">
              <span>SIMULATION: BLOCH_SPHERE_V1</span>
              <span className="text-orange-655 text-orange-600 font-black">ONLINE</span>
            </div>

            {/* Qubit State Info */}
            <div className="font-mono text-xs text-stone-600 mb-4 font-bold">
              <span>STATE VECTOR: </span>
              <span className="text-stone-900 font-black">
                |ψ⟩ = cos({(theta/Math.PI).toFixed(2)}π/2)|0⟩ + e^{((phi/Math.PI)%2).toFixed(2)}πi sin({(theta/Math.PI).toFixed(2)}π/2)|1⟩
              </span>
            </div>

            {/* Canvas container */}
            <div className="w-60 h-60 bg-white/60 border border-stone-200/80 rounded-full flex items-center justify-center relative shadow-inner overflow-hidden mb-6">
              <div className="absolute inset-0 grid-overlay opacity-15" />
              <canvas ref={canvasRef} width={240} height={240} className="relative z-10" />
            </div>

            {/* Quantum Gate Buttons */}
            <div className="w-full grid grid-cols-5 gap-2 font-mono">
              <button
                onClick={() => applyGate("H")}
                className="py-2.5 rounded-xl border border-stone-200 bg-white/70 hover:bg-stone-50 text-[11px] font-black text-orange-600 transition-all shadow-sm cursor-pointer"
                title="Hadamard: Superposition"
              >
                H
              </button>
              <button
                onClick={() => applyGate("X")}
                className="py-2.5 rounded-xl border border-stone-200 bg-white/70 hover:bg-stone-50 text-[11px] font-black text-amber-600 transition-all shadow-sm cursor-pointer"
                title="Pauli-X: Bit Flip (NOT)"
              >
                X
              </button>
              <button
                onClick={() => applyGate("Y")}
                className="py-2.5 rounded-xl border border-stone-200 bg-white/70 hover:bg-stone-50 text-[11px] font-black text-stone-850 transition-all shadow-sm cursor-pointer"
                title="Pauli-Y: Y rotation"
              >
                Y
              </button>
              <button
                onClick={() => applyGate("Z")}
                className="py-2.5 rounded-xl border border-stone-200 bg-white/70 hover:bg-stone-50 text-[11px] font-black text-orange-700 transition-all shadow-sm cursor-pointer"
                title="Pauli-Z: Phase Flip"
              >
                Z
              </button>
              <button
                onClick={() => applyGate("RST")}
                className="py-2.5 rounded-xl border border-stone-200 bg-white/70 hover:bg-stone-50 text-[9px] font-black text-stone-400 hover:text-stone-700 transition-all shadow-sm cursor-pointer"
                title="Reset to Ground State |0>"
              >
                RST
              </button>
            </div>
            <p className="text-[10px] text-stone-450 font-mono mt-4 font-bold">
              // Apply gate operations above to transform vector state |ψ⟩.
            </p>
          </div>

          {/* Research Articles (Right 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-[10px] font-mono text-stone-450 tracking-widest mb-1 block font-bold">
              // SCIENTIFIC RESEARCH NOTES
            </span>
            {researchNotes.map((note) => (
              <div
                key={note.id}
                onClick={() => setSelectedNote(selectedNote?.id === note.id ? null : note)}
                className="p-5 rounded-3xl border border-white/50 bg-white/40 glass-card-premium glass-card-premium-hover cursor-pointer text-stone-900"
              >
                <div className="flex items-center justify-between mb-2 select-none">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-orange-700 bg-orange-100/70 border border-orange-200/50 px-2 py-0.5 rounded">
                    {note.category}
                  </span>
                  <span className="font-mono text-xs text-amber-700 font-bold">
                    {note.mathSymbol}
                  </span>
                </div>
                <h3 className="text-base font-black text-stone-900 font-mono mb-2 transition-colors">
                  {note.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-mono font-semibold">
                  {note.summary}
                </p>

                {/* Expandable notebook content */}
                <AnimatePresence>
                  {selectedNote?.id === note.id && (
                    <motion.div
                      className="mt-4 pt-4 border-t border-stone-200/60 font-mono text-[11px] text-stone-800 flex flex-col gap-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-3 bg-white/60 border border-stone-200/60 rounded-xl text-stone-700 whitespace-pre-line leading-relaxed font-bold shadow-sm">
                        {note.content}
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-orange-600 font-black">
                        <span>// NOTES COMPILED BY AYUSH</span>
                        <span className="flex items-center gap-1">
                          <span>SYSTEMS_CORE</span>
                          <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
