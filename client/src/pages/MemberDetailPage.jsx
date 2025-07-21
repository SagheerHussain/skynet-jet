import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgPlane from "/images/team/banner.avif"; // Replace with your path
import TeamDetail from "../components/TeamDetail";
import ScrollToTop from "../components/ScrollToTop";

const MemberDetailPage = () => {
  return (
    <>
      <section
        className="relative w-full bg-cover bg-center flex justify-center z-[10]"
        style={{ backgroundImage: `url(${bgPlane})` }}
      >
        <div className="absolute top-0 left-0 w-full bg-black h-full opacity-90 z-[-1]"></div>
        <div className="container">
          <Navbar />
          <TeamDetail />
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default MemberDetailPage;
