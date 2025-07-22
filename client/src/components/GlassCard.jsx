import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./Button";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function GlassCard({ icon, title, description, buttonLabel }) {
  const media = useMediaQuery("(max-width: 500px)");
  const mediumScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div className="glass_card">
      <div
        className="glass-container w-full xl:translate-y-0 md:translate-y-[150px] sm:translate-y-[250px] translate-y-[250px]"
        style={{
          borderRadius: "20px",
          boxShadow:
            "0 6px 6px rgba(0, 0, 0, 0.02), 0 0 20px rgba(0, 0, 0, 0.1);",
        }}
      >
        <div className="glass-filter"></div>
        <div className="glass-overlay"></div>
        <div className="glass-specular"></div>
        <div className="glass-content h-full" style={{ padding: "3rem 1rem" }}>
          <div className="w-full text-white flex flex-col items-center">
            {/* Animated Heading */}
            <h2
              className={`${
                media ? "text-[1.5rem]" : "text-[2rem]"
              } md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[4.7rem] font-extrabold capitalize text-center leading-[1.2]`}
            >
              Turbulence Free, Transactions.
            </h2>
            {/* Description */}
            <p className="text-xs text-center sm:text-sm md:text-base lg:text-lg py-3 text-white/70 opacity-100">
              Industry-leading marketing, data, and grit to help you buy or
              sell.
            </p>

            {/* Button */}
            <div className="text-center">
              <Button buttonLabel="Visit Showroom" onClick="/showroom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
