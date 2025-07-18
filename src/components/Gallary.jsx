import React, { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import GallaryOne from "/images/gallary/image 1.png";
import GallaryTwo from "/images/gallary/image 2.png";
import GallaryThree from "/images/gallary/image 3.png";
import GallaryFour from "/images/gallary/image 4.png";
import GallaryFive from "/images/gallary/image 5.png";
import GallarySix from "/images/gallary/image 6.png";

// Required for screen readers
Modal.setAppElement("#root");

const videoList = [
  {
    id: 1,
    title: "Climb to FL340 in 14 Mins!",
    thumbnail: GallaryOne,
    videoUrl:
      "https://www.youtube.com/watch?v=vQchZx9MvJ8&list=RDvQchZx9MvJ8&start_radio=1",
    duration: "24:10",
  },
  {
    id: 2,
    title: "Is the 940 the Ultimate TBM?",
    thumbnail: GallaryTwo,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
    duration: "08:10",
  },
  {
    id: 3,
    title: "Time to Climb FL270",
    thumbnail: GallaryThree,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    duration: "18:18",
  },
  {
    id: 4,
    title: "Time to Climb FL270",
    thumbnail: GallaryFour,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    duration: "18:18",
  },
  {
    id: 5,
    title: "Time to Climb FL270",
    thumbnail: GallaryFive,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    duration: "18:18",
  },
  {
    id: 6,
    title: "Time to Climb FL270",
    thumbnail: GallarySix,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    duration: "18:18",
  },
  {
    id: 7,
    title: "Time to Climb FL270",
    thumbnail: GallaryOne,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    duration: "18:18",
  },
  {
    id: 8,
    title: "Time to Climb FL270",
    thumbnail: GallaryTwo,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    duration: "18:18",
  },
  {
    id: 9,
    title: "Time to Climb FL270",
    thumbnail: GallaryThree,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    duration: "18:18",
  },
  {
    id: 10,
    title: "Time to Climb FL270",
    thumbnail: GallaryFour,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    duration: "18:18",
  },
  {
    id: 11,
    title: "Time to Climb FL270",
    thumbnail: GallaryFive,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    duration: "18:18",
  },
  {
    id: 12,
    title: "Time to Climb FL270",
    thumbnail: GallarySix,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    duration: "18:18",
  },
];

const Gallary = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (video) => {
    setCurrentVideo(video);
    setIsOpen(true);
  };

  const closeModal = () => {
    setCurrentVideo(null);
    setIsOpen(false);
  };

  return (
    <>
      <section id="gallary" className="w-full py-20">
        <div className="container px-5">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">A Bespoke Approach to Brokerage</h1>
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
            modules={[EffectCoverflow]}
            className="mySwiper"
          >
            {videoList.map((video) => (
              <SwiperSlide
                key={video.id}
                className="relative w-[300px]"
                // onClick={() => openModal(video)}
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
          {/* <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Video Modal"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
            overlayClassName="z-[9999999] fixed inset-0 bg-black bg-opacity-80"
          >
            <div className="relative w-[90%] md:w-[60%] h-[60vh]">
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 text-white text-4xl font-bold p-2 z-[999]"
              >
                &times;
              </button>
              {currentVideo && (
                <iframe
                  width="100%"
                  height="100%"
                  src={currentVideo.videoUrl}
                  title="Video Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </Modal> */}
        </div>
      </section>
    </>
  );
};

export default Gallary;
