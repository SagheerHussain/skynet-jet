import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Higher from "../components/Higher";
import bgPlane from "/images/acquisition/banner.avif"; // Replace with your path
import Gallary from "../components/Gallary";
import ScrollToTop from "../components/ScrollToTop";

const HigherPage = () => {
  return (
    <>
      <section
        className="relative w-full bg-cover bg-center flex justify-center rounded-[20px] z-[10]"
        style={{ backgroundImage: `url(${bgPlane})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[-1]"></div>
        <div className="container px-5">
          <Navbar />
          <Higher />
          <Gallary />
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HigherPage;
