"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function WaveformRing({ scrollProgress }: { scrollProgress: number }) {
  const lineRef = useRef<THREE.Line | null>(null);

  const { geometry, material } = useMemo(() => {
    const count = 512;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.5;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = Math.sin(angle) * radius;
      pos[i * 3 + 2] = 0;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

    const mat = new THREE.LineBasicMaterial({
      color: new THREE.Color(0.831, 0.659, 0.263),
      transparent: true,
      opacity: 0.8,
    });

    return { geometry: geo, material: mat };
  }, []);

  const lineObj = useMemo(() => {
    const l = new THREE.Line(geometry, material);
    return l;
  }, [geometry, material]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const count = 512;
    const attr = geometry.getAttribute("position") as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const baseRadius = 2.5 - scrollProgress * 0.5;

      const wave1 = Math.sin(angle * 8 + t * 2) * 0.15;
      const wave2 = Math.sin(angle * 16 - t * 3) * 0.08;
      const wave3 = Math.sin(angle * 32 + t * 5) * 0.04;
      const wave4 = Math.sin(angle * 4 + t * 0.5) * 0.2;

      const radius = baseRadius + wave1 + wave2 + wave3 + wave4;

      arr[i * 3] = Math.cos(angle) * radius;
      arr[i * 3 + 1] = Math.sin(angle) * radius;
      arr[i * 3 + 2] = Math.sin(angle * 6 + t) * 0.3;
    }

    attr.needsUpdate = true;

    if (lineObj) {
      lineObj.rotation.z = t * 0.1;
      lineObj.rotation.x = Math.sin(t * 0.2) * 0.1;
    }
  });

  return <primitive object={lineObj} />;
}
