import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
