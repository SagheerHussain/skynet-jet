import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="py-40"
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-tertiary_color mb-4">
              Mason Amelia
            </h2>
            <ol className="list-none list-inside font-light space-y-4 text-base text-gray-200">
              <li className="mb-2">
                Mason Amelia is affectionately named after Jesse Adams’
                children, Mason Maverick and Amelia Avery - clearly aviation
                inspired! Naming a company after your kids really puts it all
                out and aligns with the values of trust and transparency. It
                also symbolizes a personal commitment to our client's
                satisfaction. While Jesse’s professional aviation experience
                dates back a few decades, Mason Amelia was initially created as
                a recruiting spin-off from the Adams brothers’ success,
                Sagacious Consultants, which was acquired in 2015 by Accenture.
                Then, something remarkable happened when Jesse began recruiting
                for an aviation sales position...
              </li>
              <li className="mb-2">
                Back into aviation with purpose and fueled by passion, his
                nearly five year tenure at the world's largest brokerage,
                Aerista, afforded him a wealth of experience and professional
                growth, where he led 200+ transactions around the globe, across
                the piston & owner-flown turbine markets. Jesse saw the
                opportunity for something bigger...
              </li>
              <li className="mb-2">
                In 2023, Jesse Adams founded the aircraft brokerage, Mason
                Amelia, LLC. What started as a solo venture has since grown to a
                nationwide team of five sales professionals, with Mason Amelia
                representing aircraft and clients coast to coast. Their YouTube
                channel, Looking for Higher, has become a go-to resource for
                buyers, sellers, and dreamers alike — helping raise the bar (and
                the production value) for aircraft sales marketing everywhere.
                Mason Amelia has experienced incredible growth, and boasts being
                the country's fastest growing aircraft brokerage!
              </li>
            </ol>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
