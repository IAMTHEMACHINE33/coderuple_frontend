import fb from "../Images/fb1.png";
import insta from "../Images/iglogog.svg";
import li from "../Images/lilogo.svg";
import twitter from "../Images/twitterlogo.svg";
import phone from "../Images/phone.svg";
import mail from "../Images/mail.svg";

import Image from "next/image";
const Footer = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full mt-10 footer-container">
      <footer className="responsive-container flex flex-row items-center justify-between  bottom-0 p-5 left-0 z-20 md:flex md:items-center md:justify-between md:p-6">
        <span className="grid grid-row-3 grid-flow-row gap-1.5 justify-center text-center ">
          <div className="text-4xl text-white italic text-left font-medium">Contact Us</div>
          <div className="text-s text-white text-left">Let's work together!</div>
          <div className=" justify-center flex flex-col flex-nowrap gap-3 mt-2 mb-0">
            <input type="text" placeholder="Full Name" className="py-1.5 px-4 rounded-3xl outline-none"></input>
            <input type="text" placeholder="Email" className="py-1.5 px-4 rounded-3xl outline-none"></input>
            <textarea type="text" placeholder="Message" className="py-1.5 px-4 rounded-3xl h-36 outline-none "></textarea>
            <button type="submit" placeholder="Submit" className=" bg-blue-300 py-1.5 px-4 rounded-3xl text-white  w-32 mt-4">SUBMIT</button>
          </div>
        </span>
        <span className="grid grid-row-3 grid-flow-row gap-1.5 text-left ">
          <div className="text-4xl text-white italic gap-0 text-left">Coderuple</div>
          <div className="text-s text-white text-left ">All of our pages</div>
          <ul className=" justify-center text-left text-white flex flex-col flex-nowrap gap-0 sm:gap-0  items-left text-s lg:text-lg   mt-0 sm:dark:text-black-400 text-xs max-w-full  mb-0 sm:mr-0">
            <li>
              <a href="#" className=" hover:underline  ">
                - Home
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline ">
                - Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline  ">
                - Our Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                - Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                - Careers
              </a>
            </li>
          </ul>
        </span>
        <span className="grid grid-flow-row gap-1.5 justify-center text-left  ">
          <div className="text-4xl text-white italic">Coderuple</div>
          <div className="text-s text-white ">Where your business blooms!</div>
          <div className="flex flex-row gap-1.5">
            <Image src={phone} className="w-8 h-8 mt-2"></Image>
            <div className="flex flex-col">
              <span className="text-white ">+977 9841709097</span>
              <span className="text-white ">+977 9813643643</span>
            </div>
          </div>
          <div className="flex flex-row gap-1.5">
            <Image src={mail} className="w-8 h-8"></Image>
            <span className="text-white">coderupleglobal@gmail.com</span>
          </div>
          <div className=" flex gap-2 ">
            <div>
              <Image src={fb} className="w-8 h-8"></Image>
            </div>
            <div>
              <Image src={insta} className="w-8 h-8"></Image>
            </div>
            <div>
              <Image src={li} className="w-8 h-8"></Image>
            </div>
            <div>
              <Image src={twitter} className="w-8 h-8 "></Image>
            </div>
          </div>
        </span>
      </footer>
      <div className="copyright_container flex justify-center py-2 w-full">
        <p className="text-white">Copyright 2023 All rights reserved coderuple</p>
      </div>
        </div>
  );
};

export default Footer;
