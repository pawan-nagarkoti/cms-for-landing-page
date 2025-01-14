import React from "react";

export default function HeadingTwo({ heading = "", image = "", list = [] }) {
  return (
    <div className="bg-gray-100 py-8 px-4">
      {/* Top Heading */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">{heading}</h1>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
        {/* Left Side List */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-4">
            {list.length > 0 && list[0].split(",")?.map((v, i) => <li key={i}>{v}</li>)}
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center">
          <img src={image} alt="Feature Illustration" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}
