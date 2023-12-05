import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Footer from './components/Footer'; // Importa el componente Footer
import Dashboard from './pages/Dashboard';
import NuevoPaciente from './components/NuevoPaciente'; // Importa el componente correspondiente
import Busqueda from './components/Busqueda'; // Importa el componente correspondiente
import NuevaConsulta from './components/NuevaConsulta'; // Importa el componente correspondiente
import HistorialMedico from './components/HistorialMedico'; // Importa el componente correspondiente
import Historial from './components/Historial'; // Importa el componente correspondiente
import Perfil from './components/Perfil'; // Importa el componente correspondiente
import Detalles from './components/Detalles'; 
import Usuarios from './components/Usuarios';
import EditarUsuarios from './components/EditarUsuarios';

export const AppRouter = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home showNavbar={true} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/dashboard/new-patient" element={<NuevoPaciente />} />
          <Route path="/dashboard/search" element={<Busqueda />} />
          <Route path="/dashboard/new-consultation/:id" element={<NuevaConsulta />} />
          <Route path="/dashboard/consultation/:id/:idConsulta" element={<NuevaConsulta />} />
          <Route path="/dashboard/medical-history/:id" element={<HistorialMedico />} />
          <Route path="/dashboard/history" element={<Historial />} />
          <Route path="/dashboard/profile" element={<Perfil />} />
          <Route path="/dashboard/usuarios" element={<Usuarios />} />
          <Route path="/dashboard/usuarios/:id" element={<EditarUsuarios />} />
          <Route path="/dashboard/patient/detalle/:id" element={<Detalles />} />
      </Routes>
      <Footer /> 
    </>
  );
};
