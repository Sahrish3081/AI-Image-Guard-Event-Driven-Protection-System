import { useState } from "react";
import AnimatedCard from "../assets/components/AnimatedCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faShield, faFingerprint, faUpload, faDownload } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  // later you will control this after auth
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const features = [
  {
    title: "AI Training Shield",
    desc: "Blocks unauthorized AI model training on your images.",
    icon: faShield,
  },
  {
    title: "Anti-Edit Protection",
    desc: "Prevents tampering, editing, and unauthorized modifications.",
    icon: faLock,
  },
  {
    title: "Tamper Detection",
    desc: "Detects any attempt to alter or misuse your content.",
    icon: faFingerprint,
  },
];

const steps = [
  {
    title: "Upload Image",
    desc: "Simply upload your image to start the protection process.",
    icon: faUpload,
  },
  {
    title: "Apply Protection",
    desc: "AI automatically applies watermarking and security layers.",
    icon: faShield,
  },
  {
    title: "Download Secure Image",
    desc: "Get your fully protected image ready to use anywhere.",
    icon: faDownload,
  },
];
  return (
    <div className="bg-[#0B0B1E] text-white scroll-smooth">

     <nav className="w-full bg-[#0B0B1E]/90 backdrop-blur-md fixed top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
    
    <h1 className="text-xl font-bold">ShieldAI</h1>

    {/* When NOT logged in */}
    {!isLoggedIn && (
      <ul className="flex gap-6 text-sm absolute left-1/2 -translate-x-1/2">
        <li><a href="#features" 
        className="text-gray-400 hover:text-white transition duration-200">Features</a></li>
        <li><a href="#how"
        className="text-gray-400 hover:text-white transition duration-200">How it Works</a></li>
        <li><a href="#pricing"
        className="text-gray-400 hover:text-white transition duration-200">Pricing</a></li>
      </ul>
    )}

    {/* When logged in (future logic) */}
    {isLoggedIn && (
      <div className="text-sm text-gray-400">
        Dashboard Header (will design later)
      </div>
    )}
    
  </div>
</nav>  {/* ================= NAVBAR ================= */}
     


    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-[#0B0B1E]">

      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_60%)]"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">

        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300">
          ⚡ Next-gen image protection is here
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-white">Your Images.</span> <br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            Protected from AI.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          Apply invisible cryptographic shields to your digital art and photography.
          <br />
          Prevent unauthorized AI training, style mimicry, and tampering.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition">
            Protect My Images →
          </button>

          <button className="px-6 py-3 rounded-lg border border-gray-500 text-gray-300 hover:bg-white/10 transition">
            View Demo
          </button>
        </div>

        {/* Bottom Features */}
        <div className="mt-10 flex justify-center gap-6 text-sm text-gray-500 flex-wrap">
          <span><span className="text-green-800 text-md">●</span> 256-bit encryption</span>
          <span><span className="text-green-800 text-md">●</span> Zero data retention</span>
          <span><span className="text-green-800 text-md">●</span> GDPR compliant</span>
        </div>

      </div>
    </section>
      {/* ================= FEATURES ================= */}
      <section id="features" className="pt-32 pb-20 px-6 text-center">
  <h2 className="text-3xl font-bold mb-10">ShieldAI Features</h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {features.map((item, i) => (
<AnimatedCard key={i}>
  <div className="p-6">

    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600/20 mb-3 mx-auto">
      <FontAwesomeIcon icon={item.icon} className="text-purple-400 text-xl" />
    </div>

    <h3 className="text-xl font-semibold">
      {item.title}
    </h3>

    <p className="text-gray-400 mt-2">
      {item.desc}
    </p>

 
   </div>
</AnimatedCard>
))}

  </div>
</section>

      {/* ================= HOW IT WORKS ================= */}
   <section className="pt-32 pb-20 px-6 text-center">
  <h2 className="text-3xl font-bold mb-10">How It Works</h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {steps.map((item, i) => (
      <AnimatedCard key={i}>
  <div className="p-6">

    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600/20 mb-3 mx-auto">
      <FontAwesomeIcon icon={item.icon} className="text-purple-400 text-xl" />
    </div>

    <h3 className="text-xl font-semibold">
      {item.title}
    </h3>

    <p className="text-gray-400 mt-2">
      {item.desc}
    </p>

  </div>
</AnimatedCard>
    ))}
  </div>
</section>
      {/* ================= PRICING ================= */}
      <section id="pricing" className="py-20 px-6 text-center">
  <h2 className="text-3xl font-bold mb-10">Pricing</h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {/* Free Plan */}
    <AnimatedCard>
      <div className="p-6 h-full">
        <h3 className="text-xl font-bold">Free Plan</h3>

        <p className="text-gray-400 mt-2">
          Basic protection
        </p>

        <div className="mt-6">
          <span className="text-4xl font-bold">$0</span>
          <span className="text-gray-400">/month</span>
        </div>

        <button className="mt-6 w-full py-3 rounded-xl border border-purple-500/30 hover:bg-purple-500/10 transition">
          Get Started
        </button>
      </div>
    </AnimatedCard>

    {/* Pro Plan */}
    <AnimatedCard className="scale-105 border border-purple-500/40">
      <div className="p-6 h-full bg-gradient-to-b from-purple-600/20 to-transparent rounded-2xl">

        <div className="mb-3 inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">
          Most Popular
        </div>

        <h3 className="text-xl font-bold">Pro Plan</h3>

        <p className="text-gray-300 mt-2">
          Advanced protection
        </p>

        <div className="mt-6">
          <span className="text-4xl font-bold">$19</span>
          <span className="text-gray-400">/month</span>
        </div>

        <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition">
          Upgrade Now
        </button>
      </div>
    </AnimatedCard>

    {/* Enterprise */}
    <AnimatedCard>
      <div className="p-6 h-full">
        <h3 className="text-xl font-bold">Enterprise</h3>

        <p className="text-gray-400 mt-2">
          Custom solutions
        </p>

        <div className="mt-6">
          <span className="text-4xl font-bold">Custom</span>
        </div>

        <button className="mt-6 w-full py-3 rounded-xl border border-purple-500/30 hover:bg-purple-500/10 transition">
          Contact Us
        </button>
      </div>
    </AnimatedCard>

  </div>
</section>
      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center text-gray-400">
        © 2026 ShieldAI. All rights reserved.
      </footer>

    </div>
  );
}