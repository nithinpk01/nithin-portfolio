import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">Nithin PK</h1>
            {/* <p className="text-sm mt-2">Software Engineer</p> */}
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/nithinpk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-500"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/nithinpk_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-500"
            >
              Instagram
            </a>
            <a
              href="mailto:nithinpkinfo@gmail.com"
              className="text-gray-400 hover:text-indigo-500"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>© 2025 Nithin PK. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
