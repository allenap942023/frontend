import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });

    // Cerrar el menú después de hacer clic en una opción
    setMenuOpen(false);
  };

  return (
    <header className="bg-transparent text-white fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 relative">
        <div className="logo flex items-center h-14">
          <img
            src="/img/imagenes/ordino2.png"
            alt="ORDINO"
            className={`w-36 h-25 object-cover object-center ${isMobile ? 'mr-4' : ''} hover:scale-110 transition-transform duration-300 cursor-pointer`}
            onClick={() => scrollToSection('div1')}
          />
        </div>
        {isMobile ? (
          <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <button onClick={toggleMenu} className="text-white focus:outline-none mr-4 text-4xl">
              ☰
            </button>
            {menuOpen && (
              <nav className="menu-overlay bg-black bg-opacity-90 w-full h-full fixed top-0 left-0 flex flex-col items-center justify-center">
                <button onClick={toggleMenu} className="text-white absolute top-4 right-4 text-4xl focus:outline-none">
                  ✕
                </button>
                <ul className="flex flex-col space-y-8 items-center text-2xl">
                  <li>
                    <button className="text-white" onClick={() => scrollToSection('div1')}>
                      Inicio
                    </button>
                  </li>
                  <li>
                    <button className="text-white" onClick={() => scrollToSection('div2')}>
                      Conócenos
                    </button>
                  </li>
                  <li>
                    <button className="text-white" onClick={() => scrollToSection('div3')}>
                      ¿Por qué Elegirnos?
                    </button>
                  </li>
                  <li>
                    <button className="text-white" onClick={() => scrollToSection('div4')}>
                      Contacto
                    </button>
                  </li>
                  <li>
                    {/* Utiliza Link en lugar de button para la redirección */}
                    <Link to="/login" className="text-white" onClick={() => setMenuOpen(false)}>
                      Iniciar Sesión
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        ) : (
          <nav className="menu">
  <ul className="flex space-x-4 text-2xl">
    <li>
      <button className="text-white hover:text-red-500  transition-all duration-300" onClick={() => scrollToSection('div1')}>
        Inicio
      </button>
    </li>
    <li>
      <button className="text-white hover:text-red-500 transition-all duration-300" onClick={() => scrollToSection('div3')}>
        Conócenos
      </button>
    </li>
    <li>
      <button className="text-white hover:text-red-500 transition-all duration-300" onClick={() => scrollToSection('div4')}>
        ¿Por qué Elegirnos?
      </button>
    </li>
    <li>
      <button className="text-white hover:text-red-500 transition-all duration-300" onClick={() => scrollToSection('div4')}>
        Contacto
      </button>
    </li>
    <li>
      {/* Utiliza Link en lugar de button para la redirección */}
      <Link to="/login" className="text-white hover:text-red-500 transition-all duration-300">
        Iniciar Sesión
      </Link>
    </li>
  </ul>
</nav>

        )}
      </div>
    </header>
  );
};

export default Navbar;
  


