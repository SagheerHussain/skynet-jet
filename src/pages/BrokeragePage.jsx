import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Brokerage from "../components/Brokerage";
import bgPlane from "/images/brokerage/banner.avif"; // Replace with your path
import ScrollToTop from "../components/ScrollToTop";

const BrokeragePage = () => {
  return (
    <>
      <section
        className="relative w-full bg-cover bg-center flex justify-center rounded-[20px]"
        style={{ backgroundImage: `url(${bgPlane})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[0]"></div>
        <div className="container px-5">
          <Navbar />
          <Brokerage />
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default BrokeragePage;
