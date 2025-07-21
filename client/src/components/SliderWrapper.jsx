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
import { Pagination, Navigation } from "swiper/modules";
import Button from "./Button";

const SliderWrapper = () => {
  const pagination = {
    clickable: true,
  };

  return (
    <>
      <div className="slider-wrapper relative py-0">
        {/* 🔵 Curved overlay full width with curve on both ends */}

        <Swiper
          modules={[Pagination, Navigation]}
          pagination={pagination}
          navigation
          className="mySwiper"
        >
          {[bannerOne, bannerTwo, bannerThree].map((banner) => (
            <SwiperSlide
              key={banner}
              className="overflow-hidden"
              style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="overlay absolute top-0 left-0 w-full h-full bg-[#0000009a]"></div>

              <div className="sm:flex hidden absolute items-center justify-center top-[-230px] left-[-150px] w-[400px] h-[400px] rounded-[50%] bg-[#11121977] z-[1]"></div>
              <div className="sm:block hidden absolute top-0 2xl:left-[-1%] lg:left-[-1.5%] md:left-[-2%] sm:left-[-2.5%] z-[10] max-w-[250px] max-h-[250px]">
                <img
                  src="https://static.wixstatic.com/media/04f737_e93964b7810f46d7bab986687486d898~mv2.png/v1/fill/w_180,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_e93964b7810f46d7bab986687486d898~mv2.png%201x,%20https://static.wixstatic.com/media/04f737_e93964b7810f46d7bab986687486d898~mv2.png/v1/fill/w_360,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_e93964b7810f46d7bab986687486d898~mv2.png%202x"
                  alt=""
                  className="object-contain scale-[.8]"
                />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 60, duration: 2 }}
                whileInView={{ scale: 1 }}
                viewport={{ amount: 0.1, once: false }}
                className="w-full sm:max-w-[50%] mx-auto banner-content flex items-center justify-center relative overflow-hidden"
              >
                <div className="flex items-center justify-center w-full h-full p-4">
                  <div className="glass-container glass-container--rounded px-4 py-3">
                    <div className="glass-filter"></div>
                    <div className="glass-overlay"></div>
                    <div className="glass-specular"></div>
                    <div className="glass-content glass-content--inline justify-center">
                      <div
                        className="
                        relative
                        rounded-xl flex flex-col items-center justify-center
                        text-center p-4
                        h-full w-full
                      "
                      >
                        <h2 className="text-xl text-white mb-4">
                          Aircraft transactions are complex and involve
                          significant financial exposure.
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
