import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <h1 className="text-2xl font-bold mb-4">BrandName</h1>
            <p className="text-sm text-gray-400">Discover premium products and services designed to enhance your lifestyle. Excellence redefined.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Stay Updated</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-gray-800 text-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 BrandName. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              FAQ
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
