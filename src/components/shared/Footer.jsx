import React from "react";
import Logo from "../../assets/logo/logo.jpg";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white">
        <div className="footer p-10 container mx-auto">
          <div className="text-left">
            <img className="mr-auto h-[80px] w-auto" src={Logo} alt="" />
            <p>
              <span className="text-xl font-semibold">Car Doctor Ltd.</span>
              <br />
              <span className="font-thin">
                Edwin Diaz is a software and web <br />
                technologies engineer, a life coach <br />
                trainer who is also a serial.
              </span>
            </p>
            <div className="flex text-2xl pt-2">
              <AiOutlineGoogle className="cursor-pointer mr-2 w-8 h-8 p-2 rounded-full bg-[#2C2C2C]"></AiOutlineGoogle>
              <FaTwitter className="cursor-pointer mr-2 w-8 h-8 p-2 rounded-full bg-[#2C2C2C]"></FaTwitter>
              <FiInstagram className="cursor-pointer mr-2 w-8 h-8 p-2 rounded-full bg-[#2C2C2C]"></FiInstagram>
              <AiFillLinkedin className="cursor-pointer w-8 h-8 p-2 rounded-full bg-[#2C2C2C]"></AiFillLinkedin>
            </div>
          </div>
          <div>
            <span className="font-semibold text-lg md:mb-5">About</span>
            <a href="/" className="link link-hover font-thin">
              Home
            </a>
            <a href="/" className="link link-hover font-thin">
              Service
            </a>
            <a href="/" className="link link-hover font-thin">
              Contact
            </a>
          </div>
          <div>
            <span className="font-semibold text-lg md:mb-5">Company</span>
            <a href="/" className="link link-hover font-thin">
              Why Car Doctor
            </a>
            <a href="/" className="link link-hover font-thin">
              About
            </a>
            <a href="/" className="link link-hover font-thin">
              Feedback
            </a>
          </div>
          <div>
            <span className="font-semibold text-lg md:mb-5">Support</span>
            <a href="/" className="link link-hover font-thin">
              Support Center
            </a>
            <a href="/" className="link link-hover font-thin">
              Terms and Conditions
            </a>
            <a href="/" className="link link-hover font-thin">
              Privacy policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
