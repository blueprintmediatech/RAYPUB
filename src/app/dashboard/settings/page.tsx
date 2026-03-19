export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h2 className="text-xl font-bold">Account Settings</h2>
        <p className="text-sm text-muted mt-1">
          Manage your personal and business information
        </p>
      </div>

      {/* Personal Info */}
      <div className="bg-surface border border-border rounded-xl p-6 space-y-5">
        <h3 className="text-base font-semibold">Personal Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              defaultValue="John"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              defaultValue="Doe"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            defaultValue="john@example.com"
            className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input
            type="tel"
            defaultValue="(555) 000-0000"
            className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
          />
        </div>
      </div>

      {/* Business Info */}
      <div className="bg-surface border border-border rounded-xl p-6 space-y-5">
        <h3 className="text-base font-semibold">Business Information</h3>
        <div>
          <label className="block text-sm font-medium mb-2">
            Artist / Label Name
          </label>
          <input
            type="text"
            className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
            placeholder="Your artist or label name"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">LLC Name</label>
            <input
              type="text"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="Your LLC name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">EIN</label>
            <input
              type="text"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="XX-XXXXXXX"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Business Address
          </label>
          <textarea
            rows={3}
            className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
            placeholder="Street address, City, State, ZIP"
          />
        </div>
      </div>

      {/* PRO Info */}
      <div className="bg-surface border border-border rounded-xl p-6 space-y-5">
        <h3 className="text-base font-semibold">PRO & Registration IDs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">BMI CAE/IPI #</label>
            <input
              type="text"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="Will be assigned"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              SoundExchange ID
            </label>
            <input
              type="text"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="Will be assigned"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              SongTrust ID
            </label>
            <input
              type="text"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="Will be assigned"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              UnitedMasters ID
            </label>
            <input
              type="text"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="Will be assigned"
            />
          </div>
        </div>
      </div>

      {/* Payment Info */}
      <div className="bg-surface border border-border rounded-xl p-6 space-y-5">
        <h3 className="text-base font-semibold">Payment Information</h3>
        <p className="text-sm text-muted">
          Payment method and payout details for royalty distributions.
        </p>
        <div>
          <label className="block text-sm font-medium mb-2">
            Payout Method
          </label>
          <select className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors">
            <option>Direct Deposit (ACH)</option>
            <option>Wire Transfer</option>
            <option>Check</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Routing Number
            </label>
            <input
              type="text"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="•••••••••"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Account Number
            </label>
            <input
              type="text"
              className="w-full bg-surface-light border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
              placeholder="•••••••••"
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
