import React, { useState } from "react";
import "../glass.css";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const GlassPlayer = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // null | 'services' | 'about'
  const [isClosing, setIsClosing] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleMouseLeave = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveDropdown(null); // trigger parent hide logic after animation
    }, 300); // duration must match CSS
  };

  return (
    <div className="fixed z-[9999] xl:block hidden left-1/2 -translate-x-1/2">
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

      <div
        className={`relative container py-10 flex justify-center`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="glass-container flex items-center justify-center glass-container--rounded px-4 py-3">
          <div
            className="glass-filter"
            style={{ filter: "url(#lg-dist)" }}
          ></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>

          <div className="glass-content glass-content--inline justify-center">
            <nav className="nav-menus">
              <ul className="flex items-center justify-center gap-8 relative">
                <li>
                  <Link
                    to="/showroom"
                    className="uppercase text-[.9rem] font-semibold transition hover:text-[#ff8a41]"
                  >
                    Showroom
                  </Link>
                </li>

                <li>
                  <button
                    onMouseEnter={() => toggleDropdown("services")}
                    className={`uppercase text-[.9rem] font-semibold transition hover:text-[#ff8a41]`}
                  >
                    Services +
                  </button>
                </li>

                <li>
                  <Link
                    to="/skynet"
                    className="uppercase text-[.9rem] font-semibold transition hover:text-[#ff8a41]"
                  >
                    Skynet
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    onMouseEnter={() => toggleDropdown("about")}
                    className="uppercase text-[.9rem] font-semibold transition hover:text-[#ff8a41]"
                  >
                    About MA +
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="uppercase text-[.9rem] font-semibold transition hover:text-[#ff8a41]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* === DROPDOWN OUTSIDE GLASS === */}
        {activeDropdown && (
          <Dropdown
            items={
              activeDropdown === "services"
                ? [
                    { text: "Acquisition", link: "/acquisition" },
                    { text: "Brokerage", link: "/brokerage" },
                  ]
                : [
                    { text: "Meet The Team", link: "/team" },
                    { text: "Looking For Higher", link: "/higher" },
                    { text: "Testimonials", link: "/testimonial" },
                  ]
            }
            className={
              activeDropdown === "services" ? "left-[25%]" : "left-[60%]"
            }
            onMouseLeave={() => setActiveDropdown(null)}
          />
        )}
      </div>
    </div>
  );
};

export default GlassPlayer;
