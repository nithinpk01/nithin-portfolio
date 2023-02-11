import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Nithin PK.
            <br className="hidden lg:inline-block" /> Software Engineer
          </h1>
          <p className="mb-8 leading-relaxed">
          I am Nithin PK, Full Stack Developer, focusing on developing web applications using Angular, React, Node, PHP and HTML5 to build everything a user sees and interacts with on a website.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            {/* <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="https://1.bp.blogspot.com/-kzxFgl4hKUs/X4Gar3Q_lUI/AAAAAAAAAmk/-mm5KH_xxkkGLz3xwZiaQYmzhMGWXmbWACLcBGAsYHQ/s2048/nithin-blog.jpg"
          />
        </div>
      </div>
    </section>
  );
}
