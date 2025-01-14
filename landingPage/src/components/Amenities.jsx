import React from "react";

export default function Amenities({ amenitiesData = "" }) {
  return (
    <div className="bg-gray-100 py-8 px-4">
      {/* Section Heading */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Amenities</h1>

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {amenitiesData.length > 0 &&
          amenitiesData.map((amenity, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center text-center p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <img src={amenity.image} alt={amenity.title} className="w-24 h-24 object-cover mb-4 rounded-full" />
              <h2 className="text-lg font-semibold text-gray-700 mb-2">{amenity.text}</h2>
              <p className="text-sm text-gray-600">A luxurious pool to relax and unwind.</p>
            </div>
          ))}
      </div>
    </div>
  );
}
