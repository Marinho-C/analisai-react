import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import EditarPerfil from "../pages/EditarPerfil/EditarPerfil";
import Historico from "../pages/Historico/Historico"; 
// 1. IMPORTAR A NOVA PÁGINA DE RESULTADO (Ajuste o caminho da pasta se necessário)
import Resultado from "../pages/Resultado/Resultado"; 

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/editar-perfil" element={<EditarPerfil />} />
      <Route path="/historico" element={<Historico />} />
      
      {/* 2. ADICIONAR A ROTA DINÂMICA DO RELEMBRADO DETALHE */}
      {/* Os dois pontos (:id) dizem para o React que qualquer número/texto ali é um parâmetro */}
      <Route path="/resultado/:id" element={<Resultado />} />
    </Routes>
  );
}