import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import bgPlane from "/images/brokerage/banner.avif"; // Replace with your path

const TestimonialPage = () => {
  return (
    <>
      <section
        className="relative w-full bg-cover bg-center flex justify-center z-[10]"
        style={{ backgroundImage: `url(${bgPlane})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[-1]"></div>
        <div className="container px-5">
          <Navbar />
          <Reviews />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TestimonialPage;
