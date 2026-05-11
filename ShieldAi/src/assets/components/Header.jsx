export default function ShieldAIHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0B0B1E]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[78px] flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4 cursor-pointer group">
          {/* LOGO */}
          <div
            className="relative w-12 h-12 rounded-2xl 
            bg-gradient-to-br from-purple-600 via-violet-500 to-indigo-600
            flex items-center justify-center
            shadow-[0_0_30px_rgba(168,85,247,0.35)]
            overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-white/10"></div>

            {/* Shield Shape */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-white relative z-10"
            >
              <path d="M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3z" />
              <path d="M9.5 12.5l1.5 1.5 3.5-4" />
            </svg>
          </div>

          {/* TEXT */}
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-white leading-none">
              Shield<span className="text-purple-400">AI</span>
            </h1>

            <p className="text-[11px] tracking-[3px] uppercase text-gray-500 mt-1">
              Image Protection System
            </p>
          </div>
        </div>

        {/* CENTER NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            "Features",
            "How It Works",
            "Dashboard",
            "Pricing",
            "Feedback",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="relative text-[15px] font-medium text-gray-400 hover:text-white transition-all duration-300 group"
            >
              {item}

              {/* Hover Line */}
              <span
                className="absolute left-0 -bottom-2 w-0 h-[2px] 
                bg-purple-400 transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Login */}
          <button
            className="hidden md:flex px-5 py-2.5 rounded-xl border border-white/10
            bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white
            transition-all duration-300"
          >
            Login
          </button>

          {/* CTA */}
          <button
            className="relative overflow-hidden px-6 py-2.5 rounded-xl
            bg-gradient-to-r from-purple-600 to-indigo-600
            text-white font-medium shadow-lg shadow-purple-500/20
            hover:scale-[1.02] transition-all duration-300"
          >
            <span className="relative z-10">Protect Images</span>

            {/* Shine Effect */}
            <div
              className="absolute top-0 -left-full w-full h-full
              bg-white/10 skew-x-12 hover:left-full transition-all duration-700"
            ></div>
          </button>
        </div>
      </div>
    </header>
  );
}
