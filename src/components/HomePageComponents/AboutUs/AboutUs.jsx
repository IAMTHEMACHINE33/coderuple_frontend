import Image from "next/image"
import AboutUsInfo from "./AboutUsInfo"
import wave_gray from "./grey_wave_2.png"
import { useEffect, useState } from "react";
import { aboutUsApi } from "@/pages/api/apiCalls";
import HomePageHeader from "@/components/UI/HomePageHeader";

const AboutUs = () => {
    const [aboutUs, setAboutUs] = useState();
    useEffect(() => {
        aboutUsApi({ setAboutUs })
    }, []);
    console.log(aboutUs?.data?.data[0]?.description)

    return (
        <div className="relative flex flex-col items-center ">
            <Image src={wave_gray} className="w-full" alt="image" />
            <div className="flex flex-col gap-10 lg:gap-24 z-20 items-center responsive-container">
                <HomePageHeader text="About Us" />
                <AboutUsInfo flip={false} description={aboutUs?.data?.data[0]?.description} />
                <AboutUsInfo flip={true} description={aboutUs?.data?.data[1]?.description} />
            </div>
        </div>

    )
}

export default AboutUs