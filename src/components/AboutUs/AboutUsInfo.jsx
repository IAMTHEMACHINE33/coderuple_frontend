import Image from "next/image"
import about_us_blog from "./about-us-blog.png"

const AboutUsInfo = (props) => {
    return (
        <div className={`flex flex-col w-full gap-6 justify-center items-center ${props.flip ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <Image src={about_us_blog} className="rounded-2xl w-full md:w-1/3" />
            <span className={`text-center ${props.flip ? 'about-us-animate-from-right' : 'about-us-animate-from-left'} about-us-animate-center`}>
                Our passion and drive to deliver quality solutions have taken us to the boardroom of 200 yrs old company and coffee shop meetings in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu. We love the challenge to deliver the best possible solution using the latest and future technologies. We understand that we are your extended TEAM.
            </span>
        </div>
    )
}

export default AboutUsInfo