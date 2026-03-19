import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold tracking-tight">
            RAY<span className="text-gold">PUB</span>
          </Link>
          <p className="mt-2 text-muted">Sign in to your client portal</p>
        </div>

        <form className="bg-surface border border-border rounded-xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-border accent-gold" />
              <span className="text-muted">Remember me</span>
            </label>
            <a href="#" className="text-gold hover:text-gold-light transition-colors">
              Forgot password?
            </a>
          </div>

          <Link
            href="/dashboard"
            className="block w-full bg-gold hover:bg-gold-light text-black font-semibold py-3 rounded-md transition-colors text-center"
          >
            Sign In
          </Link>

          <p className="text-center text-sm text-muted">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-gold hover:text-gold-light transition-colors">
              Get started
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
