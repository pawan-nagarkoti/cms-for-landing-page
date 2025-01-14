import React from "react";

export default function HeadingOne({ heading = "", description = "" }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-8 px-4">
      {/* Top Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{heading}</h1>

      {/* Bottom Description */}
      <p className="text-base text-gray-600 text-center max-w-2xl">{description}</p>
    </div>
  );
}
