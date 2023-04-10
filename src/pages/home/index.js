import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SwiperUI from "@/components/SwiperUI";

const home = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <SwiperUI />
      </div>
      <div className="relative">
        <Footer />
      </div>
    </>
  );
};

export default home;
