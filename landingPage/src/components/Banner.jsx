import React from "react";

export default function Banner() {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your image URL
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white">
          Welcome to <span className="text-blue-500">Your Future</span>
        </h1>
        <p className="mt-4 text-white text-lg sm:text-xl">Discover endless possibilities with solutions crafted for your success.</p>
        <div className="mt-6">
          <a href="#" className="px-8 py-3 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transition duration-300">
            Get Started
          </a>
          <a
            href="#learn-more"
            className="ml-4 px-8 py-3 text-blue-600 bg-white border border-blue-600 rounded-md shadow hover:bg-blue-100 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
