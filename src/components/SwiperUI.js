import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import softwareDev from "@/Images/software-developer.png";
import webdev from "@/Images/webdev.png";

const SwiperUI = () => {
  return (
    <Swiper
      spaceBetween={2}
      slidesPerView={1}
      //   pagination={{
      //     dynamicBullets: true,
      //     clickable: true,
      //   }}
      className="carousel-slider"
      loop={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      navigation={true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="justify-center flex">
          <Image
            src={softwareDev}
            alt="Picture of the author"
            className="h-screen w-full object-cover"
          />
          <div className=" flex flex-col gap-5   items-center sm:items-start text-center sm:text-start  responsive-container absolute top-1/3 text-white">
            <h1 className="text-4xl sm:text-7xl font-black">Hero main title</h1>
            <div className="flex flex-col gap-2 items-center sm:items-start ">
              <h2 className="text-2xl sm:text-5xl font-extralight">
                Hero subtitle description
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
      </SwiperSlide>
      <SwiperSlide>
        <div className="justify-center flex">
          <div className="h-screen w-full object-cover bg-[#17344A]" />
          <div className=" flex flex-col gap-5   items-center sm:items-start text-center sm:text-start  responsive-container absolute top-1/3 text-white">
            <h1 className="text-4xl sm:text-7xl font-black">Hero main title</h1>
            <div className="flex flex-col gap-2 items-center sm:items-start ">
              <h2 className="text-2xl sm:text-5xl font-extralight">
                Hero subtitle description
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
        <div className="justify-center flex">
          <Image
            src={webdev}
            alt="Picture of the author"
            className="h-screen w-full object-cover "
          />
          <div className=" flex flex-col gap-5   items-center sm:items-start text-center sm:text-start  responsive-container absolute top-1/3 text-white">
            <h1 className="text-4xl sm:text-7xl font-black">Hero main title</h1>
            <div className="flex flex-col gap-2 items-center sm:items-start ">
              <h2 className="text-2xl sm:text-5xl font-extralight">
                Hero subtitle description
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
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperUI;
