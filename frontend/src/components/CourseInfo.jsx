// CourseInfo.jsx
import React from "react";

const CourseInfo = () => {
  return (
    <section className="my-8 px-6">
      <h2 className="text-2xl font-bold mb-4">Información del Curso</h2>
      <div className="bg-white shadow-md rounded p-6 border border-gray-200 flex items-start">
        {/* Contenedor de texto */}
        <div className="flex-1">
          <p className="mb-2">
            <strong>Nombre del Curso:</strong> Inteligencia Artificial
          </p>
          <p className="mb-2">
            <strong>Código del Curso:</strong> 2010705
          </p>
          <p className="mb-2">
            <strong>Duración del Curso:</strong> 16 semanas
          </p>
          <p className="mb-2">
            <strong>Forma de Dictado:</strong> Técnico-experimental
          </p>
          <p className="mb-2">
            <strong>Naturaleza:</strong> Formación profesional
          </p>
          <p className="mb-2">
            <strong>Número de Créditos:</strong> 3
          </p>
          <p className="mb-2">
            <strong>Número de Sección:</strong> 2
          </p>
          <p className="mb-2">
            <strong>Semestre Académico:</strong> 2025-0
          </p>
          <p>
            <strong>Docente del Curso:</strong> Ing. Hugo Vega Huerta
          </p>
        </div>

        {/* Contenedor de la imagen */}
        <div className="ml-6 flex-shrink-0">
          <img
            src="https://dina.concytec.gob.pe/appDirectorioCTI/UploadFotoPath.do?tipo=visualizar_archivo&id_investigador=30451&ruta=/documents/docInvestigadores/30451/imagenes/_CVFotoHugoVega.jpg&content_type=image/jpeg"
            alt="Foto del Profesor"
            className="w-64 h-64 rounded-full border border-gray-300 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;
