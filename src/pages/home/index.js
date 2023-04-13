import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SwiperUI from "@/components/SwiperUI";
import Testimonials from "@/components/Home/testimonial";
import Services from "@/components/Home/Services";
import Content from "@/components/Home/Whyus";
const home = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <SwiperUI />
      </div>
      <div className="relative">
        <Services/>
        <Content/>
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default home;
