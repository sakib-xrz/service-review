import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [allService, setAllService] = useState([]);
  useEffect(() => {
    fetch("https://service-review-server-mauve.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setAllService(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="text-center my-10">
        <h2 className="font-semibold text-white md:font-bold text-xl md:text-4xl mb-2">
          Browse Category
        </h2>
        <p className="text-primary">Explore my works</p>
      </div>
      <div className="grid grid-cols-12 md:gap-3 lg:gap-10 px-3 lg:px-0">
        {allService.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="mt-5 lg:mt-10 mb-10 flex justify-center">
        <Link
          to={"/services"}
          className="btn btn-md btn-primary bg-primary rounded-md text-base hover:bg-primary hover:text-base"
        >
          See All Category
        </Link>
      </div>
    </div>
  );
};

export default Service;
