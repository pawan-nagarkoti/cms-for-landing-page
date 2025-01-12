import React from "react";
import { useId } from "react";

export default function CustomTextarea({ label = "", ...props }) {
  const { id } = useId();
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        name=""
        id=""
        rows="4"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
        {...props}
      ></textarea>
    </div>
  );
}
