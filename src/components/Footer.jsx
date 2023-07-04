import fb from "../Images/fb1.png";
import insta from "../Images/iglogog.svg";
import li from "../Images/lilogo.svg";
import twitter from "../Images/twitterlogo.svg";
import phone from "../Images/phone.svg";
import mail from "../Images/mail.svg";
import Link from "next/link";

import Image from "next/image";
const Footer = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full footer-container">
      <footer className="responsive-container flex flex-col items-center md:items-start py-10 justify-start gap-5 bottom-0 left-0 z-20 md:flex md:flex-row  md:justify-between md:py-12 px-6 ">
        <span className="grid grid-row-3 grid-flow-row gap-1.5  px-3 text-center w-full ">
          <div className="text-4xl text-white text-left font-medium">
            Contact Us
          </div>
          <div className="text-s text-white text-left font-light">
            Let&apos;s work together!
          </div>
          <div className=" justify-center flex flex-col flex-nowrap gap-3 mt-2 mb-0">
            <input
              type="text"
              placeholder="Full Name"
              className="py-1.5 px-4 rounded-full outline-none"
            ></input>
            <input
              type="text"
              placeholder="Email"
              className="py-1.5 px-4 rounded-full outline-none"
            ></input>
            <textarea
              type="text"
              placeholder="Message"
              className="py-1.5 px-4 rounded-2xl h-36 outline-none "
            ></textarea>
            <button
              type="submit"
              placeholder="Submit"
              className=" bg-[#6096ba] py-1.5 px-4 rounded-3xl text-white  w-36 mt-4"
            >
              SUBMIT
            </button>
          </div>
        </span>
        <span className="grid grid-row-3 grid-flow-row gap-1.5 text-left px-3 w-full  md:justify-center">
          <div className="text-4xl text-white  gap-0 text-left">
            Quick Links
          </div>
          <div className="text-s text-white text-left font-light">All of our pages</div>
          <ul className=" justify-center text-left text-white flex flex-col flex-nowrap gap-0 sm:gap-0  items-left  lg:text-lg   mt-0 sm:dark:text-black-400 text-lg max-w-full  mb-0 sm:mr-0">
            <li>
              <Link href="#" className=" hover:underline  ">
                - Home
              </Link>
            </li>
            <li>
              <Link href="/about" className=" hover:underline ">
                - About Us
              </Link>
            </li>
            <li>
              <a href="/services" className="hover:underline  ">
                - Our Services
              </a>
            </li>
            <li>
              <Link href="/blogs" className="hover:underline">
                - Blogs
              </Link>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                - Contact us
              </a>
            </li>
          </ul>
        </span>
        <span className="grid grid-flow-row gap-1.5  text-left px-3 w-full ">
          <div className="text-4xl text-white ">Coderuple</div>
          <div className="flex flex-col gap-3">
          <div className="text-s text-white font-light">Where your business blooms!</div>
            <div className="flex flex-row gap-1.5">
              <Image src={phone} className="w-8 h-8 mt-2" alt="image"></Image>
              <div className="flex flex-col">
                <span className="text-white ">+977 9841709097</span>
                <span className="text-white ">+977 9813643643</span>
              </div>
            </div>
            <div className="flex flex-row gap-1.5 items-center">
              <Image src={mail} className="w-8 h-8" alt="image"></Image>
              <span className="text-white">coderupleglobal@gmail.com</span>
            </div>
            <div className=" flex gap-2 ">
              <div>
                <Image src={fb} className="w-8 h-8" alt="image"></Image>
              </div>
              <div>
                <Image src={insta} className="w-8 h-8" alt="image"></Image>
              </div>
              <div>
                <Image src={li} className="w-8 h-8" alt="image"></Image>
              </div>
              <div>
                <Image src={twitter} className="w-8 h-8 " alt="image"></Image>
              </div>
            </div>
          </div>
        </span>
      </footer>
      <div className="copyright_container flex justify-center py-2 w-full">
        <p className="text-white">
          Copyright 2023 All rights reserved coderuple
        </p>
      </div>
    </div>
  );
};

export default Footer;
