import { useState } from "react";
import "./Home.css";

// Importação do novo componente (ajuste o caminho se necessário)
import MenuLateral from "../MenuLateral/MenuLateral";

// Imagens utilizadas apenas na Home e no Header
import logo from "../../assets/images/Logo AnalisaAI.png";
import iconMenu from "../../assets/images/icon-menu.png";
import iconPerson from "../../assets/images/icon-person.png";
import iconSelecionar from "../../assets/images/icon-selecionar.png";

export default function Home() {
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

      {/* Chamada do Menu Lateral passando o estado via props */}
      <MenuLateral menuAberto={menuAberto} setMenuAberto={setMenuAberto} />

      <main>
        <div id="corpo">
          <h2>Envie uma foto agora mesmo e analise a sua planta</h2>

          <div id="selecionar">
            <img
              id="photo-selection"
              src={iconSelecionar}
              alt="Selecionar"
            />

            <input
              type="file"
              id="gerenciadorArquivos"
              style={{ display: "none" }}
            />

            <label htmlFor="gerenciadorArquivos" id="arquivo">
              Selecionar arquivo
            </label>
          </div>

          <div id="recomendacao">
            <li>Envie uma foto com iluminação clara</li>
          </div>
        </div>
      </main>
    </>
  );
}