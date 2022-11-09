import React from "react";

const AddServices = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const description = form.description.value;
    const img = form.img.value;
    const cover = form.cover.value;
    const details = form.details.value;

    const service = {
      title,
      rating,
      price,
      description,
      img,
      cover,
      details,
    };

    fetch("http://localhost:5000/services/all",{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(service)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
  };

  return (
    <div className="py-10 px-2">
      <form onSubmit={handleAddService}>
        <div className="bg-transparent min-h-screen md:px-20 pt-6">
          <div className="border bg-transparent rounded-md lg:px-6 py-12 px-3 max-w-2xl mx-auto">
            <h1 className="text-center text-3xl font-medium text-white mb-4">
              ADD A SERVICE
            </h1>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="text-lg ">
                  Service Name:
                </label>
                <input
                  type="text"
                  placeholder="Couple Photography"
                  name="title"
                  id="title"
                  className="w-full text-white bg-transparent outline-none py-1 px-2 text-md border  rounded-sm"
                />
              </div>
              <div className="flex justify-between">
                <div className="w-5/12">
                  <label htmlFor="name" className="text-lg ">
                    Rating:
                  </label>
                  <input
                    type="number"
                    placeholder="(1-5)"
                    name="rating"
                    className="w-full text-white bg-transparent outline-none py-1 px-2 text-md border  rounded-sm"
                  />
                </div>
                <div className="w-5/12">
                  <label htmlFor="email" className="text-lg ">
                    Price:
                  </label>
                  <input
                    type="number"
                    placeholder="100"
                    name="price"
                    className="w-full text-white bg-transparent outline-none py-1 px-2 text-md border  rounded-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="description" className="block mb-2 text-lg ">
                  Short Description:
                </label>
                <textarea
                  id="description"
                  cols="30"
                  rows="1"
                  name="description"
                  placeholder="Write a short description..."
                  className="w-full p-4 text-white bg-transparent border  rounded-sm"
                ></textarea>
              </div>
              <div>
                <label htmlFor="description" className="block mb-2 text-lg ">
                  Card Photo URL
                </label>
                <textarea
                  id="description"
                  cols="30"
                  rows="1"
                  name="img"
                  placeholder="Card Photo (400px * 225px)"
                  className="w-full p-4 text-white bg-transparent border  rounded-sm"
                ></textarea>
              </div>
              <div>
                <label htmlFor="description" className="block mb-2 text-lg ">
                  Cover Photo URL
                </label>
                <textarea
                  id="description"
                  cols="30"
                  rows="1"
                  name="cover"
                  placeholder="Cover Photo (1200px * 500px)"
                  className="w-full p-4 text-white bg-transparent border  rounded-sm"
                ></textarea>
              </div>
              <div>
                <label htmlFor="description" className="block mb-2 text-lg ">
                  Full Description:
                </label>
                <textarea
                  id="description"
                  cols="30"
                  rows="5"
                  name="details"
                  placeholder="Write full description about this service..."
                  className="w-full p-4 text-white bg-transparent border  rounded-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 block rounded-md text-lg font-semibold text-base-100 bg-primary  "
              >
                Add Service
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddServices;
