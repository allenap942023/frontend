import React , { useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';


const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const URLBackEnd = 'https://excited-miniskirt-wasp.cyclic.app/api';
    const mensaje  = '';
    const history = useNavigate();
    const IniciarSesion = (event)=>{
        event.preventDefault()
        var username = event.target.username.value;
        var password = event.target.password.value;
    
     axios.post(`${URLBackEnd}/login`,{ username:username,password:password}).then(
        (res)=>{
            var datosRecibidos  = res.data;
            console.log(datosRecibidos);
            var {token,_id,rol} = datosRecibidos;
            window.localStorage.setItem('token', token);
            window.localStorage.setItem('_id', _id);
            window.localStorage.setItem('rol', rol);
            // window.location.replace("/dashboard");
            history("/dashboard");
            // window.localStorage.getItem(key);
    
        }
     ).catch((error)=>{
    
        error && error.response && setErrorMessage(error.response.data.mensaje);
        console.log(error);
     });
    }

    return (
        <div id="izquierda" className="flex items-center justify-center h-screen relative">
            <div className="hidden md:w-1/2 md:flex w-1/2 h-full flex items-center justify-center" style={{ backgroundImage: "url('/img/imagenes/jadeazul.jpg')", backgroundSize: "cover" }}>
                {/* Cambia el contenido del div a la imagen */}
                <img
                    src="/img/imagenes/ordino2.png"  // Reemplaza con la ruta de tu logo
                    alt="Logo de ORDINO"
                    className="text-white text-4xl font-bold"  // Agrega clases o estilos según sea necesario
                    style={{ width: "250px", height: "auto" }}  // Ajusta el tamaño de la imagen según tus preferencias
                />
            </div>
            {/*  Caja derecha */}
            <div id="derecha" className="w-1/2 h-full bg-white flex flex-col items-center justify-center">
                
                <div id="INI" className="mb-8 ">
                    <h1 className="text-4xl font-bold mb-2">Iniciar sesión</h1>
                    <p className="text-sm text-gray-600 mb-4">Por favor ingresa tus datos a continuación</p>
                </div>

                <form onSubmit={IniciarSesion} className="max-w-md w-full">
                    <div className="mb-6 relative">
                        <label htmlFor="dui" className="block text-lg font-medium text-gray-700">
                            DUI
                        </label>
                        <input
                            id="dui"
                            type="text"
                            name="username"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-lg"  // Ajusta el tamaño de la fuente
                            placeholder="Ingrese su DUI"
                            required="1"
                        />
                        
                    </div>
                    <div className="mb-6 relative">
                        <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-lg"  // Ajusta el tamaño de la fuente
                            placeholder="Ingrese su contraseña"
                            required="1"
                        />
                        
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 text-lg"  // Ajusta el tamaño de la fuente
                    >
                        Ingresar
                    </button>
                </form>
                <p className="mt-4 text-lg text-gray-600">
                {errorMessage && <div className="text-red-600">{errorMessage}</div>}
                </p>
                <p className="mt-4 text-lg text-gray-600">
                    ¿No tienes una cuenta?{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                        Contacta con nosotros
                    </a>
                </p>
            </div>

        </div>
    );
};

export default Login;
