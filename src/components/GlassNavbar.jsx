import React from "react";
import "../glass.css";
import { Link } from "react-router-dom";

const GlassPlayer = () => {
  return (
    <div className="mt-10 fixed z-[9999] xl:block hidden left-1/2 -translate-x-1/2">
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

      <div className="container py-10 flex justify-center">
        <div className="glass-container glass-container--rounded px-4 py-3">
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>

          <div className="glass-content glass-content--inline justify-center">
            <nav className="nav-menus">
              <ul className="flex items-center justify-center gap-8">
                <li>
                  <Link
                    to="/showroom"
                    className="uppercase text-[.9rem] font-semibold transition hover:text-[#ff8a41]"
                  >
                    Showroom
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="uppercase text-[.9rem] font-semibold transition hover:text-[#ff8a41]"
                  >
                    Services +
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="uppercase text-[.9rem] font-semibold transition hover:text-[#ff8a41]"
                  >
                    Skynet
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="uppercase text-[.9rem] font-semibold transition hover:text-[#ff8a41]"
                  >
                    About MA +
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="uppercase text-[.9rem] font-semibold transition hover:text-[#ff8a41]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassPlayer;
