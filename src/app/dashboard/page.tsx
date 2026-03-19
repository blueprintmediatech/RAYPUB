import {
  DollarSign,
  Music,
  FileCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const stats = [
  { label: "Total Royalties", value: "$0.00", icon: DollarSign, change: "Pending first collection" },
  { label: "Songs Registered", value: "0", icon: Music, change: "Add songs to your catalog" },
  { label: "Contracts Signed", value: "0 / 3", icon: FileCheck, change: "Action required" },
  { label: "Account Status", value: "Setup", icon: Clock, change: "In progress" },
];

const registrations = [
  { name: "BMI Registration", status: "pending", detail: "Awaiting submission" },
  { name: "SoundExchange", status: "pending", detail: "Awaiting submission" },
  { name: "SongTrust", status: "pending", detail: "Awaiting submission" },
  { name: "UnitedMasters", status: "pending", detail: "Awaiting submission" },
  { name: "LLC Formation", status: "pending", detail: "Awaiting info" },
  { name: "EIN Registration", status: "pending", detail: "If applicable" },
];

const statusIcon = {
  complete: <CheckCircle2 size={16} className="text-green-500" />,
  in_progress: <Loader2 size={16} className="text-gold animate-spin" />,
  pending: <AlertCircle size={16} className="text-muted" />,
};

const contracts = [
  { name: "Publishing Administration Agreement", signed: false },
  { name: "Distribution Agreement", signed: false },
  { name: "Letter of Direction", signed: false },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-gold/10 to-transparent border border-gold/20 rounded-xl p-6">
        <h2 className="text-xl font-bold">Welcome to RAYPUB</h2>
        <p className="mt-1 text-sm text-muted">
          Your account is being set up. Complete the steps below to get started.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-surface border border-border rounded-xl p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted">{s.label}</p>
              <s.icon size={18} className="text-gold" />
            </div>
            <p className="text-2xl font-bold mt-2">{s.value}</p>
            <p className="text-xs text-muted mt-1">{s.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Registration Progress */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold mb-4">Registration Progress</h3>
          <div className="space-y-3">
            {registrations.map((r) => (
              <div
                key={r.name}
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-3">
                  {statusIcon[r.status as keyof typeof statusIcon]}
                  <span className="text-sm">{r.name}</span>
                </div>
                <span className="text-xs text-muted">{r.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contracts */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold mb-4">Contracts & Agreements</h3>
          <div className="space-y-3">
            {contracts.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-3">
                  {c.signed ? (
                    <CheckCircle2 size={16} className="text-green-500" />
                  ) : (
                    <AlertCircle size={16} className="text-amber-500" />
                  )}
                  <span className="text-sm">{c.name}</span>
                </div>
                <button
                  className={`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
                    c.signed
                      ? "bg-green-500/10 text-green-500"
                      : "bg-gold/10 text-gold hover:bg-gold/20"
                  }`}
                >
                  {c.signed ? "Signed" : "Review & Sign"}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-amber-500/5 border border-amber-500/20 rounded-lg">
            <p className="text-xs text-amber-400">
              You must sign all required contracts before we can begin
              registration and administration services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
