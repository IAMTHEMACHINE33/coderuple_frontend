import Image from "next/image";
import contactbottom from "./contactbottom.png";
import ContactUsForm from "./ContactUsForm";
import ContactUsInfo from "./ContactUsInfo";
import HomePageHeader from "@/components/UI/HomePageHeader";
import contactop from "./contactop.png";

const ContactUs = () => {
  return (
    <>
      <div className="relative ">
        <Image src={contactop} className="w-full absolute bottom-0" alt="image" />
      </div>
      <div className="relative flex justify-center">
        <Image src={contactbottom} className="w-full absolute top-0" alt="image" />
        <div className="flex flex-col mt-20 responsive-container  relative z-50">
          <HomePageHeader
            className=" text-xs sm:text-[5rem]"
            text="Contact Us"
          />
          <div className="flex flex-col mt-10 items-center sm:justify-between md:flex-row md:max-w  ">
            <ContactUsInfo />
            <ContactUsForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
