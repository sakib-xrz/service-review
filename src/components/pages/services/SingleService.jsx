import React from 'react';
import { useLoaderData } from 'react-router-dom';
import hamid from "../../../assets/logo/hamid.jpg"

const SingleService = () => {
    const service = useLoaderData();
    const {title, cover, details} = service
    return (
      <div>
        <section className="body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={cover}
                />
              </div>
              <div className="flex flex-col items-center sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-primary border-2 border-primary text-gray-400">
                    <img src={hamid} alt="" className="rounded-full" />
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-white text-lg">
                      Hamid Ali
                    </h2>
                    <div className="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                    <p className="text-base ">
                      Hamid Ali is one of the best freelance photographers in
                      Bangladesh. He is passionate about his work. He believes
                      in simplicity so he always tries to exhibit his works
                      creatively in a simple way.
                    </p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <h2 className="font-semibold text-white md:font-bold text-xl md:text-4xl mb-4">
                    {title}
                  </h2>
                  <p className="leading-relaxed text-lg mb-4">{details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default SingleService;