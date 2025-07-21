import React from "react";
import Navbar from "./Navbar";
import BlurText from "./ui/BlurText";
import ShinyText from "./ui/ShinyText";

const Banner = ({ url }) => {
  return (
    <>
      <div
        className="bg-img w-full h-[70vh] relative z-[1]"
        style={{
          backgroundImage: "url('/images/showroom/Banner.png')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay bg-black opacity-60 absolute top-0 left-0 w-full h-full z-[-1]"></div>
        <div className="container px-5">
          <Navbar />
          <div className="banner-content flex flex-col items-center justify-center h-[70vh] z-[2]">
            {/* <h1 className="text-white text-6xl font-bold">Discover the Future of Flight</h1> */}
            <BlurText
              text="Discover the Future of Flight"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            />
            <ShinyText
              text="Experience the thrill of aviation like never before"
              disabled={false}
              speed={5}
              className="custom-class text-2xl mt-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
