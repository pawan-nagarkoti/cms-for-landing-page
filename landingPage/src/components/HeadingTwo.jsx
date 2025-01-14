import React from "react";

export default function HeadingTwo() {
  return (
    <div className="bg-gray-100 py-8 px-4">
      {/* Top Heading */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Explore Our Features</h1>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
        {/* Left Side List */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-4">
            <li>Feature One: Provides excellent value</li>
            <li>Feature Two: Easy to use and intuitive</li>
            <li>Feature Three: Reliable and secure</li>
            <li>Feature Four: Backed by great support</li>
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4"
            alt="Feature Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
