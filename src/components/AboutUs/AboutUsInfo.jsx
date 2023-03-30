import Image from "next/image"
import about_us_blog from "./about-us-blog.png"

const AboutUsInfo = (props) => {
    return (
        <div className={`flex flex-col w-full gap-6 justify-center items-center ${props.flip ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <Image src={about_us_blog} className="rounded-2xl w-full md:w-1/3" />
            <span className={`text-center w-full ${props.flip ? 'about-us-animate-from-right' : 'about-us-animate-from-left'} about-us-animate-center`}>
                {props.description}
            </span>
        </div>
    )
}

export default AboutUsInfo