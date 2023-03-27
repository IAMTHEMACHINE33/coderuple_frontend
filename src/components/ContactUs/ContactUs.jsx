import Image from "next/image";
import HomePageHeader from "../UI/HomePageHeader";
import blue_wave from "./blue_wave_up_down.png";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
    return (
        <div className="relative">
            <div className="flex flex-col items-center justify-center relative z-50">
                <HomePageHeader text="Concact Us" />
                <div className="flex justify-center items-center">
                    <div className="w-1/2">
                        <div>
                            <p>Let’s Work Together!</p>
                            <p>Please tell us a bit about you, your project, and how best to reach you. We’ll get right back to you.</p>
                        </div>
                        <div>
                            <p>Customer Service representative:</p>
                            <p>+977 9813643643</p>
                            <p>+977 9813643643</p>
                        </div>
                        <div>
                            <p>Do you prefer email?</p>
                            <p>coderupleglobal@gmail.com</p>
                        </div>
                    </div>
                    <ContactUsForm />
                </div>
            </div>
            <Image src={blue_wave} className="absolute top-0 z-10 w-full h-[53rem]" />
        </div>
    )
}

export default ContactUs