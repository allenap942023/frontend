import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProfilePictureUploader from "../components/ProfilePictureUploader"; // Ajusta la ruta según la ubicación del componente
import axios from "axios";

const NuevoPaciente = () => {
  const URLBackEnd = "https://excited-miniskirt-wasp.cyclic.app/api";
  const [selectedOption, setSelectedOption] = useState(null);

  // Función para manejar el clic en las opciones del sidebar
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const handleProfilePictureUpload = (file) => {
    // Aquí puedes manejar la lógica de subida del archivo, como almacenarlo en el estado del componente o enviarlo a un servidor
    console.log("Archivo subido:", file);
  };

  const NuevoPaciente = (event) => {
    event.preventDefault();

    // Datos del paciente
    var nombre = event.target.full_name.value;
    var fecha_nacimiento = event.target.date_of_birth.value;
    var dui_paciente = event.target.id.value;
    var sexo_paciente = event.target.gender.value;
    var direccion = event.target.address.value;
    var numero_telefonico = event.target.phone_number.value;
    var correo = event.target.email.value;

    // Datos de contacto de emergencia
    var nombre_contacto = event.target.emergency_full_name.value;
    var numero_telefonico_contacto = event.target.emergency_phone_number.value;
    var direccion_contacto = event.target.emergency_address.value;
    var correo_contacto = event.target.emergency_email.value;

    // Historial personal
    var antecedentes = event.target.personal_history.value;
    var id = window.localStorage.getItem("_id");
    var token = window.localStorage.getItem("token");
    axios
      .post(
        `${URLBackEnd}/pacientes`,
        {
          nombre,
          fecha_nacimiento,
          dui_paciente,
          sexo_paciente,
          direccion,
          numero_telefonico,
          correo,

          nombre_contacto,
          numero_telefonico_contacto,
          direccion_contacto,
          correo_contacto,

          antecedentes,
          foto: "FOTO",
        },
        {
          headers: {
            Authorization: `Bearer  ${token}`,
          },
        }
      )
      .then((res) => {
        var datosRecibidos = res.data;
        console.log(datosRecibidos);
        // window.location.replace("/dashboard");

        // window.localStorage.getItem(key);
      })
      .catch((error) => {
        // setErrorMessage(error.response.data.mensaje);
        console.log(error);
      });
  };

  return (

    <div className="flex flex-col sm:flex-row h-full " style={{ backgroundImage: "url('/img/imagenes/Sin título.png')", backgroundSize: "cover" }}
    >

      <Sidebar onOptionClick={handleOptionClick} />

      {/* Contenido principal del Dashboard */}
      <form className="w-full flex-1 flex flex-col overflow-hidden justify-center items-center bg-white bg-opacity-0 text-black shadow-2xl rounded-lg md:ml-4 md:mr-4 md:mt-8" onSubmit={NuevoPaciente}>
        <section id="Principal" className='w-full"' >
          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-1">
            {/*           Formulario 1: Informacion del paciente */}
            <div className='w-full flex flex-col items-center space-y-6 bg-white bg-opacity-10 text-black shadow-lg rounded-lg p-4 hover:shadow-2xl  transition-transform duration-500'>

              <label htmlFor="emergency_full_name" className="w-full flex flex-col items-center rounded-lg p-4 bg-gray-800 w-full text-lg font-bold text-white">
                Información de contacto</label>

              <div className="w-full space-y-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center">
                {/* Contenido del formulario */}

                <div className="grid grid-cols-1 justify-center items-center w-full text-center">
                  <label htmlFor="profile_picture" className="text-lg font-medium text-white">
                    Foto de Perfil:
                  </label>
                  <div className="flex justify-center items-center">
                    <ProfilePictureUploader
                      onUpload={handleProfilePictureUpload}
                      className="w-46 h-46 animate-pulse  " // Ajusta el tamaño según tus necesidades
                    />
                  </div>

                </div>


                <div>
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <label htmlFor="full_name" className="text-lg font-medium text-white">Nombre Completo:</label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      className="mt-1 block w-full  rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="Escriba aquí el nombre..."
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <label htmlFor="date_of_birth" className="text-lg font-medium text-white">Fecha de nacimiento:</label>
                    <input
                      type="date"
                      id="date_of_birth"
                      name="date_of_birth"
                      className="mt-1 block w-full  rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <label htmlFor="id" className="text-lg font-medium text-white">DUI:</label>
                    <input
                      type="text"
                      id="id"
                      name="id"
                      className="mt-1 block w-full  rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="Escriba el DUI sin guion..."

                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <label htmlFor="gender" className="text-lg font-medium text-white">Sexo:</label>
                    <select
                      id="gender"
                      name="gender"
                      className="mt-1 block w-full  rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    >
                      <option>Masculino</option>
                      <option>Femenino</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <label htmlFor="address" className="text-lg font-medium text-white">Dirección:</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="mt-1 block w-full  rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="Escriba aquí la dirección..."
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <label htmlFor="phone_number" className="text-lg font-medium text-white">Número de teléfono:</label>
                    <input
                      type="tel"
                      id="phone_number"
                      name="phone_number"
                      className="mt-1 block w-full  rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="7420XXXX"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <label htmlFor="email" className="text-lg font-medium text-white">Correo electrónico:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full  rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="correo@electronico.com..."
                    />
                  </div>
                </div>
              </div>
            </div>


            {/*           Formulario2: Datos de contacto de emergencia*/}
            <div className='flex flex-col items-center space-y-6 bg-white bg-opacity-10 text-black shadow-lg rounded-lg p-4 hover:shadow-2xl  transition-transform duration-500'>

              <label htmlFor="emergency_full_name" className="flex flex-col items-center rounded-lg p-4 bg-gray-800 w-full text-lg font-bold text-white">Contacto de emergencia:</label>

              <div
                className="space-y-6 p-4 "

              >
                {/* Columna 1 */}
                <div id="columna1" className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <label htmlFor="emergency_full_name" className="text-lg font-medium text-white">Nombre Completo:</label>
                    <input
                      type="text"
                      id="emergency_full_name"
                      name="emergency_full_name"
                      className="mt-1 block w-full rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="Maria Rosibel..."
                    />
                  </div>
                  <div className="lg:ml-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <label htmlFor="emergency_phone_number" className="text-lg font-medium text-white">Número de teléfono:</label>
                    <input
                      type="tel"
                      id="emergency_phone_number"
                      name="emergency_phone_number"
                      className="mt-1 block w-full rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="7364XXXX"
                    />
                  </div>
                </div>

                {/* Columna 2 */}
                <div id="columna2" className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <label htmlFor="emergency_address" className="text-lg font-medium text-white">Dirección:</label>
                    <input
                      type="text"
                      id="emergency_address"
                      name="emergency_address"
                      className="mt-1 block w-full rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="Escriba aquí la dirección..."
                    />
                  </div>
                  <div className="lg:ml-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <label htmlFor="emergency_email" className="text-lg font-medium text-white">Correo electrónico:</label>
                    <input
                      type="email"
                      id="emergency_email"
                      name="emergency_email"
                      className="mt-1 block w-full rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="correo@electronico.com..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*             Formulario 3: Historial personal
 */}
            <div className='flex flex-col items-center space-y-6 bg-white bg-opacity-10 text-black shadow-lg rounded-lg p-4 hover:shadow-2xl  transition-transform duration-500'>

              <label htmlFor="emergency_full_name" className="flex flex-col items-center rounded-lg p-4 bg-gray-800 w-full text-lg font-bold text-white">Plan de tratamiento:</label>
              <textarea
                id="personal_history"
                name="personal_history"
                rows="3"
                className="p-0 mt-1 block w-full  rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Escriba aquí el plan de tratamiento con base a su diagnóstico..."
              ></textarea>
            </div>



            <div className="flex items-center space-x-4 lg:mb-16">
              <p className="text-white font-medium" >¿Todo listo? Entonces clickea en:</p>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300 focus:outline-none"
              >
                Guardar
              </button>
            </div>

          </div>

        </section >


      </form>
    </div >

  );
};
export default NuevoPaciente;
