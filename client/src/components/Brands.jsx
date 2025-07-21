import React from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

import branOne from "/images/brands/cirrus.avif";
import branTwo from "/images/brands/tbm.avif";
import branThree from "/images/brands/pilatus.avif";
import branFour from "/images/brands/epic.avif";
import branFive from "/images/brands/diamond.avif";
import branSix from "/images/brands/beechcraft.avif";

const Brands = () => {
  const brands = [branOne, branTwo, branThree, branFour, branFive, branSix];
  const baseImages = [...brands, ...brands]; // Duplicate for seamless looping

  const xRef = useRef(0);
  const containerRef = useRef(null);

  useAnimationFrame((t, delta) => {
    if (containerRef.current) {
      xRef.current -= 0.05 * delta; // adjust speed here
      containerRef.current.style.transform = `translateX(${xRef.current}px)`;

      const containerWidth = containerRef.current.scrollWidth / 2;
      if (Math.abs(xRef.current) >= containerWidth) {
        xRef.current = 0;
      }
    }
  });

  return (
    <div className="overflow-hidden w-full py-8">
      <div className="w-max flex" ref={containerRef}>
        {baseImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`brand-${index}`}
            className="w-40 h-24 object-contain mx-12"
            draggable={false}
            style={{
                filter: 'brightness(0) invert(1)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
