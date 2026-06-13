import { useState } from "react";
import MenuLateral from "../MenuLateral/MenuLateral"; 
import CardPlanta from "../../components/CardPlanta"; // CORRIGIDO: Agora sobe 2 níveis e entra em components

import iconMenu from "../../assets/images/icon-menu.png";
import logo from "../../assets/images/Logo-AnalisaAI.png";
import iconPerson from "../../assets/images/icon-person.png";
import fotoTeste from "../../assets/images/fototeste.jpeg"; // CORRIGIDO: Caminho relativo correto para o assets

import "../Home/Home.css"; 
import "./Historico.css";

export default function Historico() {
  const [menuAberto, setMenuAberto] = useState(false); 

  // Exemplo de Array simulando os dados que viriam do banco de dados futuramente
  const historicoPesquisas = [
    {
      id: 1,
      nome: "Nome da Planta 1",
      imagem: fotoTeste,
      descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, porro perferendis suscipit quis pariatur eligendi...",
      rotaLink: "/resultado/1"
    },
    {
      id: 2,
      nome: "Nome da Planta 2",
      imagem: fotoTeste,
      descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, porro perferendis suscipit quis pariatur eligendi...",
      rotaLink: "/resultado/2"
    },
    {
      id: 3,
      nome: "Nome da Planta 3",
      imagem: fotoTeste,
      descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, porro perferendis suscipit quis pariatur eligendi...",
      rotaLink: "/resultado/3"
    }
  ];

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
          <p>Confira seu histórico de pesquisa</p>
        </div>

        {/* CONTAINER DA LISTAGEM (ÚNICO) */}
        <div className="listagem-container">
          
          {/* O .map percorre a lista e cria um componente para cada item automaticamente */}
          {historicoPesquisas.map((planta) => (
            <CardPlanta 
              key={planta.id} // O React exige uma chave única para renderizações em lista
              imagem={planta.imagem}
              nome={planta.nome}
              descricao={planta.descricao}
              rotaLink={planta.rotaLink}
            />
          ))}

        </div>
      </main>

      <MenuLateral menuAberto={menuAberto} setMenuAberto={setMenuAberto} />
    </>
  );
}