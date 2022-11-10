import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/banner/banner.jpg";
import "./css/banner.css"

const Banner = () => {
  return (
    <>
      <div className="container mx-auto carousel relative w-full mb-10">
        <div id="item1" className="carousel-item w-full carousel-img ">
          <img src={banner} className="w-full banner" alt="" />
        </div>
        <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-5 md:left-14 lg:left-20 top-2/4">
          <h1 className="text-white font-semibold md:font-bold text-xl md:text-5xl lg:text-6xl mb-4 lg:mb-10">
            The Best <br />
            <span className="text-primary">
              Professional <br /> Photographer
            </span>
            <br /> In Bangladesh
          </h1>
          <p className="text-white text-lg mb-8 hidden lg:block">
            Photography is a way of feeling, of touching, of loving. What you{" "}
            <br />
            have caught on film is captured forever... it remembers little{" "}
            <br />
            things, long after you have forgotten everything
          </p>
          <div className="flex md:mt-4 lg:mt-0">
            <Link to={"/services"}>
              <button className="btn btn-xs md:btn-md bg-transparent text-white border-primary rounded-md mr-5 text-xs md:text-base hover:text-base-100 hover:bg-primary hover:border-primary">
                See my services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
