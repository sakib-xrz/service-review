import React from "react";
import { useLoaderData } from "react-router-dom";
import hamid from "../../../assets/logo/hamid.jpg";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const SingleService = () => {
  const service = useLoaderData();
  const { title, cover, details, price } = service;
  return (
    <div>
      <section className="body-font">
        <div className="container px-5 py-10 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <PhotoProvider>
                <PhotoView src={cover}>
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full cursor-crosshair"
                    src={cover}
                  />
                </PhotoView>
              </PhotoProvider>
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
                    Bangladesh. He is passionate about his work. He believes in
                    simplicity so he always tries to exhibit his works
                    creatively in a simple way.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h2 className="font-semibold text-white md:font-bold text-xl md:text-4xl mb-4">
                  {title}
                </h2>
                <p className="leading-relaxed text-lg mb-4">{details}</p>
                <h2 className="font-semibold text-lg">Price: ${price}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider w-9/12 mx-auto my-10">
        <span className="font-semibold text-white md:font-bold text-xl md:text-4xl mb-2">
          What people say?
        </span>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <div className="bg-transparent border border-primary text-white">
              <div>
                <img src="" alt="" />
                <div>
                  <h2></h2>
                  <p></p>
                </div>
              </div>
          </div>
        </div>
        <div className="col-span-6">
          <form>
            <div class="md:px-20 ">
              <div class=" bg-transparent rounded-md px-6 py-10 max-w-2xl mx-auto">
                <h1 class="text-left text-2xl font-medium text-white mb-4">
                  Write A Review
                </h1>
                <div class="space-y-4">
                  <div>
                    <textarea
                      id="description"
                      cols="30"
                      rows="5"
                      name="review"
                      placeholder="Describe your experience..."
                      class="w-full font-serif  p-4 text-white bg-transparent border rounded-md"
                    ></textarea>
                  </div>
                  <button class=" px-6 py-2 block rounded-md text-lg font-semibold text-base-100 bg-primary  ">
                    POST REVIEW
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
