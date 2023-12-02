import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";

const Detalles = () => {
  const URLBackEnd = "https://excited-miniskirt-wasp.cyclic.app/api";
  const [selectedOption, setSelectedOption] = useState(null);
  // Función para manejar el clic en las opciones del sidebar
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const [formData, setFormData] = useState({
    nombre: "Juan Pérez",
    fecha_nacimiento: "1990-01-01",
    dui_paciente: "12345678-9",
    sexo_paciente: "Masculino",
    direccion: "123 Calle Principal, Ciudad, País",
    numero_telefonico: "1234-5678",
    correo: "juan.perez@example.com",
    contacto_emergencia: {
      nombre_contacto: "María López",
      numero_telefonico_contacto: "8765-4321",
      direccion_contacto: "456 Calle Secundaria, Ciudad, País",
      correo_contacto: "maria.lopez@example.com",
    },
    antecedentes: "Ninguno",
  });
  let { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("contactoEmergencia.")) {
      const field = name.split(".")[1];
      setFormData({
        ...formData,
        contactoEmergencia: {
          ...formData.contactoEmergencia,
          [field]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    obtenerInfoUsuario();
  }, []);

  const obtenerInfoUsuario = () => {
    var token = window.localStorage.getItem("token");

    axios
      .get(`${URLBackEnd}/pacientes/${id}`, {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      })
      .then((res) => {
        var datosRecibidos = res.data;
        console.log(datosRecibidos);
        setFormData(datosRecibidos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col md:flex-row sm:flex-col xs:flex-col overflow-scroll" style={{ backgroundImage: "url('/src/img/imagenes/Sin título.png')", backgroundSize: "cover" }}>
      <Sidebar onOptionClick={handleOptionClick} />
      <section
        id="Principal"
        className="grid h-screen gap-4 grid-cols-1 sm:grid-cols-2 lg:items-center md:items-center overflow-scroll  bg-white bg-opacity-10 text-black shadow-2xl rounded-lg md:ml-4 md:mr-4 md:mt-8"
      >
      <form
        onSubmit={handleSubmit}
        className=" w-full  rounded-lg  p-6  mx-auto bg-white bg-opacity-50 rounded shadow-md hover:shadow-2xl  transition-transform duration-500"
      >
         <label htmlFor="emergency_full_name" className="w-full mb-3 flex flex-col items-center rounded-lg p-4 bg-gray-800 w-full text-lg font-bold text-white">
         Información Personal</label>
      

        <div className="formulario">
          {/* Nombre Completo */}
          <div className="grid mb-2 grid-cols-1 justify-center items-center md:grid-cols-1 lg:grid-cols-2">
          <label htmlFor="full_name" className="text-lg font-medium text-black">Nombre Completo:</label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="nombre"
              placeholder="Nombre Completo"
              onChange={handleChange}
              value={formData.nombre}
            />
          </div>

          {/* Fecha de Nacimiento */}
          <div className="grid mb-2 grid-cols-1 justify-center items-center md:grid-cols-1 lg:grid-cols-2">
          <label htmlFor="full_name" className="text-lg font-medium text-black">Fecha de Nacimiento:</label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="fecha_nacimiento"
              onChange={handleChange}
              value={formData.fecha_nacimiento}
            />
          </div>

          {/* DUI */}
          <div className="grid mb-2 grid-cols-1 justify-center items-center md:grid-cols-1 lg:grid-cols-2">
          <label htmlFor="full_name" className="text-lg font-medium text-black">DUI:</label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="dui_paciente"
              placeholder="DUI"
              onChange={handleChange}
              value={formData.dui_paciente}
            />
          </div>

          {/* Sexo */}
          <div className="grid mb-2 grid-cols-1 justify-center items-center md:grid-cols-1 lg:grid-cols-2">
          <label htmlFor="full_name" className="text-lg font-medium text-black">Sexo:</label>
            <select
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="sexo_paciente"
              onChange={handleChange}
              value={formData.sexo_paciente}
            >
              <option value="">Seleccione el Sexo</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>

          {/* Dirección */}
          <div className="grid mb-2 grid-cols-1 justify-center items-center md:grid-cols-1 lg:grid-cols-2">
          <label htmlFor="full_name" className="text-lg font-medium text-black">Dirección:</label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="direccion"
              placeholder="Dirección"
              onChange={handleChange}
              value={formData.direccion}
            />
          </div>

          {/* Teléfono */}
          <div className="grid mb-2 grid-cols-1 justify-center items-center md:grid-cols-1 lg:grid-cols-2">
          <label htmlFor="full_name" className="text-lg font-medium text-black">Teléfono:</label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              name="numero_telefonico"
              placeholder="Teléfono"
              onChange={handleChange}
              value={formData.numero_telefonico}
            />
          </div>

          {/* Email */}
          <div className="grid mb-2 grid-cols-1 justify-center items-center md:grid-cols-1 lg:grid-cols-2">
          <label htmlFor="full_name" className="text-lg font-medium text-black">Email:</label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="correo"
              placeholder="Email"
              onChange={handleChange}
              value={formData.correo}
            />
          </div>

          <div className="grid mb-2 grid-cols-1 justify-center items-center md:grid-cols-1 lg:grid-cols-2">
          <label htmlFor="full_name" className="text-lg font-medium text-black">Antecedentes familiares:</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="antecedentes"
              placeholder="Antecedentes Personales"
              onChange={handleChange}
              value={formData.antecedentes}
            />
          </div>
        </div>
      </form >
        <form
        onSubmit={handleSubmit}
        className=" w-full p-6  mx-auto bg-white bg-opacity-50 hover:shadow-2xl  transition-transform duration-500 rounded shadow-md"
      >
        {/* Campos para el contacto de emergencia */}
        <label htmlFor="emergency_full_name" className="w-full mb-3 flex flex-col items-center rounded-lg p-4 bg-gray-800 w-full text-lg font-bold text-white">
         Contacto de emergencia</label>
        {/* Repetir el bloque de input para los campos del contacto de emergencia */}

        {/* Campo de antecedentes personales */}
        <div className="grid mb-2 grid-cols-1 justify-center items-center md:grid-cols-1 lg:grid-cols-2">
          <label htmlFor="full_name" className="text-lg font-medium text-black">Nombre completo:</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="nombre_contacto"
            placeholder="nombre_contacto"
            onChange={handleChange}
            value={
              formData.contacto_emergencia &&
              formData.contacto_emergencia.nombre_contacto
            }
          ></textarea>
        </div>

        <div className="grid mb-2 grid-cols-1 justify-center items-center md:grid-cols-1 lg:grid-cols-2">
          <label htmlFor="full_name" className="text-lg font-medium text-black">Teléfono:</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="numero_telefonico_contacto"
            placeholder="Antecedentes numero_telefonico_contacto"
            onChange={handleChange}
            value={
              formData.contacto_emergencia &&
              formData.contacto_emergencia.numero_telefonico_contacto
            }
          ></textarea>
        </div>

        <div className="grid mb-2 grid-cols-1 justify-center items-center md:grid-cols-1 lg:grid-cols-2">
          <label htmlFor="full_name" className="text-lg font-medium text-black">Dirección:</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="direccion_contacto"
            placeholder="direccion_contacto Personales"
            onChange={handleChange}
            value={
              formData.contacto_emergencia &&
              formData.contacto_emergencia.direccion_contacto
            }
          ></textarea>
        </div>

        <div className="grid mb-2 grid-cols-1 justify-center items-center md:grid-cols-1 lg:grid-cols-2">
          <label htmlFor="full_name" className="text-lg font-medium text-black">Email:</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="correo_contacto"
            placeholder="correo_contacto Personales"
            onChange={handleChange}
            value={
              formData.contacto_emergencia &&
              formData.contacto_emergencia.correo_contacto
            }
          ></textarea>
        </div>

        {/* <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Enviar
      </button> */}
      </form>
      </ section>
    </div>
  );
};

export default Detalles;
