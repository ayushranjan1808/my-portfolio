"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Index", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Lab", href: "#lab" },
  { name: "Journey", href: "#journey" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking
      const sections = navItems.map(item => item.href.slice(1));
      let currentSection = "hero";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? "py-4 bg-white/40 backdrop-blur-xl border-b border-white/60 shadow-sm" 
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Signature */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-lg bg-stone-900/5 border border-stone-900/10 flex items-center justify-center transition-colors group-hover:border-orange-500/50 overflow-hidden">
              <Terminal className="w-4 h-4 text-stone-600 group-hover:text-orange-600 transition-colors" />
              <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-mono font-bold tracking-wider text-stone-900 group-hover:text-orange-600 transition-colors">
                AYUSH // SYSTEMS
              </span>
              <span className="text-[10px] text-stone-500 font-mono tracking-widest leading-none">
                [ SYS.ENG &amp; QUANTUM ]
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 p-1.5 rounded-full bg-white/50 border border-white/60 backdrop-blur-xl shadow-inner-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wide transition-colors duration-300 group ${
                    isActive ? "text-orange-600" : "text-stone-700 hover:text-orange-600"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-orange-500/5 rounded-full border border-orange-500/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    {item.name.toUpperCase()}
                  </span>
                  {/* Underline scale transition */}
                  <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-orange-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </a>
              );
            })}
          </nav>

          {/* Contact Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="relative group flex items-center gap-1.5 text-xs font-mono font-bold px-4 py-2 rounded-lg border border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/15 hover:border-orange-500/40 text-orange-700 transition-all shadow-sm"
            >
              <span>SYS_CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-stone-900 rounded-lg bg-white/50 border border-white/60 shadow-sm"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-white/95 backdrop-blur-xl flex flex-col justify-center p-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Grid Overlay Background */}
            <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10 font-mono">
              <span className="text-[10px] text-stone-500 tracking-widest">
                // SYSTEM NAVIGATION
              </span>
              <div className="flex flex-col gap-4 text-2xl">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-stone-850 hover:text-orange-600 transition-colors font-black"
                  >
                    &gt; {item.name.toUpperCase()}
                  </a>
                ))}
              </div>

              <div className="h-[1px] bg-stone-200 my-4" />

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-4 rounded-xl border border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/10 text-orange-700 text-sm font-bold"
              >
                <span>CONNECT TO TERMINAL</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
