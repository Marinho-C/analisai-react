import { useState } from "react";
import { Link } from "react-router-dom"; // Importado para fazer o redirecionamento
import MenuLateral from "../MenuLateral/MenuLateral"; 
import iconMenu from "../../assets/images/icon-menu.png";
import logo from "../../assets/images/Logo-AnalisaAI.png";
import iconPerson from "../../assets/images/icon-person.png";

import "../Home/Home.css"; 
import "./Historico.css";

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
            onClick={() => setMenuAberto(true)} 
          />

          <img id="logo" src={logo} alt="Logo" />

          <img id="icon-person" src={iconPerson} alt="Perfil" />
        </div>
      </header>
      <main>
        <div id="title-historic">
          <h2>Histórico</h2>
          <p>Confira seu historico de pesquisa</p>
        </div>

        <div id="listagem">
          <Link to="/nova-pagina" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div id="box-plant">
            <div id="image-plant">
              <img src="src/assets/images/fototeste.jpeg" alt="Planta" />
            </div>

            <div id="info-plant">
              <div id="title-plant">
                <h3>Nome da planta</h3>
              </div>

              <div id="description-plant">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora, porro perferendis suscipit quis pariatur eligendi
                  neque recusandae eius quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora, porro perferendis suscipit quis pariatur eligendi
                  neque recusandae eius quae...
                </p>
              </div>
              
              {/* Seta com ação de redirecionamento */}
              <div id="button-seta"> 
                  <img src="src/assets/images/icon-seta.png" alt="Avançar" />
                
                <p>
                  Saiba mais
                </p>
              </div>
              
            </div>
          </div>
          </Link>
        </div>

        <div id="listagem">
          <Link to="/nova-pagina" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div id="box-plant">
            <div id="image-plant">
              <img src="src/assets/images/fototeste.jpeg" alt="Planta" />
            </div>

            <div id="info-plant">
              <div id="title-plant">
                <h3>Nome da planta</h3>
              </div>

              <div id="description-plant">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora, porro perferendis suscipit quis pariatur eligendi
                  neque recusandae eius quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora, porro perferendis suscipit quis pariatur eligendi
                  neque recusandae eius quae...
                </p>
              </div>
              
              {/* Seta com ação de redirecionamento */}
              <div id="button-seta"> 
                  <img src="src/assets/images/icon-seta.png" alt="Avançar" />
                
                <p>
                  Saiba mais
                </p>
              </div>
              
            </div>
          </div>
          </Link>
        </div>

        <div id="listagem">
          <Link to="/nova-pagina" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div id="box-plant">
            <div id="image-plant">
              <img src="src/assets/images/fototeste.jpeg" alt="Planta" />
            </div>

            <div id="info-plant">
              <div id="title-plant">
                <h3>Nome da planta</h3>
              </div>

              <div id="description-plant">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora, porro perferendis suscipit quis pariatur eligendi
                  neque recusandae eius quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora, porro perferendis suscipit quis pariatur eligendi
                  neque recusandae eius quae...
                </p>
              </div>
              
              {/* Seta com ação de redirecionamento */}
              <div id="button-seta"> 
                  <img src="src/assets/images/icon-seta.png" alt="Avançar" />
                
                <p>
                  Saiba mais
                </p>
              </div>
              
            </div>
          </div>
          </Link>
        </div>
      </main>
      <MenuLateral menuAberto={menuAberto} setMenuAberto={setMenuAberto} />
    </>
  );
}
