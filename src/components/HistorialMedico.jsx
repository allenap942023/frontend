import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FaNotesMedical } from "react-icons/fa";
import axios from "axios";
import moment from "moment";
import { FaExternalLinkAlt } from "react-icons/fa";
import DatosPaciente from "./DatosPaciente";
const HistorialMedico = () => {
  let { id } = useParams();
  const URLBackEnd = "https://excited-miniskirt-wasp.cyclic.app/api";
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    obtenerHistorial();
  }, []);
  const obtenerHistorial = (event) => {
    var token = window.localStorage.getItem("token");
    var fechaFin = null;
    var fechaInicio = null;
    if (event) {
      event.preventDefault();
      fechaInicio = event.target.fechaInicio.value;
      fechaFin = event.target.fechaFin.value;

      console.log(fechaInicio,fechaFin)
    }
    axios
      .get(
        `${URLBackEnd}/pacientes/${id}/historial?fechaFin=${fechaFin}&fechaInicio=${fechaInicio}`,
        {
          headers: {
            Authorization: `Bearer  ${token}`,
          },
        }
      )
      .then((res) => {
        var datosRecibidos = res.data;
        console.log(datosRecibidos);
        setHistorial(datosRecibidos);
        console.log(historial);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [listaPacientes, setListaPacientes] = useState([]);

  // Función para manejar el clic en las opciones del sidebar
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex " style={{ backgroundImage: "url('/img/imagenes/Sin título.png')", backgroundSize: "cover" }}>
      {" "}
      {/* aqui le quite: h-screen pero pueda que lo regrese */}
      {/* Contenido del Sidebar */}
      <Sidebar onOptionClick={handleOptionClick} />
      {/* Contenido principal del Dashboard */}
      <section
        id="Principal"
        className="h-screen mb-8 flex-1 flex flex-col overflow-scroll items-start bg-white bg-opacity-20 text-black shadow-2xl rounded-lg md:ml-4 md:mr-4 md:mt-8"
      >
        <div className="flex justify-center w-full" >
          <DatosPaciente id_paciente={id} className="text-black"/>
        </div>
        <div className="rounded-md px-4 w-full">
        <div className="bg-white w-full rounded-md px-4 flex min-w-full flex-col">
        <div className="flex items-center mx-auto w-full mt-10 ">
          <FaNotesMedical className="mr-2" size={20} />{" "}
          {/* Icono de expedientes médicos */}
          <p className=" text-sm">Listado de consultas:</p>
        </div>

        <div className="flex flex-col items-center mx-auto w-full">
          <form
            className="w-full mx-auto flex flex-row items-center"
            onSubmit={obtenerHistorial}
          >
            <div className="w-1/5 mx-auto flex items-center bg-white rounded-xl border border-gray-300 p-2 m-5">
              <div className="mr-4"></div>

              <input
                type="date"
                placeholder="Escriba el nombre del paciente"
                name="fechaInicio"
                // value={moment().format("YYYY-MM-DD")}
                className="w-20 flex-1 px-2 text-xs outline-none bg-transparent"
              />
            </div>
            <div className="w-1/5 mx-auto flex items-center bg-white rounded-xl border border-gray-300 p-2 m-5">
              <div className="mr-4"></div>

              <input
                type="date"
                placeholder="Escriba el nombre del paciente"
                name="fechaFin"
                // value={moment().format("YYYY-MM-DD")}
                className="w-1/5 flex-1 px-2 text-xs outline-none bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white w-[100px] h-[40px] flex items-center justify-center rounded-2xl"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
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
            </button>
          </form>
          {historial.length > 0 ? (
            <div className="overflow-x-auto w-full m-5">
              <h2 className="text-sm">Coincidencias encontradas</h2>

              <div className="mt-5">
                <div className="rounded-xl overflow-x-auto shadow-md border border-slate-800">
                  <table className="w-full shadow-md rounded-md text-xs overflow-x-auto">
                    <thead className="bg-slate-800 text-neutral-100 text-xs">
                      <tr>
                        {/* <th className="py-3 px-6 text-left lg:w-1/6 border-r-2 border-r-slate-700">
        Nombre
      </th> */}
                        <th className="py-3 px-6 text-left lg:w-1/6 border-r-2 border-r-slate-700">
                          Número de Cita
                        </th>
                        <th className="py-3 px-6 lg:w-1/12 text-center border-r-slate-700">
                          Día
                        </th>
                        <th className="py-3 px-6 lg:w-1/12 text-center border-r-slate-700">
                          Mes
                        </th>
                        <th className="py-3 px-6 lg:w-1/12 text-center border-r-slate-700">
                          Año
                        </th>
                        <th className="py-3 px-6 lg:w-1/4 text-center border-r-slate-700">
                          Diagnóstico
                        </th>
                        <th className="py-3 px-6 lg:w-1/6 text-center">
                          Acción
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-800">
                      {/* Ejemplo de datos de citas */}
                      {historial.map((item, index) => {
                        return (
                          <>
                            <tr className="bg-white hover:bg-slate-100">
                              {/* <td className="py-4 px-6 lg:w-1/6 text-xs border-r-2">
        Juan Pérez
      </td> */}
                              <td className="py-4 px-6 lg:w-1/6 text-xs border-r-2">
                                {index + 1}
                              </td>
                              <td className="py-4 px-6 lg:w-1/12 text-center border-r-2">
                                {moment(item.fecha_cita).utc().format("DD")}
                              </td>
                              <td className="py-4 px-6 lg:w-1/12 text-center border-r-2">
                                {moment(item.fecha_cita).utc().format("MM")}
                              </td>
                              <td className="py-4 px-6 lg:w-1/12 text-center border-r-2">
                                {moment(item.fecha_cita).utc().year()}
                              </td>
                              <td className="py-4 px-6 lg:w-1/4 text-center border-r-2">
                                {item.diagnostico}
                              </td>
                              <td className="py-4 px-6 lg:w-1/6 text-center">
                                <Link
                                  to={
                                    "/dashboard/consultation/" +
                                    id +
                                    "/" +
                                    item._id
                                  }
                                  className="text-blue-500 py-2 px-4 rounded-md flex flex-row align-middle transition duration-300"
                                >
                                  <FaExternalLinkAlt className="mr-2"></FaExternalLinkAlt>
                                  Ver
                                </Link>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                      {/* Más filas de citas aquí */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="my-2 bg-slate-100 shadow rounded-md p-2 text-xs">
              Sin coincidencias
            </div>
          )}
        </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default HistorialMedico;
