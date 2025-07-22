import React from "react";
import bannerOne from "/images/showcase/one.avif";
import bannerTwo from "/images/showcase/two.avif";
import bannerThree from "/images/showcase/three.avif";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay, Keyboard } from "swiper/modules";
import Button from "./Button";

const SliderWrapper = () => {
  const pagination = {
    clickable: true,
  };

  const slides = [
    {
      img: bannerOne,
      title: (
        <>
          <span className="bg-gradient-to-r from-[#da5c0d] to-[#ffa251] bg-clip-text text-transparent">Aircraft Transactions</span> are
          complex and involve significant financial exposure.
        </>
      ),
    },
    {
      img: bannerTwo,
      title: (
        <>
          Mason Amelia is your expert wingman with a{" "}
          <span className="bg-gradient-to-r from-[#da5c0d] to-[#ffa251] bg-clip-text text-transparent">Proven Track Record</span> and
          reputation.
        </>
      ),
    },
    {
      img: bannerThree,
      title: (
        <>
          Our <span className="bg-gradient-to-r from-[#da5c0d] to-[#ffa251] bg-clip-text text-transparent">scrupulous oversight</span>{" "}
          and personalized service gets the most out of your transaction.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="slider-wrapper relative py-0">
        {/* 🔵 Curved overlay full width with curve on both ends */}

        <Swiper
          modules={[Pagination, Navigation, Keyboard]}
          pagination={pagination}
          navigation
          loop={true}
          keyboard={{ enabled: true }}
          className="mySwiper"
        >
          {slides.map((banner) => (
            <SwiperSlide
              key={banner.title}
              className="overflow-hidden"
              style={{
                backgroundImage: `url(${banner.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "400px",
              }}
            >
              <div className="overlay absolute top-0 left-0 w-full h-full bg-[#0000009a]"></div>

              <motion.div
                initial={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 60, duration: 2 }}
                whileInView={{ scale: 1 }}
                viewport={{ amount: 0.1, once: false }}
                className="w-full sm:max-w-[75%] lg:max-w-[50%] mx-auto banner-content flex items-center justify-center relative overflow-hidden"
              >
                <div className="flex items-center justify-center w-full h-full p-4">
                  <div
                    className="glass-container glass-container--rounded px-4 py-3"
                    style={{ border: "none" }}
                  >
                    <div className="glass-filter"></div>
                    <div
                      className="glass-overlay"
                      style={{ background: "#00000045" }}
                    ></div>
                    <div className="glass-specular"></div>
                    <div className="glass-content glass-content--inline justify-center">
                      <div className="relative rounded-xl flex flex-col items-center justify-center text-center p-4 h-full w-full">
                        <h2 className="text-lg lg:text-xl xl:text-2xl font-semibold text-white mb-4">
                          {banner.title}
                        </h2>
                        <Button buttonLabel="Let Us Help" onClick="/contact" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SliderWrapper;
