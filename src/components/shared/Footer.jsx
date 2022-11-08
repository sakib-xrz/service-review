import React from "react";
import Logo from "../../assets/logo/logo.jpg";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white border-t-2 border-[#2C3132]">
        <div className="footer p-10 container mx-auto">
          <div className="text-left">
            <img className="mr-auto h-[70px] w-auto" src={Logo} alt="" />
            <p>
              <span className="text-xl font-semibold">
                Hamid Ali Photography.
              </span>
              <br />
              <span className="font-thin">
                Hamid Ali is one of the freelance commercial <br />
                photographers in Bangladesh. He believes in <br /> simplicity so
                he always tries to exhibit his <br /> works creatively in a
                simple way.
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
            <span className="font-semibold text-lg md:mb-5">
              Important Links
            </span>
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
            <span className="font-semibold text-lg md:mb-5">About Me</span>
            <a href="/" className="link link-hover font-thin">
              Why Me?
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
