import { Search, Send } from "lucide-react";

const conversations = [
  { name: "Marcus Johnson", artist: "M.J. Beats", lastMsg: "When will my BMI registration be complete?", time: "2h ago", unread: true },
  { name: "Tyler Reed", artist: "T.Reed Productions", lastMsg: "I just signed up, what are the next steps?", time: "5h ago", unread: true },
  { name: "Devon Carter", artist: "DCarter Music", lastMsg: "Can you send me the contract to review?", time: "1d ago", unread: false },
  { name: "Sarah Williams", artist: "S.Will", lastMsg: "Thanks for the quarterly report!", time: "2d ago", unread: false },
  { name: "Ashley Thompson", artist: "Ash T", lastMsg: "I need to update my banking info", time: "3d ago", unread: false },
  { name: "Nina Patel", artist: "NINA", lastMsg: "How long does SongTrust registration take?", time: "4d ago", unread: false },
];

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold">Messages</h2>
        <p className="text-sm text-muted mt-1">Client communications</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
        {/* Conversation list */}
        <div className="bg-surface border border-border rounded-xl flex flex-col overflow-hidden">
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full bg-surface-light border border-border rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-gold"
              />
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            {conversations.map((c, i) => (
              <div
                key={c.name}
                className={`flex items-start gap-3 px-4 py-4 border-b border-border cursor-pointer hover:bg-surface-light transition-colors ${
                  i === 0 ? "bg-surface-light" : ""
                }`}
              >
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xs font-bold shrink-0">
                  {c.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium truncate">{c.name}</p>
                    <span className="text-[10px] text-muted shrink-0 ml-2">{c.time}</span>
                  </div>
                  <p className="text-xs text-muted truncate mt-0.5">{c.lastMsg}</p>
                </div>
                {c.unread && (
                  <div className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="lg:col-span-2 bg-surface border border-border rounded-xl flex flex-col overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xs font-bold">
              MJ
            </div>
            <div>
              <p className="text-sm font-medium">Marcus Johnson</p>
              <p className="text-xs text-muted">M.J. Beats &middot; Publishing Admin</p>
            </div>
          </div>

          <div className="flex-1 p-6 space-y-4 overflow-auto">
            <div className="flex justify-start">
              <div className="bg-surface-light rounded-xl rounded-tl-sm px-4 py-3 max-w-md">
                <p className="text-sm">Hey, I wanted to check on the status of my BMI registration. It&apos;s been about 2 weeks now.</p>
                <p className="text-[10px] text-muted mt-1">10:32 AM</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-gold/10 rounded-xl rounded-tr-sm px-4 py-3 max-w-md">
                <p className="text-sm">Hi Marcus! Your BMI application has been submitted and is currently being processed. Typically takes 2-4 weeks. I&apos;ll update your dashboard as soon as we get confirmation.</p>
                <p className="text-[10px] text-muted mt-1">11:15 AM</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-surface-light rounded-xl rounded-tl-sm px-4 py-3 max-w-md">
                <p className="text-sm">When will my BMI registration be complete?</p>
                <p className="text-[10px] text-muted mt-1">2:45 PM</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 border-t border-border">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
              />
              <button className="bg-gold hover:bg-gold-light text-black p-2.5 rounded-md transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
