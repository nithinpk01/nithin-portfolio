import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://script.google.com/macros/s/AKfycbwqZj2QczRMvklSefgckZSPjyEFERmRM4Z_Gj0zoiPDCSveLPKypn6EnsPtgcRocB7V/exec", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => {
        alert("Message sent!")
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
      })
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            // went to this website https://www.embed-map.com/ and copy src from generated html code data
            // actual location:  https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5269086258404!2d76.199420714751!3d10.999037492170716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a4e9ea1aa29fb9d!2s7J2RX6X2%2BJJ9!5e0!3m2!1sen!2sin!4v1671375652009!5m2!1sen!2sin
            src="https://www.google.com/maps/embed/v1/place?q=Kerala,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"   loading="lazy"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            {/* <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Address
              </h2>
              <p className="mt-1">
                Pallikkuth Kalarikkal (House) <br />
                Valambur PO <br />
                Kerala, India 679325  
              </p>
            </div> */}
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Email
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                nithinpkinfo@gmail.com
              </a>
              {/* <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+91 9539540146</p> */}
               <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                LinkedIn
              </h2>
              <a className="text-indigo-400 leading-relaxed" href="https://www.linkedin.com/in/nithinpk/">
              linkedin/nithinpk
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                Instagram
              </h2>
              <a className="text-indigo-400 leading-relaxed" href="https://www.instagram.com/nithinpk_official/">
                instagram/nithinpk_official
              </a>
            </div>
          </div>
        </div>
        <form
          netlify
          name="test"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Say hello to me
          </h2>
          <p className="leading-relaxed mb-5">
            You can send message here
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
              required/>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
              required/>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            required/>
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
