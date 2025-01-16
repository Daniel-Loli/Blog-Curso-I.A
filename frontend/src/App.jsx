// App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Team from "./components/Team";
import CourseInfo from "./components/CourseInfo";
import WeeksTable from "./components/WeeksTable";

import weeksData from "./data/weeksData";

const App = () => {
  return (
    // Cubrimos toda la altura de la pantalla y aplicamos un fondo con gradiente
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center">
      {/* Contenedor principal con fondo blanco, sombra y esquinas redondeadas */}
      <div className="w-full md:w-4/5 lg:w-4/5 my-6 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
        
        <Header />

        <main className="px-4 md:px-8 py-6 flex-grow">
          <CourseInfo />
          <Team />
          <WeeksTable data={weeksData} />
        </main>

        <Footer />

      </div>
    </div>
  );
};

export default App;
