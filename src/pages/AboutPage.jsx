import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import bgPlane from "/images/about/banner.avif"; // Replace with your path
import ScrollToTop from "../components/ScrollToTop";

const AboutPage = () => {
  return (
    <>
      <section
        className="relative w-full bg-cover bg-center flex justify-center rounded-[20px]"
        style={{ backgroundImage: `url(${bgPlane})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[0]"></div>
        <div className="container px-5">
          <Navbar />
          <About />
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AboutPage;
