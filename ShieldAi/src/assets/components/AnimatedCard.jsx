import React from "react";

export default function AnimatedCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        group
        relative
        bg-[#121232]
        rounded-2xl
        p-[1px]
        overflow-hidden
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_20px_40px_rgba(192,132,252,0.15)]
        ${className}
      `}
    >
      {/* Bottom Purple Glow */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-0
          h-[3px]
          bg-purple-400
          rounded-full
          transition-all
          duration-500
          group-hover:w-[80%]
          shadow-[0_0_20px_#c084fc]
        "
      ></div>

      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-purple-600/0
          via-purple-600/20
          to-purple-600/0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          blur-xl
        "
      ></div>

      {/* Content */}
      <div className="relative bg-[#121232] rounded-2xl h-full">
        {children}
      </div>
    </div>
  );
}