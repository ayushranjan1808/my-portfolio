"use client";

import React, { useRef, useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloatingLens from "./FloatingLens";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FloatingObjects() {
  const copperRef = useRef<THREE.Group>(null);
  const glassRef = useRef<THREE.Group>(null);
  const goldRef = useRef<THREE.Group>(null);

  const { viewport } = useThree();
  const isMobile = viewport.width < 7;

  useLayoutEffect(() => {
    const copper = copperRef.current;
    const glass = glassRef.current;
    const gold = goldRef.current;
    
    if (!copper || !glass || !gold) return;

    // Spatial coordinates for desktop and mobile layouts
    const positions = {
      // 1. HERO SECTION
      hero: {
        copper: isMobile ? [0.6, 0.7, -0.6] : [1.4, 0.7, 0],
        glass: isMobile ? [-0.6, 0.3, -0.6] : [-1.3, -0.5, 0],
        gold: isMobile ? [0.4, -0.6, -0.8] : [0.9, -0.8, -0.5],
        scales: isMobile ? [0.55, 0.6, 0.5] : [1.0, 1.1, 0.9],
      },
      // 2. ABOUT SECTION
      about: {
        copper: isMobile ? [-0.5, 0.6, -0.8] : [-1.3, 0.5, 0.2],
        glass: isMobile ? [0.5, 0.1, -0.8] : [1.2, -0.4, 0.3],
        gold: isMobile ? [-0.4, -0.5, -0.8] : [-0.9, -0.7, 0.1],
        scales: isMobile ? [0.45, 0.5, 0.45] : [0.75, 0.85, 0.75],
      },
      // 3. PROJECTS SECTION
      projects: {
        copper: isMobile ? [0.4, 0.5, -0.6] : [1.2, -0.6, 0.2],
        glass: isMobile ? [-0.5, 0.2, -0.8] : [1.4, 0.6, 0.1],
        gold: isMobile ? [0.3, -0.4, -0.8] : [-1.1, 0.1, 0.3],
        scales: isMobile ? [0.5, 0.55, 0.45] : [0.85, 0.95, 0.8],
      },
      // 4. SKILLS SECTION
      skills: {
        copper: isMobile ? [-0.4, 0.4, -1.0] : [-0.8, 0, -1.0],
        glass: isMobile ? [0, 0.2, -1.0] : [0, 0, -1.0],
        gold: isMobile ? [0.4, 0, -1.0] : [0.8, 0, -1.0],
        scales: isMobile ? [0.45, 0.5, 0.45] : [0.8, 0.8, 0.8],
      },
      // 5. RESEARCH LAB
      lab: {
        copper: isMobile ? [-0.4, 0.5, -0.8] : [-1.2, 0.3, 0.4],
        glass: isMobile ? [0.3, 0.1, -0.8] : [-0.7, -0.5, 0.2],
        gold: isMobile ? [0.4, -0.4, -0.8] : [1.2, 0.5, 0.3],
        scales: isMobile ? [0.5, 0.55, 0.5] : [0.85, 0.9, 0.95],
      },
      // 6. CONTACT SECTION
      contact: {
        copper: isMobile ? [-0.3, 0.4, 0.8] : [-0.6, -0.2, 1.2],
        glass: isMobile ? [0.3, 0.1, 0.7] : [0.5, 0.4, 1.3],
        gold: isMobile ? [0, -0.4, 0.6] : [0, -0.7, 0.9],
        scales: isMobile ? [0.65, 0.7, 0.6] : [1.15, 1.2, 1.05],
      },
    };

    // Set initial layout coordinates safely
    gsap.set(copper.position, {
      x: positions.hero.copper[0],
      y: positions.hero.copper[1],
      z: positions.hero.copper[2],
    });
    gsap.set(glass.position, {
      x: positions.hero.glass[0],
      y: positions.hero.glass[1],
      z: positions.hero.glass[2],
    });
    gsap.set(gold.position, {
      x: positions.hero.gold[0],
      y: positions.hero.gold[1],
      z: positions.hero.gold[2],
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
      tl.to([copper.position, glass.position, gold.position], {
        x: (index) => [positions.about.copper[0], positions.about.glass[0], positions.about.gold[0]][index],
        y: (index) => [positions.about.copper[1], positions.about.glass[1], positions.about.gold[1]][index],
        z: (index) => [positions.about.copper[2], positions.about.glass[2], positions.about.gold[2]][index],
        ease: "power2.inOut",
      })
      .to([copper.scale, glass.scale, gold.scale], {
        x: (index) => [positions.about.scales[0], positions.about.scales[1], positions.about.scales[2]][index],
        y: (index) => [positions.about.scales[0], positions.about.scales[1], positions.about.scales[2]][index],
        z: (index) => [positions.about.scales[0], positions.about.scales[1], positions.about.scales[2]][index],
        ease: "power2.inOut",
      }, "<");

      // SECTION 2: ABOUT TO PROJECTS
      tl.to([copper.position, glass.position, gold.position], {
        x: (index) => [positions.projects.copper[0], positions.projects.glass[0], positions.projects.gold[0]][index],
        y: (index) => [positions.projects.copper[1], positions.projects.glass[1], positions.projects.gold[1]][index],
        z: (index) => [positions.projects.copper[2], positions.projects.glass[2], positions.projects.gold[2]][index],
        ease: "power2.inOut",
      })
      .to([copper.scale, glass.scale, gold.scale], {
        x: (index) => [positions.projects.scales[0], positions.projects.scales[1], positions.projects.scales[2]][index],
        y: (index) => [positions.projects.scales[0], positions.projects.scales[1], positions.projects.scales[2]][index],
        z: (index) => [positions.projects.scales[0], positions.projects.scales[1], positions.projects.scales[2]][index],
        ease: "power2.inOut",
      }, "<");

      // SECTION 3: PROJECTS TO SKILLS (Orbital disc configuration)
      tl.to([copper.position, glass.position, gold.position], {
        x: (index) => [positions.skills.copper[0], positions.skills.glass[0], positions.skills.gold[0]][index],
        y: (index) => [positions.skills.copper[1], positions.skills.glass[1], positions.skills.gold[1]][index],
        z: (index) => [positions.skills.copper[2], positions.skills.glass[2], positions.skills.gold[2]][index],
        ease: "power2.inOut",
      })
      .to([copper.scale, glass.scale, gold.scale], {
        x: (index) => [positions.skills.scales[0], positions.skills.scales[1], positions.skills.scales[2]][index],
        y: (index) => [positions.skills.scales[0], positions.skills.scales[1], positions.skills.scales[2]][index],
        z: (index) => [positions.skills.scales[0], positions.skills.scales[1], positions.skills.scales[2]][index],
        ease: "power2.inOut",
      }, "<");

      // SECTION 4: SKILLS TO RESEARCH LAB
      tl.to([copper.position, glass.position, gold.position], {
        x: (index) => [positions.lab.copper[0], positions.lab.glass[0], positions.lab.gold[0]][index],
        y: (index) => [positions.lab.copper[1], positions.lab.glass[1], positions.lab.gold[1]][index],
        z: (index) => [positions.lab.copper[2], positions.lab.glass[2], positions.lab.gold[2]][index],
        ease: "power2.inOut",
      })
      .to([copper.scale, glass.scale, gold.scale], {
        x: (index) => [positions.lab.scales[0], positions.lab.scales[1], positions.lab.scales[2]][index],
        y: (index) => [positions.lab.scales[0], positions.lab.scales[1], positions.lab.scales[2]][index],
        z: (index) => [positions.lab.scales[0], positions.lab.scales[1], positions.lab.scales[2]][index],
        ease: "power2.inOut",
      }, "<");

      // SECTION 5: LAB TO CONTACT (Zoom close-up)
      tl.to([copper.position, glass.position, gold.position], {
        x: (index) => [positions.contact.copper[0], positions.contact.glass[0], positions.contact.gold[0]][index],
        y: (index) => [positions.contact.copper[1], positions.contact.glass[1], positions.contact.gold[1]][index],
        z: (index) => [positions.contact.copper[2], positions.contact.glass[2], positions.contact.gold[2]][index],
        ease: "power2.inOut",
      })
      .to([copper.scale, glass.scale, gold.scale], {
        x: (index) => [positions.contact.scales[0], positions.contact.scales[1], positions.contact.scales[2]][index],
        y: (index) => [positions.contact.scales[0], positions.contact.scales[1], positions.contact.scales[2]][index],
        z: (index) => [positions.contact.scales[0], positions.contact.scales[1], positions.contact.scales[2]][index],
        ease: "power2.inOut",
      }, "<");
    });

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <group>
      {/* 1. Polished Copper Ring */}
      <group ref={copperRef}>
        <FloatingLens type="copper" scale={isMobile ? 0.55 : 1.0} speed={1.2} amplitude={0.16} />
      </group>

      {/* 2. Refractive Glass Lens */}
      <group ref={glassRef}>
        <FloatingLens type="glass" scale={isMobile ? 0.6 : 1.1} speed={0.9} amplitude={0.14} />
      </group>

      {/* 3. Rose Gold Disc */}
      <group ref={goldRef}>
        <FloatingLens type="gold" scale={isMobile ? 0.5 : 0.9} speed={1.5} amplitude={0.18} />
      </group>
    </group>
  );
}
