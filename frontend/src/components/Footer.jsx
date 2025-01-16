// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 mt-10">
      <div className="px-6 text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} - Universidad Nacional Mayor de San Marcos
        </p>
      </div>
    </footer>
  );
};

export default Footer;
