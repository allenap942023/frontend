// Home.jsx
import React from 'react';
import Navbar from "../components/Navbar"; // Importa el Navbar aquí

const Home = ({ showNavbar }) => {
  return (
    <div className="bg-blue-800 text-white">
      {showNavbar && <Navbar />} {/* Renderiza el Navbar solo si showNavbar es true */}

      <div
        id="div1"
        className="py-16 bg-cover bg-center h-screen relative"
        style={{ backgroundImage: "url('/src/img/imagenes/DoctoraP.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute flex flex-col justify-center items-center top-1/3 text-white text-center md:w-96 md:left-auto md:right-16 md:transform-none">
          <p className="text-3xl md:text-2xl lg:text-3xl xl:text-3xl">
            Bienvenido al futuro de la gestión médica
          </p>
          <p className="font-semibold text-4xl md:text-3xl lg:text-4xl xl:text-4xl mt-2 lg:mt-4">
            Eficiencia en la atención profesional: Digitaliza tu clínica.
          </p>
          <button
            className="mt-4 bg-white text-black font-bold text-xs md:text-sm lg:text-base xl:text-lg 
                 w-40 md:w-48 lg:w-56 xl:w-64 h-10 md:h-12 lg:h-14 xl:h-16 
                 flex items-center justify-center rounded-full shadow-md 
                 hover:text-red-500 hover:bg-gray-200 transform transition duration-300 ease-in-out 
                  focus:outline-none"
          >
            Conecta con nosotros
          </button>
        </div>
      </div>


      <div
        id="div2"
        className="py-16 bg-cover bg-center h-screen relative"
        style={{ backgroundImage: "url('/src/img/imagenes/div2.jpeg')" }}
      >
        <div className="absolute flex flex-col justify-center items-center top-1/3 text-white text-center md:w-96 md:left-auto md:right-16 md:transform-none">
          <p className="text-3xl md:text-2xl lg:text-3xl xl:text-3xl">
            Convierte tus desafíos en oportunidades con Ordino.
          </p>
          <p className="font-semibold text-4xl md:text-3xl lg:text-4xl xl:text-4xl mt-2 lg:mt-4">
            Transformamos clínicas en líderes digitales de la gestión médica.
          </p>
          <button
            className="mt-4 bg-white text-black font-bold text-xs md:text-sm lg:text-base xl:text-lg 
                 w-40 md:w-48 lg:w-56 xl:w-64 h-10 md:h-12 lg:h-14 xl:h-16 
                 flex items-center justify-center rounded-full shadow-md 
                 hover:text-red-500 hover:bg-gray-200 transform transition duration-300 ease-in-out 
                  focus:outline-none"
          >
            Consulta nuestros planes
          </button>
        </div>
      </div>

      <div id="div3" className="py-16 bg-cover bg-center h-screen relative bg-beige flex items-center">

  {/* Contenido del div "primero" */}
  <div id="primero" className="lg:w-96 lg:left-16 lg:transform-none lg:absolute lg:flex lg:flex-col lg:justify-center lg:items-center lg:top-1/4 lg:text-white lg:text-center lg:mx-auto w-full md:w-full md:flex md:flex-col md:justify-center md:items-center md:top-1/2 md:text-white md:text-center md:transform-md md:items-center md:items-center m-4"> {/* Añadí la clase m-4 para el margen en todas las pantallas */}

    <h2 className="font-semibold text-4xl md:text-3xl lg:text-4xl xl:text-4xl mt-2 lg:mt-4 text-black my-4">Conoce al equipo de ORDINO</h2>
    <p className="text-3xl md:text-2xl lg:text-3xl xl:text-3xl text-black my-4 sm:text-sm"> {/* Aquí agregué la clase sm:text-sm para pantallas móviles */}
      Nuestro equipo está formado por profesionales apasionados y dedicados con experiencia en tecnología y atención médica. Trabajamos incansablemente para ofrecer soluciones de alta calidad a nuestros clientes.
    </p>
    <button className="bg-white text-black font-bold text-xs md:text-sm lg:text-base xl:text-lg 
      w-40 md:w-48 lg:w-56 xl:w-64 h-10 md:h-12 lg:h-14 xl:h-16 
      flex items-center justify-center rounded-full shadow-md 
      hover:text-red-500 hover:bg-gray-200 transform transition duration-300 ease-in-out 
       focus:outline-none my-4 sm:text-sm"
    >
      Contáctanos
    </button>
  </div>

  {/* Contenido del div "segundo" */}
  <div id="segundo" className="hidden lg:block absolute flex flex-col justify-center items-center top-1/4 text-center md:w-4/6 md:left-auto md:right-16 md:transform-none m-4"> {/* Añadí la clase m-4 para el margen en todas las pantallas */}

    <p className="text-3xl md:text-2xl lg:text-3xl xl:text-3xl text-black mb-8">
      En Ordino, entendemos los desafíos que enfrentan las clínicas privadas en El Salvador a la hora de gestionar los expedientes médicos de manera efectiva. Nuestra historia comenzó con la visión de transformar la gestión clínica, y desde entonces nos hemos dedicado a desarrollar soluciones innovadoras que simplifican la vida de los profesionales de la salud y el personal administrativo.
    </p>

    <div className="flex justify-end w-2/3">
      <div className="card-hover w-1/2 mr-4 mb-8 rounded-[88px] shadow-lg" style={{ width: "273px", height: "349px" }}>
        <img
          src="/src/img/imagenes/Inter (2).png"
          alt="Tarjeta 1"
          className="rounded-[40px]  w-full h-full object-cover rounded-lg transition-transform duration-300 transform "
        />
      </div>
      <div className="card-hover w-1/2 ml-4 mb-8 rounded-[88px] shadow-lg" style={{ width: "317px", height: "349px" }}>
        <img
          src="/src/img/imagenes/Inter (1).png"
          alt="Tarjeta 2"
          className="rounded-[40px] w-full h-full object-cover rounded-lg transition-transform duration-300 transform  "
        />
      </div>
    </div>
  </div>
</div>














      <div id="div4" className="py-16">
        <h2 className="text-4xl font-bold h-screen">Div 4</h2>
        {/* Contenido del Div 4 */}
      </div>
      <div id="div5" className="py-16">
        <h2 className="text-4xl font-bold h-screen">Div 5</h2>
        {/* Contenido del Div 5 */}
      </div>
    </div>
  );
};

export default Home;

