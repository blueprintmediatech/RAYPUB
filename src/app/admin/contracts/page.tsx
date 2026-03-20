import { FileText, CheckCircle2, AlertCircle, Send, Eye } from "lucide-react";

const contracts = [
  { client: "Marcus Johnson", contract: "Publishing Administration Agreement", status: "signed", date: "Jan 18, 2026" },
  { client: "Marcus Johnson", contract: "Distribution Agreement", status: "signed", date: "Jan 18, 2026" },
  { client: "Marcus Johnson", contract: "Letter of Direction", status: "pending", date: "—" },
  { client: "Sarah Williams", contract: "Publishing Administration Agreement", status: "signed", date: "Dec 5, 2025" },
  { client: "Sarah Williams", contract: "Distribution Agreement", status: "signed", date: "Dec 5, 2025" },
  { client: "Sarah Williams", contract: "Master Recording License", status: "signed", date: "Dec 6, 2025" },
  { client: "Devon Carter", contract: "Publishing Administration Agreement", status: "sent", date: "—" },
  { client: "Devon Carter", contract: "Distribution Agreement", status: "sent", date: "—" },
  { client: "Tyler Reed", contract: "Publishing Administration Agreement", status: "draft", date: "—" },
  { client: "Tyler Reed", contract: "Distribution Agreement", status: "draft", date: "—" },
  { client: "Ashley Thompson", contract: "Publishing Administration Agreement", status: "signed", date: "Feb 3, 2026" },
  { client: "Ashley Thompson", contract: "Letter of Direction", status: "pending", date: "—" },
];

const statusConfig: Record<string, { bg: string; text: string; label: string }> = {
  signed: { bg: "bg-green-500/10", text: "text-green-400", label: "Signed" },
  pending: { bg: "bg-amber-500/10", text: "text-amber-400", label: "Pending" },
  sent: { bg: "bg-blue-500/10", text: "text-blue-400", label: "Sent" },
  draft: { bg: "bg-zinc-500/10", text: "text-zinc-400", label: "Draft" },
};

export default function AdminContractsPage() {
  const signed = contracts.filter((c) => c.status === "signed").length;
  const pending = contracts.filter((c) => c.status !== "signed").length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Contracts Management</h2>
        <p className="text-sm text-muted mt-1">
          {signed} signed &middot; {pending} pending action
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {Object.entries(statusConfig).map(([key, cfg]) => {
          const count = contracts.filter((c) => c.status === key).length;
          return (
            <div key={key} className="bg-surface border border-border rounded-xl p-4">
              <p className="text-sm text-muted capitalize">{cfg.label}</p>
              <p className="text-2xl font-bold mt-1">{count}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Contract</th>
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Signed Date</th>
                <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((c, i) => {
                const cfg = statusConfig[c.status];
                return (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-surface-light transition-colors">
                    <td className="px-6 py-4 font-medium">{c.client}</td>
                    <td className="px-6 py-4 text-muted">{c.contract}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${cfg.bg} ${cfg.text}`}>
                        {cfg.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted">{c.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded hover:bg-surface-light text-muted hover:text-gold transition-colors" title="Preview">
                          <Eye size={14} />
                        </button>
                        {c.status === "draft" && (
                          <button className="p-1.5 rounded hover:bg-surface-light text-muted hover:text-gold transition-colors" title="Send to client">
                            <Send size={14} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
