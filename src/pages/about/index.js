import Company from "@/components/About/Company";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import History from "@/components/About/History";
import Popup from "@/components/About/popup";
import ContactUs from "@/components/HomePageComponents/ContactUs/ContactUs";

import Footer from "@/components/Footer";
import Whatedo from "@/components/About/whatwedo";

const about = () => {
  return (
    <>
      <div className="relative ">
        <Navbar />
        <Banner text="About us" />
        <Company />
      </div>
      <div className="relative">
        <History />
        <Popup />
        <Whatedo />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default about;
