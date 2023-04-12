import Image from "next/image";
import logo from "../../Images/logo.png";
import company from "../../Images/company.jpg";
import "swiper/css/pagination";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
const Testimonials = () => {
  return (
    <>
      <div className="relative flex justify-center my-10">
        <div className="flex flex-col gap-10 responsive-container">
          <div>
            <h1 className="capitalize text-5xl font-semibold">
              Ask our clients
            </h1>
          </div>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex flex-col gap-5 p-5 text-center items-center ">
                  <div className="rounded-full">
                    <Image
                      src={logo}
                      className=" border-2 w-1/2 h-1/2 object-contain"
                    />
                  </div>
                  <p className="leading-tight">
                    "1.We design experiences that are personalized to your
                    user's context and motivations. We use design thinking and
                    it leads to design that"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                voluptatibus placeat fugiat id enim facilis quo dolorum iure
                exercitationem autem magnam itaque animi, suscipit porro quia
                vitae iusto totam! Tempore.
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col gap-5 p-5 text-center items-center ">
                  <Image
                    src={company}
                    className="rounded-full object-contain w-1/2 h-1/2 border-2"
                  />

                  <p className="leading-tight">
                    "2.We design experiences that are personalized to your
                    user's context and motivations. We use design thinking and
                    it leads to design that"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                voluptatibus placeat fugiat id enim facilis quo dolorum iure
                exercitationem autem magnam itaque animi, suscipit porro quia
                vitae iusto totam! Tempore.
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="flex flex-col gap-5 p-5 text-center items-center ">
                  <Image
                    src={logo}
                    className="rounded-full border-2 w-1/2 h-1/2"
                  />
                  <p className="leading-tight">
                    "3.We design experiences that are personalized to your
                    user's context and motivations. We use design thinking and
                    it leads to design that"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                voluptatibus placeat fugiat id enim facilis quo dolorum iure
                exercitationem autem magnam itaque animi, suscipit porro quia
                vitae iusto totam! Tempore.
              </SwiperSlide>
            </Swiper>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-5 justify-between">
            <div className="flex flex-col gap-5 text-center items-center ">
              <Image src={logo} className="rounded-full border-2 w-1/2 h-1/2" />
              <p className="leading-tight">
                "We design experiences that are personalized to your user's
                context and motivations. We use design thinking and it leads to
                design that"
              </p>
            </div>
            <div className="flex flex-col text-center ">
              <p>
                "We design experiences that are personalized to your user's
                context and motivations. We use design thinking and it leads to
                design that"
              </p>
            </div>
            <div className="flex flex-col text-center ">
              <p>
                "We design experiences that are personalized to your user's
                context and motivations. We use design thinking and it leads to
                design that"
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
