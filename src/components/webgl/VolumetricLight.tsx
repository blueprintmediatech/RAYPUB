"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform float uScrollProgress;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vec2 center = vec2(0.5, 0.5);
  float dist = length(vUv - center);

  // Volumetric cone shape
  float cone = smoothstep(0.5, 0.0, dist);
  cone = pow(cone, 2.0);

  // Animated noise bands
  float bands = sin(vUv.y * 20.0 - uTime * 2.0) * 0.5 + 0.5;
  bands *= sin(vUv.y * 7.0 + uTime * 0.5) * 0.5 + 0.5;

  // Flicker
  float flicker = 0.8 + 0.2 * sin(uTime * 3.0) * sin(uTime * 7.0 + 1.0);

  vec3 goldColor = vec3(0.831, 0.659, 0.263);
  vec3 color = goldColor * cone * bands * flicker;

  float alpha = cone * 0.12 * flicker * (1.0 - uScrollProgress * 0.5);

  gl_FragColor = vec4(color, alpha);
}
`;

export default function VolumetricLight({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScrollProgress: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
    uniforms.uScrollProgress.value = scrollProgress;
  });

  return (
    <group>
      {/* Main volumetric cone */}
      <mesh ref={meshRef} position={[0, 3, -1]} rotation={[0, 0, Math.PI]}>
        <coneGeometry args={[4, 10, 64, 1, true]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Secondary angled light */}
      <mesh position={[3, 4, -2]} rotation={[0.2, 0, -0.5]}>
        <coneGeometry args={[2, 8, 32, 1, true]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
