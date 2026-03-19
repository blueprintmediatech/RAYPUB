import { FileText, CheckCircle2, AlertCircle, Download, Eye } from "lucide-react";

const contracts = [
  {
    name: "Publishing Administration Agreement",
    description:
      "Grants RAYPUB the right to administer, collect, and distribute publishing royalties on your behalf. Covers worldwide territory with standard industry commission rates.",
    status: "pending",
    required: true,
  },
  {
    name: "Distribution Agreement",
    description:
      "Authorizes RAYPUB to distribute your music across all digital platforms through our distribution partners. Covers revenue splits and termination clauses.",
    status: "pending",
    required: true,
  },
  {
    name: "Master Recording License",
    description:
      "Grants RAYPUB a non-exclusive license to your master recordings for distribution and licensing purposes. You retain full ownership.",
    status: "pending",
    required: true,
  },
  {
    name: "Letter of Direction",
    description:
      "Authorizes RAYPUB to act on your behalf with PROs (BMI/ASCAP/SESAC), SoundExchange, and other collection societies.",
    status: "pending",
    required: true,
  },
  {
    name: "Non-Disclosure Agreement",
    description:
      "Protects confidential business information shared between both parties during the course of our working relationship.",
    status: "pending",
    required: false,
  },
  {
    name: "Terms of Service & Privacy Policy",
    description:
      "Standard platform terms governing your use of the RAYPUB client portal and how we handle your data.",
    status: "pending",
    required: true,
  },
];

export default function ContractsPage() {
  const signed = contracts.filter((c) => c.status === "signed").length;

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
          <p className="text-sm text-muted">
            {signed} / {contracts.length} signed
          </p>
        </div>
        <div className="w-full h-2 bg-surface-light rounded-full overflow-hidden">
          <div
            className="h-full bg-gold rounded-full transition-all"
            style={{
              width: `${(signed / contracts.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Contracts list */}
      <div className="space-y-4">
        {contracts.map((c) => (
          <div
            key={c.name}
            className="bg-surface border border-border rounded-xl p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="mt-0.5">
                  {c.status === "signed" ? (
                    <CheckCircle2 size={20} className="text-green-500" />
                  ) : (
                    <AlertCircle size={20} className="text-amber-500" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{c.name}</h3>
                    {c.required && (
                      <span className="text-[10px] bg-red-500/10 text-red-400 px-2 py-0.5 rounded-full font-medium">
                        REQUIRED
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:shrink-0">
                <button className="flex items-center gap-1.5 text-xs border border-border hover:border-gold/50 px-3 py-2 rounded-md transition-colors">
                  <Eye size={14} />
                  Preview
                </button>
                <button className="flex items-center gap-1.5 text-xs border border-border hover:border-gold/50 px-3 py-2 rounded-md transition-colors">
                  <Download size={14} />
                  PDF
                </button>
                {c.status !== "signed" && (
                  <button className="flex items-center gap-1.5 text-xs bg-gold hover:bg-gold-light text-black font-semibold px-4 py-2 rounded-md transition-colors">
                    <FileText size={14} />
                    Sign
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
