// Home.jsx
import React from 'react';
import Navbar from "../components/Navbar"; // Importa el Navbar aquí
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth' });
}
const Home = ({ showNavbar }) => {
  return (
    <div className="bg-blue-800 text-white">
      {showNavbar && <Navbar />} {/* Renderiza el Navbar solo si showNavbar es true */}

      <div
        id="div1"
        className="py-16 bg-cover bg-center h-screen relative "
        style={{ backgroundImage: "url('/public/img/imagenes/DoctoraP.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute flex flex-col justify-center items-center top-1/3 text-white text-center md:w-96 md:left-auto md:right-16 md:transform-none">
          <p className="text-3xl md:text-2xl lg:text-3xl xl:text-3xl animate-bounce">
            Bienvenido al futuro de la gestión médica
          </p>
          <p className="font-semibold text-4xl md:text-3xl lg:text-4xl xl:text-4xl mt-2 lg:mt-4 animate-pulse">
            Eficiencia en la atención profesional: Digitaliza tu clínica.
          </p>
          <button
            className="mt-4 bg-white text-black font-bold text-xs md:text-sm lg:text-base xl:text-lg 
                 w-40 md:w-48 lg:w-56 xl:w-64 h-10 md:h-12 lg:h-14 xl:h-16 
                 flex items-center justify-center rounded-full shadow-md 
                 hover:text-red-500 hover:bg-gray-200 transform transition duration-300 ease-in-out 
                 hover:scale-105 focus:outline-none animate-pulse" onClick={() => scrollToSection('div5')}
          >
            Conecta con nosotros
          </button>
        </div>
      </div>


      <div
        id="div2"
        className="py-16 bg-cover bg-center h-screen relative"
        style={{ backgroundImage: "url('/public/img/imagenes/div2.jpeg')" }}
      >
        <div className="absolute flex flex-col justify-center items-center top-1/3 text-white text-center md:w-96 md:left-auto md:right-16 md:transform-none">
          <p className="text-3xl md:text-2xl lg:text-3xl xl:text-3xl animate-pulse">
            Convierte tus desafíos en oportunidades con Ordino.
          </p>
          <p className="font-semibold text-4xl md:text-3xl lg:text-4xl xl:text-4xl mt-2 lg:mt-4 animate-pulse">
            Transformamos clínicas en líderes digitales de la gestión médica.
          </p>
          <button
            className="mt-4 bg-white text-black font-bold text-xs md:text-sm lg:text-base xl:text-lg 
                 w-40 md:w-48 lg:w-56 xl:w-64 h-10 md:h-12 lg:h-14 xl:h-16 
                 flex items-center justify-center rounded-full shadow-md 
                 hover:text-red-500 hover:bg-gray-200 transform transition duration-300 ease-in-out 
                 hover:scale-105 focus:outline-none animate-pulse"
                 onClick={() => scrollToSection('div5')}
          >
            Consulta nuestros planes
          </button>
        </div>
      </div>

      <div id="div3" className="py-16 bg-cover bg-center h-screen relative bg-beige flex items-center">

        {/* Contenido del div "primero" */}
        <div id="primero" className="lg:w-96 lg:left-16 lg:transform-none lg:absolute lg:flex lg:flex-col lg:justify-center lg:items-center lg:top-1/4 lg:text-white lg:text-center lg:mx-auto w-full md:w-full md:flex md:flex-col md:justify-center md:items-center md:top-1/2 md:text-white md:text-center md:transform-md md:items-center md:items-center m-4"> {/* Añadí la clase m-4 para el margen en todas las pantallas */}

          <h2 className="font-semibold text-4xl md:text-3xl lg:text-4xl xl:text-4xl mt-2 lg:mt-4 text-black my-4 animate-bounce">Conoce al equipo de ORDINO</h2>
          <p className="text-3xl md:text-2xl lg:text-3xl xl:text-3xl text-black my-4 sm:text-sm "> {/* Aquí agregué la clase sm:text-sm para pantallas móviles */}
            Nuestro equipo está formado por profesionales apasionados y dedicados con experiencia en tecnología y atención médica. Trabajamos incansablemente para ofrecer soluciones de alta calidad a nuestros clientes.
          </p>
          <button className="bg-white text-black font-bold text-xs md:text-sm lg:text-base xl:text-lg 
      w-40 md:w-48 lg:w-56 xl:w-64 h-10 md:h-12 lg:h-14 xl:h-16 
      flex items-center justify-center rounded-full shadow-md 
      hover:text-red-500 hover:bg-gray-200 transform transition duration-300 ease-in-out 
      hover:scale-105 focus:outline-none my-4 sm:text-sm animate-pulse"
      onClick={() => scrollToSection('div5')}
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
                src="/public/img/imagenes/Inter (2).png"
                alt="Tarjeta 1"
                className="rounded-[40px]  w-full h-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div className="card-hover w-1/2 ml-4 mb-8 rounded-[88px] shadow-lg" style={{ width: "317px", height: "349px" }}>
              <img
                src="/public/img/imagenes/Inter (1).png"
                alt="Tarjeta 2"
                className="rounded-[40px] w-full h-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 "
              />
            </div>
          </div>
        </div>
      </div>




      <div id="div4" className="py-16 h-screen" style={{ backgroundImage: "url('/public/img/imagenes/dashboard5.jpg')", backgroundSize: "cover" }}>
        
        <div class="flex items-center justify-center  h-full">
          <section class="max-w-5xl p-8 rounded-lg shadow-lg bg-gray-700 bg-opacity-70 transform hover:scale-105 transition duration-300 hover:rotate-3 hover:-translate-y-1 hover:shadow-2xl">
            <h2 class="mb-6 text-5xl font-extrabold leading-none tracking-tight text-white transform hover:scale-105 transition duration-300 hover:rotate-3 hover:-translate-y-1">¿Por qué elegirnos? </h2>
            <p class="mb-6 text-2xl font-normal animate-pulse">Nos esforzamos por ser líderes en la industria de la gestión clínica digital, y nuestro compromiso con la excelencia nos impulsa a superar constantemente los estándares de calidad.</p>
          </section>
        </div>
      </div>


      <div id="div5" className="h-screen grid grid cols-1 items-center justify-center" style={{ backgroundImage: "url('/public/img/imagenes/jadeazul.jpg')", backgroundSize: "cover" }}>
      <div className="bg-gray-900 bg-opacity-80 text-white flex items-center justify-center h-1/2 rounded-lg ">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 animate-bounce">Contacta con nosotros</h1>
        <p className="text-2xl mb-8 p-10">
          Será un gusto responder a tus dudas y platicar contigo sobre nuestros planes. Puedes contactarnos en:
        </p>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            {/* Icono de Facebook */}
            <a href="#" className="inline-block p-6 bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-110">
              <FontAwesomeIcon icon={faFacebook} className="h-12 w-12 text-white" />
            </a>
            <span className="mt-2 text-lg">Facebook</span>
          </div>

          <div className="ml-8 flex flex-col items-center">
            {/* Icono de Instagram */}
            <a href="#" className="inline-block p-6 bg-pink-600 rounded-full hover:bg-pink-700 transition duration-300 transform hover:scale-110">
              <FontAwesomeIcon icon={faInstagram} className="h-12 w-12 text-white" />
            </a>
            <span className="mt-2 text-lg">Instagram</span>
          </div>

          <div className="ml-8 flex flex-col items-center">
            {/* Icono de Twitter */}
            <a href="#" className="inline-block p-6 bg-blue-400 rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-110">
              <FontAwesomeIcon icon={faTwitter} className="h-12 w-12 text-white" />
            </a>
            <span className="mt-2 text-lg">Twitter</span>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Home;