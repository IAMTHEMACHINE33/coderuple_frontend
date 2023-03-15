import Image from "next/image"
import logo from "@/Images/logo.png"
import menu from "../SVG/menu.svg"
const Navbar = () => {
  return (
    <nav className="w-full px-4 py-4 flex justify-center items-center drop-shadow-lg bg-white sticky top-0 z-50">
      <div className="navbar flex justify-between items-center w-full md:w-[720px] lg:w-[1000px] xl:w-[1000px] ">
        <span className="font-semibold text-lg flex items-center gap-2">
          <Image src={logo} height={30} />
          CODERUPLE
        </span>
        <Image src={menu} className="sm:hidden" />
        <div className="gap-4 hidden sm:flex">
          <span>Home</span>
          <span>Our Services</span>
          <span>Our Works</span>
          <span>Contact Us</span>
          <span>Careers</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar