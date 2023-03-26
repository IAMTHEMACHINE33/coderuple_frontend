import Image from "next/image"
import Service from "./Service"
import wave from "./wave grey.png"

const Services = () => {
    return (
        <div className="bg-[#6096BA] text-[#112A46] relative py-20 pb-40 flex flex-col gap-8 text-center ">
            <div className="flex flex-col gap-8 z-20">
                <h2 className="text-[128px] font-bold">Services</h2>
                <p className="text-center text-3xl mx-40">We believe that modern innovation is an iterative journey, not a destination.
                    We’ve found that successful journeys require a seamless blend of four key ingredients.
                </p>
                <div className="flex justify-between">
                    <Service />
                    <Service />
                    <Service />
                </div>
            </div>
            <Image src={wave} className="absolute bottom-0 z-[-10px]" />
        </div>
    )
}

export default Services