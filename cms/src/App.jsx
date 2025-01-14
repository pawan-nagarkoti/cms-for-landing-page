import React from "react";
import { BlogTable, PostBlog } from "./pages";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BlogTable />} />
        <Route path="/landing-page-form" element={<PostBlog />} />
      </Routes>
    </>
  );
}
