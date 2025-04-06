import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import required components from react-router-dom
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs"; // New Blogs component
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer"; // Adjust the path as needed


export default function App() {
  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}
