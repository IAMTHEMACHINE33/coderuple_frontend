import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Navigation, Pagination } from "swiper";
// import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import softwareDev from "@/Images/software-developer.png";
import webdev from "@/Images/webdev.png";

const SwiperUI = () => {
  return (
    <Swiper
      // pagination={{
      //   clickable: true,
      // }}
      className="carousel-slider"
      parallax={true}
      speed={600}
      modules={[Parallax, Pagination, Navigation]}
      navigation={true}
    >
      <Image
        className=" absolute top-0 left-0 w-[130%] max-w-none  h-screen object-cover "
        slot="container-start"
        src={softwareDev}
        data-swiper-parallax="-23%"
        alt="carousel.jpgs"
      />

      <SwiperSlide>
        <div className=" sm:justify-center flex h-screen ">
          <div
            className=" flex flex-col  gap-4 sm:gap-8  items-center sm:items-start text-center sm:text-start  responsive-container absolute top-[25%] lg:top-[39%] text-white"
            data-swiper-parallax="-300"
          >
            <div className="flex flex-col gap-3 sm:gap-7 items-center sm:items-start ">
              <h1 className="text-4xl sm:text-7xl font-semibold">
                Welcome to Coderuple,
              </h1>
              <h2 className="text-2xl sm:text-5xl font-light px-2">
                Where your digital needs come to life!              </h2>
              <p className="lg:w-1/2 text-3xl  sm:text-lg font-extralight px-2">
                We deliver high-quality products and services ensuring all our customers are satisfied.
              </p>
            </div>
            <button className="rounded-full bg-[#6096BA] p-3 sm:w-1/5 mx-2">
              Read More
            </button>
          </div>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div
          className="justify-center flex h-screen"
          data-swiper-parallax="-200"
        >
          <div className=" flex flex-col gap-5   items-center sm:items-start text-center sm:text-start  responsive-container absolute top-1/3 text-white">
            <h1 className="text-4xl sm:text-7xl font-semibold">
              Hero main title
            </h1>
            <div className="flex flex-col gap-2 items-center sm:items-start ">
              <h2 className="text-2xl sm:text-5xl font-extralight">
                Is this working?
              </h2>
              <p
                className="w-1/2  text-sm sm:text-base
            "
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Torem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <button className="rounded-full bg-[#6096BA] p-3 sm:w-1/5 w-1/3">
              Read More
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="justify-center flex h-screen"
          data-swiper-parallax="-100"
        >
          <div className=" flex flex-col gap-5   items-center sm:items-start text-center sm:text-start  responsive-container absolute top-1/3 text-white">
            <h1 className="text-4xl sm:text-7xl font-semibold">
              Hero main title
            </h1>
            <div className="flex flex-col gap-2 items-center sm:items-start ">
              <h2 className="text-2xl sm:text-5xl font-extralight">
                This is working!
              </h2>
              <p
                className="w-1/2 text-sm sm:text-base
            "
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Torem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <button className="rounded-full bg-[#6096BA] p-3 sm:w-1/5 w-1/3">
              Read More
            </button>
          </div>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
};

export default SwiperUI;
