import { Plus, Music, Search } from "lucide-react";

export default function CatalogPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">Music Catalog</h2>
          <p className="text-sm text-muted mt-1">
            Manage your songs, albums, and metadata
          </p>
        </div>
        <button className="flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold px-4 py-2.5 rounded-md text-sm transition-colors">
          <Plus size={16} />
          Add Song
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
        <input
          type="text"
          placeholder="Search your catalog..."
          className="w-full bg-surface border border-border rounded-md pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
        />
      </div>

      {/* Empty state */}
      <div className="bg-surface border border-border rounded-xl p-16 text-center">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
          <Music size={28} className="text-gold" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">No songs yet</h3>
        <p className="mt-2 text-sm text-muted max-w-md mx-auto">
          Add songs to your catalog so we can register them with BMI,
          SoundExchange, SongTrust, and set up distribution through
          UnitedMasters.
        </p>
        <button className="mt-6 flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold px-5 py-2.5 rounded-md text-sm transition-colors mx-auto">
          <Plus size={16} />
          Add Your First Song
        </button>
      </div>

      {/* What we need info */}
      <div className="bg-surface border border-border rounded-xl p-6">
        <h3 className="text-base font-semibold mb-3">
          What we need for each song
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-muted">
          <div className="space-y-2">
            <p className="text-foreground font-medium">Basic Info</p>
            <ul className="space-y-1">
              <li>• Song Title</li>
              <li>• Artist Name(s)</li>
              <li>• Album / Single Name</li>
              <li>• Release Date</li>
              <li>• Genre</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-foreground font-medium">Identifiers</p>
            <ul className="space-y-1">
              <li>• ISRC Code (if available)</li>
              <li>• UPC Code (if available)</li>
              <li>• ISWC Code (if available)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-foreground font-medium">Credits & Splits</p>
            <ul className="space-y-1">
              <li>• Songwriter(s)</li>
              <li>• Producer(s)</li>
              <li>• Publisher(s)</li>
              <li>• Ownership Splits (%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
