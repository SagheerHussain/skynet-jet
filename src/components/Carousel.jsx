import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaPlane } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
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
            delay: 2500,
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
                {/* Main Card with glassmorphism + 3D blue shadow */}
                <div
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
                >
                  {/* Reflection under the main card */}
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
                  <div className="flex">
                    {/* Box One (Quote Icon) */}
                    <div className="box-one relative w-[100px] h-[100px] flex items-center justify-center">
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

                      {/* Shadow on floor */}
             
                    </div>

                    {/* Box Two (Logo Image) */}
                    <div className="box-two relative w-[150px] h-[150px]">
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

                      {/* Shadow on floor */}
                
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="text-[2rem] pb-10 font-extrabold text-white">
                    WANTED: Premier 1A (Two Acquisitions)
                  </h1>

                  {/* Bottom trapezium card */}
                  <div className="box-three relative w-full h-[100px]">
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
                      <p className="text-sm px-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ducimus cupiditate odio unde nam.
                      </p>
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

                    {/* Shadow on floor */}
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
                  </div>
                </div>

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

export default Carousel;
