import { Plus, CheckCircle2, Circle, AlertCircle, Clock } from "lucide-react";

const tasks = [
  { task: "BMI Registration", client: "Marcus Johnson", priority: "high", status: "in_progress", due: "Mar 19, 2026" },
  { task: "SoundExchange Setup", client: "Devon Carter", priority: "high", status: "todo", due: "Mar 19, 2026" },
  { task: "Send Contracts", client: "Tyler Reed", priority: "high", status: "todo", due: "Mar 20, 2026" },
  { task: "SongTrust Registration", client: "Devon Carter", priority: "medium", status: "todo", due: "Mar 21, 2026" },
  { task: "Contract Review", client: "Tyler Reed", priority: "medium", status: "todo", due: "Mar 21, 2026" },
  { task: "UnitedMasters Setup", client: "Nina Patel", priority: "medium", status: "in_progress", due: "Mar 22, 2026" },
  { task: "Quarterly Royalty Report", client: "Sarah Williams", priority: "medium", status: "todo", due: "Mar 25, 2026" },
  { task: "Quarterly Royalty Report", client: "Marcus Johnson", priority: "medium", status: "todo", due: "Mar 25, 2026" },
  { task: "LLC Filing", client: "Devon Carter", priority: "low", status: "todo", due: "Mar 28, 2026" },
  { task: "EIN Application", client: "Devon Carter", priority: "low", status: "todo", due: "Mar 28, 2026" },
  { task: "BMI Registration", client: "Sarah Williams", priority: "high", status: "done", due: "Dec 15, 2025" },
  { task: "SoundExchange Setup", client: "Sarah Williams", priority: "high", status: "done", due: "Dec 18, 2025" },
  { task: "LLC Filing", client: "Sarah Williams", priority: "medium", status: "done", due: "Jan 5, 2026" },
];

const priorityBadge: Record<string, { bg: string; text: string }> = {
  high: { bg: "bg-red-500/10", text: "text-red-400" },
  medium: { bg: "bg-amber-500/10", text: "text-amber-400" },
  low: { bg: "bg-blue-500/10", text: "text-blue-400" },
};

const statusIcon: Record<string, React.ReactNode> = {
  todo: <Circle size={16} className="text-muted" />,
  in_progress: <Clock size={16} className="text-amber-400" />,
  done: <CheckCircle2 size={16} className="text-green-400" />,
};

export default function TasksPage() {
  const todo = tasks.filter((t) => t.status === "todo");
  const inProgress = tasks.filter((t) => t.status === "in_progress");
  const done = tasks.filter((t) => t.status === "done");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">Tasks</h2>
          <p className="text-sm text-muted mt-1">
            {todo.length} to do &middot; {inProgress.length} in progress &middot; {done.length} completed
          </p>
        </div>
        <button className="flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold px-4 py-2.5 rounded-md text-sm transition-colors">
          <Plus size={16} />
          Add Task
        </button>
      </div>

      {[
        { title: "In Progress", items: inProgress },
        { title: "To Do", items: todo },
        { title: "Completed", items: done },
      ].map((section) => (
        <div key={section.title} className="bg-surface border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold mb-4">
            {section.title}{" "}
            <span className="text-sm text-muted font-normal">({section.items.length})</span>
          </h3>
          <div className="space-y-2">
            {section.items.map((t, i) => {
              const badge = priorityBadge[t.priority];
              return (
                <div
                  key={`${t.task}-${t.client}-${i}`}
                  className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-surface-light transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {statusIcon[t.status]}
                    <div>
                      <p className={`text-sm font-medium ${t.status === "done" ? "line-through text-muted" : ""}`}>
                        {t.task}
                      </p>
                      <p className="text-xs text-muted">{t.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
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
      ))}
    </div>
  );
}
