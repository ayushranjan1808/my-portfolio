"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const logs = [
  "Initializing quantum node ecosystem...",
  "Syncing Bloch sphere vectors [|0⟩ ➔ |1⟩]...",
  "Running neural layer optimization [LSTM/ARIMA]...",
  "Loading EcoAction Hub telemetry datasets...",
  "Mapping engineering matrix...",
  "Host established. Ready for connection.",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentLogIdx, setCurrentLogIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Increment logs
    const logInterval = setInterval(() => {
      setCurrentLogIdx((prev) => {
        if (prev < logs.length - 1) return prev + 1;
        clearInterval(logInterval);
        return prev;
      });
    }, 450);

    // Speed up progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500); // Wait for fadeout animation
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 120);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 w-full h-full bg-dark-bg z-50 flex flex-col justify-between p-8 md:p-16 select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Futuristic grid background overlay */}
          <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

          {/* Glowing purple/cyan top right and bottom left nodes */}
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-brand-cyan/10 rounded-full glow-orb" />
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-brand-violet/10 rounded-full glow-orb" />

          {/* Top Status */}
          <div className="flex items-center justify-between text-xs text-gray-500 font-mono relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-ping" />
              <span>AYUSH_HQ_INIT // COMPILING V2.0</span>
            </div>
            <div>[ CODEBASE: PRODUCTION ]</div>
          </div>

          {/* Core Visualizer */}
          <div className="flex flex-col items-center justify-center flex-grow relative z-10 gap-8">
            <div className="relative">
              {/* Quantum Bloch Sphere / Orbital Core Loading animation */}
              <motion.div
                className="w-24 h-24 rounded-full border border-dashed border-brand-cyan/40 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full border border-dotted border-brand-violet/60 flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-violet shadow-[0_0_15px_rgba(0,245,255,0.8)] animate-pulse" />
                </motion.div>
              </motion.div>
              <div className="absolute inset-0 w-24 h-24 bg-brand-cyan/5 filter blur-md rounded-full -z-10" />
            </div>

            {/* Log Telemetry console */}
            <div className="h-16 text-center max-w-lg font-mono">
              <motion.p
                key={currentLogIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-brand-cyan text-sm tracking-wide font-medium"
              >
                &gt; {logs[currentLogIdx]}
              </motion.p>
              <p className="text-gray-500 text-xs mt-1">
                Allocating registers... {progress > 100 ? 100 : progress}%
              </p>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col gap-2">
            <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-cyan to-brand-violet"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-gray-500 font-mono">
              <span>SYSTEM BOOTSTRAP</span>
              <span>100% COMPLETE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
