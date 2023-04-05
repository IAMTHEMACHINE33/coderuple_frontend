import Image from "next/image";
import Service from "./Service";
import wave from "./blue_wave.png";
import { useEffect, useState } from "react";
import { servicesApi } from "@/pages/api/apiCalls";
import HomePageHeader from "@/components/UI/HomePageHeader";

const Services = () => {
  let timer = 0;
  const [services, setServices] = useState();

  useEffect(() => {
    servicesApi({ setServices });
  }, []);
  console.log("services", services?.data?.data[1].feature);
  if (process.browser) {
    window.addEventListener("load", (event) => {
      let intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer += 50;
            setTimeout(() => {
              entry.target.classList.add("services-card-up");
            }, timer);
            intersectionObserver.unobserve(entry.target);
          }
        });
      });

      document.querySelectorAll(".services-card").forEach((obj) => {
        intersectionObserver.observe(obj);
      });
    });
  }

  return (
    <div className="bg-[#E7E9F0] relative py-20  flex flex-col gap-8 text-center ">
      {/* <Image src={wave} className="absolute top-0 z-[-10px] h-[42rem] w-[3000px\9] max-w-full" /> */}
      <Image
        src={wave}
        className="absolute top-0 z-[-10px]  h-[500px] w-full lg:h-[650px] object-cover md:object-fill m-auto"
      />
      <div className="flex flex-col gap-24 z-20 items-center mx-4 ">
        <HomePageHeader text="Services" />
        <p className=" text-xl font-bold text-center responsive-container">
          {services?.data?.data[1]?.paragraph}
        </p>
        <div className="flex justify-between items-center flex-col lg:flex-row responsive-container">
          {services?.data?.data[1].feature.map((feature) => {
            return <Service feature={feature} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
