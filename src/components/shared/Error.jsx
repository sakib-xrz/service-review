import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
      <div>
        <section className="flex items-center h-screen p-16 bg-base-100 dark:dark:text-gray-100">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <h2 className="mb-8 font-extrabold text-9xl text-primary">
                <span className="sr-only">Error</span>404
              </h2>
              <p className="text-2xl font-semibold text-light md:text-3xl">
                Sorry, we couldn't find this page.
              </p>
              <p className="mt-4 mb-8 text-gray-300">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>
              <Link
                rel="noopener noreferrer"
                to="/"
                className="btn btn-wide md:btn-md bg-transparent text-white border-primary rounded-md mr-5 text-xs md:text-base hover:text-base-100 hover:bg-primary hover:border-primary"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Error;