"use client";

import { useRef, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div ref={leftRef} className="opacity-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Ready to <span className="text-gold">Get Started?</span>
            </h2>
            <p className="mt-4 text-muted text-lg leading-relaxed">
              Have questions about our services? Reach out and our team will get
              back to you within 24 hours.
            </p>

            <div className="mt-10 space-y-6">
              {[
                { icon: Mail, label: "Email", value: "info@raypub.com" },
                { icon: Phone, label: "Phone", value: "(555) 000-0000" },
                { icon: MapPin, label: "Location", value: "Los Angeles, CA" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            ref={formRef}
            className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-xl p-8 space-y-6 opacity-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-white/[0.03] border border-white/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Interested In
              </label>
              <select className="w-full bg-white/[0.03] border border-white/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold/50 transition-colors">
                <option value="">Select a package</option>
                <option value="registration">
                  Label / Music Career Setup — $1,500
                </option>
                <option value="publishing">
                  Artist Admin — $1,500 + $89.99/mo
                </option>
                <option value="label">Full Label Services — $1,500 + $249.99/mo</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-white/[0.03] border border-white/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-light text-black font-semibold py-3 rounded-md transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
