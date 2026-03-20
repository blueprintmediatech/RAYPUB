"use client";

import { useState } from "react";
import {
  Layout,
  Monitor,
  Smartphone,
  ArrowRight,
  Globe,
  Shield,
  Users,
  Music,
  FileText,
  DollarSign,
  Settings,
  MessageSquare,
  ClipboardList,
  LayoutDashboard,
  LogIn,
  UserPlus,
  ExternalLink,
} from "lucide-react";

const sections = [
  "overview",
  "sitemap",
  "public",
  "client-portal",
  "admin-panel",
  "auth-flow",
  "design-system",
] as const;

type Section = (typeof sections)[number];

const sectionLabels: Record<Section, string> = {
  overview: "Overview",
  sitemap: "Site Map",
  public: "Public Pages",
  "client-portal": "Client Portal",
  "admin-panel": "Admin Panel",
  "auth-flow": "Auth Flow",
  "design-system": "Design System",
};

const publicPages = [
  {
    name: "Landing Page",
    route: "/",
    description: "WebGL hero with fluid simulation, morphing terrain, and volumetric lighting. Five content sections with GSAP scroll animations.",
    elements: ["WebGL Canvas (7 layers)", "Navbar (glassmorphism)", "Hero + CTAs", "6 Service Cards", "3 Pricing Tiers", "8 FAQ Items", "Contact Form", "Footer"],
  },
  {
    name: "Client Login",
    route: "/login",
    description: "Client authentication portal with credential validation and session management.",
    elements: ["Email Input", "Password Input", "Remember Me", "Forgot Password", "Sign In Button", "Error Display", "Sign Up Link"],
  },
  {
    name: "Admin Login",
    route: "/admin-login",
    description: "Separate admin authentication with red-themed UI to distinguish from client portal.",
    elements: ["Shield Badge", "Admin Email Input", "Password Input", "Admin Sign In Button", "Error Display"],
  },
  {
    name: "Sign Up",
    route: "/signup",
    description: "New client registration with package selection and legal agreement checkboxes.",
    elements: ["Name Fields", "Artist/Label Name", "Email + Phone", "Password", "Package Selector", "Terms Checkbox", "Contract Notice", "Submit Button"],
  },
];

const clientPages = [
  {
    name: "Overview",
    route: "/dashboard",
    icon: LayoutDashboard,
    description: "Welcome banner, 4 stat cards, registration progress tracker, and contract status with signing prompts.",
    elements: ["Welcome Banner", "4 KPI Cards", "6 Registration Items", "3 Contract Items", "Warning Banner"],
  },
  {
    name: "Music Catalog",
    route: "/dashboard/catalog",
    icon: Music,
    description: "Song management with add modal, search, table view, and metadata info card.",
    elements: ["Add Song Button → Modal", "Search Bar", "Songs Table / Empty State", "Add Song Modal (10 fields)", "Metadata Info Card"],
  },
  {
    name: "Contracts",
    route: "/dashboard/contracts",
    icon: FileText,
    description: "6 contracts with progress bar, preview/PDF buttons, and signing modal with e-signature.",
    elements: ["Progress Bar", "6 Contract Cards", "Preview + PDF Buttons", "Sign Button → Modal", "Signature Modal (name, date, checkbox)"],
  },
  {
    name: "Royalties",
    route: "/dashboard/royalties",
    icon: DollarSign,
    description: "Revenue tracking with 5 income sources, quarterly breakdown, and payout history.",
    elements: ["3 Revenue Cards", "5 Income Sources", "Payout History"],
  },
  {
    name: "Settings",
    route: "/dashboard/settings",
    icon: Settings,
    description: "Personal info, business details, PRO registration IDs, and payment information.",
    elements: ["Personal Info Form", "Business Info Form", "PRO IDs (4 fields)", "Payment Method + Banking", "Save Button"],
  },
];

const adminPages = [
  {
    name: "Dashboard",
    route: "/admin",
    icon: LayoutDashboard,
    description: "KPIs, recent clients, upcoming tasks, and revenue breakdown by package tier.",
    elements: ["4 KPI Cards", "5 Recent Clients", "5 Upcoming Tasks", "3 Revenue Cards with Bars"],
  },
  {
    name: "Clients CRM",
    route: "/admin/clients",
    icon: Users,
    description: "Full client table with search, filters, action buttons, and add client modal.",
    elements: ["Add Client Button → Modal", "Search Bar", "Package Filter", "Status Filter", "8-Row Client Table", "Action Icons (mail, phone, menu)", "Add Client Modal (6 fields)"],
  },
  {
    name: "Contracts",
    route: "/admin/contracts",
    icon: FileText,
    description: "All client contracts tracked with status badges and management actions.",
    elements: ["4 Status Count Cards", "12-Row Contracts Table", "Preview + Send Actions"],
  },
  {
    name: "Revenue",
    route: "/admin/revenue",
    icon: DollarSign,
    description: "Total revenue, MRR, monthly trend with bar chart, and per-client breakdown table.",
    elements: ["3 Revenue Cards", "6-Month Bar Chart", "8-Row Client Revenue Table"],
  },
  {
    name: "Tasks",
    route: "/admin/tasks",
    icon: ClipboardList,
    description: "Kanban-style task management with click-to-toggle status and add task modal.",
    elements: ["Add Task Button → Modal", "In Progress Section", "To Do Section", "Completed Section", "Toggle Status Icons", "Add Task Modal (4 fields)"],
  },
  {
    name: "Messages",
    route: "/admin/messages",
    icon: MessageSquare,
    description: "Client messaging with conversation list, chat interface, and unread indicators.",
    elements: ["Search Conversations", "6 Conversation Items", "Chat Header", "Message Bubbles", "Message Input + Send"],
  },
  {
    name: "Settings",
    route: "/admin/settings",
    icon: Settings,
    description: "Platform configuration for company info, package pricing, and password management.",
    elements: ["Admin Account Card", "Company Info Form", "Package Pricing (4 fields)", "Change Password Form", "Save Button"],
  },
];

const colors = [
  { name: "Background", value: "#0a0a0a", var: "--background" },
  { name: "Foreground", value: "#f5f5f5", var: "--foreground" },
  { name: "Gold", value: "#d4a843", var: "--gold" },
  { name: "Gold Light", value: "#e8c96a", var: "--gold-light" },
  { name: "Gold Dark", value: "#b8922e", var: "--gold-dark" },
  { name: "Surface", value: "#141414", var: "--surface" },
  { name: "Surface Light", value: "#1a1a1a", var: "--surface-light" },
  { name: "Border", value: "#2a2a2a", var: "--border" },
  { name: "Muted", value: "#888888", var: "--muted" },
];

export default function DesignPage() {
  const [active, setActive] = useState<Section>("overview");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-surface sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Layout size={20} className="text-gold" />
            <h1 className="text-lg font-bold">
              RAY<span className="text-gold">PUB</span>{" "}
              <span className="text-muted font-normal text-sm">UI Breakdown</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <Monitor size={14} />
            <span>17 Pages</span>
            <span className="text-border">|</span>
            <span>2 Portals</span>
            <span className="text-border">|</span>
            <span>4 Modals</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <nav className="w-56 shrink-0 border-r border-border min-h-[calc(100vh-4rem)] sticky top-16 self-start py-6 px-4 hidden md:block">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm mb-1 transition-colors ${
                active === s
                  ? "bg-gold/10 text-gold font-medium"
                  : "text-muted hover:text-foreground hover:bg-surface-light"
              }`}
            >
              {sectionLabels[s]}
            </button>
          ))}
        </nav>

        {/* Content */}
        <main className="flex-1 p-8 min-w-0">
          {/* OVERVIEW */}
          {active === "overview" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold">RAYPUB Platform Overview</h2>
                <p className="text-muted mt-2 text-lg">
                  Music publishing administration platform for independent artists and record labels.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Total Pages", value: "17", sub: "Across 3 sections" },
                  { label: "Interactive Modals", value: "4", sub: "Add Client, Task, Song, Sign Contract" },
                  { label: "WebGL Layers", value: "7", sub: "Fluid, terrain, orbs, rays, waveform, volumetric, post-fx" },
                ].map((s) => (
                  <div key={s.label} className="bg-surface border border-border rounded-xl p-5">
                    <p className="text-sm text-muted">{s.label}</p>
                    <p className="text-3xl font-bold mt-1 text-gold">{s.value}</p>
                    <p className="text-xs text-muted mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>

              <div className="bg-surface border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Tech Stack</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  {[
                    { label: "Framework", value: "Next.js 16" },
                    { label: "Language", value: "TypeScript" },
                    { label: "Styling", value: "Tailwind CSS 4" },
                    { label: "3D Engine", value: "Three.js / R3F" },
                    { label: "Animation", value: "GSAP + ScrollTrigger" },
                    { label: "Icons", value: "Lucide React" },
                    { label: "Hosting", value: "Vercel" },
                    { label: "Repo", value: "GitHub" },
                  ].map((t) => (
                    <div key={t.label}>
                      <p className="text-muted">{t.label}</p>
                      <p className="font-medium">{t.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="/login" className="group bg-surface border border-border rounded-xl p-6 hover:border-gold/30 transition-colors block">
                  <div className="flex items-center gap-3 mb-2">
                    <Users size={20} className="text-gold" />
                    <h3 className="font-semibold">Client Portal</h3>
                    <ExternalLink size={14} className="text-muted ml-auto group-hover:text-gold transition-colors" />
                  </div>
                  <p className="text-sm text-muted">client@client.com / CLIENT26!</p>
                  <p className="text-xs text-muted mt-2">5 pages — Dashboard, Catalog, Contracts, Royalties, Settings</p>
                </a>
                <a href="/admin-login" className="group bg-surface border border-border rounded-xl p-6 hover:border-gold/30 transition-colors block">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield size={20} className="text-red-400" />
                    <h3 className="font-semibold">Admin Panel</h3>
                    <ExternalLink size={14} className="text-muted ml-auto group-hover:text-gold transition-colors" />
                  </div>
                  <p className="text-sm text-muted">ADMIN@ADMIN.com / ADMIN26!</p>
                  <p className="text-xs text-muted mt-2">7 pages — Dashboard, CRM, Contracts, Revenue, Tasks, Messages, Settings</p>
                </a>
              </div>
            </div>
          )}

          {/* SITEMAP */}
          {active === "sitemap" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Site Map</h2>

              <div className="bg-surface border border-border rounded-xl p-8">
                <div className="flex flex-col items-center gap-6">
                  {/* Root */}
                  <div className="bg-gold/10 border border-gold/30 rounded-lg px-6 py-3 text-center">
                    <p className="font-bold text-gold">raypub.vercel.app</p>
                  </div>
                  <div className="w-px h-6 bg-border" />

                  {/* 3 branches */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                    {/* Public */}
                    <div className="space-y-3">
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-2 text-center">
                        <p className="font-semibold text-blue-400 text-sm">Public</p>
                      </div>
                      {["/", "/login", "/admin-login", "/signup"].map((r) => (
                        <a key={r} href={r} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-gold/30 text-sm transition-colors">
                          <Globe size={14} className="text-muted" />
                          <span className="font-mono text-xs">{r}</span>
                          <ExternalLink size={12} className="text-muted ml-auto" />
                        </a>
                      ))}
                    </div>

                    {/* Client */}
                    <div className="space-y-3">
                      <div className="bg-gold/10 border border-gold/20 rounded-lg px-4 py-2 text-center">
                        <p className="font-semibold text-gold text-sm">Client Portal</p>
                      </div>
                      {clientPages.map((p) => (
                        <a key={p.route} href={p.route} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-gold/30 text-sm transition-colors">
                          <p.icon size={14} className="text-muted" />
                          <span className="font-mono text-xs">{p.route}</span>
                          <ExternalLink size={12} className="text-muted ml-auto" />
                        </a>
                      ))}
                    </div>

                    {/* Admin */}
                    <div className="space-y-3">
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2 text-center">
                        <p className="font-semibold text-red-400 text-sm">Admin Panel</p>
                      </div>
                      {adminPages.map((p) => (
                        <a key={p.route} href={p.route} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-gold/30 text-sm transition-colors">
                          <p.icon size={14} className="text-muted" />
                          <span className="font-mono text-xs">{p.route}</span>
                          <ExternalLink size={12} className="text-muted ml-auto" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PUBLIC PAGES */}
          {active === "public" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Public Pages</h2>
              <p className="text-muted">4 pages accessible without authentication.</p>

              <div className="space-y-6">
                {publicPages.map((p) => (
                  <div key={p.route} className="bg-surface border border-border rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{p.name}</h3>
                          <span className="font-mono text-xs text-muted bg-surface-light px-2 py-0.5 rounded">{p.route}</span>
                        </div>
                        <p className="text-sm text-muted mt-1">{p.description}</p>
                      </div>
                      <a href={p.route} className="shrink-0 flex items-center gap-1.5 text-xs text-gold hover:text-gold-light transition-colors">
                        View Live <ExternalLink size={12} />
                      </a>
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-xs text-muted uppercase tracking-wider mb-3">UI Elements</p>
                      <div className="flex flex-wrap gap-2">
                        {p.elements.map((el) => (
                          <span key={el} className="text-xs bg-surface-light border border-border rounded-md px-3 py-1.5">
                            {el}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Live preview iframe */}
                    <div className="border-t border-border">
                      <div className="bg-surface-light px-4 py-2 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        </div>
                        <span className="text-[10px] text-muted font-mono ml-2">raypub.vercel.app{p.route}</span>
                      </div>
                      <iframe
                        src={p.route}
                        className="w-full h-[400px] border-0"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CLIENT PORTAL */}
          {active === "client-portal" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold">Client Portal</h2>
                  <p className="text-muted mt-1">5 pages behind client authentication.</p>
                </div>
                <a href="/login" className="flex items-center gap-2 text-sm bg-gold/10 text-gold px-4 py-2 rounded-lg hover:bg-gold/20 transition-colors">
                  <LogIn size={14} /> Open Portal
                </a>
              </div>

              <div className="bg-surface border border-border rounded-xl p-6">
                <p className="text-xs text-muted uppercase tracking-wider mb-2">Credentials</p>
                <p className="text-sm font-mono">client@client.com / CLIENT26!</p>
              </div>

              <div className="space-y-6">
                {clientPages.map((p) => (
                  <div key={p.route} className="bg-surface border border-border rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center">
                          <p.icon size={18} className="text-gold" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{p.name}</h3>
                            <span className="font-mono text-xs text-muted bg-surface-light px-2 py-0.5 rounded">{p.route}</span>
                          </div>
                          <p className="text-sm text-muted mt-0.5">{p.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-xs text-muted uppercase tracking-wider mb-3">UI Elements & Actions</p>
                      <div className="flex flex-wrap gap-2">
                        {p.elements.map((el) => (
                          <span
                            key={el}
                            className={`text-xs rounded-md px-3 py-1.5 ${
                              el.includes("Modal") || el.includes("Button")
                                ? "bg-gold/10 border border-gold/20 text-gold"
                                : "bg-surface-light border border-border"
                            }`}
                          >
                            {el}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ADMIN PANEL */}
          {active === "admin-panel" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold">Admin Panel</h2>
                  <p className="text-muted mt-1">7 pages behind admin authentication.</p>
                </div>
                <a href="/admin-login" className="flex items-center gap-2 text-sm bg-red-500/10 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors">
                  <Shield size={14} /> Open Admin
                </a>
              </div>

              <div className="bg-surface border border-border rounded-xl p-6">
                <p className="text-xs text-muted uppercase tracking-wider mb-2">Credentials</p>
                <p className="text-sm font-mono">ADMIN@ADMIN.com / ADMIN26!</p>
              </div>

              <div className="space-y-6">
                {adminPages.map((p) => (
                  <div key={p.route} className="bg-surface border border-border rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center">
                          <p.icon size={18} className="text-red-400" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{p.name}</h3>
                            <span className="font-mono text-xs text-muted bg-surface-light px-2 py-0.5 rounded">{p.route}</span>
                          </div>
                          <p className="text-sm text-muted mt-0.5">{p.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-xs text-muted uppercase tracking-wider mb-3">UI Elements & Actions</p>
                      <div className="flex flex-wrap gap-2">
                        {p.elements.map((el) => (
                          <span
                            key={el}
                            className={`text-xs rounded-md px-3 py-1.5 ${
                              el.includes("Modal") || el.includes("Button") || el.includes("Toggle")
                                ? "bg-gold/10 border border-gold/20 text-gold"
                                : "bg-surface-light border border-border"
                            }`}
                          >
                            {el}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AUTH FLOW */}
          {active === "auth-flow" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Authentication Flow</h2>

              <div className="bg-surface border border-border rounded-xl p-8">
                <div className="space-y-8">
                  {/* Client flow */}
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Users size={16} className="text-gold" /> Client Flow
                    </h3>
                    <div className="flex items-center gap-3 flex-wrap">
                      {[
                        { label: "Landing Page", route: "/", color: "border-blue-500/30 bg-blue-500/5" },
                        null,
                        { label: "Client Login", route: "/login", color: "border-gold/30 bg-gold/5" },
                        null,
                        { label: "Dashboard", route: "/dashboard", color: "border-green-500/30 bg-green-500/5" },
                      ].map((item, i) =>
                        item === null ? (
                          <ArrowRight key={i} size={16} className="text-muted" />
                        ) : (
                          <div key={item.route} className={`border rounded-lg px-4 py-2 text-sm ${item.color}`}>
                            <p className="font-medium">{item.label}</p>
                            <p className="text-xs text-muted font-mono">{item.route}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="border-t border-border" />

                  {/* Admin flow */}
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Shield size={16} className="text-red-400" /> Admin Flow
                    </h3>
                    <div className="flex items-center gap-3 flex-wrap">
                      {[
                        { label: "Admin Login", route: "/admin-login", color: "border-red-500/30 bg-red-500/5" },
                        null,
                        { label: "Admin Panel", route: "/admin", color: "border-red-500/30 bg-red-500/5" },
                      ].map((item, i) =>
                        item === null ? (
                          <ArrowRight key={i} size={16} className="text-muted" />
                        ) : (
                          <div key={item.route} className={`border rounded-lg px-4 py-2 text-sm ${item.color}`}>
                            <p className="font-medium">{item.label}</p>
                            <p className="text-xs text-muted font-mono">{item.route}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="border-t border-border" />

                  {/* Rules */}
                  <div>
                    <h3 className="font-semibold mb-3">Access Rules</h3>
                    <div className="space-y-2 text-sm">
                      {[
                        "Unauthenticated → /login redirects to login page",
                        "Client accessing /admin → redirected to /dashboard",
                        "Admin accessing /dashboard → redirected to /admin",
                        "Logout clears sessionStorage → redirects to respective login",
                        "Session persists until tab is closed (sessionStorage)",
                      ].map((rule) => (
                        <div key={rule} className="flex items-start gap-2">
                          <ArrowRight size={14} className="text-gold mt-0.5 shrink-0" />
                          <span className="text-muted">{rule}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DESIGN SYSTEM */}
          {active === "design-system" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Design System</h2>

              {/* Colors */}
              <div className="bg-surface border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Color Palette</h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                  {colors.map((c) => (
                    <div key={c.name}>
                      <div
                        className="w-full h-16 rounded-lg border border-border mb-2"
                        style={{ backgroundColor: c.value }}
                      />
                      <p className="text-sm font-medium">{c.name}</p>
                      <p className="text-xs text-muted font-mono">{c.value}</p>
                      <p className="text-xs text-muted font-mono">{c.var}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div className="bg-surface border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Typography</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted mb-1">Font Family</p>
                    <p className="text-lg">Geist Sans + Geist Mono (Google Fonts)</p>
                  </div>
                  <div className="space-y-3 border-t border-border pt-4">
                    <p className="text-7xl font-bold">Heading 1</p>
                    <p className="text-5xl font-bold">Heading 2</p>
                    <p className="text-3xl font-bold">Heading 3</p>
                    <p className="text-xl font-semibold">Heading 4</p>
                    <p className="text-base">Body text — The one-stop platform for independent artists.</p>
                    <p className="text-sm text-muted">Secondary text — Supporting details and descriptions.</p>
                    <p className="text-xs text-muted">Caption text — Labels, timestamps, and metadata.</p>
                  </div>
                </div>
              </div>

              {/* Components */}
              <div className="bg-surface border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Component Samples</h3>
                <div className="space-y-6">
                  {/* Buttons */}
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider mb-3">Buttons</p>
                    <div className="flex flex-wrap gap-3">
                      <button className="bg-gold hover:bg-gold-light text-black font-semibold px-5 py-2.5 rounded-md text-sm transition-colors">Primary</button>
                      <button className="border border-border hover:border-gold/50 text-foreground font-medium px-5 py-2.5 rounded-md text-sm transition-colors">Secondary</button>
                      <button className="bg-red-500 hover:bg-red-400 text-white font-semibold px-5 py-2.5 rounded-md text-sm transition-colors">Admin</button>
                      <button className="bg-gold/10 text-gold font-medium px-5 py-2.5 rounded-md text-sm">Ghost</button>
                    </div>
                  </div>

                  {/* Badges */}
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider mb-3">Status Badges</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-[10px] px-2.5 py-1 rounded-full font-medium bg-green-500/10 text-green-400">active</span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full font-medium bg-amber-500/10 text-amber-400">setup</span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full font-medium bg-blue-500/10 text-blue-400">pending</span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full font-medium bg-red-500/10 text-red-400">high</span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full font-medium bg-red-500/10 text-red-400">REQUIRED</span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full font-medium bg-red-500/20 text-red-400">ADMIN</span>
                      <span className="text-gold text-[10px] px-2.5 py-1 rounded-full bg-gold/10 font-bold">MOST POPULAR</span>
                    </div>
                  </div>

                  {/* Inputs */}
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider mb-3">Form Inputs</p>
                    <div className="max-w-sm space-y-3">
                      <input type="text" placeholder="Text input" className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors" />
                      <select className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors">
                        <option>Select dropdown</option>
                      </select>
                      <textarea rows={2} placeholder="Textarea" className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
                    </div>
                  </div>

                  {/* Cards */}
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider mb-3">Card Styles</p>
                    <div className="grid grid-cols-2 gap-4 max-w-lg">
                      <div className="bg-surface border border-border rounded-xl p-4">
                        <p className="text-sm text-muted">Default Card</p>
                        <p className="text-xl font-bold mt-1">$14,200</p>
                      </div>
                      <div className="bg-gold/5 border border-gold/20 rounded-xl p-4">
                        <p className="text-sm text-gold">Highlighted Card</p>
                        <p className="text-xl font-bold mt-1">$14,200</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
