import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MenuLateral from "../MenuLateral/MenuLateral";

import logo from "../../assets/images/Logo-AnalisaAI.png";
import iconMenu from "../../assets/images/icon-menu.png";
import iconPerson from "../../assets/images/icon-person.png";

// Importada temporariamente caso você abra a tela sem enviar uma foto pela Home
import fotoTeste from "../../assets/images/fototeste.jpeg";

import "../Home/Home.css";
import "./Retorno.css"; // Lembre-se de colocar o @import "../Resultado/Resultado.css"; no seu CSS
import "../Resultado/Resultado.css";
import useAnalysisStore from "../../stores/analysisStore";

export default function Retorno() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 
  const { searchRequestId ,analysis } = useAnalysisStore();
  // Captura a foto real enviada pela Home. Se a página for acessada direto na URL, usa a fotoTeste para não quebrar.
  const imagemEnviada = location.state?.imagemUrl || fotoTeste;

  return (
    <div id="resultado-container">
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
            onClick={() => navigate("/home")}
            style={{ cursor: "pointer" }}
          />
          <img id="icon-person" src={iconPerson} alt="Perfil" />
        </div>
      </header>

      <main id="detalhes-planta">
        <div className="top-navigation">
          <button className="voltar" onClick={() => navigate("/home")}>
            ⬅ Analisar outra planta
          </button>
          <h2>Resultado da Análise</h2>
        </div>

        <div className="container-description">
          {/* LADO ESQUERDO: IMAGEM DO USUÁRIO */}
          <div className="resultado-imagem">
            <img src={imagemEnviada} alt="Foto da planta analisada" />
          </div>

          {/* CENTRO: COLUNA 1 */}
          <div className="info-box box1">
            <div className="info-group">
              <h3>Nome popular</h3>
              <p>{analysis[0].CommonName}</p> 
            </div>

            <div className="info-group">
              <h3>Descrição</h3>
              <p>{analysis[0].Description}</p> {/* Aguardando Backend */}
            </div>

            <div className="info-group">
              <h3>Espécies suscetíveis à intoxicação</h3>
              {analysis[0]?.SusceptibleAnimalSpecies?.map((especie, index) => (
                <p key={index}>{especie}</p>
              ))} 
            </div>
          </div>

          {/* DIREITA: COLUNA 2 */}
          <div className="info-box box2">
            <div className="info-group">
              <h3>Riscos</h3>
              <p>{analysis[0].HumanRisks}</p> {/* Aguardando Backend */}
            </div>

            <div className="info-group">
              <h3>Sintomas</h3>
              {analysis[0]?.CommonSymptoms?.map((especie, index) => (
                <p key={index}>{especie}</p>
              ))}
            </div>

            <div className="info-group">
              <h3>Ações recomendadas</h3>
              {analysis[0]?.RecommendedActions?.map((especie, index) => (
                <p key={index}>{especie}</p>
              ))}
            </div>
          </div>
        </div>
      </main>

      <MenuLateral menuAberto={menuAberto} setMenuAberto={setMenuAberto} />
    </div>
  );
}