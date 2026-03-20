"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
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
      // Admin login
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

      // Client login (demo — accepts any valid-looking credentials)
      if (email.includes("@") && password.length >= 6) {
        sessionStorage.setItem("raypub_user", JSON.stringify({
          role: "client",
          email: email.toLowerCase(),
          name: email.split("@")[0],
        }));
        router.push("/dashboard");
        return;
      }

      setError("Invalid email or password.");
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
          <p className="mt-2 text-muted">Sign in to your portal</p>
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
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="you@example.com"
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-border accent-gold"
              />
              <span className="text-muted">Remember me</span>
            </label>
            <a
              href="#"
              className="text-gold hover:text-gold-light transition-colors"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="block w-full bg-gold hover:bg-gold-light text-black font-semibold py-3 rounded-md transition-colors text-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className="text-center text-sm text-muted">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-gold hover:text-gold-light transition-colors"
            >
              Get started
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
