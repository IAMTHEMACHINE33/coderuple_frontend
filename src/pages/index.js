import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import Navbar from "../components/Navbar";
import Swiper from "../components/Swiper";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Swiper />
      </div>
      <div className="relative">
        <Services />
        <Testimonials />
      </div>
    </>
  )
}