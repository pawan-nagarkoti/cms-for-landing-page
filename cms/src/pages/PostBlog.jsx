import React from "react";
import { CustomInput, CustomTextarea, CustomUploadImage } from "../components";

export default function PostBlog() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 my-6">Landing Page Post</h1>

        <form>
          <CustomUploadImage label="Logo" />
          <div className="flex items-center space-x-4">
            <CustomInput label="Header Menu Items" type="text" placeholder="Header menu items" />
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Add
            </button>
          </div>
          <CustomUploadImage label="Banner Image" />
          <CustomInput label="Heading One" type="text" placeholder="enter your title" />
          <CustomTextarea label="Heading One Content Description" placeholder="enter your short description" />
          <CustomInput label="Heading Two" type="text" placeholder="enter your title" />
          <div className="flex items-center space-x-4">
            <CustomInput label="Listing" type="text" placeholder="List" />
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Add
            </button>
          </div>
          <CustomInput label="Heading Two Images" type="text" placeholder="enter your title" />
          <CustomUploadImage label="Gallery" />
          <div className="flex items-center space-x-4">
            <CustomInput label="Amenties" type="text" placeholder="amenities name" />
            <CustomUploadImage label="" className="mt-4" />
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Add
            </button>
          </div>

          <CustomInput label="Theme" type="text" placeholder="enter your title" />
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
