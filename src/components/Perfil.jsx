import React, { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ProfilePictureUploader from "../components/ProfilePictureUploader"; // Ajusta la ruta según la ubicación del componente
import axios from "axios"
const NuevoPaciente = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [usuario, setUsuario] = useState({});
  const URLBackEnd = "https://excited-miniskirt-wasp.cyclic.app/api";
  // Función para manejar el clic en las opciones del sidebar
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const handleProfilePictureUpload = (file) => {
    // Aquí puedes manejar la lógica de subida del archivo, como almacenarlo en el estado del componente o enviarlo a un servidor
    console.log("Archivo subido:", file);
  };
  useEffect(() => {
    // setMenuOpen(!isTabletOrMobile);
    obtenerInfoUsuario();
  }, []);
  // obtener info
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
    }
    //fin

  return (
    <div
      className="flex flex-col md:flex-row sm:flex-col xs:flex-col overflow-scroll"
      style={{
        backgroundImage: "url('/src/img/imagenes/Sin título.png')",
        backgroundSize: "cover",
      }}
    >
      {" "}
      {/* aqui le quite: h-screen pero pueda que lo regrese */}
     
      {/* Contenido del Sidebar */}
      <Sidebar onOptionClick={handleOptionClick} />
      {/* Contenido principal del Dashboard */}
      <section
        id="Principal"
        className=" w-full flex-1 flex flex-col overflow-hidden justify-center items-center bg-white bg-opacity-0 text-black shadow-2xl rounded-lg md:ml-0 md:mr-4 md:mt-0" 
      >
        <div className="w-full grid grid-cols-1 sm:w-full">
          {/* Formulario 1: Informacion del paciente */}
          <div className="w-full md:w-full lg:grid lg:grid-cols-1 lg:items-center lg:justify-center space-y-6 bg-white bg-opacity-10 text-black shadow-lg rounded-lg p-4 hover:shadow-2xl  transition-transform duration-500">
            <label
              htmlFor="emergency_full_name"
              className="flex flex-col items-center rounded-lg p-4 bg-gray-800 w-full text-lg font-bold text-white"
            >
              Información general:
            </label>

            <form className="w-full space-y-6 lg:grid lg:grid-cols-2 lg:items-center lg:justify-center md:grid-cols-1 md:items-center md:justify-center">
              <div className="mx-auto lg:grid lg:grid-cols-1 lg:items-center lg:justify-center w-60 text-white bg-black rounded-3xl bg-opacity-50 ">
                <img
                  src={usuario.foto}
                  alt="Foto del doctor"
                  className="w-25 h-25 rounded-full mb-2"
                />
                <h3 className="text-xl text-center font-bold">{usuario.nombre}</h3>
                <p className="text-md text-center">{usuario.especialidad}</p>
                <p className="text-md text-center">{usuario.clinica}</p>
              </div>

              <div className="mx-auto">
                <div className="mx-auto grid md:grid-cols-1 lg:grid-cols-2">
                  <label
                    htmlFor="full_name"
                    className="text-lg font-medium text-white"
                  >
                    Nombre:
                  </label>
                  <div className="grid grid-col m-1 items-center justify-center w-full rounded-lg bg-white bg-opacity-20 text-lg font-bold text-white">
                  {usuario.nombre}
                  </div>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label
                    htmlFor="date_of_birth"
                    className="text-lg font-medium text-white"
                  >
                    Dui:
                  </label>
                  <div className="grid grid-col items-center m-1 justify-center w-full rounded-lg bg-white bg-opacity-20 text-lg font-bold text-white">
                    7621597-8
                  </div>
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label
                    htmlFor="id"
                    className="text-lg font-medium text-white"
                  >
                    Direccion:
                  </label>
                  <div className="grid grid-col items-center m-1 justify-center w-full rounded-lg bg-white bg-opacity-20 text-lg font-bold text-white">
                  {usuario.direccion}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label
                    htmlFor="gender"
                    className="text-lg font-medium text-white"
                  >
                    Número de teléfono:
                  </label>
                  <div className="grid grid-col items-center m-1 justify-center w-full rounded-lg bg-white bg-opacity-20 text-lg font-bold text-white">
                    {usuario.numero}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label
                    htmlFor="gender"
                    className="text-lg font-medium text-white"
                  >
                    Correo electrónico:
                  </label>
                  <div className="grid grid-col items-center m-1 justify-center w-full rounded-lg bg-white bg-opacity-20 text-lg font-bold text-white">
                  {usuario.correo}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label
                    htmlFor="gender"
                    className="text-lg font-medium text-white"
                  >
                    Clínica al mando:
                  </label>
                  <div className="grid grid-col items-center m-1 justify-center w-full rounded-lg bg-white bg-opacity-20 text-lg font-bold text-white">
                  {usuario.clinica}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NuevoPaciente;
