"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Menu, X, ArrowUpRight } from "lucide-react";

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
            ? "py-4 bg-dark-bg/60 backdrop-blur-md border-b border-white/5" 
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Signature */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-colors group-hover:border-brand-cyan/50 overflow-hidden">
              <Terminal className="w-4 h-4 text-gray-400 group-hover:text-brand-cyan transition-colors" />
              <div className="absolute inset-0 bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-mono font-bold tracking-wider text-white group-hover:text-brand-cyan transition-colors">
                AYUSH // SYSTEMS
              </span>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest leading-none">
                [ AI.QUANTUM.ARCH ]
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-lg">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wide transition-colors ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white/5 rounded-full border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name.toUpperCase()}
                </a>
              );
            })}
          </nav>

          {/* Contact Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="relative group flex items-center gap-1.5 text-xs font-mono px-4 py-2 rounded-lg border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/15 hover:border-brand-cyan/50 text-brand-cyan transition-all"
            >
              <span>SYS_CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white rounded-lg bg-white/5 border border-white/5"
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
            className="fixed inset-0 z-30 bg-dark-bg/95 backdrop-blur-xl flex flex-col justify-center p-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Grid Overlay Background */}
            <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10 font-mono">
              <span className="text-[10px] text-gray-500 tracking-widest">
                // SYSTEM NAVIGATION
              </span>
              <div className="flex flex-col gap-4 text-2xl">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-brand-cyan transition-colors"
                  >
                    &gt; {item.name.toUpperCase()}
                  </a>
                ))}
              </div>

              <div className="h-[1px] bg-white/10 my-4" />

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-4 rounded-xl border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan text-sm"
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
