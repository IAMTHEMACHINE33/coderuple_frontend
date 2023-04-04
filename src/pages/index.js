import Swiper from "@/components/Swiper";
import Navbar from "../components/Navbar";
import Services from "@/components/HomePageComponents/Services/Services";
import AboutUs from "@/components/HomePageComponents/AboutUs/AboutUs";
import ContactUs from "@/components/HomePageComponents/ContactUs/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Swiper />
      </div>
      <div className="relative">
        <Services />
        <AboutUs />
        <ContactUs />
        {/* <Testimonials /> */}
        <Footer />
      </div>
    </>
  );
}
