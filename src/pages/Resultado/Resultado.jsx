import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Resultado.css";
import MenuLateral from "../MenuLateral/MenuLateral";

import iconMenu from "../../assets/images/icon-menu.png";
import logo from "../../assets/images/Logo-AnalisaAI.png";
import iconPerson from "../../assets/images/icon-person.png";
import fotoTeste from "../../assets/images/fototeste.jpeg";

import "../Home/Home.css";

export default function Resultado() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [menuAberto, setMenuAberto] = useState(false);
  const [planta, setPlanta] = useState(null);

  useEffect(() => {
    const plantasMockadas = [
      {
        id: 1,
        imagem: fotoTeste,
        nome_popular: "Samambaia",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, porro perferendis suscipit quis.",
        especieTox: "Cães e Gatos",
        riscos: "Nenhum",
        sintomas: "Não aplicável",
        ações: "Evitar sol direto.",
      },
      {
        id: 2,
        imagem: fotoTeste,
        nome_popular: "Suculenta",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, porro perferendis suscipit quis.",
        especieTox: "Nenhuma",
        riscos: "Baixo",
        sintomas: "Não aplicável",
        ações: "Pouca água.",
      },
      {
        id: 3,
        imagem: fotoTeste,
        nome_popular: "Manjericão",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, porro perferendis suscipit quis.",
        especieTox: "Nenhuma",
        riscos: "Nenhum",
        sintomas: "Não aplicável",
        ações: "Regar diariamente.",
      },
    ];

    // Tenta encontrar a planta pelo ID da URL
    let plantaEncontrada = plantasMockadas.find(
      (p) => String(p.id) === String(id)
    );

    // SISTEMA DE SEGURANÇA: Se não achar (ID errado ou vazio), pega a planta 1 por padrão para não ficar tela em branco!
    if (!plantaEncontrada) {
      plantaEncontrada = plantasMockadas[0]; 
    }
    
    setPlanta(plantaEncontrada);
  }, [id]);

  // Modifiquei o fundo para um cinza escuro temporário, assim se cair aqui você consegue ler a letra branca!
  if (!planta) {
    return (
      <div style={{ backgroundColor: "#222", color: "#fff", padding: "50px", textAlign: "center", height: "100vh" }}>
        <p>Carregando as informações da sua planta...</p>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </div>
    );
  }

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
            onClick={() => navigate("/historico")}
            style={{ cursor: "pointer" }}
          />
          <img id="icon-person" src={iconPerson} alt="Perfil" />
        </div>
      </header>

      <main id="detalhes-planta">
        <div className="top-navigation">
          <button className="voltar" onClick={() => navigate(-1)}>⬅ Voltar ao Histórico</button>
          <h2>Detalhes da Planta</h2>
        </div>

        <div className="container-description">
          {/* LADO ESQUERDO: IMAGEM */}
          <div className="resultado-imagem">
            <img src={planta.imagem} alt={planta.nome_popular} />
          </div>

          {/* CENTRO: COLUNA 1 */}
          <div className="info-box box1">
            <div className="info-group">
              <h3>Nome popular</h3>
              <p>{planta.nome_popular}</p>
            </div>

            <div className="info-group">
              <h3>Descrição</h3>
              <p>{planta.descricao}</p>
            </div>

            <div className="info-group">
              <h3>Espécies suscetíveis à intoxicação</h3>
              <p>{planta.especieTox}</p>
            </div>
          </div>

          {/* DIREITA: COLUNA 2 */}
          <div className="info-box box2">
            <div className="info-group">
              <h3>Riscos</h3> 
              <p>{planta.riscos}</p>
            </div>

            <div className="info-group">
              <h3>Sintomas</h3> 
              <p>{planta.sintomas}</p>
            </div>

            <div className="info-group">
              <h3>Ações recomendadas</h3>
              <p>{planta.ações}</p>
            </div>
          </div>
        </div>
      </main>

      <MenuLateral menuAberto={menuAberto} setMenuAberto={setMenuAberto} />
    </div>
  );
}