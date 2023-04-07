import BannerTop from "../Images/bannertop.png";

import Image from "next/image";
const Banner = () => {
  return (
    <>
      <div className="relative flex h-screen max-w-screen bg-[#28566B] text-center justify-center items-center">
        <div className="grid justify-items-center sm:justify-items-center p-3">
          <p className=" text-[4rem] font-bold text-white" text="About us">
            About us
          </p>

          <p className="text-lg mx-10 font-medium text-white">
            Delivering IT solutions that enable you to work smarter
          </p>
        </div>
        <Image src={BannerTop} className="absolute bottom-0  w-screen"></Image>
      </div>
    </>
  );
};

export default Banner;
