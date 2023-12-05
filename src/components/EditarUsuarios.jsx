import { useState, useEffect } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import { FaNotesMedical } from "react-icons/fa";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

import Sidebar from "../components/Sidebar";

import moment from "moment";
const URLBackEnd = "https://excited-miniskirt-wasp.cyclic.app/api";

const EditarUsuarios = (props) => {
  const [roles, setRoles] = useState([]);
  const [usuario, setUsuario] = useState({});
  const history = useNavigate();
  // Función para manejar el clic en las opciones del sidebar
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  let { id } = useParams();
  useEffect(() => {
    obtenerInfoUsuario();
    obtenerRoles();
  }, []);
  const obtenerRoles = () => {
    var token = window.localStorage.getItem("token");
    var nombre = "";
   

    axios
      .get(`${URLBackEnd}/roles`, {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      })
      .then((res) => {
        var datosRecibidos = res.data;
        console.log(datosRecibidos);
        setRoles(datosRecibidos);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const obtenerInfoUsuario = () => {
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


  const handleChange = (e) => {
    const { name, value } = e.target;
      var nuevo_usuario = usuario;
      usuario[name] = value;
      setUsuario({...usuario, [name]: value })
    
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access form values from the formValues object

    // var password = event.target.password.value;
    
    console.log("Form Values:", usuario);
    var idUser = window.localStorage.getItem("_id");
    var token = window.localStorage.getItem("token");
    var data = usuario;

    // if(password){
    //   data.password = password;
    // }
    console.log(data);
    axios
    .put(`${URLBackEnd}/usuarios/${id}`, data, {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      })
      .then((res) => {
        var datosRecibidos = res.data;
        console.log(datosRecibidos);
        // window.location.replace("/dashboard");
        history("/dashboard/usuarios");
        // window.localStorage.getItem(key);
      })
      .catch((error) => {
        // setErrorMessage(error.response.data.mensaje);
        console.log(error);
      });
  };
  return (
    <>
      <div
        className="flex flex-col md:flex-row sm:flex-col "
        style={{
          backgroundImage: "url('/img/imagenes/Sin título.png')",
          backgroundSize: "cover",
        }}
      >
        {/* aqui le quite: h-screen pero pueda que lo regrese */}{" "}
        {/* aqui le quite: h-screen pero pueda que lo regrese */}
        {/* Contenido del Sidebar */}
        {/* Contenido principal del Dashboard */}
        <Sidebar onOptionClick={handleOptionClick} />
        <section
          id="Principal"
          className=" h-screen flex-1 flex flex-col overflow-scroll items-start bg-white bg-opacity-70 text-black shadow-2xl rounded-lg mb-4 md:ml-4 md:mr-4 md:mt-8"
        >
          <div className="flex items-center mx-auto w-5/6 mt-10">
            <FaNotesMedical className="mr-2" size={20} />{" "}
            {/* Icono de expedientes médicos */}
            <p className="text-lg text-lg">
              Busca a tus pacientes ingresando su nombre:
            </p>
          </div>

          <div className="flex flex-col items-center mx-auto w-5/6">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              {/* <!--Modal title--> */}
              <h5
                className="text-xl font-medium leading-normal text-black-800 dark:text-black-200"
                id="exampleModalLabel"
              >
                Editar usuario
              </h5>
              {/* <!--Close button--> */}
             
            </div>

            {/* <!--Modal body--> */}
            <div className="relative flex-auto p-4" data-te-modal-body-ref>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre:
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={usuario["nombre"]}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={usuario["username"]}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="rol"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Rol:
                  </label>
                  <select
                    id="rol"
                    name="rol"
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    {/* <!-- Opciones del select --> */}
                    <option value="">Seleccione un rol</option>
                    {roles.map((rol) => {
                      return (
                        <option
                          value={rol._id}
                          selected={usuario.rol == rol._id}
                        >
                          {rol.nombre}
                        </option>
                      );
                    })}
                    {/* <!-- Puedes añadir más opciones aquí según los roles disponibles --> */}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="especialidad"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Especialidad:
                  </label>
                  <input
                    type="text"
                    id="especialidad"
                    name="especialidad"
                    required
                    value={usuario["especialidad"]}
                    onChange={handleChange}
                    maxLength="20"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="correo"
                    onChange={handleChange}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correo:
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    required
                    maxLength="50"
                    value={usuario["correo"]}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="direccion"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Dirección:
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    maxLength="100"
                    value={usuario["direccion"]}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="numero"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Número:
                  </label>
                  <input
                    type="text"
                    id="numero"
                    name="numero"
                    maxLength="100"
                    value={usuario["numero"]}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="clinica"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Clínica:
                  </label>
                  <input
                    type="text"
                    id="clinica"
                    name="clinica"
                    value={usuario["clinica"]}
                    required
                    onChange={handleChange}
                    maxLength="50"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="foto"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Foto:
                  </label>
                  <input
                    type="text"
                    id="foto"
                    name="foto"
                    value={usuario["foto"]}
                    required
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <input
                  type="submit"
                  value="Guardar"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                />
              </form>
            </div>

            
          </div>
        </section>
      </div>
    </>
  );
};

export default EditarUsuarios;
