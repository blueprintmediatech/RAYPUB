import {
  FileText,
  BarChart3,
  Building2,
  Globe,
  Scale,
  Receipt,
} from "lucide-react";

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
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Everything You Need to{" "}
            <span className="text-gold">Run Your Label</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            From registration to royalties, we handle the business so you can
            focus on the music.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-surface-light border border-border rounded-xl p-6 hover:border-gold/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <s.icon size={20} className="text-gold" />
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
