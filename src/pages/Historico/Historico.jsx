import { useState } from "react";
// 1. IMPORTAÇÃO DO MENU (Subindo uma pasta e entrando em MenuLateral)
import MenuLateral from "../MenuLateral/MenuLateral"; 
import iconMenu from "../../assets/images/icon-menu.png";

// ====== AS IMPORTAÇÕES QUE ESTAVAM FALTANDO AQUI: ======
import logo from "../../assets/images/Logo AnalisaAI.png";
import iconPerson from "../../assets/images/icon-person.png";

import "./Historico.css";

export default function Historico() {
  // 2. CRIAÇÃO DO ESTADO
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header>
        <div id="cabecalho">
          <img
            id="icon-menu"
            src={iconMenu}
            alt="Menu"
            onClick={() => setMenuAberto(true)} // Abre o menu
          />
    
          <img id="logo" src={logo} alt="Logo" />
    
          <img id="icon-person" src={iconPerson} alt="Perfil" />
        </div>
      </header>

      {/* 3. CHAMADA DO MENU */}
      <MenuLateral menuAberto={menuAberto} setMenuAberto={setMenuAberto} />

      <main>
        {/* Alterado para id="corpo" para bater com o CSS que você já fez */}
        <div id="corpo"> 
          <h2>Seu histórico de plantas aparecerá aqui</h2>
        </div>
      </main>
    </>
  );
}