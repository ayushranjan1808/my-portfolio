"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flame, RefreshCw } from "lucide-react";

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
  { name: "TypeScript", percentage: 42, color: "bg-orange-500", count: "89K lines" },
  { name: "Python", percentage: 28, color: "bg-amber-500", count: "62K lines" },
  { name: "C++", percentage: 15, color: "bg-stone-850", count: "30K lines" },
  { name: "Go", percentage: 10, color: "bg-orange-600", count: "21K lines" },
  { name: "SQL", percentage: 5, color: "bg-stone-400", count: "9K lines" },
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
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />

      {/* Decorative glows */}
      <div className="absolute left-0 top-1/4 w-[300px] h-[300px] bg-orange-100/5 rounded-full glow-orb animate-pulse-slow" />
      <div className="absolute right-0 bottom-1/4 w-[350px] h-[350px] bg-amber-100/5 rounded-full glow-orb animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 select-none">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-orange-600 font-bold tracking-widest uppercase">// 07. ENGINEERING METRICS</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              Developer Analytics
            </h2>
            <p className="text-stone-600 text-sm max-w-lg mt-2 leading-relaxed font-semibold">
              Tracking codebase velocities, compilation statistics, and automated repository commit logs.
            </p>
          </div>

          {/* Sync Button */}
          <button
            onClick={triggerMockSync}
            disabled={isUpdating}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-250 bg-white/60 font-mono text-[10px] text-stone-600 hover:text-stone-900 hover:border-stone-400 hover:shadow-sm transition-all font-bold cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isUpdating ? "animate-spin text-orange-600" : ""}`} />
            <span>{isUpdating ? "SYNCING_METRICS..." : "FORCE_SYNC_TELEMETRY"}</span>
          </button>
        </div>

        {/* Analytics Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Commit Calendar Visualization (Left 8 Cols) */}
          <div className="lg:col-span-8 p-6 glass-card-premium rounded-[2rem] border-white/60 flex flex-col justify-between select-none relative text-stone-900">
            <div className="flex items-center justify-between border-b border-stone-200/60 pb-4 font-mono text-[10px] text-stone-500 mb-6 font-bold">
              <span>METRIC_SOURCE: GITHUB_COMMITS // BRANCH: MASTER</span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-orange-50 border border-orange-200/50 text-[9px] text-orange-700 font-bold">
                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-ping" />
                <span>LIVE_STATUS_OK</span>
              </span>
            </div>

            {/* Calendar grid view */}
            <div className="overflow-x-auto pb-4">
              <div className="flex flex-col gap-1.5 min-w-[500px]">
                <div className="flex gap-1.5">
                  {commitGrid.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1.5">
                      {week.map((day) => {
                        let bgClass = "bg-stone-100 border border-stone-200/50 hover:border-stone-300";
                        if (day.commits === 1) bgClass = "bg-orange-500/20 border border-orange-500/30";
                        else if (day.commits === 2) bgClass = "bg-orange-500/40 border border-orange-500/50 shadow-[0_0_8px_rgba(234,88,12,0.15)]";
                        else if (day.commits === 3) bgClass = "bg-amber-600/60 border border-amber-600/70 shadow-[0_0_10px_rgba(217,119,6,0.25)]";
                        else if (day.commits >= 4) bgClass = "bg-orange-700/90 border border-orange-700/100 shadow-[0_0_12px_rgba(234,88,12,0.4)]";

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
                <div className="flex justify-between items-center text-[9px] font-mono text-stone-400 pt-3 font-bold">
                  <span>JAN_2026</span>
                  <div className="flex items-center gap-1.5">
                    <span>Less</span>
                    <div className="w-[10px] h-[10px] bg-stone-100 border border-stone-200/50 rounded-[2px]" />
                    <div className="w-[10px] h-[10px] bg-orange-500/20 rounded-[2px]" />
                    <div className="w-[10px] h-[10px] bg-orange-500/40 rounded-[2px]" />
                    <div className="w-[10px] h-[10px] bg-amber-600/60 rounded-[2px]" />
                    <div className="w-[10px] h-[10px] bg-orange-700/90 rounded-[2px]" />
                    <span>More</span>
                  </div>
                  <span>MAY_2026</span>
                </div>
              </div>
            </div>

            {/* Hovered Cell Tooltip */}
            <div className="h-6 mt-4 font-mono text-[10px] text-stone-500 text-center font-bold">
              {hoveredCell ? (
                <p>
                  Date: <span className="text-stone-900 font-black">{hoveredCell.date}</span> &gt; Commits:{" "}
                  <span className="text-orange-600 font-black">{hoveredCell.commits}</span>
                </p>
              ) : (
                <p className="text-stone-400 font-bold">// Hover over grid squares to view commit allocations</p>
              )}
            </div>
          </div>

          {/* Quick Metrics Panel (Right 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4 font-mono text-stone-900">
            
            {/* Coding Streak Widget */}
            <div className="p-5 glass-card-premium rounded-3xl border-white/60 flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-stone-450 uppercase font-bold tracking-wider">// ACTIVE_STREAK</span>
                <span className="text-2xl font-black text-stone-900 tracking-tight">42 Days</span>
                <span className="text-[9px] text-orange-655 text-orange-600 font-bold">LONGEST_STREAK: 108 DAYS</span>
              </div>
              <div className="p-3 rounded-2xl bg-orange-50 text-orange-600 border border-orange-100 shadow-sm">
                <Flame className="w-5 h-5 animate-pulse" />
              </div>
            </div>

            {/* Language Breakdown Widget */}
            <div className="p-5 glass-card-premium rounded-3xl border-white/60 flex-grow flex flex-col justify-between">
              <div className="flex flex-col gap-0.5 mb-4">
                <span className="text-[10px] text-stone-450 uppercase font-bold tracking-wider">// CODE_DISTRIBUTION</span>
                <span className="text-xs text-stone-500 mt-1 leading-normal font-sans font-semibold">// Lines written across active workspaces:</span>
              </div>

              {/* Progress stack */}
              <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden flex mb-6 shadow-inner-sm">
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
                  <div key={lang.name} className="flex items-center justify-between text-[10px] font-bold text-stone-500">
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-[2px] ${lang.color}`} />
                      <span className="text-stone-900 font-black">{lang.name}</span>
                    </div>
                    <div className="flex gap-2.5">
                      <span>{lang.count}</span>
                      <span className="text-stone-450">{lang.percentage}%</span>
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
