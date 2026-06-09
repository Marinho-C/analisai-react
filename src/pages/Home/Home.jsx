import { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import logo from "../../assets/images/Logo AnalisaAI.png";
import iconMenu from "../../assets/images/icon-menu.png";
import iconPerson from "../../assets/images/icon-person.png";
import iconHome from "../../assets/images/icon-home.png";
import iconEdit from "../../assets/images/icon-edit-person.png";
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
            onClick={() => setMenuAberto(true)}
          />

          <img
            id="logo"
            src={logo}
            alt="Logo"
          />

          <img
            id="icon-person"
            src={iconPerson}
            alt="Perfil"
          />

        </div>
      </header>

      <nav
        id="menu-lateral"
        className={menuAberto ? "menu-aberto" : "menu-fechado"}
      >

        <div className="menu-header">

          <div className="menu-logo-container">
            <img
              className="menu-logo"
              src={logo}
              alt="Logo"
            />
          </div>

          <img
            className="menu-fechar"
            src={iconMenu}
            alt="Fechar"
            onClick={() => setMenuAberto(false)}
          />

        </div>

        <p className="menu-titulo">
          Menu
        </p>

        <ul className="menu-opcoes">

          <li className="opcao-item">

            <img
              className="menu-icon"
              src={iconHome}
              alt="Home"
            />

            <Link to="/home">
              Início
            </Link>

          </li>

          <li className="opcao-item">

            <img
              className="menu-icon"
              src={iconEdit}
              alt="Editar Perfil"
            />

            <Link to="/editar-perfil">
              Editar Perfil
            </Link>

          </li>

          <li className="opcao-item">

            <img
              className="menu-icon"
              src={iconEdit}
              alt="Histórico"
            />

            <Link to="/historico">
              Histórico
            </Link>

          </li>

        </ul>

      </nav>

      <main>

        <div id="corpo">

          <h2>
            Envie uma foto agora mesmo e analise a sua planta
          </h2>

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

            <label
              htmlFor="gerenciadorArquivos"
              id="arquivo"
            >
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