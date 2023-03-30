import AboutUs from "@/components/AboutUs/AboutUs";
import ContactUs from "@/components/ContactUs/ContactUs";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import Navbar from "../components/Navbar";
import Swiper from "../components/Swiper";
import Footer from "../components/Footer";

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
