import React, { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Thumbs, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import GallaryOne from "/images/gallary/image 1.png";
import GallaryTwo from "/images/gallary/image 2.png";
import GallaryThree from "/images/gallary/image 3.png";
import GallaryFour from "/images/gallary/image 4.png";
import GallaryFive from "/images/gallary/image 5.png";
import GallarySix from "/images/gallary/image 6.png";

Modal.setAppElement("#root");

const videoList = [
  {
    id: 1,
    title: "Climb to FL340 in 14 Mins!",
    thumbnail: GallaryOne,
    videoUrl: "https://www.youtube.com/embed/jWF2y3qpudo",
    duration: "24:10",
  },
  {
    id: 2,
    title: "Is the 940 the Ultimate TBM?",
    thumbnail: GallaryTwo,
    videoUrl: "https://www.youtube.com/embed/jWF2y3qpudo",
    duration: "08:10",
  },
  {
    id: 3,
    title: "Time to Climb FL270",
    thumbnail: GallaryThree,
    videoUrl: "https://www.youtube.com/embed/jWF2y3qpudo",
    duration: "18:18",
  },
  {
    id: 4,
    title: "Another Aviation Clip",
    thumbnail: GallaryFour,
    videoUrl: "https://www.youtube.com/embed/jWF2y3qpudo",
    duration: "12:40",  
  },
  {
    id: 5,
    title: "Flight Training Review",
    thumbnail: GallaryFive,
    videoUrl: "https://www.youtube.com/embed/jWF2y3qpudo",
    duration: "15:30",
  },
  {
    id: 6,
    title: "Test Flight Recap",
    thumbnail: GallarySix,
    videoUrl: "https://www.youtube.com/embed/jWF2y3qpudo",
    duration: "11:00",
  },
];

const Gallary = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <>
      <section id="gallary" className="w-full py-20">
        <div className="container px-5">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">
              A Bespoke Approach to Brokerage
            </h1>
            <p className="text-base max-w-2xl mx-auto mt-4">
              Explore our curated video library showcasing real-world
              performance, cockpit experiences, and expert reviews of the
              aircraft we represent. Whether you're looking to buy, sell, or
              simply understand the true value of each model, our videos offer
              unmatched transparency and insight into the world of
              high-performance aviation.
            </p>
          </div>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 4,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation]}
            navigation
            className="mySwiper"
          >
            {videoList.map((video,index) => (
              <SwiperSlide
                key={video.id}
                className="relative w-[300px]"
                onClick={() => openModal(index)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="rounded-lg"
                />
                <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className="absolute bottom-2 left-2 bg-black text-white text-sm font-bold px-2 py-1 rounded">
                  {video.title}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Modal */}
          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            contentLabel="Video Gallery Modal"
            className="fixed inset-0 flex items-center justify-center bg-black/90 z-[999]"
            overlayClassName="z-[9999]"
          >
            <div className="bg-black p-4 rounded-lg w-[95%] md:w-[80%] max-w-5xl">
              <button
                onClick={closeModal}
                className="text-white text-3xl font-bold absolute top-5 right-8"
              >
                &times;
              </button>

              {/* Main Video */}
              <div className="aspect-video mb-6">
                <iframe
                  src={videoList[currentIndex].videoUrl}
                  title={videoList[currentIndex].title}
                  allowFullScreen
                  className="w-full h-full rounded"
                ></iframe>
              </div>

              {/* Thumbnails */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper"
              >
                {videoList.map((video, i) => (
                  <SwiperSlide key={video.id} className="cursor-pointer">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className={`rounded w-full h-[80px] object-cover border-2 ${
                        currentIndex === i
                          ? "border-blue-500"
                          : "border-transparent"
                      }`}
                      onClick={() => setCurrentIndex(i)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default Gallary;
