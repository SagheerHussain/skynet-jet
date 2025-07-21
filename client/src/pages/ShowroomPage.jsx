import React from "react";
import Slider from "../components/Slider";
import Listing from "../components/Listing";
import Banner from "../components/Banner";
import CTA from "../components/CTA";
import Footer from "../components/Footer";  
import ScrollToTop from "../components/ScrollToTop";

const ShowroomPage = () => {
  return (
    <>
      <Banner url="/images/showroom/Banner.png" />
      <Slider />
      <Listing />
      <CTA />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ShowroomPage;
