import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment"
const URLBackEnd = "https://excited-miniskirt-wasp.cyclic.app/api";

const DatosPaciente = (props) => {
  const [paciente, setPaciente] = useState({});
  useEffect(() => {
    obtenerInfoUsuario();
  }, []);

  const obtenerInfoUsuario = () => {
    var id = props.id_paciente;
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
        setPaciente(datosRecibidos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hover:shadow-2xl  transition-transform duration-500 flex bg-white bg-opacity-30 text-lg text-black justify-evenly shadow-md p-4 rounded-3xl m-3 min-w-[500px] lg:min-w-[900px] font-inter bg-white">
      <div className="lg:w-[300px] flex justify-start">
        <img
          src=""
          alt=""
          className="rounded-full border border-slate-800 w-[120px] h-[120px] shadow-md"
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <span className="font-bold text-lg text-white">Nombre paciente:</span>
        <span className="text-lg">{paciente.nombre}</span>
        <span className="font-bold text-lg text-white">Fecha de nacimiento: </span>
        <span className="text-lg">{paciente && moment(paciente.fecha_nacimiento).format("DD/MM/YYYY")}</span>
        <span className="font-bold text-lg text-white">Sexo:</span>
        <span className="text-lg">{paciente.sexo_paciente}</span>
        <span className="font-bold text-lg text-white">Dui</span>
        <span className="text-lg">{paciente.dui_paciente}</span>
        <span className="font-bold text-lg text-white">Direccion</span>
        <span className="text-lg">{paciente.direccion}</span>
        <span className="font-bold text-lg text-white">Numero de telefono</span>
        <span className="text-lg">{paciente.numero_telefonico}</span>
        <span className="font-bold text-lg text-white">Correo electrónico</span>
        <span className="text-lg">{paciente.correo}</span>
      </div>
    </div>
  );
};

export default DatosPaciente;
