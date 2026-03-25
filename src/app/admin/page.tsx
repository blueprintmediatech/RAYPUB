import {
  Users,
  DollarSign,
  FileCheck,
  ClipboardList,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Clock,
} from "lucide-react";

const stats = [
  { label: "Total Clients", value: "12", icon: Users, change: "+3 this month", color: "text-blue-400" },
  { label: "Revenue (MTD)", value: "$14,200", icon: DollarSign, change: "+$4,200 vs last month", color: "text-green-400" },
  { label: "Contracts Pending", value: "7", icon: FileCheck, change: "Action required", color: "text-amber-400" },
  { label: "Open Tasks", value: "23", icon: ClipboardList, change: "5 due today", color: "text-purple-400" },
];

const recentClients = [
  { name: "Marcus Johnson", artist: "M.J. Beats", package: "Artist Admin", status: "active", revenue: "$2,400" },
  { name: "Sarah Williams", artist: "S.Will", package: "Full Label", status: "active", revenue: "$4,100" },
  { name: "Devon Carter", artist: "DCarter Music", package: "Career Setup", status: "setup", revenue: "$1,000" },
  { name: "Ashley Thompson", artist: "Ash T", package: "Artist Admin", status: "active", revenue: "$1,800" },
  { name: "Tyler Reed", artist: "T.Reed Productions", package: "Career Setup", status: "pending", revenue: "$1,000" },
];

const recentTasks = [
  { task: "BMI Registration - Marcus Johnson", priority: "high", due: "Today" },
  { task: "SoundExchange Setup - Devon Carter", priority: "high", due: "Today" },
  { task: "Contract Review - Tyler Reed", priority: "medium", due: "Mar 21" },
  { task: "Quarterly Report - Sarah Williams", priority: "medium", due: "Mar 25" },
  { task: "LLC Filing - Devon Carter", priority: "low", due: "Mar 28" },
];

const statusBadge = {
  active: { bg: "bg-green-500/10", text: "text-green-400" },
  setup: { bg: "bg-amber-500/10", text: "text-amber-400" },
  pending: { bg: "bg-blue-500/10", text: "text-blue-400" },
};

const priorityBadge = {
  high: { bg: "bg-red-500/10", text: "text-red-400" },
  medium: { bg: "bg-amber-500/10", text: "text-amber-400" },
  low: { bg: "bg-blue-500/10", text: "text-blue-400" },
};

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-surface border border-border rounded-xl p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted">{s.label}</p>
              <s.icon size={18} className={s.color} />
            </div>
            <p className="text-3xl font-bold mt-2">{s.value}</p>
            <p className="text-xs text-muted mt-1 flex items-center gap-1">
              <TrendingUp size={12} className="text-green-400" />
              {s.change}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Clients */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold">Recent Clients</h3>
            <a href="/admin/clients" className="text-xs text-gold hover:text-gold-light transition-colors">
              View All
            </a>
          </div>
          <div className="space-y-3">
            {recentClients.map((c) => {
              const badge = statusBadge[c.status as keyof typeof statusBadge];
              return (
                <div
                  key={c.name}
                  className="flex items-center justify-between py-2.5 border-b border-border last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xs font-bold">
                      {c.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{c.name}</p>
                      <p className="text-xs text-muted">{c.artist} &middot; {c.package}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{c.revenue}</p>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${badge.bg} ${badge.text}`}>
                      {c.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tasks */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold">Upcoming Tasks</h3>
            <a href="/admin/tasks" className="text-xs text-gold hover:text-gold-light transition-colors">
              View All
            </a>
          </div>
          <div className="space-y-3">
            {recentTasks.map((t) => {
              const badge = priorityBadge[t.priority as keyof typeof priorityBadge];
              return (
                <div
                  key={t.task}
                  className="flex items-center justify-between py-2.5 border-b border-border last:border-0"
                >
                  <div className="flex items-center gap-3">
                    {t.priority === "high" ? (
                      <AlertCircle size={16} className="text-red-400 shrink-0" />
                    ) : (
                      <Clock size={16} className="text-muted shrink-0" />
                    )}
                    <span className="text-sm">{t.task}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${badge.bg} ${badge.text}`}>
                      {t.priority}
                    </span>
                    <span className="text-xs text-muted">{t.due}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Revenue Overview */}
      <div className="bg-surface border border-border rounded-xl p-6">
        <h3 className="text-base font-semibold mb-4">Revenue by Package</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { pkg: "Career Setup", clients: 4, revenue: "$4,000", pct: 28 },
            { pkg: "Artist Admin", clients: 5, revenue: "$6,200", pct: 44 },
            { pkg: "Full Label", clients: 3, revenue: "$4,000", pct: 28 },
          ].map((r) => (
            <div key={r.pkg} className="bg-surface-light rounded-lg p-4">
              <p className="text-sm font-medium">{r.pkg}</p>
              <p className="text-2xl font-bold mt-1">{r.revenue}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-muted">
                <span>{r.clients} clients</span>
                <span>{r.pct}% of total</span>
              </div>
              <div className="mt-2 w-full h-1.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold rounded-full"
                  style={{ width: `${r.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
