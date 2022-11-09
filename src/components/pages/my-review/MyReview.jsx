import React, { useContext, useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { AuthContext } from "../../../context/AuthProvider";

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [myReview, setMyReview] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:5000/reviews/my-review?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setMyReview(data));
    }, [user?.email]);
  return (
    <div>
      {myReview.map((r) => (
        <div
          key={r._id}
          className="text-white mx-auto bg-transparent border border-[#2C3132] rounded-xl shadow-xl my-5 p-5 md:mx-10"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={r.img}
                alt=""
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="ml-5">
                <h2 className="text-left text-xl font-medium text-white">
                  {r.name}
                </h2>
                <p>
                  <small>{r.time}</small>
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
          <p>{r.review}</p>
        </div>
      ))}
    </div>
  );
};

export default MyReview;
