"use client";

import { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function WebGLCanvas() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollTop / docHeight, 1);
    setScrollProgress(progress);

    // Fade out WebGL when scrolled past hero
    setVisible(scrollTop < window.innerHeight * 3);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        opacity: Math.max(0, 1 - scrollProgress * 1.5),
        transition: "opacity 0.1s ease-out",
      }}
    >
      <HeroScene scrollProgress={scrollProgress} />
    </div>
  );
}
