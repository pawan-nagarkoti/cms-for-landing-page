import React from "react";

export default function Header({ logo = "", menuItems = [] }) {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16">
              <img src={logo} alt="Website Logo" className="w-full h-full rounded-full object-cover" />
            </div>
            <h1 className="text-lg font-semibold">Website Logo</h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.length > 0 &&
              menuItems[0].split(",")?.map((v, i) => (
                <a href="#" key={i} className="text-gray-600 hover:text-blue-500 transition duration-300">
                  {v}
                </a>
              ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button type="button" className="text-gray-600 hover:text-blue-500 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
