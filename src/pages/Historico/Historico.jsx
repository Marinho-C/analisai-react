import { useState } from "react";
// 1. IMPORTAÇÃO DO MENU (Subindo uma pasta e entrando em MenuLateral)
import MenuLateral from "../MenuLateral/MenuLateral"; 
import iconMenu from "../../assets/images/icon-menu.png";
import "./Historico.css";

export default function Historico() {
  // 2. CRIAÇÃO DO ESTADO
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header>
        <div id="cabecalho">
          {/* Botão que abre o menu ao ser clicado */}
          <img 
            src={iconMenu} 
            alt="Menu" 
            onClick={() => setMenuAberto(true)} 
          />
          <h1>Histórico</h1>
        </div>
      </header>

      {/* 3. CHAMADA DO MENU */}
      <MenuLateral menuAberto={menuAberto} setMenuAberto={setMenuAberto} />

      <main>
        <div id="Title">
            <h2>Seu historico de plantas aparecerá aqui</h2>
        </div>
      </main>
    </>
  );
}