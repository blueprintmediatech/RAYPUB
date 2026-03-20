"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Music, DollarSign } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.3 }
    )
      .fromTo(
        headingRef.current?.querySelectorAll("span, br") || [],
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15 },
        "-=0.6"
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8"
      )
      .fromTo(
        ctaRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        "-=0.6"
      )
      .fromTo(
        trustRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm text-gold text-sm font-medium mb-8 opacity-0"
          >
            <Music size={14} />
            Publishing Administration for Independent Artists
          </div>

          <h1
            ref={headingRef}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
          >
            <span className="block">Your Music.</span>
            <span className="block">Your Money.</span>
            <span className="block text-gold">Our Expertise.</span>
          </h1>

          <p
            ref={subRef}
            className="mt-8 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed opacity-0"
          >
            The one-stop platform for independent artists and labels to register
            their publishing, collect royalties, and manage their entire music
            business — all under one roof.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="group bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3.5 rounded-md text-base transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              Get Started Today
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href="#packages"
              className="border border-white/10 hover:border-gold/50 text-foreground font-medium px-8 py-3.5 rounded-md text-base transition-colors backdrop-blur-sm"
            >
              View Packages
            </a>
          </div>
        </div>

        <div
          ref={trustRef}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: Shield, label: "BMI, SoundExchange & SongTrust Registered" },
            { icon: DollarSign, label: "Royalty Collection & Administration" },
            { icon: Music, label: "Full Distribution via UnitedMasters" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 justify-center text-sm text-muted/80"
            >
              <item.icon size={18} className="text-gold shrink-0" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
