"use client";

import { useState } from "react";
import { Plus, CheckCircle2, Circle, Clock } from "lucide-react";
import Modal from "@/components/Modal";

type Task = {
  task: string;
  client: string;
  priority: string;
  status: string;
  due: string;
};

const initialTasks: Task[] = [
  { task: "BMI Registration", client: "Marcus Johnson", priority: "high", status: "in_progress", due: "Mar 19, 2026" },
  { task: "SoundExchange Setup", client: "Devon Carter", priority: "high", status: "todo", due: "Mar 19, 2026" },
  { task: "Send Contracts", client: "Tyler Reed", priority: "high", status: "todo", due: "Mar 20, 2026" },
  { task: "SongTrust Registration", client: "Devon Carter", priority: "medium", status: "todo", due: "Mar 21, 2026" },
  { task: "Contract Review", client: "Tyler Reed", priority: "medium", status: "todo", due: "Mar 21, 2026" },
  { task: "UnitedMasters Setup", client: "Nina Patel", priority: "medium", status: "in_progress", due: "Mar 22, 2026" },
  { task: "Quarterly Royalty Report", client: "Sarah Williams", priority: "medium", status: "todo", due: "Mar 25, 2026" },
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
  const [tasks, setTasks] = useState(initialTasks);
  const [showAdd, setShowAdd] = useState(false);

  const toggleStatus = (index: number) => {
    setTasks((prev) => {
      const updated = [...prev];
      const t = updated[index];
      if (t.status === "todo") t.status = "in_progress";
      else if (t.status === "in_progress") t.status = "done";
      else t.status = "todo";
      return updated;
    });
  };

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const newTask: Task = {
      task: fd.get("task") as string,
      client: fd.get("client") as string,
      priority: fd.get("priority") as string,
      status: "todo",
      due: fd.get("due") as string,
    };
    setTasks([newTask, ...tasks]);
    setShowAdd(false);
  };

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
        <button
          onClick={() => setShowAdd(true)}
          className="flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold px-4 py-2.5 rounded-md text-sm transition-colors"
        >
          <Plus size={16} />
          Add Task
        </button>
      </div>

      {[
        { title: "In Progress", items: inProgress, statusKey: "in_progress" },
        { title: "To Do", items: todo, statusKey: "todo" },
        { title: "Completed", items: done, statusKey: "done" },
      ].map((section) => (
        <div key={section.title} className="bg-surface border border-border rounded-xl p-6">
          <h3 className="text-base font-semibold mb-4">
            {section.title}{" "}
            <span className="text-sm text-muted font-normal">({section.items.length})</span>
          </h3>
          <div className="space-y-2">
            {section.items.map((t) => {
              const globalIdx = tasks.indexOf(t);
              const badge = priorityBadge[t.priority];
              return (
                <div
                  key={`${t.task}-${t.client}-${globalIdx}`}
                  className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-surface-light transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <button onClick={() => toggleStatus(globalIdx)} className="hover:scale-110 transition-transform">
                      {statusIcon[t.status]}
                    </button>
                    <div>
                      <p className={`text-sm font-medium ${t.status === "done" ? "line-through text-muted" : ""}`}>{t.task}</p>
                      <p className="text-xs text-muted">{t.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${badge.bg} ${badge.text}`}>{t.priority}</span>
                    <span className="text-xs text-muted">{t.due}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Add Task Modal */}
      <Modal open={showAdd} onClose={() => setShowAdd(false)} title="Add New Task">
        <form onSubmit={handleAdd} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">Task Name</label>
            <input name="task" required className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" placeholder="e.g. BMI Registration" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Client</label>
            <input name="client" required className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" placeholder="Client name" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Priority</label>
              <select name="priority" required className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Due Date</label>
              <input name="due" type="date" required className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" />
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setShowAdd(false)} className="flex-1 border border-border text-foreground font-medium py-2.5 rounded-md text-sm hover:bg-surface-light transition-colors">Cancel</button>
            <button type="submit" className="flex-1 bg-gold hover:bg-gold-light text-black font-semibold py-2.5 rounded-md text-sm transition-colors">Add Task</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
