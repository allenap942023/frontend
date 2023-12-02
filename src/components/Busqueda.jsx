import React, { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FaNotesMedical } from "react-icons/fa";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

const NuevoPaciente = () => {
  const URLBackEnd = "https://excited-miniskirt-wasp.cyclic.app/api";
  const [selectedOption, setSelectedOption] = useState(null);
  const [listaPacientes, setListaPacientes] = useState([]);

  // Función para manejar el clic en las opciones del sidebar
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  useEffect(() => {
    obtenerPacientes()
  }, [])
  const obtenerPacientes = (event) => {
    
    var token = window.localStorage.getItem("token");
    var nombre = ""
    if(event){
      event.preventDefault();
      nombre = event.target.nombre.value;
    }
    
    axios
      .get(`${URLBackEnd}/pacientes?nombre=${nombre}`, {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      })
      .then((res) => {
        var datosRecibidos = res.data;
        console.log(datosRecibidos);
        setListaPacientes(datosRecibidos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col md:flex-row sm:flex-col "style={{ backgroundImage: "url('/img/imagenes/Sin título.png')", backgroundSize: "cover" }}
    
    > 
    
    {/* aqui le quite: h-screen pero pueda que lo regrese */}
      {" "}
      
      {/* aqui le quite: h-screen pero pueda que lo regrese */}
      {/* Contenido del Sidebar */}
     
      {/* Contenido principal del Dashboard */}
       <Sidebar onOptionClick={handleOptionClick} />
      <section id="Principal" className=" h-screen flex-1 flex flex-col overflow-scroll items-start bg-white bg-opacity-70 text-black shadow-2xl rounded-lg mb-4 md:ml-4 md:mr-4 md:mt-8">
     
        <div className="flex items-center mx-auto w-5/6 mt-10">
          <FaNotesMedical className="mr-2" size={20} />{" "}
          {/* Icono de expedientes médicos */}
          <p className="text-lg text-lg">
            Busca a tus pacientes ingresando su nombre:
          </p>
        </div>

        <div className="flex flex-col items-center mx-auto w-5/6">
          <form className="w-full mx-auto" onSubmit={obtenerPacientes}>
            <div className="w-full mx-auto flex items-center bg-white rounded-xl border border-gray-300 p-2 m-5">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-5.2-5.2M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
                  />
                </svg>
              </div>

              <input
                type="text"
                placeholder="Escriba el nombre del paciente"
                name="nombre"
                className="flex-1 px-2 text-lg outline-none bg-transparent"
              />
            </div>
          </form>
          {listaPacientes.length > 0 ? (
            <div className="overflow-x-auto w-full m-5">
              <h2 className="text-lg">
                Coincidencias encontradas
              </h2>

              <div className="mt-5 mb-4">
                <div className="rounded-xl overflow-x-auto shadow-md border border-slate-800 mb-4">
                  <table className="w-full shadow-md rounded-md">
                    <thead className="bg-slate-800 text-neutral-100 text-lg">
                      <tr>
                        <th className="py-3 px-6 text-left lg:w-1/4 border-r-2 border-r-slate-700">
                          Nombre completo
                        </th>
                        <th className="py-3 px-6 lg:w-1/4 text-center border-r-slate-700">
                          
                        </th>
                        <th className="py-3 px-6 lg:w-1/4 text-center">
                          
                        </th>
                        <th className="py-3 px-6 lg:w-1/4 text-center">
                          
                          </th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-800">
                      {listaPacientes.map((paciente) => {
                        return (
                          <>
                          <tr className="bg-white hover:bg-slate-100">
                            <td className="font- py-4 px-6 lg:w-1/4 text-lg border-r-2">
                              {paciente.nombre}
                            </td>
                            <td className="py-4 px-6 lg:w-1/4 border-r-2">
                              <a
                                href={
                                  "/dashboard/medical-history/" + paciente._id
                                }
                                className="text-blue-500 hover:text-orange-500 py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-300 flex text-lg items-center justify-center"
                              >
                                <FaPlus size={12} className="mr-2"></FaPlus>
                                Historial médico
                              </a>
                            </td>
                            <td className="py-4 px-6 lg:w-1/4">
                              <a
                                href={
                                  "/dashboard/new-consultation/" + paciente._id
                                }
                                className="text-green-500 hover:text-orange-500 py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-300 flex text-lg items-center justify-center"
                              >
                                <FaPlus size={12} className="mr-2"></FaPlus>
                                Nueva consulta
                              </a>
                            </td>

                            <td className="py-4 px-6 lg:w-1/4">
                              <a
                                href={
                                  "/dashboard/patient/detalle/" + paciente._id
                                }
                                className="text-orange-500 hover:text-orange-500 py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-300 flex text-lg items-center justify-center"
                              >
                                <FaPlus size={12} className="mr-2"></FaPlus>
                                Ver Detalle
                              </a>
                            </td>
                          </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) :(
            <div className="mt-10 bg-slate-100 shadow rounded-md p-2 text-lg">
              Por favor ingresar un nombre válido
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NuevoPaciente;
