import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Button from "./Button";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="container py-10 space-x-4">
      <div className="w-full">
        <Swiper
          spaceBetween={30}
          slidesPerView={"auto"}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Pagination, Autoplay]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {[1, 2].map((slide) => (
            <SwiperSlide key={slide}>
              <div className="flex items-center p-4 space-x-8 h-full">
                {/* Main Card */}
                <motion.div
                  className="
                  card
                  relative
                  w-[35%] ml-[10%] mr-[5%]
                  ease-in-out
                  p-8 min-h-[300px]
                  bg-primary_color bg-opacity-10
                  backdrop-blur-[20px]
                  border-2 border-[#fff] border-opacity-20
                  rounded-lg
                  transition-transform
                  duration-300
                  bg-white/5
                "
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Reflection under card */}
                  <div
                    className="
                      absolute
                      -bottom-8
                      left-0
                      w-full
                      h-1/2
                      bg-white/10
                      backdrop-blur-sm
                      rounded-xl
                      rotate-x-180
                      opacity-40
                      scale-y-[-1]
                      blur-sm
                      z-0
                    "
                  ></div>

                  {/* Glass boxes row */}
                  <motion.div
                    className="flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.2,
                        },
                      },
                    }}
                  >
                    {/* Box One */}
                    <motion.div
                      className="box-one relative w-[100px] h-[100px] flex items-center justify-center"
                      variants={{
                        hidden: { scale: 0 },
                        visible: {
                          scale: 1,
                          transition: { duration: 0.5, ease: "easeOut" },
                        },
                      }}
                      animate={{
                        y: [-20, -30],
                      }}
                      transition={{
                        y: {
                          repeat: Infinity,
                          repeatType: "reverse",
                          duration: 0.8,
                          ease: "easeOut",
                        },
                      }}
                    >
                      <div
                        className="
                          absolute
                          -translate-x-[80px]
                          inset-0
                          bg-primary_color bg-opacity-10
                          backdrop-blur-md
                          rounded-xl
                          border border-white/20
                          flex items-center justify-center
                          text-white
                          text-center
                          hover:scale-105
                          transition-transform
                          duration-300
                          z-10
                        "
                      >
                        <RiDoubleQuotesL size={60} color="#fff" />
                      </div>

                      {/* Reflection */}
                      <div
                        className="
                          absolute
                          -translate-x-[80px]
                          -bottom-6
                          left-0
                          w-full
                          h-1/2
                          bg-white/5
                          backdrop-blur-sm
                          rounded-xl
                          rotate-x-180
                          opacity-40
                          scale-y-[-1]
                          blur-sm
                          z-0
                        "
                      ></div>
                    </motion.div>

                    {/* Box Two */}
                    <motion.div
                      className="box-two relative w-[150px] h-[150px]"
                      variants={{
                        hidden: { scale: 0 },
                        visible: {
                          scale: 1,
                          transition: { duration: 0.5, ease: "easeOut" },
                        },
                      }}
                      animate={{
                        x: [-20, -30],
                      }}
                      transition={{
                        x: {
                          repeat: Infinity,
                          repeatType: "reverse",
                          duration: 0.8,
                          ease: "easeOut",
                        },
                      }}
                    >
                      <div
                        className="
                          absolute
                          inset-0
                          -translate-y-[120px]
                          translate-x-[80px]
                          bg-primary_color bg-opacity-10
                          backdrop-blur-md
                          rounded-xl
                          border border-white/20
                          flex flex-col items-center justify-center
                          text-white
                          text-center
                          hover:scale-105
                          transition-transform
                          duration-300
                          z-10
                        "
                      >
                        <img
                          src="../../public/assets/logo.png 2x"
                          className="max-w-[200px] max-h-[55px] scale-[.85]"
                          alt=""
                        />
                      </div>

                      {/* Reflection */}
                      <div
                        className="
                          absolute
                          -bottom-6
                          -translate-y-[120px]
                          translate-x-[80px]
                          left-0
                          w-full
                          h-1/2
                          bg-white/10
                          backdrop-blur-sm
                          rounded-xl
                          rotate-x-180
                          opacity-40
                          scale-y-[-1]
                          blur-sm
                          z-0
                        "
                      ></div>
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h1 className="text-[2rem] font-extrabold text-white">
                    WANTED: Premier 1A (Two Acquisitions)
                  </h1>
                  <p className="text-white/70 text-sm pb-6 pt-4">
                    Peyton Lindbloom of Mason Amelia Aircraft Sales proudly
                    presents N550BC, an impeccably maintained Citation Bravo
                    that has received exceptional care and attention from its
                    dedicated owner....
                  </p>

                  {/* Bottom box */}
                  <motion.div
                    className="box-three relative w-full h-[100px]"
                    variants={{
                      hidden: { scale: 0 },
                      visible: {
                        scale: 1,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                    }}
                    animate={{
                      y: [-10, -20],
                    }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 0.8,
                        ease: "easeOut",
                      },
                    }}
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        bg-primary_color bg-opacity-10
                        backdrop-blur-md
                        rounded-xl
                        border border-white/20
                        flex flex-col items-center justify-center
                        text-white
                        text-center
                        shadow-[0_0_40px_rgba(255,255,255,0.1)]
                        hover:scale-105
                        transition-transform
                        duration-300
                        z-10
                      "
                      style={{
                        transform: "perspective(800px) rotateX(45deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div className="flex">
                        <span className="text-base px-4">Airframe 2500</span>
                        <span className="text-base px-4">Airframe 2500</span>
                        <span className="text-base px-4">Propeller 2500</span>
                      </div>
                    </div>

                    {/* Reflection */}
                    <div
                      className="
                        absolute
                        -bottom-4
                        left-0
                        w-full
                        h-1/2
                        bg-white/10
                        backdrop-blur-sm
                        rounded-xl
                        rotate-x-180
                        opacity-40
                        scale-y-[-1]
                        blur-sm
                        z-0
                      "
                      style={{
                        transform: "perspective(800px) rotateX(45deg)",
                        transformStyle: "preserve-3d",
                      }}
                    ></div>

                    {/* Shadow */}
                    <div
                      className="
                        absolute
                        bottom-0
                        left-1/2
                        w-40
                        h-8
                        bg-black/40
                        rounded-full
                        blur-2xl
                        -translate-x-1/2
                        translate-y-1/2
                        z-0
                      "
                    ></div>
                  </motion.div>
                </motion.div>

                {/* Carousel Image */}
                <div className="carousel-img w-[50%]">
                  <img
                    src={
                      slide === 1
                        ? "https://static.wixstatic.com/media/04f737_52a32d56f9714148904f44208f37a15c~mv2.jpg/v1/fill/w_476,h_317,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-empty-state.jpg"
                        : "https://static.wixstatic.com/media/04f737_05ff25e3a18b4d6c9b11e1c5acd59c4a~mv2.jpg/v1/fill/w_461,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-empty-state.jpg"
                    }
                    alt=""
                    className="rounded-lg"
                  />
                  <div className="w-full mt-4">
                    <Button buttonLabel="View Details" isWidthFull={true} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
