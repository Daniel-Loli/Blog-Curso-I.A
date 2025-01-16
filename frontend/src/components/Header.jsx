// Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-6 shadow-md">
      <div className="w-full px-6 flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold mb-2 md:mb-0">Curso de Inteligencia Artificial</h1>
        <p className="text-sm md:text-base opacity-90 italic">
          Profesor: Ing. Hugo Vega Huerta
        </p>
      </div>
    </header>
  );
};

export default Header;
