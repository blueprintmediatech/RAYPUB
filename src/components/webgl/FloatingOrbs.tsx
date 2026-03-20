"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ORB_COUNT = 30;

export default function FloatingOrbs({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<THREE.Mesh[]>([]);

  const orbData = useMemo(() => {
    return Array.from({ length: ORB_COUNT }, (_, i) => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      ),
      scale: 0.02 + Math.random() * 0.08,
      speed: 0.2 + Math.random() * 0.8,
      phase: Math.random() * Math.PI * 2,
      orbitRadius: 0.3 + Math.random() * 0.7,
    }));
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const d = orbData[i];

      mesh.position.x = d.position.x + Math.sin(t * d.speed + d.phase) * d.orbitRadius;
      mesh.position.y = d.position.y + Math.cos(t * d.speed * 0.7 + d.phase) * d.orbitRadius * 0.5;
      mesh.position.z = d.position.z + Math.sin(t * d.speed * 0.3 + d.phase * 2) * d.orbitRadius * 0.3;

      // Pulse scale
      const pulse = 1 + Math.sin(t * 2 + d.phase) * 0.3;
      const s = d.scale * pulse;
      mesh.scale.setScalar(s);
    });

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.02;
      groupRef.current.position.y = scrollProgress * -2;
    }
  });

  return (
    <group ref={groupRef}>
      {orbData.map((d, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) meshRefs.current[i] = el;
          }}
          position={d.position}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial
            color={new THREE.Color(0.831, 0.659, 0.263)}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}

      {/* Larger volumetric orbs */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={`big-${i}`}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 6,
            -2 - Math.random() * 3,
          ]}
        >
          <sphereGeometry args={[0.5 + Math.random() * 0.5, 32, 32]} />
          <meshBasicMaterial
            color={new THREE.Color(0.831, 0.659, 0.263)}
            transparent
            opacity={0.03}
          />
        </mesh>
      ))}
    </group>
  );
}
