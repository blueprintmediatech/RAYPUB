"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Shield } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (
        email.toLowerCase() === "admin@admin.com" &&
        password === "ADMIN26!"
      ) {
        sessionStorage.setItem("raypub_user", JSON.stringify({
          role: "admin",
          email: email.toLowerCase(),
          name: "Admin",
        }));
        router.push("/admin");
        return;
      }

      setError("Invalid admin credentials.");
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold tracking-tight">
            RAY<span className="text-gold">PUB</span>
          </Link>
          <div className="mt-3 inline-flex items-center gap-2 text-red-400 text-sm font-medium">
            <Shield size={14} />
            Admin Portal
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-surface border border-border rounded-xl p-8 space-y-6"
        >
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">Admin Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="admin@admin.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="block w-full bg-red-500 hover:bg-red-400 text-white font-semibold py-3 rounded-md transition-colors text-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Admin Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
