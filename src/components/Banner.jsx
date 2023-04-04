import HomePageHeader from "./UI/HomePageHeader";
import BannerTop from "../Images/bannertop.png";
import BannerBottom from "../Images/bannerbottom.png";
import Image from "next/image";
const Banner = () => {
  return (
    <>
      <div className="relative flex h-screen max-w-screen bg-[#28566B] text-center justify-center items-center">
        <div className="grid justify-items-center sm:justify-items-center p-3">
          <p className=" text-[4rem] font-bold text-white" text="About us">
            About us
          </p>

          <p className="text-md font-semibold text-white">
            Delivering IT solutions that enable you to work smarter
          </p>
        </div>
        <Image src={BannerTop} className="absolute bottom-0 "></Image>
      </div>
      <Image src={BannerBottom} className="relative top-0"></Image>
    </>
  );
};

export default Banner;
