import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SwiperUI from "@/components/SwiperUI";
import Testimonials from "@/components/Home/testimonial";

const home = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <SwiperUI />
      </div>
      <div className="relative">
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default home;
