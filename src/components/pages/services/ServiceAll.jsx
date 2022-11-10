import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import star from "../../../assets/logo/star.png";
import useTitle from "../../../hooks/useTitle";

const ServiceAll = () => {
  const [loading, setLoading] = useState(true);
  const [allService, setAllService] = useState([]);
  useEffect(() => {
    fetch("https://service-review-server-mauve.vercel.app/services/all")
      .then((res) => res.json())
      .then((data) => setAllService(data));
    setLoading(false);
  }, []);

  useTitle("Services");
  return (
    <div className="container mx-auto">
      <div className="text-center my-10">
        <h2 className="font-semibold text-white md:font-bold text-xl md:text-4xl mb-2">
          Browse All Category
        </h2>
        <p className="text-primary">Explore my works</p>
      </div>
      <div>
        {loading === true ? (
          <>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
              <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
              <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
            </div>
          </>
        ) : (
          <>
            {allService.map((service) => (
              <div key={service._id} className="container px-5 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                  <div className="py-8 flex flex-wrap md:flex-nowrap items-center">
                    <div className="w-full md:w-[40%] lg:w-[30%] md:mb-0 mb-6 flex-shrink-0 flex flex-col cursor-crosshair">
                      <PhotoProvider>
                        <PhotoView src={service.img}>
                          <img
                            src={service.img}
                            alt=""
                            className="rounded-md"
                          />
                        </PhotoView>
                      </PhotoProvider>
                    </div>
                    <div className="md:flex-grow flex items-center md:px-10 ">
                      <div>
                        <h2 className="text-4xl font-medium text-white title-font mb-2">
                          {service.title}
                        </h2>
                        <p className="leading-relaxed">
                          {service.details.slice(0, 300)}...
                        </p>
                        <h2 className="font-semibold text-lg mt-3">
                          Price: ${service.price}
                        </h2>
                        <div className="flex items-center justify-between">
                          <Link
                            to={`/services/${service._id}`}
                            className="text-primary inline-flex items-center mt-4"
                          >
                            See Details
                            <svg
                              className="w-4 h-4 ml-2 mt-[1px]"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </Link>
                          <div className="flex items-center">
                            <img className="h-4 w-4 mt-4" src={star} alt="" />
                            <span className="mt-4 ml-2">
                              {service.rating}
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceAll;
