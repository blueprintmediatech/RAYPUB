"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/5"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">
              RAY<span className="text-gold">PUB</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["services", "packages", "faq", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-muted hover:text-gold transition-colors duration-300 capitalize"
              >
                {id}
              </a>
            ))}
            <Link
              href="/login"
              className="text-sm text-muted hover:text-gold transition-colors duration-300"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-gold hover:bg-gold-light text-black text-sm font-semibold px-5 py-2 rounded-md transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/90 backdrop-blur-xl border-b border-white/5">
          <div className="flex flex-col px-4 py-4 gap-4">
            {["services", "packages", "faq", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-gold capitalize"
              >
                {id}
              </a>
            ))}
            <Link href="/login" className="text-sm text-muted hover:text-gold">
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-gold hover:bg-gold-light text-black text-sm font-semibold px-5 py-2 rounded-md text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
