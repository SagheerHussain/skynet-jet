import React from "react";
import teamBanner from "/images/meet-team.png";
import { motion } from "framer-motion";
import Button from "./Button";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import useMediaQuery from '@mui/material/useMediaQuery';

const MeetTheTeam = () => {
  const words = [
    {
      text: "The",
    },
    {
      text: "Team",
    },
  ];

  const media = useMediaQuery("(max-width: 768px)");


  return (
    <>
      <section id="meetTheTeam" className="py-20">
        <div className="container px-5">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold uppercase opacity-30 flex items-center">
            <span
              className="text-transparent stroke-text"
              style={{
                WebkitTextStroke: "2px #fff",
              }}
            >
              Meet
            </span>
            <TypewriterEffectSmooth words={words} />
          </h2>

          <div className="md:flex items-center justify-center">
            <div className="team-content md:w-[40%] lg:w-[30%]">
              <div className="glass-container glass-container--rounded px-4 py-3">
                <div className="glass-filter"></div>
                <div className="glass-overlay"></div>
                <div className="glass-specular"></div>

                <div className="glass-content glass-content--inline justify-center">
                  <div className="team-content--inner">
                    <h2 className="text-white md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight text-center space-y-2">
                      <motion.span
                        initial={{ y: media ? -20 : -40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          delay: 0.6,
                        }}
                        className="block"
                      >
                        From
                      </motion.span>

                      <motion.span
                        initial={{ y: media ? -30 : -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          delay: 0.4,
                        }}
                        className="block"
                      >
                        San Antonio
                      </motion.span>

                      <motion.span
                        initial={{ y: media ? -40 : -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          delay: 0.2,
                        }}
                        className="block"
                      >
                        to
                      </motion.span>

                      <motion.span
                        initial={{ y: media ? -50 : -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          delay: 0,
                        }}
                        className="block"
                      >
                        Duluth
                      </motion.span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button buttonLabel="Meet The Team" isWidthFull={true} onClick="/team" />
              </div>
            </div>
            <div className="team-banner md:w-[60%] lg:w-[70%] grayscale-[100%] hover:grayscale-0 transition-all duration-500">
              <img src={teamBanner} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetTheTeam;
