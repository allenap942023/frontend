// Dashboard.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Función para manejar el clic en las opciones del sidebar
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex  "style={{ backgroundImage: "url('/img/imagenes/Sin título.png')", backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Contenido del Sidebar */}
      <Sidebar onOptionClick={handleOptionClick} />

      {/* Contenido principal del Dashboard */}
      <div id="Principal" className="flex-1 flex flex-col overflow-hidden md:ml-72 md:mr-4 md:mt-8"> {/* Añadí md: para hacer las clases responsivas */}        {/* Renderiza el componente correspondiente según la opción seleccionada */}
      <div class="flex items-center justify-center h-screen ">
  <div class="max-w-4xl mx-auto px-6 py-12">
    <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 animate-bounce">Bienvenido/a a tu clinica</h1>
    <p class="text-lg md:text-xl text-white mb-12 animate-pulse">Nos apaciona ver como te conviertes en un lider digital de la gestion médica.</p>
    <a href="/src/components/Busqueda.jsx" class="inline-block bg-white text-blue-500 hover:bg-blue-600 text-lg md:text-xl font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out animate-pulse">Buscar Pacientes</a>
  </div>
</div>
      </div>
    </div>
  );
};

export default Dashboard;
