"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">
              RAY<span className="text-gold">PUB</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-muted hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#packages" className="text-sm text-muted hover:text-foreground transition-colors">
              Packages
            </a>
            <a href="#faq" className="text-sm text-muted hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-sm text-muted hover:text-foreground transition-colors">
              Contact
            </a>
            <Link
              href="/login"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-gold hover:bg-gold-light text-black text-sm font-semibold px-5 py-2 rounded-md transition-colors"
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
        <div className="md:hidden bg-surface border-b border-border">
          <div className="flex flex-col px-4 py-4 gap-4">
            <a href="#services" onClick={() => setOpen(false)} className="text-sm text-muted hover:text-foreground">Services</a>
            <a href="#packages" onClick={() => setOpen(false)} className="text-sm text-muted hover:text-foreground">Packages</a>
            <a href="#faq" onClick={() => setOpen(false)} className="text-sm text-muted hover:text-foreground">FAQ</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-sm text-muted hover:text-foreground">Contact</a>
            <Link href="/login" className="text-sm text-muted hover:text-foreground">Login</Link>
            <Link href="/signup" className="bg-gold hover:bg-gold-light text-black text-sm font-semibold px-5 py-2 rounded-md text-center transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
