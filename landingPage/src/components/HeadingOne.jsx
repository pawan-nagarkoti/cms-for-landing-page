import React from "react";

export default function HeadingOne() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-8 px-4">
      {/* Top Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Our Section</h1>

      {/* Bottom Description */}
      <p className="text-base text-gray-600 text-center max-w-2xl">
        This is a description area where you can elaborate on the details of the section. Tailwind CSS makes it easy to style components with utility classes,
        and React enables dynamic rendering.
      </p>
    </div>
  );
}
