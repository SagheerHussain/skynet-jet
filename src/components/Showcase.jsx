import React from "react";
import HeroSection from "./HeroSection";
import GlassIcon from "./GlassIcon";

const Showcase = () => {
  return (
    <div
      className="relative w-screen"
    >
      <div className="relative z-10">
        <HeroSection />
        <GlassIcon />
      </div>
    </div>
  );
}

export default Showcase;
