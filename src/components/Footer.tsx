"use client";

import React from "react";
import { Terminal, Shield, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/5 relative bg-dark-bg overflow-hidden font-mono text-[10px] text-gray-500">
      <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left trademark signature */}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold">
            <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
            <span>AYUSH // SYSTEMS HQ</span>
          </div>
          <span className="text-[9px]">
            © {currentYear} AYUSH. BUILD 2.0_PRODUCTION. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Center operational spec */}
        <div className="flex items-center gap-4 text-center">
          <span>LATENCY: 12ms</span>
          <span>•</span>
          <span>HOST: SECURE_STATIC</span>
          <span>•</span>
          <span>FPS: 60_LOCKED</span>
        </div>

        {/* Right Scroll to Top action */}
        <button
          onClick={handleScrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 hover:text-white hover:border-white/15 transition-all cursor-pointer font-bold"
        >
          <span>SYS_REBOOT_TOP</span>
          <ArrowUp className="w-3 h-3" />
        </button>

      </div>
    </footer>
  );
}
