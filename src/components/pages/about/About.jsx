import React from "react";
import aboutPhoto from "../../../assets/banner/hamid-about-page-image.jpg";
import useTitle from "../../../hooks/useTitle";
import Gallery from "./Gallery";

const About = () => {
  useTitle("About");
  return (
    <div className="container mx-auto">
      <img className="w-full" src={aboutPhoto} alt="" />
      <div className="mx-5 md:mx-0">
        <h1 className="text-5xl font-medium text-white mt-10">
          Hamid Ali
        </h1>
        <div className="w-10 h-1 bg-primary rounded mt-3 mb-5"></div>
        <p className="text-lg font-base text-white text-justify my-5">
          Hamid Ali is one of the freelance commercial photographers in
          Bangladesh. He is passionate about his work and he's following his
          passion for more than 21 years. In 2001, Hamid Ali achieved the “Best
          Glamour Photographer “ award from the Cultural Reporters Association
          of Bangladesh. And in 2018, he got an award from the Bangladesh
          Friendship Foundation and Index Media in the category of “Best
          Photographer 2018.” He believes in simplicity so he always tries to
          exhibit his works creatively in a simple way. His work includes
          Commercial, Advertising, Fashion & Glamour Industry, Interiors,
          Products, Wedding & Parties and more.
        </p>
      </div>
      <Gallery></Gallery>
    </div>
  );
};

export default About;
