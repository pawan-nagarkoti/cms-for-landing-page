import React, { forwardRef } from "react";
import { useId } from "react";

const CustomInput = forwardRef(({ label = "", type = "text", ...props }, ref) => {
  const id = useId(); // Generate a unique ID
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        ref={ref} // Forward the ref to the input element
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        {...props} // Spread other props onto the input
      />
    </div>
  );
});

export default CustomInput;
