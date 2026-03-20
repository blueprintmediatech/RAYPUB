"use client";

import { useState } from "react";
import { FileText, CheckCircle2, AlertCircle, Download, Eye } from "lucide-react";
import Modal from "@/components/Modal";

type Contract = {
  name: string;
  description: string;
  required: boolean;
  signed: boolean;
};

const initialContracts: Contract[] = [
  {
    name: "Publishing Administration Agreement",
    description: "Grants RAYPUB the right to administer, collect, and distribute publishing royalties on your behalf. Covers worldwide territory with standard industry commission rates.",
    required: true,
    signed: false,
  },
  {
    name: "Distribution Agreement",
    description: "Authorizes RAYPUB to distribute your music across all digital platforms through our distribution partners. Covers revenue splits and termination clauses.",
    required: true,
    signed: false,
  },
  {
    name: "Master Recording License",
    description: "Grants RAYPUB a non-exclusive license to your master recordings for distribution and licensing purposes. You retain full ownership.",
    required: true,
    signed: false,
  },
  {
    name: "Letter of Direction",
    description: "Authorizes RAYPUB to act on your behalf with PROs (BMI/ASCAP/SESAC), SoundExchange, and other collection societies.",
    required: true,
    signed: false,
  },
  {
    name: "Non-Disclosure Agreement",
    description: "Protects confidential business information shared between both parties during the course of our working relationship.",
    required: false,
    signed: false,
  },
  {
    name: "Terms of Service & Privacy Policy",
    description: "Standard platform terms governing your use of the RAYPUB client portal and how we handle your data.",
    required: true,
    signed: false,
  },
];

export default function ContractsPage() {
  const [contracts, setContracts] = useState(initialContracts);
  const [signing, setSigning] = useState<number | null>(null);
  const [sigName, setSigName] = useState("");
  const [agreed, setAgreed] = useState(false);

  const signed = contracts.filter((c) => c.signed).length;

  const handleSign = () => {
    if (signing === null || !sigName.trim() || !agreed) return;
    setContracts((prev) => {
      const updated = [...prev];
      updated[signing] = { ...updated[signing], signed: true };
      return updated;
    });
    setSigning(null);
    setSigName("");
    setAgreed(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Contracts & Agreements</h2>
        <p className="text-sm text-muted mt-1">
          Review and sign required documents to activate your services
        </p>
      </div>

      {/* Progress */}
      <div className="bg-surface border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium">Signing Progress</p>
          <p className="text-sm text-muted">{signed} / {contracts.length} signed</p>
        </div>
        <div className="w-full h-2 bg-surface-light rounded-full overflow-hidden">
          <div className="h-full bg-gold rounded-full transition-all duration-500" style={{ width: `${(signed / contracts.length) * 100}%` }} />
        </div>
      </div>

      {/* Contracts list */}
      <div className="space-y-4">
        {contracts.map((c, i) => (
          <div key={c.name} className="bg-surface border border-border rounded-xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="mt-0.5">
                  {c.signed ? (
                    <CheckCircle2 size={20} className="text-green-500" />
                  ) : (
                    <AlertCircle size={20} className="text-amber-500" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{c.name}</h3>
                    {c.required && (
                      <span className="text-[10px] bg-red-500/10 text-red-400 px-2 py-0.5 rounded-full font-medium">REQUIRED</span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted leading-relaxed">{c.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:shrink-0">
                <button className="flex items-center gap-1.5 text-xs border border-border hover:border-gold/50 px-3 py-2 rounded-md transition-colors">
                  <Eye size={14} />Preview
                </button>
                <button className="flex items-center gap-1.5 text-xs border border-border hover:border-gold/50 px-3 py-2 rounded-md transition-colors">
                  <Download size={14} />PDF
                </button>
                {!c.signed && (
                  <button
                    onClick={() => setSigning(i)}
                    className="flex items-center gap-1.5 text-xs bg-gold hover:bg-gold-light text-black font-semibold px-4 py-2 rounded-md transition-colors"
                  >
                    <FileText size={14} />Sign
                  </button>
                )}
                {c.signed && (
                  <span className="text-xs bg-green-500/10 text-green-400 px-3 py-2 rounded-md font-medium">Signed</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sign Modal */}
      <Modal
        open={signing !== null}
        onClose={() => { setSigning(null); setSigName(""); setAgreed(false); }}
        title={signing !== null ? `Sign: ${contracts[signing].name}` : ""}
      >
        {signing !== null && (
          <div className="space-y-5">
            <div className="bg-surface-light border border-border rounded-lg p-4 text-sm text-muted leading-relaxed max-h-48 overflow-auto">
              <p className="font-medium text-foreground mb-2">Agreement Summary</p>
              <p>{contracts[signing].description}</p>
              <p className="mt-3">By signing this agreement, you authorize RAYPUB to perform the services described above on your behalf. This agreement is effective upon signing and remains in effect per the terms outlined in the full document.</p>
              <p className="mt-3">You retain full ownership of your intellectual property. RAYPUB acts solely as an administrator and does not claim ownership of your music, masters, or compositions.</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Full Legal Name</label>
              <input
                value={sigName}
                onChange={(e) => setSigName(e.target.value)}
                className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold"
                placeholder="Type your full legal name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Date</label>
              <input
                type="text"
                value={new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                disabled
                className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm text-muted"
              />
            </div>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 rounded border-border accent-gold"
              />
              <span className="text-sm text-muted">
                I have read and agree to the terms of this agreement. I understand that my typed name above constitutes a legally binding electronic signature.
              </span>
            </label>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => { setSigning(null); setSigName(""); setAgreed(false); }}
                className="flex-1 border border-border text-foreground font-medium py-2.5 rounded-md text-sm hover:bg-surface-light transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSign}
                disabled={!sigName.trim() || !agreed}
                className="flex-1 bg-gold hover:bg-gold-light text-black font-semibold py-2.5 rounded-md text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Sign Agreement
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
