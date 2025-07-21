import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Skynet = () => {
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

        <div className="glass-content glass-content--inline text-start w-full">
          <div className="md:p-8 py-8 px-2 w-[90%] md:w-[100%] text-white">
            <em className="text-2xl md:text-3xl font-bold text-tertiary_color">
              SkyNet
            </em>
            <p className="font-semibold text-lg mb-8 mt-4">
              Pricing Intelligence by Mason Amelia:
            </p>
            <ol className="list-none list-inside space-y-4 text-base text-gray-200">
              <li className="mb-2">
                “Hold on, John Connor!” because Mason Amelia’s proprietary
                aircraft pricing app, SkyNet, employs a proprietary means of
                collecting, analyzing, and presenting transaction data. With no
                MLS substitute, this private data is the lifeblood that empowers
                our buyers and sellers.
              </li>
              <li className="mb-2">
                Simply put, you have peace in mind in the deal you’re getting
                with Mason Amelia.
              </li>
            </ol>
            <div className="mt-6">
              <Button buttonLabel="Request Valuation" onClick="/contact" />
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
              <img
                src={
                  "https://static.wixstatic.com/media/04f737_459be72ae9a346f4b1e06393b2ab85ba~mv2.png/v1/fill/w_376,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Skynet.png"
                }
                alt="SkyNet Logo"
                className="w-full max-h-[400px] rounded-2xl object-cover"
              />
              <img
                src={
                  "https://static.wixstatic.com/media/04f737_9ca4fc0aecf74814afc789140f3aea50~mv2.png/v1/fill/w_558,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_9ca4fc0aecf74814afc789140f3aea50~mv2.png"
                }
                alt="SkyNet Data"
                className="w-full max-h-[400px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skynet;
