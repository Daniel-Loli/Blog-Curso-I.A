// WeekCard.jsx
import React from "react";

const WeekCard = ({ weekNumber, pdfLink, driveLink, wordLink, canvaLink }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-bold mb-2">Semana {weekNumber}</h2>
      <ul className="space-y-1">
        <li>
          <a
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Resumen (PDF)
          </a>
        </li>
        <li>
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Carpeta Drive
          </a>
        </li>
        <li>
          <a
            href={wordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Documento Word
          </a>
        </li>
        <li>
          <a
            href={canvaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Presentación Canva
          </a>
        </li>
      </ul>
    </div>
  );
};

export default WeekCard;
