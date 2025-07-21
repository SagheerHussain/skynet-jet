import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import bgPlane from "/images/contact.png";
import ScrollToTop from "../components/ScrollToTop";

const ContactPage = () => {
  return (
    <>
      <section
        className="relative w-full bg-cover bg-center pb-20 flex justify-center rounded-[20px]"
        style={{
          backgroundImage: `url(${bgPlane})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[0]"></div>
        <div className="container px-5">
          <Navbar />
          <Contact />
        </div>
      </section>  
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ContactPage;
