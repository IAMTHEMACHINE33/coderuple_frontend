import Image from "next/image"
import HomePageHeader from "../UI/HomePageHeader"
import Service from "./Service"
import wave from "./blue_wave.png"

const Services = () => {
    return (
        <div className="bg-[#E7E9F0] relative py-20  flex flex-col gap-8 text-center ">
            {/* <Image src={wave} className="absolute top-0 z-[-10px] h-[42rem] w-[3000px\9] max-w-full" /> */}
            <Image src={wave} className="absolute top-0 z-[-10px]  h-[500px] w-full lg:h-[650px] object-cover md:object-fill m-auto" />
            <div className="flex flex-col gap-24 z-20 items-center mx-4 ">
                <HomePageHeader text="Services" />
                <p className=" text-xl font-bold text-justify responsive-container">We believe that modern innovation is an iterative journey, not a destination.
                    We’ve found that successful journeys require a seamless blend of four key ingredients.
                </p>
                <div className="flex justify-between items-center flex-col lg:flex-row responsive-container">
                    <Service />
                    <Service />
                    <Service />
                </div>
            </div>
        </div>
    )
}

export default Services