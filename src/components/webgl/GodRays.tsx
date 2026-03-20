"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RAY_COUNT = 8;

export default function GodRays() {
  const groupRef = useRef<THREE.Group>(null);

  const rayData = useMemo(() => {
    return Array.from({ length: RAY_COUNT }, (_, i) => {
      const angle = (i / RAY_COUNT) * Math.PI * 2;
      return {
        position: [Math.cos(angle) * 3, 2 + Math.random() * 2, -3] as [number, number, number],
        rotation: [0, 0, angle + Math.PI / 2] as [number, number, number],
        width: 0.5 + Math.random() * 1.5,
        height: 8 + Math.random() * 6,
        speed: 0.3 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        baseOpacity: 0.015 + Math.random() * 0.02,
      };
    });
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const d = rayData[i];
        if (!d) return;
        const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
        if (mat) {
          mat.opacity = d.baseOpacity * (0.5 + 0.5 * Math.sin(t * d.speed + d.phase));
        }
      });
      groupRef.current.rotation.z = Math.sin(t * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      {rayData.map((d, i) => (
        <mesh key={i} position={d.position} rotation={d.rotation}>
          <planeGeometry args={[d.width, d.height]} />
          <meshBasicMaterial
            color={new THREE.Color(0.831, 0.659, 0.263)}
            transparent
            opacity={d.baseOpacity}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
