"use client";

import { useState } from "react";
import { Plus, Music, Search, MoreVertical } from "lucide-react";
import Modal from "@/components/Modal";

type Song = {
  title: string;
  artist: string;
  album: string;
  genre: string;
  releaseDate: string;
  isrc: string;
  writers: string;
  producers: string;
  splits: string;
};

const initialSongs: Song[] = [];

export default function CatalogPage() {
  const [songs, setSongs] = useState<Song[]>(initialSongs);
  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = songs.filter(
    (s) =>
      !search ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.artist.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const newSong: Song = {
      title: fd.get("title") as string,
      artist: fd.get("artist") as string,
      album: fd.get("album") as string,
      genre: fd.get("genre") as string,
      releaseDate: fd.get("releaseDate") as string,
      isrc: fd.get("isrc") as string,
      writers: fd.get("writers") as string,
      producers: fd.get("producers") as string,
      splits: fd.get("splits") as string,
    };
    setSongs([newSong, ...songs]);
    setShowAdd(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">Music Catalog</h2>
          <p className="text-sm text-muted mt-1">
            {songs.length} songs &middot; Manage your songs, albums, and metadata
          </p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold px-4 py-2.5 rounded-md text-sm transition-colors"
        >
          <Plus size={16} />
          Add Song
        </button>
      </div>

      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your catalog..."
          className="w-full bg-surface border border-border rounded-md pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="bg-surface border border-border rounded-xl p-16 text-center">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
            <Music size={28} className="text-gold" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">
            {songs.length === 0 ? "No songs yet" : "No results"}
          </h3>
          <p className="mt-2 text-sm text-muted max-w-md mx-auto">
            {songs.length === 0
              ? "Add songs to your catalog so we can register them with BMI, SoundExchange, SongTrust, and set up distribution through UnitedMasters."
              : "Try a different search term."}
          </p>
          {songs.length === 0 && (
            <button
              onClick={() => setShowAdd(true)}
              className="mt-6 flex items-center gap-2 bg-gold hover:bg-gold-light text-black font-semibold px-5 py-2.5 rounded-md text-sm transition-colors mx-auto"
            >
              <Plus size={16} />
              Add Your First Song
            </button>
          )}
        </div>
      ) : (
        <div className="bg-surface border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Artist</th>
                  <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Album</th>
                  <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Genre</th>
                  <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">ISRC</th>
                  <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider">Release</th>
                  <th className="px-6 py-3 text-xs font-medium text-muted uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-surface-light transition-colors">
                    <td className="px-6 py-4 font-medium">{s.title}</td>
                    <td className="px-6 py-4 text-muted">{s.artist}</td>
                    <td className="px-6 py-4 text-muted">{s.album || "—"}</td>
                    <td className="px-6 py-4 text-muted">{s.genre}</td>
                    <td className="px-6 py-4 text-muted font-mono text-xs">{s.isrc || "Pending"}</td>
                    <td className="px-6 py-4 text-muted">{s.releaseDate}</td>
                    <td className="px-6 py-4">
                      <button className="p-1.5 rounded hover:bg-surface-light text-muted hover:text-gold transition-colors">
                        <MoreVertical size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Info card */}
      <div className="bg-surface border border-border rounded-xl p-6">
        <h3 className="text-base font-semibold mb-3">What we need for each song</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-muted">
          <div className="space-y-2">
            <p className="text-foreground font-medium">Basic Info</p>
            <ul className="space-y-1">
              <li>Song Title</li>
              <li>Artist Name(s)</li>
              <li>Album / Single Name</li>
              <li>Release Date</li>
              <li>Genre</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-foreground font-medium">Identifiers</p>
            <ul className="space-y-1">
              <li>ISRC Code (if available)</li>
              <li>UPC Code (if available)</li>
              <li>ISWC Code (if available)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-foreground font-medium">Credits & Splits</p>
            <ul className="space-y-1">
              <li>Songwriter(s)</li>
              <li>Producer(s)</li>
              <li>Publisher(s)</li>
              <li>Ownership Splits (%)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Add Song Modal */}
      <Modal open={showAdd} onClose={() => setShowAdd(false)} title="Add New Song">
        <form onSubmit={handleAdd} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">Song Title</label>
            <input name="title" required className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" placeholder="Song title" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Artist</label>
              <input name="artist" required className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" placeholder="Artist name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Album / Single</label>
              <input name="album" className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" placeholder="Album name" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Genre</label>
              <select name="genre" required className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold">
                <option value="Hip-Hop/Rap">Hip-Hop/Rap</option>
                <option value="R&B/Soul">R&B/Soul</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Electronic">Electronic</option>
                <option value="Country">Country</option>
                <option value="Latin">Latin</option>
                <option value="Gospel">Gospel</option>
                <option value="Jazz">Jazz</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Release Date</label>
              <input name="releaseDate" type="date" required className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">ISRC Code (if available)</label>
            <input name="isrc" className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" placeholder="e.g. USRC17607839" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Songwriter(s)</label>
            <input name="writers" required className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" placeholder="Separate with commas" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Producer(s)</label>
            <input name="producers" className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" placeholder="Separate with commas" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Ownership Splits</label>
            <input name="splits" className="w-full bg-surface-light border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold" placeholder="e.g. Artist 50%, Producer 25%, Writer 25%" />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setShowAdd(false)} className="flex-1 border border-border text-foreground font-medium py-2.5 rounded-md text-sm hover:bg-surface-light transition-colors">Cancel</button>
            <button type="submit" className="flex-1 bg-gold hover:bg-gold-light text-black font-semibold py-2.5 rounded-md text-sm transition-colors">Add Song</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
