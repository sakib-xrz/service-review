import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { AuthContext } from "../../../context/AuthProvider";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [MyReview, setMyReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/my-review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReview(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete this review?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully", {
              style: { background: "#333", color: "#fff" },
            });
            const remaining = MyReview.filter((rev) => rev._id !== id);
            setMyReview(remaining);
          }
        });
    }
  };
  return (
    <div>
      {MyReview.length === 0 ? (
        <div className="h-64 flex justify-center items-center">
          <h1 className="mb-8 font-extrabold text-5xl text-primary">
            No Review Found
          </h1>
        </div>
      ) : (
        MyReview.map((r) => (
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
                  <MdDeleteForever
                    onClick={() => handleDelete(r._id)}
                    className="text-3xl w-10 h-10 bg-red-500 p-2 rounded-full cursor-pointer ml-4"
                  ></MdDeleteForever>
                </div>
              </div>
            </div>
            <div className="divider "></div>
            <p>{r.review}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyReview;
