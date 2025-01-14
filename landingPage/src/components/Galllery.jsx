import React from "react";

export default function Galllery({ galleryData = [] }) {
  return (
    <div className="bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryData.length > 0 &&
          galleryData?.map((v, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300">
              <img src={v.imageUrl} alt={`Gallery Image ${i + 1}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Gallery Item {i + 1}</h2>
                <p className="text-sm text-gray-600">This is a description for item {i + 1}.</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
