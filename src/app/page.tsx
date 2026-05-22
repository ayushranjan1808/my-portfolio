"use client";

import React, { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import ParticleSystem from "@/components/ParticleSystem";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ResearchLab from "@/components/ResearchLab";
import Journey from "@/components/Journey";
import GithubAnalytics from "@/components/GithubAnalytics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />

      {!loading && (
        <div className="relative z-10 w-full flex flex-col min-h-screen selection:bg-brand-cyan/20 selection:text-brand-cyan">
          {/* High-performance Neural Network Mesh background */}
          <ParticleSystem />

          {/* Floating Navigation Header */}
          <Navigation />

          {/* Cinematic Sections */}
          <main className="flex-grow flex flex-col">
            <Hero />
            
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-2 relative">
              {/* Inner container with thin cyber borders for structure */}
              <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden lg:block" />
              <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden lg:block" />

              <About />
              <Projects />
              <Skills />
              <ResearchLab />
              <Journey />
              <GithubAnalytics />
              <Contact />
            </div>
          </main>

          {/* Minimal luxury footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
