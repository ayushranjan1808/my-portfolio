"use client";

import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Declare persistent static structures outside the render loop to prevent GC allocation spikes
const orangeColor = new THREE.Color("#fb923c");
const defaultColorMap = {
  copper: new THREE.Color("#c57d56"),
  glass: new THREE.Color("#ffffff"),
  gold: new THREE.Color("#b76e79"),
};

interface FloatingLensProps {
  type: "copper" | "glass" | "gold";
  scale?: number;
  speed?: number;
  amplitude?: number;
}

export default function FloatingLens({
  type,
  scale = 1,
  speed = 1,
  amplitude = 0.15,
}: FloatingLensProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  // Pre-calculate target vectors to avoid allocations on every useFrame tick
  const baseScaleVec = useMemo(() => new THREE.Vector3(scale, scale, scale), [scale]);
  const hoverScaleVec = useMemo(
    () => new THREE.Vector3(scale * 1.25, scale * 1.25, scale * 1.25),
    [scale]
  );
  
  // Custom seed offset to prevent all shapes from floating in perfect sync
  const floatOffset = useMemo(() => Math.random() * Math.PI * 2, []);

  // Frame Loop for idle float, hover lerps, and slow spin
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // 1. Smooth scale interpolation
    if (meshRef.current) {
      meshRef.current.scale.lerp(hovered ? hoverScaleVec : baseScaleVec, 0.1);
      
      // Idle float (smooth sine wave offset)
      meshRef.current.position.y = Math.sin(t * speed + floatOffset) * amplitude;
      
      // Slow continuous rotations
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
    }

    // 2. Color interpolation (lerp current material color to glowing orange on hover)
    if (materialRef.current) {
      const targetColor = hovered ? orangeColor : defaultColorMap[type];
      materialRef.current.color.lerp(targetColor, 0.08);
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
      castShadow
      receiveShadow
    >
      {/* 3D Geometry selector */}
      {type === "copper" && (
        <>
          <torusGeometry args={[0.7, 0.18, 16, 64]} />
          <meshStandardMaterial
            ref={materialRef}
            color={defaultColorMap.copper}
            metalness={0.95}
            roughness={0.15}
            envMapIntensity={1.5}
          />
        </>
      )}

      {type === "glass" && (
        <>
          {/* Squashed sphere geometry simulates a refractive double-convex magnifying lens */}
          <sphereGeometry args={[0.7, 32, 24]} />
          <meshPhysicalMaterial
            ref={materialRef}
            color={defaultColorMap.glass}
            metalness={0.1}
            roughness={0.03}
            transmission={0.92}
            thickness={1.6}
            ior={1.48}
            transparent
            opacity={0.98}
            roughnessMap={null}
            envMapIntensity={2.0}
          />
        </>
      )}

      {type === "gold" && (
        <>
          {/* Flat cylinder simulates a heavy rose-gold coin/disk */}
          <cylinderGeometry args={[0.8, 0.8, 0.08, 32]} />
          <meshStandardMaterial
            ref={materialRef}
            color={defaultColorMap.gold}
            metalness={0.9}
            roughness={0.2}
            envMapIntensity={1.2}
          />
        </>
      )}
    </mesh>
  );
}
