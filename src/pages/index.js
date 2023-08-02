import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SwiperUI from "@/components/SwiperUI";
import Testimonials from "@/components/Home/Testimonial";
import Services from "@/components/Home/Services";
import Content from "@/components/Home/Whyus";
import Aboutushome from "@/components/Home/Aboutushome";
//import { disableReactDevTools } from "@fvilers/disable-react-devtools";

//if(process.env.NODE_ENV === 'production') disableReactDevTools();

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <SwiperUI />
      </div>
      <div className="relative">
        <Services />
        <Aboutushome />
        <Content />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
