"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import fluidVertex from "@/shaders/fluidVertex.glsl";
import fluidFragment from "@/shaders/fluidFragment.glsl";

export default function FluidBackground() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const mouse = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(1, 1) },
    }),
    []
  );

  useFrame(({ clock, pointer }) => {
    uniforms.uTime.value = clock.getElapsedTime();

    // Smooth mouse follow
    mouse.current.lerp(pointer, 0.05);
    uniforms.uMouse.value.copy(mouse.current);
    uniforms.uResolution.value.set(viewport.width, viewport.height);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[viewport.width * 2, viewport.height * 2]} />
      <shaderMaterial
        vertexShader={fluidVertex}
        fragmentShader={fluidFragment}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  );
}
