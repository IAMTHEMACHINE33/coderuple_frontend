import Company from "@/components/About/company";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ContactUs from "@/components/HomePageComponents/ContactUs/ContactUs";

import Footer from "@/components/Footer";

const about = () => {
  return (
    <>
      <div className="relative ">
        <Navbar />
        <Banner />
        <Company />
      </div>
      <div className="relative">
        <Footer />
      </div>
    </>
  );
};

export default about;
