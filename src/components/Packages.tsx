import Link from "next/link";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Registration",
    price: "$1,000",
    period: "one-time",
    description: "Get registered everywhere that matters. We set up all your accounts and business entities.",
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
    name: "Publishing Admin",
    price: "$1,000",
    period: "setup + $100/mo",
    description: "Full publishing administration with royalty collection, auditing, and financial reporting.",
    features: [
      "Everything in Registration",
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
    price: "$1,000",
    period: "one-time",
    description: "Complete label infrastructure with accounting, contracts, and legal — everything you need.",
    features: [
      "Everything in Publishing Admin",
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
  return (
    <section id="packages" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Choose Your <span className="text-gold">Package</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Simple, transparent pricing. No hidden fees. Pick the level of
            service that fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-xl border p-8 ${
                pkg.popular
                  ? "border-gold bg-gold/5"
                  : "border-border bg-surface"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gold">
                  {pkg.price}
                </span>
                <span className="text-sm text-muted ml-2">{pkg.period}</span>
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
                className={`mt-8 block text-center font-semibold py-3 rounded-md transition-colors ${
                  pkg.popular
                    ? "bg-gold hover:bg-gold-light text-black"
                    : "border border-border hover:border-gold/50 text-foreground"
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
