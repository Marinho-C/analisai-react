import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Resultado.css";
import MenuLateral from "../MenuLateral/MenuLateral";

import iconMenu from "../../assets/images/icon-menu.png";
import logo from "../../assets/images/Logo-AnalisaAI.png";
import iconPerson from "../../assets/images/icon-person.png";
// IMPORTANTE: Importando a foto de teste para usá-la no nosso banco fictício (mock)
import fotoTeste from "../../assets/images/fototeste.jpeg";

import "../Home/Home.css";

export default function Resultado() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [menuAberto, setMenuAberto] = useState(false);
  const [planta, setPlanta] = useState(null);

  useEffect(() => {
    // ADICIONADO: Agora cada planta do mock também tem os campos imagem e descricao
    const plantasMockadas = [
      {
        id: 1,
        imagem: fotoTeste,
        nome_popular: "Nome popular",
        descricao:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, porro perferendis suscipit quis.",
        especieTox: "Nome das especies",
        riscos: "Saudável",
        sintomas: "3x por semana",
        ações: "Evitar sol direto.",
      },
      {
        id: 2,
        imagem: fotoTeste,
        nome_popular: "Nome popular",
        descricao:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, porro perferendis suscipit quis.",
        especieTox: "Nome das especies",
        riscos: "Saudável",
        sintomas: "3x por semana",
        ações: "Evitar sol direto.",
      },
      {
        id: 3,
        imagem: fotoTeste,
        nome_popular: "Nome popular",
        descricao:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, porro perferendis suscipit quis.",
        especieTox: "Nome das especies",
        riscos: "Saudável",
        sintomas: "3x por semana",
        ações: "Evitar sol direto.",
      },
    ];

    const plantaEncontrada = plantasMockadas.find(
      (p) => String(p.id) === String(id),
    );
    setPlanta(plantaEncontrada);
  }, [id]);

  if (!planta) {
    return (
      <div style={{ color: "#fff", padding: "20px", textAlign: "center" }}>
        <p>Análise não encontrada para o ID: {id}</p>
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
        <button className="voltar" onClick={() => navigate(-1)}>Voltar ao Histórico</button>
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
            <h3>Riscos</h3> {/* Corrigido o título fixo */}
            <p>{planta.riscos}</p>
          </div>

          <div className="info-group">
            <h3>Sintomas</h3> {/* Corrigido o título fixo */}
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
