import { DollarSign, TrendingUp, Calendar, ArrowUpRight } from "lucide-react";

export default function RoyaltiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Royalties & Revenue</h2>
        <p className="text-sm text-muted mt-1">
          Track your earnings across all revenue streams
        </p>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-surface border border-border rounded-xl p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">Total Earnings</p>
            <DollarSign size={18} className="text-gold" />
          </div>
          <p className="text-3xl font-bold mt-2">$0.00</p>
          <p className="text-xs text-muted mt-1">Lifetime</p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">This Quarter</p>
            <TrendingUp size={18} className="text-gold" />
          </div>
          <p className="text-3xl font-bold mt-2">$0.00</p>
          <p className="text-xs text-muted mt-1">Q1 2026</p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">Next Payout</p>
            <Calendar size={18} className="text-gold" />
          </div>
          <p className="text-3xl font-bold mt-2">—</p>
          <p className="text-xs text-muted mt-1">Pending setup</p>
        </div>
      </div>

      {/* Revenue Breakdown */}
      <div className="bg-surface border border-border rounded-xl p-6">
        <h3 className="text-base font-semibold mb-6">Revenue Breakdown</h3>
        <div className="space-y-4">
          {[
            { source: "Performance Royalties (BMI)", amount: "$0.00" },
            { source: "Digital Performance (SoundExchange)", amount: "$0.00" },
            { source: "Mechanical Royalties (SongTrust)", amount: "$0.00" },
            { source: "Distribution (UnitedMasters)", amount: "$0.00" },
            { source: "Sync Licensing", amount: "$0.00" },
          ].map((r) => (
            <div
              key={r.source}
              className="flex items-center justify-between py-3 border-b border-border last:border-0"
            >
              <div className="flex items-center gap-3">
                <ArrowUpRight size={16} className="text-muted" />
                <span className="text-sm">{r.source}</span>
              </div>
              <span className="text-sm font-medium">{r.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Payout History */}
      <div className="bg-surface border border-border rounded-xl p-6">
        <h3 className="text-base font-semibold mb-4">Payout History</h3>
        <div className="text-center py-12">
          <DollarSign size={32} className="text-muted mx-auto" />
          <p className="mt-3 text-sm text-muted">
            No payouts yet. Royalties are distributed quarterly once your
            registrations are active and collections begin.
          </p>
        </div>
      </div>
    </div>
  );
}
