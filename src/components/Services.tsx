"use client";

import { useRef, useEffect } from "react";
import {
  FileText,
  BarChart3,
  Building2,
  Globe,
  Scale,
  Receipt,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: FileText,
    title: "Publishing Registration",
    description:
      "We handle your BMI, SoundExchange, and SongTrust registration so every stream, spin, and sync earns you money.",
  },
  {
    icon: BarChart3,
    title: "Royalty Collection",
    description:
      "We track down every penny owed to you from performance, mechanical, and digital royalties worldwide.",
  },
  {
    icon: Globe,
    title: "Distribution",
    description:
      "Get your music on every major platform through UnitedMasters with full support and catalog management.",
  },
  {
    icon: Building2,
    title: "LLC & EIN Formation",
    description:
      "Protect your brand and your bag. We set up your LLC and EIN so your music business is legally structured.",
  },
  {
    icon: Scale,
    title: "Legal & Contracts",
    description:
      "In-house contract drafting, review, and legal consultation for releases, features, and business deals.",
  },
  {
    icon: Receipt,
    title: "Label Accounting",
    description:
      "Full financial reporting, P&L statements, and book auditing so you always know where your money is.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              end: "top 40%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative py-24 bg-surface/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16 opacity-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything You Need to{" "}
            <span className="text-gold">Run Your Label</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            From registration to royalties, we handle the business so you can
            focus on the music.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-background/60 backdrop-blur-md border border-white/5 rounded-xl p-6 hover:border-gold/30 hover:bg-background/80 transition-all duration-500 opacity-0"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                <s.icon size={22} className="text-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
