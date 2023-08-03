import Image from "next/image";
import logo from "@/Images/logowhite.png";
import logo2 from "@/Images/logocheck.png";
// import logo from "@/Images/logo.png";

import menu from "../SVG/menu.svg";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);

  //logo scroll when active
  const [navbarLogo, setNavbarLogo] = useState(logo);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  //logo scroll function
  const changeLogo = () => {
    if (window.scrollY >= 60) {
      setNavbarLogo(logo2);
    } else {
      setNavbarLogo(logo);
    }
  };

  useEffect(() => {
    changeLogo();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeLogo);
  });

  return (

    <nav
      className={
        navbar
          ? "navbar__container navbar__container__sticky"
          : "navbar__container navbar__container__absolute"
      }
      data-te-navbar-ref
    >
      <div class="flex responsive-container flex-wrap items-center justify-between ">
        <span className="font-semibold text-lg  items-center gap-2 h-full py-4 hidden sm:flex ">
          <Image src={navbarLogo} height={18} alt="image" className=" p-2 text-white" />

          {/* CODERUPLE */}
        </span>
        <span className="font-semibold text-lg flex items-center gap-2 h-full py-4 sm:hidden">
          <Image src={logo2} height={18} alt="image" className=" p-2 text-white" />
          
          {/* CODERUPLE */}
        </span>

        <button
          class="block border-0 bg-transparent sm:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent3"
          aria-controls="navbarSupportedContent3"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-7 w-7"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>

        <div
          class="!visible hidden basis-[100%] items-center sm:!flex sm:basis-auto"
          id="navbarSupportedContent3"
          data-te-collapse-item
        >
          <ul class="flex sm:gap-4 md:gap-7 lg:gap-11 flex-col sm:flex-row" data-te-navbar-nav-ref>
            <p className="nav__links">
              <Link className=" underline" href="/home">
                Home
              </Link>
            </p>
            <p className="nav__links">
              <Link className=" underline" href="/about">
                {/* <Link className=" underline" href={`/about`}> */}
                About Us
              </Link>
            </p>
            <p className="nav__links">
              <Link className=" underline" href="/services">
                Our Services
              </Link>
            </p>
            <p className="nav__links">
              <Link className=" underline" href="/blogs">
                Blogs
              </Link>
            </p>
            <p className="nav__links">
              <Link className=" underline" href="/contact">
                Contact Us
              </Link>
            </p>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
