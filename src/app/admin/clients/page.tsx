"use client";

import { useState } from "react";
import { Search, Plus, MoreVertical, Mail, Phone } from "lucide-react";
import Modal from "@/components/Modal";

const initialClients = [
  { name: "Marcus Johnson", artist: "M.J. Beats", email: "marcus@mjbeats.com", phone: "(310) 555-0101", package: "Publishing Admin", status: "active", joined: "Jan 15, 2026", revenue: "$2,400", registrations: "4/6" },
  { name: "Sarah Williams", artist: "S.Will", email: "sarah@swill.com", phone: "(213) 555-0202", package: "Full Label", status: "active", joined: "Dec 3, 2025", revenue: "$4,100", registrations: "6/6" },
  { name: "Devon Carter", artist: "DCarter Music", email: "devon@dcarter.com", phone: "(323) 555-0303", package: "Registration", status: "setup", joined: "Mar 10, 2026", revenue: "$1,000", registrations: "1/6" },
  { name: "Ashley Thompson", artist: "Ash T", email: "ashley@asht.com", phone: "(424) 555-0404", package: "Publishing Admin", status: "active", joined: "Feb 1, 2026", revenue: "$1,800", registrations: "6/6" },
  { name: "Tyler Reed", artist: "T.Reed Productions", email: "tyler@treedprod.com", phone: "(818) 555-0505", package: "Registration", status: "pending", joined: "Mar 17, 2026", revenue: "$1,000", registrations: "0/6" },
  { name: "Jasmine Moore", artist: "Jas M", email: "jas@jasm.com", phone: "(310) 555-0606", package: "Full Label", status: "active", joined: "Nov 20, 2025", revenue: "$3,800", registrations: "6/6" },
  { name: "Chris Davis", artist: "C.Davis", email: "chris@cdavis.com", phone: "(213) 555-0707", package: "Publishing Admin", status: "active", joined: "Jan 28, 2026", revenue: "$2,000", registrations: "5/6" },
  { name: "Nina Patel", artist: "NINA", email: "nina@ninamusic.com", phone: "(323) 555-0808", package: "Registration", status: "setup", joined: "Mar 5, 2026", revenue: "$1,000", registrations: "2/6" },
];

const statusBadge: Record<string, { bg: string; text: string }> = {
  active: { bg: "bg-green-500/10", text: "text-green-400" },
  setup: { bg: "bg-amber-500/10", text: "text-amber-400" },
  pending: { bg: "bg-blue-500/10", text: "text-blue-400" },
};

export default function ClientsPage() {
  const [clients, setClients] = useState(initialClients);
  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState("");
  const [filterPkg, setFilterPkg] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const filtered = clients.filter((c) => {
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.artist.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
    const matchPkg = !filterPkg || c.package === filterPkg;
    const matchStatus = !filterStatus || c.status === filterStatus;
    return matchSearch && matchPkg && matchStatus;
  });

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const now = new Date();
    const joined = now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    const pkg = fd.get("package") as string;
    const newClient = {
      name: `${fd.get("firstName")} ${fd.get("lastName")}`,
      artist: fd.get("artist") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      package: pkg,
      status: "pending",
      joined,
      revenue: pkg === "Publishing Admin" ? "$1,100" : "$1,000",
      registrations: "0/6",
    };
    setClients([newClient, ...clients]);
    setShowAdd(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">Clients</h2>
          <p className="text-sm text-muted mt-1">{filtered.length} total clients</p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold px-4 py-2.5 rounded-md text-sm transition-colors"
        >
          <Plus size={16} />
          Add Client
        </button>
      </div>

      <div className="flex gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search clients..."
            className="w-full bg-surface border border-border rounded-md pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <select
          value={filterPkg}
          onChange={(e) => setFilterPkg(e.target.value)}
          className="bg-surface border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
        >
          <option value="">All Packages</option>
          <option value="Registration">Registration</option>
          <option value="Publishing Admin">Publishing Admin</option>
          <option value="Full Label">Full Label</option>
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="bg-surface border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="setup">Setup</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Package</th>
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Registrations</th>
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Joined</th>
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => {
                const badge = statusBadge[c.status] || statusBadge.pending;
                return (
                  <tr key={c.email} className="border-b border-border last:border-0 hover:bg-surface-light transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xs font-bold shrink-0">
                          {c.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <p className="font-medium">{c.name}</p>
                          <p className="text-xs text-muted">{c.artist}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted">{c.package}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${badge.bg} ${badge.text}`}>{c.status}</span>
                    </td>
                    <td className="px-6 py-4 text-muted">{c.registrations}</td>
                    <td className="px-6 py-4 font-medium">{c.revenue}</td>
                    <td className="px-6 py-4 text-muted">{c.joined}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded hover:bg-surface-light text-muted hover:text-gold transition-colors"><Mail size={14} /></button>
                        <button className="p-1.5 rounded hover:bg-surface-light text-muted hover:text-gold transition-colors"><Phone size={14} /></button>
                        <button className="p-1.5 rounded hover:bg-surface-light text-muted hover:text-gold transition-colors"><MoreVertical size={14} /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Client Modal */}
      <Modal open={showAdd} onClose={() => setShowAdd(false)} title="Add New Client">
        <form onSubmit={handleAdd} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">First Name</label>
              <input name="firstName" required className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Last Name</label>
              <input name="lastName" required className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Artist / Label Name</label>
            <input name="artist" required className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <input name="email" type="email" required className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Phone</label>
            <input name="phone" type="tel" className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Package</label>
            <select name="package" required className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold">
              <option value="Registration">Registration — $1,000</option>
              <option value="Publishing Admin">Publishing Admin — $1,000 + $100/mo</option>
              <option value="Full Label">Full Label Services — $1,000</option>
            </select>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setShowAdd(false)} className="flex-1 border border-border text-foreground font-medium py-2.5 rounded-md text-sm hover:bg-surface-light transition-colors">
              Cancel
            </button>
            <button type="submit" className="flex-1 bg-gold hover:bg-gold-light text-black font-semibold py-2.5 rounded-md text-sm transition-colors">
              Add Client
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
