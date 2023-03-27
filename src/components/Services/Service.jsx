import Image from "next/image"
import smartphone from "./smartphone.svg"

const Service = () => {
    return (
        <div className="w-1/3 flex flex-col justify-center items-center gap-8">
            <h3 className="text-2xl w-60 font-bold">Mobile App Development</h3>
            <div className="bg-white inline-flex p-8 rounded-full w-[8rem] h-[8rem] justify-center items-center shadow-lg">
                <Image src={smartphone} className="text-[#112A46] fill-current w-full" />
            </div>
            <p className="text-2xl ">
                We design experiences that are personalized to your users’ context and motivations. We use design thinking and prototyping because we believe that products evolve for the better through triangulation, iteration and feedback. This leads to designs that are useful and long-lasting.
            </p>
        </div>
    )
}

export default Service