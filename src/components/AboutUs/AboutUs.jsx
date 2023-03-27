import Image from "next/image"
import HomePageHeader from "../UI/HomePageHeader"
import AboutUsInfo from "./AboutUsInfo"
import wave_gray from "./grey_wave_2.png"

const AboutUs = () => {
    return (
        <div className="relative flex flex-col items-center">
            <Image src={wave_gray} className="w-full" />
            <div className="flex flex-col gap-24 z-20 items-center responsive-container">
                <HomePageHeader text="About Us" />
                <AboutUsInfo flip={false} />
                <AboutUsInfo flip={true} />
            </div>
        </div>

    )
}

export default AboutUs