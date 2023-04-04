import Image from "next/image";
import blue_wave from "./blue_wave_up_down.png";
import ContactUsForm from "./ContactUsForm";
import ContactUsInfo from "./ContactUsInfo";
import HomePageHeader from "@/components/UI/HomePageHeader";

const ContactUs = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center mt-20 relative z-20">
        <HomePageHeader className="mb-10" text="Contact Us" />
        <div className="flex flex-col mt-20 items-center xs:justify-end md:flex-row md:max-w md:mx-10 ">
          <ContactUsInfo />
          <ContactUsForm />
        </div>
      </div>
      <Image src={blue_wave} className="absolute top-0 z-10 w-full h-[53rem]" />
    </div>
  );
};

export default ContactUs;
