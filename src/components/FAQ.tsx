"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What does RAYPUB actually do for me?",
    a: "We handle the entire business side of your music. That means registering you with BMI, SoundExchange, and SongTrust, setting up distribution through UnitedMasters, forming your LLC and EIN, collecting your royalties, auditing your books, and providing legal support — depending on which package you choose.",
  },
  {
    q: "Do I keep ownership of my music?",
    a: "Yes. You retain full ownership of your masters and compositions. Our agreements grant us administration rights to collect and distribute royalties on your behalf, but the copyright stays with you.",
  },
  {
    q: "How long does the registration process take?",
    a: "Most registrations (BMI, SoundExchange, SongTrust) are completed within 2-4 weeks. LLC and EIN formation typically takes 1-3 weeks depending on your state. You can track everything in real time through your client dashboard.",
  },
  {
    q: "What's the difference between the packages?",
    a: "The Registration package is a one-time setup of all your accounts and business entities. Publishing Admin adds ongoing royalty collection, auditing, and monthly administration. Full Label Services adds accounting, legal work, contracts, and a dedicated account manager.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Absolutely. You can upgrade at any time. We'll credit what you've already paid toward the higher tier.",
  },
  {
    q: "What contracts do I need to sign?",
    a: "Depending on your package, you'll sign a Publishing Administration Agreement, Distribution Agreement, and Letter of Direction. These give us the authority to act on your behalf with PROs and distributors. All contracts are transparent — no surprises.",
  },
  {
    q: "How do I get paid?",
    a: "Royalties are collected through our administration network and distributed to you on a quarterly basis. You can track all earnings in real time through your dashboard.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "The Registration and Full Label Services packages are one-time fees with no recurring commitment. The Publishing Admin package has a monthly fee of $100 after the initial setup, with a minimum 12-month term.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-light transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-sm">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-muted shrink-0 ml-4 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-sm text-muted leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
