import React from "react";
import img1 from "../../../assets/gallery/1.jpg"
import img2 from "../../../assets/gallery/2.jpg"
import img3 from "../../../assets/gallery/3(big).jpg"
import img4 from "../../../assets/gallery/4(big).jpg"
import img5 from "../../../assets/gallery/5.jpg"
import img6 from "../../../assets/gallery/6.jpg"
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
  return (
    <div className="my-10">
      <div className="text-center my-10">
        <h2 className="font-semibold text-white md:font-bold text-xl md:text-4xl mb-2">
          Have a look
        </h2>
        <p className="text-primary">Best Clicks</p>
      </div>
      <PhotoProvider>
        <section class="text-gray-600 body-font">
          <div class="container px-5 mx-auto flex flex-wrap">
            <div class="flex flex-wrap md:-m-2 -m-1">
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-1/2">
                  <PhotoView src={img3}>
                    <img
                      alt="gallery"
                      class="w-full object-cover h-full object-center block cursor-crosshair"
                      src={img3}
                    />
                  </PhotoView>
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <PhotoView src={img2}>
                    <img
                      alt="gallery"
                      class="w-full object-cover h-full object-center block cursor-crosshair"
                      src={img2}
                    />
                  </PhotoView>
                </div>
                <div class="md:p-2 p-1 w-full">
                  <PhotoView src={img1}>
                    <img
                      alt="gallery"
                      class="w-full object-cover h-full object-center block cursor-crosshair"
                      src={img1}
                    />
                  </PhotoView>
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-full">
                  <PhotoView src={img6}>
                    <img
                      alt="gallery"
                      class="w-full object-cover h-full object-center block cursor-crosshair"
                      src={img6}
                    />
                  </PhotoView>
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <PhotoView src={img5}>
                    <img
                      alt="gallery"
                      class="w-full object-cover h-full object-center block cursor-crosshair"
                      src={img5}
                    />
                  </PhotoView>
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <PhotoView src={img4}>
                    <img
                      alt="gallery"
                      class="w-full object-cover h-full object-center block cursor-crosshair"
                      src={img4}
                    />
                  </PhotoView>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PhotoProvider>
    </div>
  );
};

export default Gallery;
