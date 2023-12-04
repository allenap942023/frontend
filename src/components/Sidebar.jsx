import React, { useState, useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import {
  FaUser,
  FaSearch,
  FaUserMd,
  FaFileMedicalAlt,
  FaHistory,
  FaSignOutAlt,
  FaBars,
  FaWindowClose,
  FaArrowDown,
  FaArrowCircleDown,
  FaLongArrowAltDown,
  FaCartArrowDown,
  FaRegArrowAltCircleDown,
  FaExpandArrowsAlt,
  FaPlus,
} from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import Swal from "sweetalert2";
const URLBackEnd = "https://excited-miniskirt-wasp.cyclic.app/api";

const Sidebar = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
  const [menuOpen, setMenuOpen] = useState(!isTabletOrMobile);
  const [usuario, setUsuario] = useState(null);
  const rol = window.localStorage.getItem("rol");
  const history = useNavigate();
  useEffect(() => {
    setMenuOpen(!isTabletOrMobile);
    obtenerInfoUsuario();
  }, [isTabletOrMobile]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const obtenerInfoUsuario = () => {
    var id = window.localStorage.getItem("_id");
    var token = window.localStorage.getItem("token");

    axios
      .get(`${URLBackEnd}/usuarios/${id}`, {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      })
      .then((res) => {
        var datosRecibidos = res.data;
        console.log(datosRecibidos);
        setUsuario(datosRecibidos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cerrarSesion = () => {
    Swal.fire({
      title: "¿Estás seguro de que quieres cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("_id");
        // window.location.replace("/login");
        history("/login");
      }
    });
  };
  return (
    <nav
      className={`sm: min-h-full w-full sm:min-h-screen py-2 sm:w-60 sm:my-8 sm:ml-4 sm:mr-4 bg-white text-black shadow-2xl rounded-lg transition-all duration-300 z-50 ${
        menuOpen ? 'w-60' : 'w-16'} ${!isTabletOrMobile?'right-0 top-0 p-0' : 'left-8 top-8'}
      ${isTabletOrMobile && menuOpen ? 'right-0 top-0 p-4' : 'left-8 top-8'} 
      ${
        isTabletOrMobile && !menuOpen
          ? "flex justify-center items-center"
          : ""
      }`}
>
      {isTabletOrMobile && (
        <button onClick={toggleMenu} className="text-black focus:outline-none flex flex-row align">
          {menuOpen ? (
            <><FaPlus size={25} className={"rotate-45 m-2"} /> </>
             
          ) : (
            <><FaBars size={40} /> <img src="/img/imagenes/ordino4.png" alt="ORDINO" className="w-36 h-25 object-cover object-center mr-4 hover:scale-110 transition-transform duration-300 cursor-pointer"/></>
          )}
        </button>
      )}
      {menuOpen && (
        <nav>
          <nav>
            <div className="flex flex-col items-center mb-4">
              <img
                src={usuario && usuario.foto}
                alt="Foto del doctor"
                className="w-20 h-20 sm:w-45 s:h-45 rounded-full mb-2 "
              />
              <h3 className="text-xl font-bold">{}</h3>
              <p className="text-md">{usuario && usuario.especialidad}</p>
              <p className="text-md">{usuario && usuario.clinica}</p>
            </div>
            <div className="">
              <ul className="flex flex-col space-y-2">
                <li className="transition-transform transform-gpu ">
                {rol != 'enfermero'?
                  <Link
                    to="/dashboard/new-patient"
                    className="flex items-center space-x-5 lg:p-5 md:p-3 bg-white hover:bg-gray-800 hover:text-white rounded-lg transition duration-300"
                  >
                    <FaUser
                      size={24}
                      className="transition-colors duration-300 hover:text-yellow-300"
                    />
                    <span className="text-lg">Nuevo Paciente</span>
                  </Link>:<></>}
                </li>
                <li className="transition-transform transform-gpu ">
                  <Link
                    to="/dashboard/search"
                    className="flex items-center space-x-5 lg:p-5 md:p-3 bg-white hover:bg-gray-800 hover:text-white rounded-lg transition duration-300"
                  >
                    <FaSearch
                      size={24}
                      className="transition-colors duration-300 hover:text-yellow-300"
                    />
                    <span className="text-lg">Búsqueda</span>
                  </Link>
                </li>

                <li className="transition-transform transform-gpu ">
                  <Link
                    to="/dashboard/profile"
                    className="flex items-center space-x-5 lg:p-5 md:p-3 bg-white hover:bg-gray-800 hover:text-white rounded-lg transition duration-300"
                  >
                    <FaUser
                      size={24}
                      className="transition-colors duration-300 hover:text-yellow-300"
                    />
                    <span className="text-lg">Perfil</span>
                  </Link>
                </li>
                <li className="transition-transform transform-gpu ">
                  <a
                    onClick={cerrarSesion}
                    className="flex items-center space-x-5 lg:p-5 md:p-3 bg-white hover:bg-gray-800 hover:text-white rounded-lg transition duration-300"
                  >
                    <FaSignOutAlt
                      size={24}
                      className="transition-colors duration-300 hover:text-yellow-300"
                    />
                    <span className="text-lg">Cerrar Sesión</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </nav>
      )}
    </nav>
  );
};

export default Sidebar;
