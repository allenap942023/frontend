import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="flex flex-col items-center space-y-4">
        {/* Agrega tu imagen de logo */}
        <img
          src="/img/imagenes/ordino2.png" // Reemplaza con la ruta de tu logo
          alt="Logo de Ordino"
          className="w-36 h-auto  transition-transform duration-300"  // Agrega el efecto de escala en hover
        />

        {/* Línea blanca entre la imagen del logo y los iconos */}
        <div className="h-1 w-full bg-white my-2"></div>

        {/* Agrega enlaces a tus perfiles de redes sociales */}
        <div className="flex justify-center items-center space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61554161728620"
            className="text-4xl hover:text-blue-500 hover:scale-110 transition-transform duration-300"  // Ajusta el tamaño de la fuente y la escala
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/ordino.oficial/"
            className="text-4xl hover:text-pink-500 hover:scale-110 transition-transform duration-300"  // Ajusta el tamaño de la fuente y la escala
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/ordinooficial"
            className="text-4xl hover:text-blue-400 hover:scale-110 transition-transform duration-300"  // Ajusta el tamaño de la fuente y la escala
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <p className="text-center mt-4">
        © 2023 Ordino. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
