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
      {/* <div className="liquid-glass">
        <div className="liquid-glass--bend" />
        <div className="liquid-glass--face" />
        <div className="liquid-glass--edge" /> */}
      {/* Glassmorphism Card */}
      <div
        className="
          relative
          rounded-xl flex flex-col items-center justify-center
          text-center lg:py-3 py-4
          w-full
          glassmorphism_card cursor-pointer
        "
      >
        <div className="glassmorphism_effect_hover"></div>
        <div className="mt-8">{icon}</div>
        <h1 className="mt-2 text-[.9rem] lg:text-base xl:text-lg font-semibold text-white px-4 py-3 rounded-md z-[12]">
          {title}
        </h1>
        <p className="px-3 text-xs lg:text-base font-light text-gray-300 z-[12]">
          {tagline}
        </p>
        {/* </div> */}
      </div>
    </div>
  );
}
