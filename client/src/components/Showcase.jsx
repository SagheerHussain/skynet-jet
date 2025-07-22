import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const Showcase = () => {
  return (
    <div className="relative w-screen z-10">
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          filter: "drop-shadow(20px 10px 15px rgba(255, 255, 255, 0.2))",
        }}
      >
        <div className="w-full h-[200px] sm:h-1/2 md:h-full overflow-hidden">
          <div
            className="overlay absolute top-0 left-0 w-full h-full z-10"
            style={{
              background:
                "linear-gradient(to top, #111218fd 30%, #11121868 100%)",
            }}
          ></div>
          <video
            className="w-full h-full object-cover"
            loop
            muted
            autoPlay
            playsInline
          >
            <source src="/assets/file.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="sm:static fixed container z-20 px-4">
        <Navbar />
      </div>
      <div className="sm:pt-0 pt-[40%]">
        <HeroSection />
      </div>
    </div>
  );
};

export default Showcase;
