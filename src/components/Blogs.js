import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Blogs() {
  return (
    <section id="blogs" className="relative min-h-screen flex flex-col justify-between bg-gray-900">
      {/* Container will be positioned at top, bottom, or center */}
      <div className="text-center bg-gray-800 p-10 rounded-lg shadow-xl w-full max-w-md mx-auto">
        <h1 className="text-white sm:text-4xl text-3xl mb-5 font-medium title-font">
          Blog Topics
        </h1>
        
        {/* Ordered List with <h3> for each topic */}
        <ol className="list-decimal text-white space-y-4 text-left">
          <li>
            <h3 className="text-xl font-semibold">
              <Link to="/blogs/web-development-basics" className="cursor-pointer hover:text-indigo-400">
                Web Development Basics
              </Link>
            </h3>
          </li>
          <li>
            <h3 className="text-xl font-semibold">
              <Link to="/blogs/front-end-development" className="cursor-pointer hover:text-indigo-400">
                Front-End Development
              </Link>
            </h3>
          </li>
          <li>
            <h3 className="text-xl font-semibold">
              <Link to="/blogs/back-end-development" className="cursor-pointer hover:text-indigo-400">
                Back-End Development
              </Link>
            </h3>
          </li>
          {/* Add more topics here if needed */}
        </ol>
      </div>
    </section>
  );
}
