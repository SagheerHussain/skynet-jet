import React from "react";
import GlassCard from "./GlassCard";
import GlassmorphismCircularCard from "./GlassmorphismCircularCard";
import GlassIcon from "./GlassIcon";
import { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";
import { FaPlane, FaHandsHelping } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

const HeroSection = () => {
  const cardsWrapperRef = useRef(null);

  useEffect(() => {
    if (cardsWrapperRef.current) {
      gsap.fromTo(
        cardsWrapperRef.current.children,
        { y: 30, autoAlpha: 0, scale: 0.8 },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="w-full flex relative 1.5xl:h-screen lg:h-[120vh] extra-sm:h-[120vh] h-[200vh]">
      {/* Video Background */}

      {/* Glass Layer */}
      <div
        className="
            w-full h-full
            flex justify-center
            relative z-10
          "
      >
        <div
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{
            filter: "drop-shadow(20px 10px 15px rgba(255, 255, 255, 0.2))",
          }}
        >
          <div className="w-full h-full overflow-hidden">
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <video
              className="w-full h-full object-cover"
              loop
              muted
              autoPlay
              playsInline
            >
              <source src="/assets/file.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="container z-20 px-4">
          {/* Navbar */}
          <Navbar />
          <div className="relative flex lg:flex-row flex-col lg:justify-between justify-center items-center text-center text-white space-y-4 my-auto 1.5xl:h-[calc(100vh-10vh)] lg:h-[calc(120vh-10vh)] extra-sm:h-screen h-full">
            <div className="relative w-full lg:w-[75%]">
              <GlassCard />
            </div>
            <div
              className="lg:w-[20%] lg:relative 3xl:h-[calc(90vh-270px)] 2xl:h-[calc(90vh-150px)] xl:h-[calc(90vh-120px)] lg:h-[calc(90vh-0px)] extra-sm:h-[30vh] h-screen w-full flex lg:flex-col extra-sm:flex-row flex-col items-center justify-center lg:space-x-0 extra-sm:space-x-4 lg:space-y-12 extra-sm:space-y-20 space-y-4"
              ref={cardsWrapperRef}
            >
              {/* 3 Glassmorphism Circular Cards with responsive positions and sizes */}
              <GlassmorphismCircularCard
                title="Sell My Plane"
                tagline="Aircraft Brokerage Services"
                icon={
                  <FaPlane
                    size={44}
                    color="#fff"
                    className="-rotate-45 -mt-8"
                  />
                }
                customClasses="w-full h-full mt-20"
              />
              <GlassmorphismCircularCard
                title="Buy My Plane"
                tagline="Acquisition Services"
                icon={<FaUsers size={44} color="#fff" className="-mt-8" />}
                customClasses="w-full h-full"
              />
              <GlassmorphismCircularCard
                title="Advisory"
                tagline="Legal • Sales Tax • Insurance"
                icon={
                  <FaHandsHelping size={44} color="#fff" className="-mt-8" />
                }
                customClasses="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
