import { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import DatosPaciente from "./DatosPaciente";
import { useParams ,useNavigate} from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { FaChevronRight } from "react-icons/fa";
const NuevaConsulta = () => {
  var id = null, idConsulta = null;
  var parametros = useParams();
  const history = useNavigate();
  const URLBackEnd = "https://excited-miniskirt-wasp.cyclic.app/api";
  const inputNames = [
    "Fecha Cita",
    "Fecha Próxima Cita",
    "Motivo",
    "Presión Arterial",
    "Ritmo Cardiaco",
    "Temperatura",
    "Oxígeno",
    "Síntomas",
    "Diagnóstico",
    "Tratamiento",
    "Notas",
  ];

  const [formValues, setFormValues] = useState(
    inputNames.reduce((acc, name) => ({ ...acc, [name]: "" }), {})
  );
  const [readOnly, setReadOnly]  = useState(false);
   const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access form values from the formValues object
    console.log("Form Values:", formValues);
    var idUser = window.localStorage.getItem("_id");
    var token = window.localStorage.getItem("token");
    var data = {
      id_paciente: id,
      id_medico: idUser,
      fecha_cita: new Date(),
      fecha_proxima_cita: formValues["Fecha Próxima Cita"],
      motivo: formValues["Motivo"],
      presion_arterial: formValues["Presión Arterial"],
      ritmo_cardiaco: formValues["Ritmo Cardiaco"],
      temperatura: formValues["Temperatura"],
      oxigeno: formValues["Oxígeno"],
      sintomas: formValues["Síntomas"],
      diagnostico: formValues["Diagnóstico"],
      tratamiento: formValues["Tratamiento"],
      notas: formValues["Notas"],
    };
    axios
      .post(`${URLBackEnd}/pacientes/${id}/nueva_cita`, data, {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      })
      .then((res) => {
        var datosRecibidos = res.data;
        console.log(datosRecibidos);
        // window.location.replace("/dashboard");
        history("/dashboard/medical-history/"+id);
        // window.localStorage.getItem(key);
      })
      .catch((error) => {
        // setErrorMessage(error.response.data.mensaje);
        console.log(error);
      });
  };

  if (parametros.id) {

    id = parametros.id;
  }

  if (parametros.idConsulta) {
    idConsulta = parametros.idConsulta;
  }


  useEffect(() => {
    setReadOnly(false);
    if (idConsulta) {
      var token = window.localStorage.getItem('token');
      setReadOnly(true);
      axios.get(`${URLBackEnd}/citamedica/${idConsulta}`, {
        headers: {
          Authorization: `Bearer  ${token}`
        }
      }).then(
        (res) => {
          var datosRecibidos = res.data;
          console.log(datosRecibidos);
          console.log(moment(new Date(datosRecibidos.fecha_cita)).format("yyyy-MM-DD"),datosRecibidos.fecha_cita)
          setFormValues({
            'Fecha Cita': new Date(datosRecibidos.fecha_cita),
            'Fecha Próxima Cita': moment(new Date(datosRecibidos.fecha_proxima_cita)).utc().format("yyyy-MM-DD"),
            'Motivo': datosRecibidos.motivo,
            'Presión Arterial': datosRecibidos.presion_arterial,
            'Ritmo Cardiaco': datosRecibidos.ritmo_cardiaco,
            'Temperatura': datosRecibidos.temperatura,
            'Oxígeno': datosRecibidos.oxigeno,
            'Síntomas': datosRecibidos.sintomas,
            'Diagnóstico': datosRecibidos.diagnostico,
            'Tratamiento': datosRecibidos.tratamiento,
            'Notas': datosRecibidos.notas
          })
        }
      ).catch((error) => {
        console.log(error);
      });

    }
  }, [])

  return (
    <div
      className="flex w-full"
      // style={{
      //   backgroundImage: "url('/img/imagenes/fondoblanco.jpg')",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="absolute inset-0 h-full"></div>

      {/* Contenido del Sidebar */}
      <Sidebar />
      {/* {id} */}
      {/* Contenido principal del Dashboard */}

      <section
        id="Principal"
        className="h-screen flex-1 flex flex-col overflow-scroll items-start bg-opacity-70 text-black shadow-2xl rounded-lg mb-4 md:ml-4 md:mr-4 md:mt-8"
      >
        <DatosPaciente id_paciente={id} />
      <div className="grid snap-none grid-cols-1 gap-6 md:grid-cols-1 bg-gray-400 w-full">
          <div className="w-full lg:grid lg:grid-col-2 md:grid md:grid-col-1 items-center pa-8 space-y-6  text-black shadow-lg rounded-lg p-4 transition-transform transform-gpu hover:shadow-2x ">
            <label
              htmlFor="emergency_full_name"
              className="flex flex-col items-center rounded-lg p-4 bg-gray-800 text-lg font-bold text-white"
            >
              Consultorio
            </label>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 items-center justify-center"
            >
              <div className="col-span-2 md:col-span-1 w-full">
                <div
                  id="Resolver"
                  className="grid grid-cols-2 items-center w-full gap-4"
                >
                  <div className="hover:shadow-2xl  transition-transform duration-500 col-span-2 md:col-span-1 w-full">
                    <div className="w-full bg-white bg-opacity-10 text-lg text-white p-3 shadow-md rounded-2xl">
                      <div className="text-center font-bold w-full">
                        <label
                          htmlFor="emergency_full_name"
                          className="grid grid-col items-center w-full rounded-lg bg-gray-800 text-lg font-bold text-white"
                        >
                          Información general:
                        </label>
                      </div>
                      <div className="font-bold w-full my-2">
                        Motivo de consulta:
                      </div>
                      <textarea readOnly={readOnly}
                        id={"Motivo"}
                        onChange={(e) =>
                          handleInputChange("Motivo", e.target.value)
                        }
                        value={formValues["Motivo"]}
                        required={true}
                        maxLength={300}
                        className="w-full text-black border border-blue-300 rounded-lg"
                        placeholder="El paciente sufre de dolor abdominal..."
                      />
                    </div>
                  </div>

                  <div className="hover:shadow-2xl  transition-transform duration-500 col-span-2 md:col-span-1">
                    <div className="bg-white items-center bg-opacity-10 text-lg text-white w-full p-3 shadow-md rounded-2xl gap-2 bg-white">
                      <div className="col-span-2 text-center font-bold my-2">
                        <label
                          htmlFor="emergency_full_name"
                          className="flex flex-col items-center rounded-lg p-4 bg-gray-800 w-full text-lg font-bold text-white"
                        >
                          Exploración física:
                        </label>
                      </div>
                      <div className="font-bold w-full h-full grid items-center">
                        Presión Arterial:
                      </div>
                      <input readOnly={readOnly}
                        id={"Presión Arterial"}
                        onChange={(e) =>
                          (handleInputChange("Presión Arterial", e.target.value))
                        }
                        required={true}
                        maxLength={300}
                        value={formValues["Presión Arterial"]}
                        className="border text-black border-blue-300 rounded-lg w-full p-1"
                      />
                      <div className="font-bold flex h-full items-center">
                        Temperatura:
                      </div>
                      <input readOnly={readOnly}
                        id={"Temperatura"}
                        onChange={(e) =>
                          (handleInputChange("Temperatura", e.target.value))
                        }
                        type="number"
                        
                        required={true}
                        maxLength={300}
                        value={formValues["Temperatura"]}
                        className="border text-black border-blue-300 rounded-lg w-full p-1"
                      />
                      <div className="font-bold  flex h-full items-center">
                        Ritmo Cardiaco:
                      </div>
                      <input readOnly={readOnly}
                        id={"Ritmo Cardiaco"}
                        onChange={(e) =>
                          (handleInputChange("Ritmo Cardiaco", e.target.value))
                        }
                        type="number"
                        
                        required={true}
                        maxLength={300}
                        value={formValues["Ritmo Cardiaco"]}
                        className="border text-black border-blue-300 rounded-lg w-full p-1"
                      />
                      <div className="font-bold flex h-full items-center">
                        Oxígeno:
                      </div>
                      <input readOnly={readOnly}
                        id={"Oxígeno"}
                        onChange={(e) =>
                          (handleInputChange("Oxígeno", e.target.value))
                        }
                        required={true}
                        type="number"
                        
                        maxLength={300}
                        value={formValues["Oxígeno"]}
                        className="border text-black border-blue-300 rounded-lg w-full p-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-3">
                  <div className="m-2 hover:shadow-2xl  transition-transform duration-500 bg-white bg-opacity-10 text-lg text-white grid snap-none grid-cols-2 p-3 shadow-md rounded-2xl w-full gap-3">
                    <div className="col-span-2 text-center font-bold my-2">
                      <label
                        htmlFor="emergency_full_name"
                        className="flex flex-col items-center rounded-lg p-4 bg-gray-800 w-full text-lg font-bold text-white"
                      >
                        Plan de tratamiento:
                      </label>
                    </div>
                    <div className="grid grid-cols-1 snap-none">
                      <div className="font-bold my-2">Diagnostico: </div>
                      <textarea readOnly={readOnly}
                        id={"Diagnóstico"}
                        onChange={(e) =>
                          (handleInputChange("Diagnóstico", e.target.value))
                        }
                        required={true}
                        maxLength={300}
                        value={formValues["Diagnóstico"]}
                        className="border border-blue-300 text-black rounded-lg w-full p-1 min-h-[70px]"
                        placeholder="Colitis nerviosa..."
                      />
                    </div>
                    <div className="grid grid-cols-1 snap-none">
                      <div className="font-bold my-2">Sintomas: </div>
                      <textarea readOnly={readOnly}
                        id={"Síntomas"}
                        onChange={(e) =>
                          (handleInputChange("Síntomas", e.target.value))
                        }
                        required={true}
                        maxLength={300}
                        value={formValues["Síntomas"]}
                        className="border border-blue-300 text-black rounded-lg w-full p-1 min-h-[70px]"
                        placeholder="El paciente sufre de dolor abdominal..."
                      />
                    </div>
                    <div className="grid grid-cols-1 snap-none">
                      <div className="font-bold my-2">
                        Medicamento recetado y dosis:{" "}
                      </div>
                      <textarea readOnly={readOnly}
                        id={"Tratamiento"}
                        onChange={(e) =>
                          (handleInputChange("Tratamiento", e.target.value))
                        }
                        required={true}
                        maxLength={300}
                        value={formValues["Tratamiento"]}
                        className="border border-blue-300 text-black rounded-lg w-full p-1 min-h-[70px]"
                        placeholder="El paciente sufre de dolor abdominal..."
                      />
                    </div>
                    <div className="grid grid-cols-1 snap-none">
                      <div className="font-bold my-2">Notas médicas: </div>
                      <textarea readOnly={readOnly}
                        id={"Notas"}
                        onChange={(e) =>   (handleInputChange("Notas", e.target.value))}
                        required={true}
                        maxLength={300}
                        value={formValues["Notas"]}
                        className="border border-blue-300 text-black rounded-lg w-full p-1 min-h-[70px]"
                        placeholder="El paciente sufre de dolor abdominal..."
                      />
                    </div>
                    <div className="grid grid-cols-1 snap-none">
                      <div className="font-bold my-2">Fecha próxima cita: </div>
                      <input readOnly={readOnly}
                        type="date"
                        id={formValues["Fecha Próxima Cita"]}
                        onChange={(e) =>
                          (handleInputChange("Fecha Próxima Cita", e.target.value))
                        }
                        value={formValues["Fecha Próxima Cita"]}
                        required
                        className="mt-1 block w-full border text-black border-blue-300 rounded-md transition duration-300 ease-in-out focus:border-blue-500 p-1 focus:decoration-transparent"
                      />
                    </div>
                    <div className="flex items-center justify-evenly space-x-4 ">
                      <p className="text-gray-800 text-lg font-bold xs:w-[200px]">
                        ¿Todo listo?
                        <br></br>Clickea en:
                      </p>
                      <button
                        type="submit"
                        className="bg-slate-800 hover:bg-blue-600 text-white text-[15px] py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300 focus:outline-none flex items-center space-x-2 transition duration-300 ease-in-out w-[200px] justify-evenly uppercase font-bold"
                      >
                        Ingresar cita
                        <FaChevronRight></FaChevronRight>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map over inputNames to generate labels and input fields */}
              {/* {inputNames.map((name) => (
                <div
                  key={name}
                  className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
                >
                  <label
                    htmlFor={name}
                    className="ml-2 text-lg font-medium text-gray-700"
                  >
                    {name}:
                  </label>
                  {name === "Fecha Cita" || name === "Fecha Próxima Cita" ? (
                    <input readOnly={readOnly}
                      type="date"
                      id={name}
                      value={formValues[name]}
                      onChange={(e) => handleInputChange(name, e.target.value)}
                      required
                      className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  ) : (
                    <textarea readOnly={readOnly}
                      id={name}
                      value={formValues[name]}
                      onChange={(e) => handleInputChange(name, e.target.value)}
                      required={name !== "Oxígeno"}
                      maxLength={300}
                      className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  )}
                </div>
              ))} */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NuevaConsulta;
