"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import terrainVertex from "@/shaders/terrainVertex.glsl";
import terrainFragment from "@/shaders/terrainFragment.glsl";

interface MorphingTerrainProps {
  scrollProgress: number;
}

export default function MorphingTerrain({ scrollProgress }: MorphingTerrainProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScrollProgress: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  useFrame(({ clock, pointer }) => {
    uniforms.uTime.value = clock.getElapsedTime();
    uniforms.uScrollProgress.value = scrollProgress;

    mouse.current.lerp(pointer, 0.03);
    uniforms.uMouse.value.copy(mouse.current);

    if (meshRef.current) {
      meshRef.current.rotation.x = -0.6 + scrollProgress * 0.2;
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -0.5, 0]} rotation={[-0.6, 0, 0]}>
      <planeGeometry args={[8, 8, 200, 200]} />
      <shaderMaterial
        vertexShader={terrainVertex}
        fragmentShader={terrainFragment}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}
