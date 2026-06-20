"use client";

import React, { useRef, useLayoutEffect, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Safely register GSAP ScrollTrigger on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function QuantumCore() {
  const scrollGroupRef = useRef<THREE.Group>(null);
  const parallaxGroupRef = useRef<THREE.Group>(null);
  
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const outerCageRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const cageNodesRef = useRef<THREE.Group>(null);
  const geometryRef = useRef<THREE.BufferGeometry>(null);

  const { viewport } = useThree();
  const isMobile = viewport.width < 7;

  // Extract unique vertices from an icosahedron geometry for vertex nodes
  const vertexPositions = useMemo(() => {
    const geom = new THREE.IcosahedronGeometry(1.6, 1);
    const posAttr = geom.getAttribute("position");
    const vertices: [number, number, number][] = [];
    const seen = new Set<string>();
    
    for (let i = 0; i < posAttr.count; i++) {
      const x = Number(posAttr.getX(i).toFixed(3));
      const y = Number(posAttr.getY(i).toFixed(3));
      const z = Number(posAttr.getZ(i).toFixed(3));
      const key = `${x},${y},${z}`;
      if (!seen.has(key)) {
        seen.add(key);
        vertices.push([x, y, z]);
      }
    }
    geom.dispose();
    return vertices;
  }, []);

  // Generate random coordinates for floating telemetry particle stream
  const particleData = useMemo(() => {
    const count = 180;
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const cyan = new THREE.Color("#00f5ff");
    const violet = new THREE.Color("#8b5cf6");
    
    for (let i = 0; i < count; i++) {
      // Create orbiting shell cloud distribution
      const r = Math.random() * 0.9 + 1.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      // Interpolate colors between cyan and violet
      const mixedColor = cyan.clone().lerp(violet, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    return { pos, colors };
  }, []);

  // Safe imperative assignment of BufferAttributes to avoid strict JSX typing issues
  React.useEffect(() => {
    if (geometryRef.current) {
      geometryRef.current.setAttribute(
        "position",
        new THREE.BufferAttribute(particleData.pos, 3)
      );
      geometryRef.current.setAttribute(
        "color",
        new THREE.BufferAttribute(particleData.colors, 3)
      );
    }
  }, [particleData]);

  // GSAP ScrollTrigger Integration for Spatial Morphing
  useLayoutEffect(() => {
    if (!scrollGroupRef.current) return;

    // Responsive position coordinates
    const targets = {
      heroX: isMobile ? 0 : 1.3,
      heroY: isMobile ? 0.6 : 0,
      heroZ: isMobile ? -0.4 : 0,
      heroScale: isMobile ? 0.75 : 1.15,

      aboutX: isMobile ? 0 : -1.4,
      aboutY: isMobile ? -0.3 : 0.2,
      aboutZ: isMobile ? -0.5 : 0.4,
      aboutScale: isMobile ? 0.65 : 0.85,

      projectsX: isMobile ? 0 : 1.4,
      projectsY: isMobile ? 0.2 : -0.4,
      projectsZ: isMobile ? -0.3 : 0.3,
      projectsScale: isMobile ? 0.8 : 1.1,

      skillsX: 0,
      skillsY: 0,
      skillsZ: isMobile ? -1.0 : -1.2,
      skillsScale: isMobile ? 0.7 : 0.9,

      labX: isMobile ? 0 : -1.3,
      labY: isMobile ? -0.2 : 0,
      labZ: isMobile ? -0.4 : 0.5,
      labScale: isMobile ? 0.75 : 0.95,

      contactX: 0,
      contactY: isMobile ? 0.1 : 0.1,
      contactZ: isMobile ? 0.8 : 1.4,
      contactScale: isMobile ? 1.0 : 1.25,
    };

    // Set initial position
    gsap.set(scrollGroupRef.current.position, {
      x: targets.heroX,
      y: targets.heroY,
      z: targets.heroZ,
    });
    gsap.set(scrollGroupRef.current.scale, {
      x: targets.heroScale,
      y: targets.heroScale,
      z: targets.heroScale,
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      // SECTION 1: HERO TO ABOUT
      tl.to(scrollGroupRef.current!.position, {
        x: targets.aboutX,
        y: targets.aboutY,
        z: targets.aboutZ,
        ease: "power2.inOut",
      })
      .to(scrollGroupRef.current!.scale, {
        x: targets.aboutScale,
        y: targets.aboutScale,
        z: targets.aboutScale,
        ease: "power2.inOut",
      }, "<")
      .to(scrollGroupRef.current!.rotation, {
        y: Math.PI * 0.5,
        ease: "power2.inOut",
      }, "<");

      // SECTION 2: ABOUT TO PROJECTS (Explosion / vertex push-out)
      tl.to(scrollGroupRef.current!.position, {
        x: targets.projectsX,
        y: targets.projectsY,
        z: targets.projectsZ,
        ease: "power2.inOut",
      })
      .to(scrollGroupRef.current!.scale, {
        x: targets.projectsScale,
        y: targets.projectsScale,
        z: targets.projectsScale,
        ease: "power2.inOut",
      }, "<")
      .to(outerCageRef.current!.scale, {
        x: 1.4,
        y: 1.4,
        z: 1.4,
        ease: "elastic.out(1, 0.75)",
      }, "<")
      .to(cageNodesRef.current!.scale, {
        x: 1.4,
        y: 1.4,
        z: 1.4,
        ease: "elastic.out(1, 0.75)",
      }, "<")
      .to(scrollGroupRef.current!.rotation, {
        y: Math.PI * 1.2,
        z: Math.PI * 0.15,
        ease: "power2.inOut",
      }, "<");

      // SECTION 3: PROJECTS TO SKILLS (Morph to flat disk/orbital ring alignment)
      tl.to(scrollGroupRef.current!.position, {
        x: targets.skillsX,
        y: targets.skillsY,
        z: targets.skillsZ,
        ease: "power2.inOut",
      })
      .to(scrollGroupRef.current!.scale, {
        x: targets.skillsScale,
        y: targets.skillsScale,
        z: targets.skillsScale,
        ease: "power2.inOut",
      }, "<")
      .to(outerCageRef.current!.scale, {
        x: 0.8,
        y: 0.8,
        z: 0.8,
        ease: "power2.inOut",
      }, "<")
      .to(cageNodesRef.current!.scale, {
        x: 0.8,
        y: 0.8,
        z: 0.8,
        ease: "power2.inOut",
      }, "<")
      .to(scrollGroupRef.current!.rotation, {
        x: Math.PI * 0.45, // Rotate on tilt to simulate a disk
        y: Math.PI * 2.0,
        z: 0,
        ease: "power2.inOut",
      }, "<");

      // SECTION 4: SKILLS TO RESEARCH LAB
      tl.to(scrollGroupRef.current!.position, {
        x: targets.labX,
        y: targets.labY,
        z: targets.labZ,
        ease: "power2.inOut",
      })
      .to(scrollGroupRef.current!.scale, {
        x: targets.labScale,
        y: targets.labScale,
        z: targets.labScale,
        ease: "power2.inOut",
      }, "<")
      .to(scrollGroupRef.current!.rotation, {
        x: 0,
        y: Math.PI * 2.8,
        z: Math.PI * 0.1,
        ease: "power2.inOut",
      }, "<");

      // SECTION 5: LAB TO CONTACT (Zoom close-up)
      tl.to(scrollGroupRef.current!.position, {
        x: targets.contactX,
        y: targets.contactY,
        z: targets.contactZ,
        ease: "power2.inOut",
      })
      .to(scrollGroupRef.current!.scale, {
        x: targets.contactScale,
        y: targets.contactScale,
        z: targets.contactScale,
        ease: "power2.inOut",
      }, "<")
      .to(scrollGroupRef.current!.rotation, {
        y: Math.PI * 4.0,
        z: 0,
        ease: "power2.inOut",
      }, "<");
    });

    return () => ctx.revert();
  }, [isMobile]);

  // Frame Loop for micro-animations and mouse parallax
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. Core Pulsing animation
    if (innerCoreRef.current) {
      const pulseScale = Math.sin(time * 2.5) * 0.08 + 0.92;
      innerCoreRef.current.scale.set(pulseScale, pulseScale, pulseScale);
    }

    // 2. Continuous rings rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.4;
      ring1Ref.current.rotation.y = time * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -time * 0.3;
      ring2Ref.current.rotation.z = time * 0.15;
    }

    // 3. Outer wireframe slow spin
    if (outerCageRef.current) {
      outerCageRef.current.rotation.y = -time * 0.08;
      outerCageRef.current.rotation.x = time * 0.03;
    }
    if (cageNodesRef.current) {
      cageNodesRef.current.rotation.y = -time * 0.08;
      cageNodesRef.current.rotation.x = time * 0.03;
    }

    // 4. Floating particles slow rotation
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
      particlesRef.current.rotation.x = time * 0.02;
    }

    // 5. Mouse Parallax logic applied to decoupled child group
    if (parallaxGroupRef.current) {
      const targetRotX = state.pointer.y * 0.25;
      const targetRotY = state.pointer.x * 0.25;

      parallaxGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        parallaxGroupRef.current.rotation.x,
        targetRotX,
        0.05
      );
      parallaxGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        parallaxGroupRef.current.rotation.y,
        targetRotY,
        0.05
      );
    }
  });

  return (
    // Outer group controlled by GSAP ScrollTrigger
    <group ref={scrollGroupRef}>
      {/* Inner group controlled by Mouse Parallax */}
      <group ref={parallaxGroupRef}>
        
        {/* Glowing Quantum Core Sphere */}
        <mesh ref={innerCoreRef}>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshPhysicalMaterial
            color="#00f5ff"
            emissive="#00b5d8"
            emissiveIntensity={1.8}
            roughness={0.1}
            metalness={0.9}
            transmission={0.6}
            thickness={1.2}
          />
        </mesh>

        {/* Middle Ring 1 (Latitude Core) */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[0.9, 0.025, 16, 100]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#4c1d95"
            emissiveIntensity={1.0}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        {/* Middle Ring 2 (Longitude Core) */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[1.2, 0.018, 16, 100]} />
          <meshStandardMaterial
            color="#00f5ff"
            emissive="#0891b2"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.95}
          />
        </mesh>

        {/* Outer Icosahedron Wireframe Cage */}
        <mesh ref={outerCageRef}>
          <icosahedronGeometry args={[1.6, 1]} />
          <meshBasicMaterial
            color="#8b5cf6"
            wireframe
            transparent
            opacity={0.22}
          />
        </mesh>

        {/* Glowing Vertex Nodes for Icosahedron Cage */}
        <group ref={cageNodesRef}>
          {vertexPositions.map((pos, index) => (
            <mesh key={index} position={pos}>
              <sphereGeometry args={[0.045, 8, 8]} />
              <meshBasicMaterial
                color={index % 2 === 0 ? "#00f5ff" : "#8b5cf6"}
                toneMapped={false}
              />
            </mesh>
          ))}
        </group>

        {/* Telemetry Particles Mesh */}
        <points ref={particlesRef}>
          <bufferGeometry ref={geometryRef} />
          <pointsMaterial
            size={0.03}
            vertexColors
            transparent
            opacity={0.7}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>

      </group>
    </group>
  );
}
