"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import FluidBackground from "./FluidBackground";
import MorphingTerrain from "./MorphingTerrain";
import FloatingOrbs from "./FloatingOrbs";
import GodRays from "./GodRays";
import WaveformRing from "./WaveformRing";
import VolumetricLight from "./VolumetricLight";
import PostProcessing from "./PostProcessing";

interface HeroSceneProps {
  scrollProgress: number;
}

export default function HeroScene({ scrollProgress }: HeroSceneProps) {
  return (
    <Canvas
      className="!fixed inset-0 !h-screen"
      camera={{ position: [0, 0, 5], fov: 60 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "#0a0a0a" }}
    >
      <Suspense fallback={null}>
        <FluidBackground />
        <MorphingTerrain scrollProgress={scrollProgress} />
        <FloatingOrbs scrollProgress={scrollProgress} />
        <GodRays />
        <WaveformRing scrollProgress={scrollProgress} />
        <VolumetricLight scrollProgress={scrollProgress} />
        <PostProcessing />
      </Suspense>
    </Canvas>
  );
}
