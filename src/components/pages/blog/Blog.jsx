import React, { useState } from "react";
import useTitle from "../../../hooks/useTitle";

const Blog = () => {
  const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    useTitle("Blog");
    return (
      <div className="border rounded shadow-md">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg text-left text-white font-medium">{title}</p>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-3 text-white font-black transition-transform duration-200 ${
                isOpen ? "transform rotate-180 text-primary" : ""
              }`}
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-white opacity-80">{children}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="space-y-4 text-justify">
          <Item title="Difference between SQL and NoSQL">
            There isn’t always a need for licensing or accreditation for online
            courses. However, some programs do require it. Either way, people
            will usually ask what type of training or background you have, as
            well as any licensing that’s available if that’s relevant. Make sure
            that you answer this question by telling them if you do hold any
            licenses or accreditation, as well as by explaining whether or not
            those are needed, and why. It gives them the confidence that you
            have the right experience and boosts your credibility because you’re
            offering additional information for the sake of education alone.
          </Item>
          <Item title="What is JWT, and how does it work?">
            People will want to know how to get started. You can link them to
            the pages on your website that help them through that process, but
            you’ll also want to take the time to explain it to them here. If you
            have certain enrollment windows, for example, list those. If payment
            or deposits are required, explain that, as well. Make sure that
            people know exactly what they need to do to take online courses from
            you, no matter what those courses might be.
          </Item>
          <Item title="What is the difference between javascript and NodeJS?">
            Some online courses are just a few weeks long, while others last a
            few months. Depending on the type of online learning that you offer,
            your courses may have their own variable lengths. Explain to people
            the types of courses that you have available and what the time frame
            is for each one. If you offer self-paced learning, this is another
            place to reiterate that and reassure people that you can help them
            learn on their own time.
          </Item>
          <Item
            title="How does NodeJS handle multiple requests at the same time?"
          >
            Even when it comes to education and training, people want to be
            careful with their money. Some people are on a tight budget. Others
            just want to be mindful of what they spend. Either way, everyone is
            going to want to know how much online courses are going to cost. If
            you have a set list of prices, provide those here. You can also
            advise whether there are payment plans or financial assistance, or
            if you work with any type of student loan funding.
          </Item>
        </div>
      </div>
    </div>
  );
};

export default Blog;
