import { DollarSign, TrendingUp, Users, ArrowUpRight, ArrowDownRight } from "lucide-react";

const monthlyRevenue = [
  { month: "Oct 2025", amount: "$3,000", clients: 3 },
  { month: "Nov 2025", amount: "$4,800", clients: 4 },
  { month: "Dec 2025", amount: "$7,200", clients: 6 },
  { month: "Jan 2026", amount: "$9,400", clients: 8 },
  { month: "Feb 2026", amount: "$10,000", clients: 10 },
  { month: "Mar 2026", amount: "$14,200", clients: 12 },
];

const clientRevenue = [
  { name: "Sarah Williams", package: "Full Label Services", setup: "$1,500", monthly: "$0", total: "$4,100" },
  { name: "Jasmine Moore", package: "Full Label Services", setup: "$1,500", monthly: "$0", total: "$3,800" },
  { name: "Marcus Johnson", package: "Artist Admin", setup: "$1,500", monthly: "$400", total: "$2,400" },
  { name: "Chris Davis", package: "Artist Admin", setup: "$1,500", monthly: "$200", total: "$2,000" },
  { name: "Ashley Thompson", package: "Artist Admin", setup: "$1,500", monthly: "$200", total: "$1,800" },
  { name: "Devon Carter", package: "Registration", setup: "$1,500", monthly: "$0", total: "$1,000" },
  { name: "Tyler Reed", package: "Registration", setup: "$1,500", monthly: "$0", total: "$1,000" },
  { name: "Nina Patel", package: "Registration", setup: "$1,500", monthly: "$0", total: "$1,000" },
];

export default function RevenuePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Revenue</h2>
        <p className="text-sm text-muted mt-1">Financial overview and tracking</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-surface border border-border rounded-xl p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">Total Revenue</p>
            <DollarSign size={18} className="text-green-400" />
          </div>
          <p className="text-3xl font-bold mt-2">$48,600</p>
          <p className="text-xs text-green-400 mt-1 flex items-center gap-1">
            <ArrowUpRight size={12} /> +42% vs last quarter
          </p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">Monthly Recurring</p>
            <TrendingUp size={18} className="text-blue-400" />
          </div>
          <p className="text-3xl font-bold mt-2">$800</p>
          <p className="text-xs text-muted mt-1">5 publishing admin clients</p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">Avg Revenue / Client</p>
            <Users size={18} className="text-purple-400" />
          </div>
          <p className="text-3xl font-bold mt-2">$4,050</p>
          <p className="text-xs text-muted mt-1">Across 12 clients</p>
        </div>
      </div>

      {/* Monthly Trend */}
      <div className="bg-surface border border-border rounded-xl p-6">
        <h3 className="text-base font-semibold mb-4">Monthly Revenue</h3>
        <div className="space-y-3">
          {monthlyRevenue.map((m) => {
            const amount = parseInt(m.amount.replace(/[$,]/g, ""));
            const maxAmount = 15000;
            const pct = (amount / maxAmount) * 100;
            return (
              <div key={m.month} className="flex items-center gap-4">
                <span className="text-sm text-muted w-20 shrink-0">{m.month}</span>
                <div className="flex-1 h-6 bg-surface-light rounded overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gold-dark to-gold rounded flex items-center justify-end px-2"
                    style={{ width: `${pct}%` }}
                  >
                    <span className="text-[10px] font-bold text-black">{m.amount}</span>
                  </div>
                </div>
                <span className="text-xs text-muted w-16 text-right">{m.clients} clients</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Per-Client Revenue */}
      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="text-base font-semibold">Revenue by Client</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Package</th>
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Setup Fee</th>
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Monthly</th>
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody>
              {clientRevenue.map((c) => (
                <tr key={c.name} className="border-b border-border last:border-0 hover:bg-surface-light transition-colors">
                  <td className="px-6 py-4 font-medium">{c.name}</td>
                  <td className="px-6 py-4 text-muted">{c.package}</td>
                  <td className="px-6 py-4 text-muted">{c.setup}</td>
                  <td className="px-6 py-4 text-muted">{c.monthly}</td>
                  <td className="px-6 py-4 font-medium text-gold">{c.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
