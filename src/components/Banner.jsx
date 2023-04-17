import BannerTop from "../Images/bannertop.png";

import Image from "next/image";
const Banner = (props) => {
  return (
    <>
      <div className="relative  h-screen  ">
        <div className="flex h-1/2 max-w-screen bg-[#154061] text-center justify-center items-center">
          <div className="grid justify-items-center sm:justify-items-center p-3">
            <p className=" text-[4rem] font-medium text-white" text="About us">
              {props.text}
            </p>

            <p className="text-lg mx-10 font-normal text-white">
              Delivering IT solutions that enable you to work smarter
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
