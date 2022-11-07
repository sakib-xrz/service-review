import React from 'react';

const Service = () => {
    return (
      <div>
        <div className="text-center mt-10 mb-5">
          <h2 className="font-semibold md:font-bold text-xl md:text-4xl mb-2">
            Browse Category
          </h2>
          <p>Explore my works</p>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Service;