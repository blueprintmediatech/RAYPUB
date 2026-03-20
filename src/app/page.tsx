"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const WebGLCanvas = dynamic(() => import("@/components/webgl/WebGLCanvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <WebGLCanvas />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Packages />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
