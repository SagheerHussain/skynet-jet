import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Card = ({ detail, index }) => {
  const categoryGradients = {
    acquired: ["from-[#3b82f6]", "to-[#60a5fa]"],
    "coming soon": ["from-[#9333ea]", "to-[#c084fc]"],
    "for sale": ["from-[#10b981]", "to-[#34d399]"],
    "off market": ["from-[#ff8a41]", "to-[#ff8a41]"],
    "sale pending": ["from-[#ff8a41]", "to-[#ce93d8]"],
    sold: ["from-[#ef4444]", "to-[#f87171]"],
    wanted: ["from-[#f97316]", "to-[#fb923c]"],
  };

  const categoryName = detail?.category?.toLowerCase() || "";
  const gradient = categoryGradients[categoryName] || [
    "from-[#ff8a41]",
    "to-[#fca168]",
  ];

  return (
    <motion.div
      className="relative card rounded-lg overflow-hidden shadow-lg"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 25,
        duration: 0.5,
        delay: index * 0.5,
        ease: "easeOut",
      }}
    >
      {/* Featured Ribbon */}
      <div
        className={`absolute top-6 -right-14 w-48 text-center rotate-45 bg-gradient-to-r ${gradient[0]} ${gradient[1]} text-white font-medium py-1 shadow-lg`}
      >
        <h1 className="text-[.8rem]">
          {detail?.category
            .split("-")
            .map((word) => word.toUpperCase())
            .join(" ")}
        </h1>
      </div>

      <div className="card-img">
        <img
          src={detail?.image || ""}
          alt=""
          className="w-full h-[225px] object-cover rounded-2xl"
          loading="lazy"
        />
      </div>

      <div
        className="
          card-content;
          py-4 px-5
          relative
          mt-2
        "
      >
        <div
          className="liquid-glass--edge"
          style={{
            boxShadow:
              "inset 3px 3px 3px 0 rgba(255, 255, 255, .05), inset -3px -3px 3px 0 rgba(255, 255, 255, .05)",
          }}
        />
        <h3 className="text-white text-[1.5rem]">{detail?.title}</h3>
        <p className="text-white text-[.8rem]">
          {detail?.description?.slice(0, 100)}...
        </p>

        <div className="price pt-3">
          <span className="text-tertiary_color text-[1.2rem]">
            $ {detail?.price?.toLocaleString()}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="airframe flex flex-col items-center gap-2 bg-[#262626] py-2 rounded-lg">
            <span className="text-white 2xl:px-4 xl:px-3 lg:px-2 xl:text-[.8rem] lg:text-[.6rem] rounded-full">
              Airframe
            </span>
            <span className="text-white xl:text-[.8rem] lg:text-[.6rem]">
              {detail?.airframe}
            </span>
          </div>
          <div className="airframe flex flex-col items-center gap-2 bg-[#262626] py-2 rounded-lg">
            <span className="text-white 2xl:px-4 xl:px-3 lg:px-2 xl:text-[.8rem] lg:text-[.6rem] rounded-full">
              Engine
            </span>
            <span className="text-white xl:text-[.8rem] lg:text-[.6rem]">
              {detail?.engine}
            </span>
          </div>
          <div className="airframe flex flex-col items-center gap-2 bg-[#262626] py-2 rounded-lg">
            <span className="text-white 2xl:px-4 xl:px-3 lg:px-2 xl:text-[.8rem] lg:text-[.6rem] rounded-full">
              Propeller
            </span>
            <span className="text-white xl:text-[.8rem] lg:text-[.6rem]">
              {detail?.propeller}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
