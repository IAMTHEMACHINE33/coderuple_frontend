import Image from "next/image"
import logo from "@/Images/logo.png"
import menu from "../SVG/menu.svg"
import { useState, useEffect } from "react";

const Navbar = () => {

  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)

  //logo scroll when active
  const [navbarLogo, setNavbarLogo] = useState(logo)

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 40) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  //logo scroll function
  const changeLogo = () => {
    if (window.scrollY >= 60) {
      setNavbarLogo(logo)
    } else {
      setNavbarLogo(logo)
    }
  }

  useEffect(() => {
    changeLogo()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeLogo)
  })

  return (
    // <nav className="navbar__container">
    <nav className={navbar ? "navbar__container navbar__container__sticky" : "navbar__container navbar__container__absolute"}>
      <div className="navbar flex justify-between items-center w-full md:w-[720px] lg:w-[1000px] xl:w-[1000px] ">
        <span className="font-semibold text-lg flex items-center gap-2 h-full py-4">
          <Image src={logo} height={30} />
          CODERUPLE
        </span>
        <Image src={menu} className="sm:hidden" />
        <div className="gap-4 hidden sm:flex">
          <span className="nav__links">Home</span>
          <div class="popover__wrapper">
            <a href="#">
              <h2 class="popover__title nav__links">Our Services</h2>
            </a>
            <div class="popover__content">
              <p class="popover__message">cHECHK</p>
            </div>
          </div>
          <span className="nav__links">Our Works</span>
          <span className="nav__links">Contact Us</span>
          <span className="nav__links">Careers</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar