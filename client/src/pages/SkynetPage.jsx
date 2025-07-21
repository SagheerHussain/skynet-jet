import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skynet from "../components/Skynet";
import bgPlane from "/images/skynet/banner.avif"; // Replace with your path
import ScrollToTop from "../components/ScrollToTop";

const SkynetPage = () => {
  return (
    <>
      <section
        className="relative w-full h-full bg-cover bg-center flex justify-center rounded-[20px] z-[10]"
        style={{ backgroundImage: `url(${bgPlane})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[-1]"></div>
        <div className="container px-5">
          <Navbar />
          <Skynet />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SkynetPage;
