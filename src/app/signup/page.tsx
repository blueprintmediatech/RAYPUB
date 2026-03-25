import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold tracking-tight">
            RAY<span className="text-gold">PUB</span>
          </Link>
          <p className="mt-2 text-muted">Create your account and choose a package</p>
        </div>

        <form className="bg-surface border border-border rounded-xl p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <input
                type="text"
                className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <input
                type="text"
                className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Artist / Label Name</label>
            <input
              type="text"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="Your artist or label name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="(555) 000-0000"
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

          <div>
            <label className="block text-sm font-medium mb-2">Select Package</label>
            <select className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors">
              <option value="registration">Label / Music Career Setup — $1,500</option>
              <option value="publishing">Artist Admin — $1,500 + $89.99/mo</option>
              <option value="label">Full Label Services — $1,500 + $249.99/mo</option>
            </select>
          </div>

          <div className="space-y-3 text-sm text-muted">
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-0.5 rounded border-border accent-gold" />
              <span>
                I agree to the{" "}
                <a href="#" className="text-gold hover:text-gold-light">Terms of Service</a>{" "}
                and{" "}
                <a href="#" className="text-gold hover:text-gold-light">Privacy Policy</a>
              </span>
            </label>
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-0.5 rounded border-border accent-gold" />
              <span>
                I understand that signing up will require execution of a Publishing Administration Agreement and/or other applicable contracts
              </span>
            </label>
          </div>

          <Link
            href="/dashboard"
            className="block w-full bg-gold hover:bg-gold-light text-black font-semibold py-3 rounded-md transition-colors text-center"
          >
            Create Account & Continue to Payment
          </Link>

          <p className="text-center text-sm text-muted">
            Already have an account?{" "}
            <Link href="/login" className="text-gold hover:text-gold-light transition-colors">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
