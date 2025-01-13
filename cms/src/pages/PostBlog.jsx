import React, { useEffect, useState } from "react";
import { CustomInput, CustomTextarea, CustomUploadImage } from "../components";
import { _get, _post } from "../services/api";
import { convertBlobUrlsToBinary, convertSingleBlobUrlToBinary } from "../services/helper";

export default function PostBlog() {
  const [formData, setFormData] = useState({
    logo: null,
    headerMenu: "",
    bannerImage: null,
    headingOne: "",
    headingOneContent: "",
    headingTwo: "",
    listing: "",
    headingTwoImages: "",
    gallery: null,
    amenities: "",
    theme: "",
  });
  const [navItem, setNavItem] = useState(null);
  const [navitemList, setNavItemList] = useState([]);

  const [listItem, setListItem] = useState(null);
  const [storedNavListItem, setStoredNavListItem] = useState([]);

  // preview images
  const [previewLogoImages, setPreviewLogoImages] = useState(null);
  const [previewBannerImages, setPreviewBannerImages] = useState(null);
  const [previewHeadingTwoImages, setPreviewHeadingTwoImages] = useState(null);
  const [previewGalleryImages, setPreviewGalleryImages] = useState([]);

  const [amenitiesText, setAmenitiesText] = useState("");
  const [amenitiesImage, setAmenitiesImage] = useState("");
  const [amenitiesData, setAmenitiesData] = useState([]);

  const handleChange = (key) => (e) => {
    switch (e.target.name) {
      case "logo":
        setPreviewLogoImages(URL.createObjectURL(e.target.files[0]));
        break;

      case "bannerImage":
        setPreviewBannerImages(URL.createObjectURL(e.target.files[0]));
        break;

      case "headingTwoImages":
        setPreviewHeadingTwoImages(URL.createObjectURL(e.target.files[0]));
        break;

      case "galleryImages":
        for (let i = 0; i < e.target.files.length; i++) {
          setPreviewGalleryImages((pre) => [...pre, URL.createObjectURL(e.target.files[i])]);
        }

      case "amenitiesFieldImage":
        setAmenitiesImage(e.target.files[0]);
        break;

      default:
        break;
    }

    if (e.target.name !== "galleryImages" && e.target.name !== "amenitiesFieldImage") {
      const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
      setFormData({ ...formData, [key]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.headerMenu = navitemList;
    formData.listing = storedNavListItem;
    formData.gallery = previewGalleryImages;
    formData.amenities = amenitiesData;
    const binaryGallery = await convertBlobUrlsToBinary(formData.gallery);

    try {
      const pageFormData = new FormData();
      pageFormData.append("logo", formData.logo);
      pageFormData.append("bannerImage", formData.bannerImage);
      pageFormData.append("headingOne", formData.headingOne);
      pageFormData.append("headingOneDescription", formData.headingOneContent);
      pageFormData.append("headingTwo", formData.headingTwo);
      pageFormData.append("headingTwoImage", formData.headingTwoImages);
      pageFormData.append("themeColor", formData.theme);
      pageFormData.append("headerItem", formData.headerMenu);
      pageFormData.append("headingTwoList", formData.listing);

      binaryGallery.forEach((file, index) => {
        pageFormData.append(`gallery[${index}]`, file);
      });

      formData.amenities.forEach(async (file, index) => {
        pageFormData.append(`amenities[${index}][text]`, file.amenitiesText);
        // Append amenities image after converting blob URL to a File
        const binaryFile = await convertSingleBlobUrlToBinary(URL.createObjectURL(file.amenitiesImage));
        pageFormData.append(`amenities[${index}][image]`, binaryFile);
      });

      await _get("/landing-page");
      await _post("/landing-page/add", pageFormData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAddMenuItem = () => {
    setNavItemList((pre) => [...pre, navItem]);
    setNavItem("");
  };

  const handleAddListItem = () => {
    setStoredNavListItem((prev) => [...prev, listItem]);
    setListItem("");
  };

  const handleAddAmenities = () => {
    const amenitiesDataObject = {
      amenitiesText,
      amenitiesImage,
    };

    setAmenitiesData((prev) => [...prev, amenitiesDataObject]);
    setAmenitiesText("");
    document.getElementById("amentiesFieldImageId").value = "";
  };

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 my-6">Landing Page Post</h1>

        <form onSubmit={handleSubmit}>
          <CustomUploadImage label="Logo" name="logo" onChange={handleChange("logo")} />
          {previewLogoImages && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">Image Preview:</p>
              <img src={previewLogoImages} alt="Uploaded Preview" className="mt-2 mb-2 w-64 h-64 object-cover rounded-md border border-gray-300" />
            </div>
          )}

          <div className="flex items-center space-x-4">
            <CustomInput
              label="Header Menu Items"
              type="text"
              placeholder="Header menu items"
              value={navItem ?? ""}
              onChange={(e) => setNavItem(e.target.value)}
            />
            <button
              type="button"
              className="mt-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              onClick={handleAddMenuItem}
            >
              Add
            </button>
          </div>
          {navitemList.length > 0 && (
            <ul className="list-disc list-inside space-y-2 bg-gray-100 p-4 rounded-md shadow-md mb-3">
              {navitemList.map((v, i) => (
                <li key={i} className="text-gray-800 text-sm font-medium">
                  {v}
                </li>
              ))}
            </ul>
          )}

          <CustomUploadImage label="Banner Image" name="bannerImage" onChange={handleChange("bannerImage")} />
          {previewBannerImages && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">Image Preview:</p>
              <img src={previewBannerImages} alt="Uploaded Preview" className="mt-2 mb-2 w-64 h-64 object-cover rounded-md border border-gray-300" />
            </div>
          )}

          <CustomInput label="Heading One" type="text" placeholder="enter your title" onChange={handleChange("headingOne")} />
          <CustomTextarea label="Heading One Content Description" placeholder="enter your short description" onChange={handleChange("headingOneContent")} />

          <CustomInput label="Heading Two" type="text" placeholder="enter your title" onChange={handleChange("headingTwo")} />
          <div className="flex items-center space-x-4">
            <CustomInput label="Listing" type="text" placeholder="List" value={listItem ?? ""} onChange={(e) => setListItem(e.target.value)} />
            <button
              type="button"
              onClick={handleAddListItem}
              className="mt-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Add
            </button>
          </div>

          {storedNavListItem.length > 0 && (
            <ul className="list-disc list-inside space-y-2 bg-gray-100 p-4 rounded-md shadow-md mb-3">
              {storedNavListItem.map((v, i) => (
                <li key={i} className="text-gray-800 text-sm font-medium">
                  {v}
                </li>
              ))}
            </ul>
          )}

          <CustomUploadImage label="Heading Two Images" name="headingTwoImages" onChange={handleChange("headingTwoImages")} />
          {previewHeadingTwoImages && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">Image Preview:</p>
              <img src={previewHeadingTwoImages} alt="Uploaded Preview" className="mt-2 mb-2 w-64 h-64 object-cover rounded-md border border-gray-300" />
            </div>
          )}

          <CustomUploadImage label="Gallery" name="galleryImages" multiple onChange={handleChange("galleryImages")} />
          {previewGalleryImages.length > 0 && (
            <div className="mt-4 mb-3">
              <p className="text-sm text-gray-600">Image Preview:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
                {previewGalleryImages.map((g, i) => (
                  <div key={i} className="relative">
                    <img src={g} alt="Uploaded Preview" className="w-full h-64 object-cover rounded-md border border-gray-300" />
                    <button className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow hover:bg-red-600">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center space-x-4">
            <CustomInput
              label="Amenties"
              type="text"
              value={amenitiesText ?? ""}
              placeholder="amenities name"
              onChange={(e) => {
                setAmenitiesText(e.target.value);
              }}
            />
            <CustomUploadImage label="" className="mt-4" name="amenitiesFieldImage" id="amentiesFieldImageId" onChange={handleChange("amenitiesFieldImage")} />
            <button
              onClick={() => handleAddAmenities()}
              type="button"
              className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Add
            </button>
          </div>

          {amenitiesData.length > 0 && (
            <div className="mt-4 mb-3">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
                {amenitiesData?.map((v, i) => (
                  <div key={i} className="flex flex-col items-start p-4 border border-gray-300 rounded-md shadow-sm bg-white">
                    <p className="text-lg font-semibold text-gray-800 mb-2">{v.amenitiesText}</p>
                    <img
                      src={URL.createObjectURL(v.amenitiesImage)}
                      alt=""
                      className="w-full aspect-w-4 aspect-h-3 object-cover rounded-md border border-gray-300 mb-4"
                    />
                    <button className="px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors self-start">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <CustomInput label="Theme" type="text" placeholder="enter your title" onChange={handleChange("theme")} />
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
