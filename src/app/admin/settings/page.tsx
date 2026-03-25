import { Shield } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h2 className="text-xl font-bold">Admin Settings</h2>
        <p className="text-sm text-muted mt-1">Manage your admin account and platform settings</p>
      </div>

      <div className="bg-surface border border-border rounded-xl p-6 space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
            <Shield size={18} className="text-red-400" />
          </div>
          <div>
            <h3 className="text-base font-semibold">Master Admin Account</h3>
            <p className="text-xs text-muted">admin@admin.com</p>
          </div>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-xl p-6 space-y-5">
        <h3 className="text-base font-semibold">Company Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Company Name</label>
            <input
              type="text"
              defaultValue="RAYPUB"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Contact Email</label>
            <input
              type="email"
              defaultValue="info@raypub.com"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Contact Phone</label>
          <input
            type="tel"
            defaultValue="(555) 000-0000"
            className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Business Address</label>
          <textarea
            rows={3}
            defaultValue="Los Angeles, CA"
            className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
          />
        </div>
      </div>

      <div className="bg-surface border border-border rounded-xl p-6 space-y-5">
        <h3 className="text-base font-semibold">Package Pricing</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Career Setup Fee</label>
            <input
              type="text"
              defaultValue="$1,500"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Artist Admin Setup</label>
            <input
              type="text"
              defaultValue="$1,500"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Artist Admin Monthly</label>
            <input
              type="text"
              defaultValue="$89.99"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Full Label Setup</label>
            <input
              type="text"
              defaultValue="$1,500"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Full Label Monthly</label>
          <input
            type="text"
            defaultValue="$249.99"
            className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
          />
        </div>
      </div>

      <div className="bg-surface border border-border rounded-xl p-6 space-y-5">
        <h3 className="text-base font-semibold">Change Password</h3>
        <div>
          <label className="block text-sm font-medium mb-2">Current Password</label>
          <input
            type="password"
            className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
            placeholder="••••••••"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">New Password</label>
            <input
              type="password"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="••••••••"
            />
          </div>
        </div>
      </div>

      <button className="bg-gold hover:bg-gold-light text-black font-semibold px-6 py-3 rounded-md transition-colors">
        Save Changes
      </button>
    </div>
  );
}
