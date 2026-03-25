"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    name: "Label / Music Career Setup",
    price: "$1,500",
    period: "one-time",
    setupFee: "",
    description:
      "Get registered everywhere that matters. We set up all your accounts and business entities.",
    features: [
      "BMI Registration & Setup",
      "SoundExchange Registration",
      "SongTrust Registration",
      "UnitedMasters Distribution Setup",
      "LLC Formation Assistance",
      "EIN Registration (if needed)",
      "Registration Status Dashboard",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Artist Admin",
    price: "$89.99",
    period: "/month",
    setupFee: "$1,500 one-time setup",
    description:
      "Full publishing administration with royalty collection, auditing, and financial reporting.",
    features: [
      "Everything in Label / Music Career Setup",
      "Publishing Administration",
      "Royalty Collection & Tracking",
      "Book Auditing & Financial Reports",
      "Quarterly Publishing Statements",
      "Music Catalog Management",
      "Revenue Tracking Dashboard",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Full Label Services",
    price: "$249.99",
    period: "/month",
    setupFee: "$1,500 one-time setup",
    description:
      "Complete label infrastructure with accounting, contracts, and legal — everything you need.",
    features: [
      "Everything in Artist Admin",
      "Full Label Accounting",
      "In-House Contract Drafting",
      "Legal Work & Consultation",
      "Distribution Management",
      "Artist Roster Management",
      "P&L Statements & Reporting",
      "Dedicated Account Manager",
    ],
    popular: false,
  },
];

export default function Packages() {
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
            toggleActions: "play none none reverse",
          },
        }
      );

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 100, rotateY: 15 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="packages" className="relative py-24 bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16 opacity-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Choose Your <span className="text-gold">Package</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Simple, transparent pricing. No hidden fees. Pick the level of
            service that fits your needs.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-xl border p-8 backdrop-blur-md opacity-0 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-gold/5 ${
                pkg.popular
                  ? "border-gold/50 bg-gold/5"
                  : "border-white/5 bg-white/[0.02]"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-gold/20">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gold">
                  {pkg.price}
                </span>
                <span className="text-sm text-muted ml-2">{pkg.period}</span>
                {pkg.setupFee && (
                  <p className="text-xs text-muted mt-1">+ {pkg.setupFee}</p>
                )}
              </div>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {pkg.description}
              </p>

              <ul className="mt-8 space-y-3 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-gold shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={`mt-8 block text-center font-semibold py-3 rounded-md transition-all duration-300 ${
                  pkg.popular
                    ? "bg-gold hover:bg-gold-light text-black shadow-lg shadow-gold/20 hover:shadow-gold/30"
                    : "border border-white/10 hover:border-gold/50 text-foreground hover:bg-gold/5"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
