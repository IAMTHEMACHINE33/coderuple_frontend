import NewHeading from "@/components/UI/HomePageHeader";
import contactop from "./contactop.png";
import Image from "next/image";
const Whatwedo = () => {
  return (
    <>
      <div className="relative ">
        <NewHeading text="Hello" />
        <p className="text-5xl text-cyan-500 sm:text-red-400 sm:text-7xl font-black leading-normal">
          Hello
        </p>
        <Image src={contactop} className="w-full absolute bottom-0" />
      </div>
    </>
  );
};

export default Whatwedo;
