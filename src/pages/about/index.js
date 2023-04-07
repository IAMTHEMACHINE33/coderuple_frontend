import Company from "@/components/About/company";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import History from "@/components/About/history";
import Popup from "@/components/About/popup";
import ContactUs from "@/components/HomePageComponents/ContactUs/ContactUs";

import Footer from "@/components/Footer";
import Whatedo from "@/components/About/whatwedo";

const about = () => {
  return (
    <>
      <div className="relative ">
        <Navbar />
        <Banner />
        <Company />
      </div>
      <div className="relative">
        <History />
        <Whatedo />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default about;
