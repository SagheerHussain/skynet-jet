import React from "react";

export default function GlassmorphismCircularCard({
  title,
  tagline,
  icon,
  customClasses = "",
}) {
  return (
    <div
      className={`
        ${customClasses}
      `}
    >
      <div className="liquid-glass flex flex-col justify-center">
        <div className="liquid-glass--bend" />
        <div className="liquid-glass--face" />
        <div className="liquid-glass--edge" />
        {/* Glassmorphism Card */}
        <div
          className="
          relative
          rounded-xl flex flex-col items-center justify-center
          text-center lg:py-0 py-4
          h-full w-full
        "
        >
          <div className="mt-8">{icon}</div>
          <h1 className="text-base xl:text-lg font-semibold text-white px-4 py-3 rounded-md">
            {title}
          </h1>
          <p className="text-sm lg:text-base font-light text-gray-300">
            {tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
