import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const data = useLoaderData();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const newReview = form.review.value;

    const reviewData = {
      newReview,
    };

    fetch(
      `https://service-review-server-mauve.vercel.app/reviews/my-review/${data._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reviewData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review Updated Successfully", {
            style: { background: "#333", color: "#fff" },
          });
        }
      });
  };

  return (
    <form onSubmit={handleSubmitForm} className="mt-10 mb-20">
      <div className="w-full flex justify-center mb-5">
        <textarea
          defaultValue={data.review}
          type="text"
          name="review"
          className="text-white text-justify bg-transparent border border-[#2C3132] rounded-xl shadow-xl mx-auto w-10/12 my-5 p-5"
          rows="5"
        ></textarea>
      </div>
      <div className="w-full">
        <button
          type="submit"
          className="px-6 py-2 block rounded-md text-lg font-semibold text-base-100 bg-primary mx-auto"
        >
          Update Review
        </button>
      </div>
    </form>
  );
};

export default UpdateReview;
