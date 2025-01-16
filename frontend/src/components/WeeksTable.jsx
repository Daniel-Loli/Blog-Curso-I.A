// WeeksTable.jsx
import React from "react";

const WeeksTable = ({ data = [] }) => {
  return (
    <section className="my-8 px-6">
      <h2 className="text-2xl font-bold mb-4">Contenido por Semanas</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden text-gray-700">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left font-semibold uppercase text-sm">
                Semana
              </th>
              <th className="py-3 px-4 text-left font-semibold uppercase text-sm">
                Tema
              </th>
              <th className="py-3 px-4 text-left font-semibold uppercase text-sm">
                Tareas
              </th>
              <th className="py-3 px-4 text-left font-semibold uppercase text-sm">
                Laboratorios
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((week, index) => {
              // Evitar errores si tasks o labs son undefined
              const tasks = week.tasks ?? [];
              const labs = week.labs ?? [];

              return (
                <tr
                  key={index}
                  className={
                    // "odd:bg-gray-50" para filas alternadas
                    "border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-200 odd:bg-gray-50"
                  }
                >
                  <td className="py-4 px-6 font-semibold">
                    Semana {week.weekNumber}
                  </td>
                  <td className="py-4 px-6 whitespace-pre-line">
                    {week.topic}
                  </td>
                  <td className="py-4 px-6">
                    {tasks.length > 0 ? (
                      tasks.map((task, i) => (
                        <div key={i}>
                          <a
                            href={task.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {task.name}
                          </a>
                        </div>
                      ))
                    ) : (
                      <span className="italic text-gray-400">Sin tareas</span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    {labs.length > 0 ? (
                      labs.map((lab, i) => (
                        <div key={i}>
                          <a
                            href={lab.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {lab.name}
                          </a>
                        </div>
                      ))
                    ) : (
                      <span className="italic text-gray-400">Sin laboratorios</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default WeeksTable;
