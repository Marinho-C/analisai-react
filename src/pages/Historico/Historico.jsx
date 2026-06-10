import { useState } from "react";
// Removido o "Link" daqui se não for usar no texto, mas mantido o resto corrigido:
import MenuLateral from "../MenuLateral/MenuLateral"; 
import iconMenu from "../../assets/images/icon-menu.png";
import logo from "../../assets/images/Logo-AnalisaAI.png";
import iconPerson from "../../assets/images/icon-person.png";

import "../Home/Home.css"; // Importação correta do CSS do Histórico
import "./Historico.css";
// Se o CSS do menu estiver em outra pasta, importe direto assim: import "../MenuLateral/MenuLateral.css";

export default function Historico() {
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

      <main>
        <div id="title">
        <h2>Histórico</h2>
        </div>

        <div id="listagem">
          <div id="box-plant">
            //Colocar a imagem e as informações da planta
          </div>
        </div>
      </main>

      <MenuLateral menuAberto={menuAberto} setMenuAberto={setMenuAberto} />
    </>
  );
}