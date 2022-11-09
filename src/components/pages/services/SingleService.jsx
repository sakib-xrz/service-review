import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import hamid from "../../../assets/logo/hamid.jpg";
import { AuthContext } from "../../../context/AuthProvider";
import lock from "../../../assets/logo/lock.png";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import rating from "../../../assets/logo/rating5star.png"
import toast from "react-hot-toast";

const SingleService = () => {
  const location = useLocation();
  const service = useLoaderData();
  const { _id, title, cover, details, price } = service;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        const newReview = data.filter((review) => review.serviceId === _id);
        setReviews(newReview);
      });
  }, [reviews,_id]);

  const { user } = useContext(AuthContext);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const current = new Date();
    const time = current.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userReview = {
      serviceId: _id,
      name: user?.displayName,
      email: user?.email,
      img: user?.photoURL,
      review,
      time,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Review Added", {
          style: { background: "#333", color: "#fff" },
        });
        form.reset()
        console.log(data);
      });
  };

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
      <div className="divider w-10/12 md:w-9/12 mx-auto my-10">
        <span className="font-semibold text-white md:font-bold text-xl md:text-4xl mb-2">
          What people say?
        </span>
      </div>
      <div className="grid grid-cols-12">
        <div className="md:col-span-6 col-span-12 md:pt-10 px-3 md:px-0">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="text-white mx-auto bg-transparent border border-[#2C3132] rounded-xl shadow-xl my-5 p-5 md:mx-10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={review.img}
                    alt=""
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-5">
                    <h2 className="text-left text-xl font-medium text-white">
                      {review.name}
                    </h2>
                    <p>
                      <small>{review.time}</small>
                    </p>
                  </div>
                </div>
                <img src={rating} alt="" className="w-20 h-auto" />
              </div>
              <div className="divider "></div>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
        <div className="md:col-span-6 col-span-12 px-3 md:px-0">
          {user?.uid ? (
            <form
              onSubmit={handleReviewSubmit}
              noValidate=""
              action=""
              className="md:sticky md:top-20"
            >
              <div className="md:px-10">
                <div className="bg-transparent rounded-md lg:px-6 py-12 max-w-2xl mx-auto">
                  <h2 className="text-left text-2xl font-medium text-white mb-4">
                    Write A Review
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <textarea
                        id="description"
                        cols="30"
                        rows="5"
                        name="review"
                        placeholder="Describe your experience..."
                        className="w-full font-serif p-4 text-white bg-transparent border rounded-md"
                      ></textarea>
                    </div>
                    <div className="">
                      <button
                        type="submit"
                        className="px-6 py-2 block rounded-md text-lg font-semibold text-base-100 bg-primary"
                      >
                        POST REVIEW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div className="md:sticky md:top-20">
              <img src={lock} alt="" className="h-64 w-64 mx-auto -pt-10" />
              <div>
                <h2 className="text-2xl text-white w-full font-bold text-center -mt-[20px]">
                  You need to login to add a review.
                </h2>
                <div className="w-full flex justify-center py-10">
                  <Link
                    to="/login"
                    state={{ from: location }}
                    replace
                    className="btn btn-wide font-medium justify-center text-white transition duration-200 rounded border border-primary shadow-md bg-transparent hover:bg-primary hover:text-base-100"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleService;
