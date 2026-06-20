"use client";

import React from "react";
import { Terminal, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-stone-200/60 relative bg-white/40 backdrop-blur-xl overflow-hidden font-mono text-[10px] text-stone-450">
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left trademark signature */}
        <div className="flex flex-col gap-1 text-center md:text-left select-none">
          <div className="flex items-center justify-center md:justify-start gap-2 text-stone-850 font-black">
            <Terminal className="w-3.5 h-3.5 text-orange-600" />
            <span>AYUSH // SYSTEMS HQ</span>
          </div>
          <span className="text-[9px] font-bold">
            © {currentYear} AYUSH. BUILD 2.0_PRODUCTION. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Center operational spec */}
        <div className="flex items-center gap-4 text-center font-bold">
          <span>LATENCY: 12ms</span>
          <span>•</span>
          <span>HOST: SECURE_STATIC</span>
          <span>•</span>
          <span>FPS: 60_LOCKED</span>
        </div>

        {/* Right Scroll to Top action */}
        <button
          onClick={handleScrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-white/70 text-stone-600 hover:text-stone-900 hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer font-bold"
        >
          <span>SYS_REBOOT_TOP</span>
          <ArrowUp className="w-3 h-3 animate-bounce" />
        </button>

      </div>
    </footer>
  );
}
