import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { _delete, _get } from "../services/api";

export default function BlogTable() {
  const navigate = useNavigate();
  const [pageData, setPageData] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert(`Copied: ${text}`))
      .catch((err) => alert("Failed to copy text: ", err));
  };

  const getLandingPageData = async () => {
    const data = await _get("landing-page");
    setPageData(data?.data?.data);
  };

  useEffect(() => {
    getLandingPageData();
  }, []);

  const handleDeletedLandingPage = async (deleteId) => {
    try {
      const response = await _delete(`landing-page/delete/${deleteId}`);
      if (response?.data?.status === true) {
        setPageData((prev) => prev.filter((item) => item._id !== deleteId));
      } else {
        alert("Failed to delete the landing page. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting landing page:", error.message);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="p-4">
        {/* Table with spacing */}
        <div className="mt-4 max-w-4xl mx-auto">
          <div className="max-w-md mb-5">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none" onClick={() => navigate("/landing-page-form")}>
              New Landing Page
            </button>
          </div>
          <table className="w-full border border-gray-300 border-collapse text-center">
            <thead>
              <tr>
                <th className="border border-gray-300 p-4">Landing Page Name</th>
                <th className="border border-gray-300 p-4">ID</th>
                <th className="border border-gray-300 p-4">Copy Landing Page ID</th>
                <th className="border border-gray-300 p-4">Delete</th>
              </tr>
            </thead>
            {pageData.length === 0 ? (
              <div className="flex justify-center items-center h-[10rem]">
                <p className="text-center text-2xl">No Data Is Found</p>
              </div>
            ) : (
              <tbody>
                {pageData.length > 0 &&
                  pageData?.map((v, i) => (
                    <tr key={i}>
                      <td className="border border-gray-300 p-4">{v.landingPageName}</td>
                      <td className="border border-gray-300 p-4">{v._id}</td>
                      <td className="border border-gray-300 p-4">
                        <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600" onClick={() => handleCopy(v?._id)}>
                          Copy
                        </button>
                      </td>
                      <td className="border border-gray-300 p-4">
                        <button
                          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 focus:outline-none"
                          onClick={() => handleDeletedLandingPage(v?._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}
