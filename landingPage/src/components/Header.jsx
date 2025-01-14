import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <a href="/">MyWebsite</a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-500 transition duration-300">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-blue-500 transition duration-300">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 transition duration-300">
              Contact
            </a>
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
