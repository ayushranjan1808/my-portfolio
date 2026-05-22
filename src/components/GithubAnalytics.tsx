"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Flame, Award, Clock, ArrowUpRight, Shield, RefreshCw } from "lucide-react";

// Generate simulated commit distribution data
// We'll create a grid of 16 weeks (columns) x 7 days (rows) = 112 squares
const weeks = 18;
const days = 7;
const generateCommitData = () => {
  const data = [];
  const start = new Date("2026-01-10");
  for (let w = 0; w < weeks; w++) {
    const weekData = [];
    for (let d = 0; d < days; d++) {
      const currentDate = new Date(start);
      currentDate.setDate(start.getDate() + (w * 7 + d));
      // Random commits weighted to look natural (higher on weekdays, lower on weekends)
      const isWeekend = d === 0 || d === 6;
      const factor = isWeekend ? 0.35 : 0.85;
      const commits = Math.random() < factor ? Math.floor(Math.random() * 6) : 0;
      
      weekData.push({
        date: currentDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        commits,
      });
    }
    data.push(weekData);
  }
  return data;
};

const commitGrid = generateCommitData();

const languages = [
  { name: "TypeScript", percentage: 42, color: "bg-brand-cyan", count: "89K lines" },
  { name: "Python", percentage: 28, color: "bg-brand-violet", count: "62K lines" },
  { name: "C++", percentage: 15, color: "bg-yellow-500", count: "30K lines" },
  { name: "Go", percentage: 10, color: "bg-brand-emerald", count: "21K lines" },
  { name: "SQL", percentage: 5, color: "bg-red-500", count: "9K lines" },
];

export default function GithubAnalytics() {
  const [hoveredCell, setHoveredCell] = useState<{ date: string; commits: number } | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const triggerMockSync = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
    }, 800);
  };

  return (
    <section id="analytics" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      {/* Decorative vector meshes */}
      <div className="absolute left-0 top-1/4 w-[300px] h-[300px] bg-brand-cyan/5 rounded-full glow-orb" />
      <div className="absolute right-0 bottom-1/4 w-[350px] h-[350px] bg-brand-violet/5 rounded-full glow-orb" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-brand-cyan tracking-widest uppercase">// 06. ENGINEERING METRICS</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-mono">
              Developer Analytics
            </h2>
            <p className="text-gray-400 text-sm max-w-lg mt-2 leading-relaxed">
              Tracking codebase velocities, compilation statistics, and automated repository commit logs.
            </p>
          </div>

          {/* Sync Button */}
          <button
            onClick={triggerMockSync}
            disabled={isUpdating}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 font-mono text-[10px] text-gray-400 hover:text-white hover:border-white/20 transition-all font-bold"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isUpdating ? "animate-spin text-brand-cyan" : ""}`} />
            <span>{isUpdating ? "SYNCING_METRICS..." : "FORCE_SYNC_telemetry"}</span>
          </button>
        </div>

        {/* Analytics Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Commit Calendar Visualization (Left 8 Cols) */}
          <div className="lg:col-span-8 p-6 rounded-2xl border border-white/5 bg-white/5 glass-panel flex flex-col justify-between select-none relative">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 font-mono text-[10px] text-gray-500 mb-6">
              <span>METRIC_SOURCE: GITHUB_COMMITS // REPO: ACTIVE_BRANCH</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
                <span className="text-brand-emerald font-bold">LIVE_STATUS_OK</span>
              </span>
            </div>

            {/* Calendar grid view */}
            <div className="overflow-x-auto pb-4">
              <div className="flex flex-col gap-1.5 min-w-[500px]">
                <div className="flex gap-1.5">
                  {commitGrid.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1.5">
                      {week.map((day, dIdx) => {
                        // Level color logic based on commit counts
                        let bgClass = "bg-white/5 hover:border-white/20";
                        if (day.commits === 1) bgClass = "bg-brand-cyan/20 border border-brand-cyan/30";
                        else if (day.commits === 2) bgClass = "bg-brand-cyan/40 border border-brand-cyan/50 shadow-[0_0_8px_rgba(0,245,255,0.2)]";
                        else if (day.commits === 3) bgClass = "bg-brand-violet/60 border border-brand-violet/70 shadow-[0_0_10px_rgba(139,92,246,0.3)]";
                        else if (day.commits >= 4) bgClass = "bg-brand-violet/90 border border-brand-violet/100 shadow-[0_0_12px_rgba(139,92,246,0.5)]";

                        return (
                          <div
                            key={day.date}
                            onMouseEnter={() => setHoveredCell({ date: day.date, commits: day.commits })}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`w-[13px] h-[13px] rounded-[3px] transition-colors cursor-pointer border border-transparent ${bgClass}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Grid legend footer */}
                <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 pt-3">
                  <span>JAN_2026</span>
                  <div className="flex items-center gap-1.5">
                    <span>Less</span>
                    <div className="w-[10px] h-[10px] bg-white/5 rounded-[2px]" />
                    <div className="w-[10px] h-[10px] bg-brand-cyan/20 rounded-[2px]" />
                    <div className="w-[10px] h-[10px] bg-brand-cyan/40 rounded-[2px]" />
                    <div className="w-[10px] h-[10px] bg-brand-violet/60 rounded-[2px]" />
                    <div className="w-[10px] h-[10px] bg-brand-violet/90 rounded-[2px]" />
                    <span>More</span>
                  </div>
                  <span>MAY_2026</span>
                </div>
              </div>
            </div>

            {/* Hovered Cell Tooltip */}
            <div className="h-6 mt-4 font-mono text-[10px] text-gray-400 text-center">
              {hoveredCell ? (
                <p>
                  Date: <span className="text-white font-bold">{hoveredCell.date}</span> &gt; Commits:{" "}
                  <span className="text-brand-cyan font-bold">{hoveredCell.commits}</span>
                </p>
              ) : (
                <p className="text-gray-500">// Hover over grid squares to view commit allocations</p>
              )}
            </div>
          </div>

          {/* Quick Metrics Panel (Right 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4 font-mono">
            
            {/* Coding Streak Widget */}
            <div className="p-5 rounded-2xl border border-white/5 bg-white/5 glass-panel flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">ACTIVE_STREAK</span>
                <span className="text-2xl font-bold text-white tracking-tight">42 Days</span>
                <span className="text-[9px] text-brand-emerald">LONGEST_STREAK: 108 DAYS</span>
              </div>
              <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-500 animate-pulse">
                <Flame className="w-5 h-5" />
              </div>
            </div>

            {/* Language Breakdown Widget */}
            <div className="p-5 rounded-2xl border border-white/5 bg-white/5 glass-panel flex-grow flex flex-col justify-between">
              <div className="flex flex-col gap-0.5 mb-4">
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">LANGUAGE_DISTRIBUTION</span>
                <span className="text-xs text-gray-400 mt-1 leading-normal font-sans">// Segmented lines written across all repositories:</span>
              </div>

              {/* Progress stack */}
              <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden flex mb-6">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className={`h-full ${lang.color}`}
                    style={{ width: `${lang.percentage}%` }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Legend keys */}
              <div className="flex flex-col gap-2">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-[10px] font-bold text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-[2px] ${lang.color}`} />
                      <span className="text-white">{lang.name}</span>
                    </div>
                    <div className="flex gap-2.5">
                      <span>{lang.count}</span>
                      <span className="text-gray-600">{lang.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
