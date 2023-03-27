import Image from "next/image"
import HomePageHeader from "../UI/HomePageHeader"
import Service from "./Service"
import wave from "./blue_wave.png"

const Services = () => {
    return (
        <div className="bg-[#E7E9F0] text-[#112A46] relative py-20  flex flex-col gap-8 text-center ">
            <Image src={wave} className="absolute top-0 z-[-10px] w-full" />
            <div className="flex flex-col gap-24 z-20 items-center">
                <HomePageHeader text="Services" />
                <p className="text-center text-2xl max-w-3xl font-bold">We believe that modern innovation is an iterative journey, not a destination.
                    We’ve found that successful journeys require a seamless blend of four key ingredients.
                </p>
                <div className="flex justify-between gap-24 mx-28 flex-wrap md:flex-nowrap">
                    <Service />
                    <Service />
                    <Service />
                </div>
            </div>
        </div>
    )
}

export default Services