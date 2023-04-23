import SwiperUI from "@/components/SwiperUI";
import Navbar from "../components/Navbar";
import Services from "@/components/HomePageComponents/Services/Services";
import AboutUs from "@/components/HomePageComponents/AboutUs/AboutUs";
import ContactUs from "@/components/HomePageComponents/ContactUs/ContactUs";
import Footer from "@/components/Footer";
import Testimonials from "@/components/HomePageComponents/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <SwiperUI />
      </div>
      <div className="relative">
        <Services />
        <AboutUs />
        <ContactUs />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
