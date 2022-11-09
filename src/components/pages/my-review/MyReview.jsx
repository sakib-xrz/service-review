import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

const MyReview = () => {
  return (
    <div>
      <div
        //   key={review._id}
        className="text-white mx-auto bg-transparent border border-[#2C3132] rounded-xl shadow-xl my-5 p-5 md:mx-10"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="" //{review.img}
              alt=""
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="ml-5">
              <h2 className="text-left text-xl font-medium text-white">
                {/* {review.name} */}
              </h2>
              <p>
                <small></small>
                {/* <small>{review.time}</small> */}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <MdModeEdit className="text-[28px] w-10 h-10 bg-blue-500 p-2 rounded-full cursor-pointer"></MdModeEdit>
            </div>
            <div>
              <MdDeleteForever className="text-3xl w-10 h-10 bg-red-500 p-2 rounded-full cursor-pointer ml-4"></MdDeleteForever>
            </div>
          </div>
        </div>
        <div className="divider "></div>
        {/* <p>{review.review}</p> */}
      </div>
    </div>
  );
};

export default MyReview;
