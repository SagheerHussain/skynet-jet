import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    // <div className="hidden sm:flex items-center w-full max-w-md bg-white/10 border-2 border-white/20 rounded-full px-4 py-2 shadow-[0_0_20px_rgba(255,255,255,0.25),0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-sm">
    //   {/* Input */}
    //   <input
    //     type="text"
    //     placeholder="search anything"
    //     className="flex-grow bg-transparent outline-none text-white placeholder-white/70"
    //   />

    //   {/* Button */}
    //   <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ff8a41] hover:bg-[#ff8a41]/80 transition">
    //     <FaSearch className="text-white" />
    //   </button>
    // </div>

    <div className="">
      {/* SVG filter definition */}
      <svg style={{ display: "none" }}>
        <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.008"
            numOctaves="2"
            seed="92"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurred"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className="container py-4 flex justify-center">
        <div className="glass-container glass-container--rounded p-1">
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>

          <div className="glass-content glass-content--inline justify-center">
            <div className="hidden sm:flex items-center w-full px-0 py-0">
              {/* Input */}
              <input
                type="text"
                placeholder="search anything"
                className="flex-grow bg-transparent outline-none text-white placeholder-white/70"
              />

              {/* Button */}
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff8a41] hover:bg-[#ff8a41]/80 transition">
                <FaSearch className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
