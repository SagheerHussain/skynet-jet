import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const Higher = () => {
  return (
    <motion.div
      className="pt-40 pb-20"
      whileInView={{ y: 0 }}
      initial={{ y: 100 }}
      transition={{ type: "spring", stiffness: 120, duration: 2 }}
    >
      {/* Overlay card */}
      <div className="glass-container flex items-center glass-container--rounded px-4 py-3">
        <div className="glass-filter"></div>
        <div className="glass-overlay"></div>
        <div className="glass-specular"></div>

        <div className="glass-content glass-content--inline text-start">
          <div className="md:p-8 py-8 px-2 w-[90%] md:w-[100%] text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-tertiary_color mb-2">
              Looking For Higher On Youtube
            </h2>
            <ol className="list-none list-inside space-y-4 text-base text-gray-200">
              <li className="mb-2">
                At Mason Amelia, we’re more than brokers; we’re storytellers.
                While there are many brokers out there, few live truer to the
                aviation lifestyle than our founder, Jesse Adams, who started
                the YouTube channel, Looking for Higher, which now serves as
                Mason Amelia's video marketing platform. On the channel, you
                will find insights on the true experience of aircraft ownership—
                from transitioning into a turbine to the freedom of flying
                family across the country.
              </li>
              <li className="mb-2">
                Every video we create tells the unique story of each aircraft we
                represent, bringing its personality and capabilities to life in
                ways that resonate with prospective buyers. This storytelling
                approach is powerful and essential in today’s market, where a
                listing alone doesn’t cut it. If your broker isn’t crafting a
                marketing plan as compelling as the plane itself, they’re not
                truly selling it.
              </li>
              <li className="mb-2">
                When you partner with Mason Amelia, you're not just getting a
                brokerage—you’re getting a full-service, marketing-driven
                strategy to maximize visibility and find the right buyer.
              </li>
            </ol>
            {/* <div className="mt-6">
              <Button buttonLabel="V1 Rotate" />
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Higher;
