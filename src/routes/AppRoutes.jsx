import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import EditarPerfil from "../pages/EditarPerfil/EditarPerfil";
import Historico from "../pages/Historico/Historico"; 
import Retorno from "../pages/Retorno/Retorno"; 
// AQUI ESTAVA O ERRO: Faltava importar a página de Resultado!
import Resultado from "../pages/Resultado/Resultado"; 

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
      <Route path="/home" element={<Home />} />
      <Route path="/editar-perfil" element={<EditarPerfil />} />
      <Route path="/historico" element={<Historico />} />
      
      {/* ROTA DINÂMICA: Ajustada para usar a página Retorno */}
      <Route path="/retorno/:id" element={<Retorno />} />
      
      {/* ROTA DINÂMICA: Página de Resultado que estava quebrando o app */}
      <Route path="/resultado/:id" element={<Resultado />} />
    </Routes>
  );
}