import React, { useEffect, useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";

export default function History() {
  const [images, setImages] = useState([]);
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");

  const currentUser = "user1";

useEffect(() => {
  const allImages = JSON.parse(localStorage.getItem("images")) || [];

  const userImages = allImages.filter(
    (img) => img.userId === "user1"
  );

  console.log("All images:", allImages); // DEBUG
  console.log("User images:", userImages);

  setImages(userImages);
}, []);

  const filteredImages = images.filter(img =>
    img.fileName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1f] to-[#0a0d18] text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">ShieldAI</h1>
        <div className="flex gap-6 text-gray-400">
          <span className="text-white">History</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">A</div>
      </div>

      {/* Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Protection History</h2>
        <p className="text-gray-400 text-sm">All images you've protected, sorted by recent</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6 items-center justify-between">
        <div className="flex items-center bg-[#0f1429] border border-gray-800 rounded-xl px-3 py-2 w-full lg:w-1/2">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by filename..."
            className="bg-transparent outline-none ml-2 w-full text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-3 items-center">
          <div className="flex bg-[#0f1429] border border-gray-800 rounded-xl p-1">
            <button
              onClick={() => setView("grid")}
              className={`px-3 py-1 rounded-lg ${view === "grid" ? "bg-purple-600" : "text-gray-400"}`}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`px-3 py-1 rounded-lg ${view === "list" ? "bg-purple-600" : "text-gray-400"}`}
            >
              <List size={16} />
            </button>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-700 hover:bg-gray-800">
            <Filter size={16} /> Filter
          </button>

          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500">
            Protect New
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#0f1429] border border-gray-800 rounded-xl p-4">
          <p className="text-2xl font-semibold">{images.length}</p>
          <span className="text-gray-400 text-sm">Total Protected</span>
        </div>

        <div className="bg-[#0f1429] border border-gray-800 rounded-xl p-4">
          <p className="text-2xl font-semibold">23.5 MB</p>
          <span className="text-gray-400 text-sm">Storage Used</span>
        </div>

        <div className="bg-[#0f1429] border border-gray-800 rounded-xl p-4">
          <p className="text-2xl font-semibold">High</p>
          <span className="text-gray-400 text-sm">Avg Strength</span>
        </div>
      </div>

      {/* Images */}
      {filteredImages.length === 0 ? (
        <p className="text-gray-400">No images found</p>
      ) : (
        <div className={view === "grid" ? "grid md:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredImages.map(img => (
            <div key={img.id} className="bg-[#0f1429] border border-gray-800 rounded-xl overflow-hidden">
              <img src={img.imageUrl} className="w-full h-48 object-cover" />

              <div className="p-3">
                <p className="text-sm mb-1">{img.fileName}</p>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{new Date(img.createdAt).toLocaleString()}</span>
                  <span className="text-green-400">{img.protection.strength}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
