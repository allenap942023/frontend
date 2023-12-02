import React from 'react';
import Sidebar from "../components/Sidebar";

const Historial = () => {

  // Función para manejar el clic en las opciones del sidebar
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  // Datos inventados para el historial de consultas
  const consultationData = [
    { fecha: '2023-01-15', motivo: 'Dolor abdominal' },
    { fecha: '2023-02-22', motivo: 'Fiebre persistente' },
    { fecha: '2023-03-10', motivo: 'Presión arterial alta' },
  ];

  return (
    <div className="flex h-screen "style={{ backgroundImage: "url('/src/img/imagenes/dashboard4.jpg')", backgroundSize: "cover" }}> {/* aqui le quite: h-screen pero pueda que lo regrese */}
      <Sidebar onOptionClick={handleOptionClick} />
      {/* Contenido principal del Dashboard */}
      <section id="Principal" className="flex-1 flex flex-col overflow-hidden items-start bg-white bg-opacity-70 text-black shadow-2xl rounded-lg md:ml-72 md:mr-4 md:mt-8">
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-bold text-center mb-6">Historial de Consultas Médicas</h2>
          <div className="grid grid-col items-center">
            {consultationData.map((consulta, index) => (
              <div
                key={index}
                className="p-4 border rounded-md cursor-pointer transition-transform transform hover:shadow-lg"
                onClick={() => console.log(`Consulta seleccionada: ${consulta.motivo}`)}
              >
                <p className="text-xl font-bold mb-2">{consulta.motivo}</p>
                <p className="text-gray-600">Fecha: {consulta.fecha}</p>
              </div>
            ))}
          </div>
        </div>

      </section >
    </div>

  );
};

export default Historial;
