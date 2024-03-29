import Image from "next/image"
import smartphone from "./smartphone.svg"

const Service = (props) => {
    console.log("service", props)
    return (
        <div className="w-full flex flex-col justify-center items-center gap-8 hover:shadow-[0_0_35px_rgba(0,0,0,0.25)] ease-in-out duration-300 p-6 rounded-2xl services-card">
            <h3 className="text-xl w-60 font-bold">{props?.feature?.title}</h3>
            <div className="bg-white inline-flex p-8 rounded-full w-[8rem] h-[8rem] justify-center items-center shadow-lg hover:shadow-xl transition  ease-in-out duration-250">
                <Image src={smartphone} className="text-[#112A46] fill-current w-full" alt="image" />
            </div>
            <p className="text-xl ">
                {props?.feature?.description}
            </p>
        </div>
    )
}

export default Service