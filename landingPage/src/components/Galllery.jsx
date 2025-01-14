import React from "react";

export default function Galllery() {
  return (
    <div className="bg-gray-100 py-8 px-4">
      {/* Section Heading */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Gallery</h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src={`https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4`}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Gallery Item {index + 1}</h2>
              <p className="text-sm text-gray-600">This is a description for item {index + 1}.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
