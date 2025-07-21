import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ items = [], className, onMouseLeave }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleMouseLeave = () => {
    setIsClosing(true);
    setTimeout(() => {
      onMouseLeave(); // trigger parent hide logic after animation
    }, 300); // duration must match CSS
  };

  return (
    <div
      className={`absolute top-full ${className} mt-3 rounded-lg z-[99999] min-w-[200px] ${
        isClosing ? "dropdown-animate-out" : "dropdown-animate-in"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="glass-container flex flex-col justify-center glass-container--rounded py-3"
        style={{ borderRadius: "10px" }}
      >
        <div className="glass-filter"></div>
        <div className="glass-overlay"></div>
        <div className="glass-specular"></div>

        <div
          className="glass-content glass-content--inline flex flex-col mt-2"
          style={{ alignItems: "start", justifyContent: "start" }}
        >
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="uppercase block px-4 py-2 text-white duration-150 mb-3 transition hover:text-[#ff8a41]"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
