"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import FloatingObjects from "./FloatingObjects";

export default function ThreeCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-gradient-to-tr from-orange-50 via-stone-100 to-amber-100 -z-10 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none select-none overflow-hidden">
      {/* Soft warm white overlay gradient for depth and brightness */}
      <div className="absolute inset-0 bg-radial-gradient from-white/10 via-transparent to-white/30 mix-blend-overlay" />
      
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]} // Bound device pixel ratio to maintain 60fps on retina screens
      >
        <Suspense fallback={null}>
          {/* High-intensity ambient studio light for bright, clean materials */}
          <ambientLight intensity={0.85} />
          
          {/* Sharp, warm directional key light with shadow-mapping enabled */}
          <directionalLight
            position={[5, 8, 4]}
            intensity={1.8}
            color="#fffcf0"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-bias={-0.0001}
          />
          
          {/* Soft fill light from opposite angle */}
          <directionalLight
            position={[-5, -4, 2]}
            intensity={0.7}
            color="#fef3c7" // Warm amber fill
          />

          {/* Point light to catch highlights on moving chrome/copper surfaces */}
          <pointLight
            position={[0, 2, 1]}
            intensity={1.2}
            color="#ffedd5"
            distance={8}
            decay={1.5}
          />
          
          {/* The three realistic floating luxury shapes */}
          <FloatingObjects />
          
          {/* Pre-load shaders and assets */}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
