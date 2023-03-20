import Services from "@/components/Services/Services";
import Navbar from "../components/Navbar";
import Swiper from "../components/Swiper";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Swiper />
      </div>
      <Swiper />
      <Services />
    </>
  )
}