import React, { useState, useRef } from "react";
import { Upload, Settings, Download, X, Image as ImageIcon, CheckCircle2 } from "lucide-react";

const Step = ({ label, active }) => (
  <div className="flex items-center gap-2 text-sm">
    <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${active ? "bg-purple-600 border-purple-600" : "border-gray-600"}`}>
      <div className={`w-2 h-2 rounded-full ${active ? "bg-white" : "bg-gray-500"}`} />
    </div>
    <span className={active ? "text-white" : "text-gray-400"}>{label}</span>
  </div>
);

const Toggle = ({ enabled, setEnabled }) => (
  <button
    onClick={() => setEnabled(!enabled)}
    className={`w-12 h-6 flex items-center rounded-full p-1 transition ${enabled ? "bg-purple-600" : "bg-gray-700"}`}
  >
    <div className={`bg-white w-4 h-4 rounded-full transform transition ${enabled ? "translate-x-6" : ""}`} />
  </button>
);

const UploadArea = ({ file, setFile }) => {
  const inputRef = useRef();

  const handleFile = (f) => {
    if (!f || !f.type.startsWith("image/")) return;
    setFile({ file: f, url: URL.createObjectURL(f) });
  };

  return (
    <div
      onClick={() => inputRef.current.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        handleFile(e.dataTransfer.files[0]);
      }}
      className="border border-dashed border-gray-600 rounded-xl h-64 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-800/40"
    >
      <Upload className="text-gray-400 mb-2" />
      <p className="text-gray-400">Click or drag image to upload</p>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={(e) => handleFile(e.target.files[0])}
      />
    </div>
  );
};

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [aiShield, setAiShield] = useState(true);
  const [antiEdit, setAntiEdit] = useState(true);
  const [watermark, setWatermark] = useState(false);
  const [strength, setStrength] = useState("High");
  const [loading, setLoading] = useState(false);

  const applyProtection = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  // ✅ Download Functionality
 const currentUser = "user1";

const handleDownload = () => {
  if (!file) return;

  // 1. SAVE TO HISTORY FIRST
  const existing = JSON.parse(localStorage.getItem("images")) || [];

  const newImage = {
    id: Date.now(),
    userId: currentUser,
    imageUrl: file.url,
    fileName: file.file.name,
    protection: {
      aiShield,
      antiEdit,
      strength
    },
    createdAt: new Date().toISOString()
  };

  localStorage.setItem("images", JSON.stringify([...existing, newImage]));

  // 2. DOWNLOAD IMAGE
  const link = document.createElement("a");
  link.href = file.url;
  link.download = file.file.name || "image.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1f] to-[#0a0d18] text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">ShieldAI</h1>
        <div className="flex gap-6">
          <Step label="Upload" active={!file} />
          <Step label="Configure" active={!!file} />
          <Step label="Download" active={false} />
        </div>
        <button
  onClick={() => {
    setFile(null);
    setLoading(false);
    setAiShield(true);
    setAntiEdit(true);
    setWatermark(false);
    setStrength("High");
  }}
  className="text-gray-400 hover:text-white transition"
>
  Cancel
</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel */}
        <div className="lg:col-span-2 bg-[#0f1429] border border-gray-800 rounded-2xl p-4">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Original Image Preview</span>
            {file && <span>{file.file.name}</span>}
          </div>

          {file ? (
            <div className="relative">
              <img src={file.url} className="rounded-xl w-full" />
              <button
                onClick={() => setFile(null)}
                className="absolute top-2 right-2 bg-black/60 p-1 rounded-full"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <UploadArea file={file} setFile={setFile} />
          )}
        </div>

        {/* Right Panel */}
        <div className="bg-[#0f1429] border border-gray-800 rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <h2 className="mb-4 font-medium flex items-center gap-2">
              <Settings size={16} /> Protection Settings
            </h2>

            {/* Toggles */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p>AI Training Shield</p>
                  <span className="text-xs text-gray-400">Adds adversarial noise</span>
                </div>
                <Toggle enabled={aiShield} setEnabled={setAiShield} />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p>Anti-Edit Protection</p>
                  <span className="text-xs text-gray-400">Invisible watermark</span>
                </div>
                <Toggle enabled={antiEdit} setEnabled={setAntiEdit} />
              </div>

              <div className="flex justify-between items-center opacity-50">
                <div>
                  <p>Visible Watermark</p>
                  <span className="text-xs">Coming soon</span>
                </div>
                <Toggle enabled={watermark} setEnabled={setWatermark} />
              </div>
            </div>

            {/* Strength */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">PROTECTION STRENGTH</p>
              <div className="flex gap-2">
                {["Low", "Medium", "High"].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setStrength(lvl)}
                    className={`px-4 py-2 rounded-lg border ${
                      strength === lvl
                        ? "bg-purple-600 border-purple-600"
                        : "border-gray-600"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="mt-6 space-y-3">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span className="flex items-center gap-1">
                <CheckCircle2 size={14} /> Ready to protect
              </span>
              <span>Est. ~2s</span>
            </div>

            <button
              onClick={applyProtection}
              disabled={!file || loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? "Processing..." : "Apply Protection"}
            </button>

            {/* ✅ Download Button */}
            <button
              onClick={handleDownload}
              disabled={!file}
              className="w-full py-3 rounded-xl border border-gray-600 hover:bg-gray-800 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Download size={16} /> Download Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}