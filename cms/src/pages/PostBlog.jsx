import React from "react";
import { CustomInput, CustomTextarea } from "../components";

export default function PostBlog() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 my-6">Landing Page Post</h1>

        <form>
          <CustomInput label="Title" type="text" placeholder="enter your title" />
          <CustomTextarea label="Short Description" placeholder="enter your short description" />
          <div className="mb-2">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
