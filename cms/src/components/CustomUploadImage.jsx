import React, { forwardRef } from "react";
import { useId } from "react";

const CustomUploadImage = forwardRef(({ label = "", className = "", ...props }, ref) => {
  const id = useId();

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type="file"
        id={id}
        ref={ref}
        {...props}
        className="py-2 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
});

export default CustomUploadImage;
