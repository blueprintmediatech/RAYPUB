import Link from "next/link";
import { ArrowRight, Shield, Music, DollarSign } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-medium mb-8">
            <Music size={14} />
            Publishing Administration for Independent Artists
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Your Music.
            <br />
            Your Money.
            <br />
            <span className="text-gold">Our Expertise.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            The one-stop platform for independent artists and labels to register
            their publishing, collect royalties, and manage their entire music
            business — all under one roof.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="group bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3.5 rounded-md text-base transition-all flex items-center gap-2"
            >
              Get Started Today
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#packages"
              className="border border-border hover:border-gold/50 text-foreground font-medium px-8 py-3.5 rounded-md text-base transition-colors"
            >
              View Packages
            </a>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Shield, label: "BMI, SoundExchange & SongTrust Registered" },
            { icon: DollarSign, label: "Royalty Collection & Administration" },
            { icon: Music, label: "Full Distribution via UnitedMasters" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 justify-center text-sm text-muted"
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
