import React from "react";
import useTitle from "../../../hooks/useTitle";
import Gallery from "../about/Gallery";
import Banner from "./Banner";
import Service from "./Service";
import AboutMe from "./AboutMe";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <Service />
      <Gallery />
      <AboutMe />
    </div>
  );
};

export default Home;
