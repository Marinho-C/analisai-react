import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./EditarPerfil.css";


import logo from "../../assets/images/Logo AnalisaAI.png";
import iconMenu from "../../assets/images/icon-menu.png";
import iconPerson from "../../assets/images/icon-person.png";
import iconHome from "../../assets/images/icon-home.png";
import iconEdit from "../../assets/images/icon-edit-person.png";
import iconSelecionar from "../../assets/images/icon-selecionar.png";


export default function EditarPerfil() {

  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);

  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");

  useEffect(() => {
    fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    )
      .then((res) => res.json())
      .then((dados) => {
        const ordenados = dados.sort(
          (a, b) => a.nome.localeCompare(b.nome)
        );

        setEstados(ordenados);
      });
  }, []);

  useEffect(() => {

    if (!estadoSelecionado) {
      setCidades([]);
      return;
    }

    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`
    )
      .then((res) => res.json())
      .then((dados) => {
        setCidades(dados);
      });

  }, [estadoSelecionado]);

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

                <Link to="/home" className="menu-link-completo">
                    <img className="menu-icon" src={iconHome} alt="Home" />
                    <span>Início</span>
                    </Link>
                
                  <img
                  className="menu-icon"
                  src={iconHome}
                  alt="Home"
                />

                </li>
    
              
    
              <li className="opcao-item">
    
                  <Link to="/editar-perfil" className="menu-link-completo">
                    <img className="menu-icon" src={iconEdit} alt="Editar Perfil" />
                    <span>Editar Perfil</span>
                    </Link>

                <img
                  className="menu-icon"
                  src={iconEdit}
                  alt="Editar Perfil"
                />
    
              </li>
    
              <li className="opcao-item">

            <Link to="/historico" className="menu-link-completo">
            <img className="menu-icon" src={iconEdit} alt="Histórico" />
            <span>Histórico</span>
            </Link>
    
                <img
                  className="menu-icon"
                  src={iconEdit}
                  alt="Histórico"
                />
    
              </li>
    
            </ul>
    
          </nav>


    <div className="editar-perfil-container">

      <h2>Meu Perfil - Dados Cadastrais</h2>

      <section className="secao-dados">

        <h3>Meus Dados</h3>

        <form className="formulario-perfil">

          <label htmlFor="nome">
            Nome
          </label>

          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome"
          /> 

        <button
            type="submit"
            className="btn-editar"
          >
            Editar
          </button>

          <label htmlFor="telefone">
            Telefone
          </label>

          <input
            type="tel"
            id="telefone"
            placeholder="(00) 00000-0000"
          />

          <button
            type="submit"
            className="btn-editar"
          >
            Editar
          </button>

          <label htmlFor="estado">
            Estado
          </label>

          <select
            id="estado"
            value={estadoSelecionado}
            onChange={(e) =>
              setEstadoSelecionado(e.target.value)
            }
          >
            <option value="">
              Selecione um estado
            </option>

            {estados.map((estado) => (
              <option
                key={estado.id}
                value={estado.sigla}
              >
                {estado.nome}
              </option>
            ))}
          </select>

          <label htmlFor="cidade">
            Município/Cidade
          </label>

          <select
            id="cidade"
            value={cidadeSelecionada}
            onChange={(e) =>
              setCidadeSelecionada(e.target.value)
            }
            disabled={!estadoSelecionado}
          >
            <option value="">
              Selecione um município
            </option>

            {cidades.map((cidade) => (
              <option
                key={cidade.id}
                value={cidade.nome}
              >
                {cidade.nome}
              </option>
            ))}
          </select>

          <label htmlFor="localidade">
            Localidade
          </label>

          <input
            type="text"
            id="localidade"
          />
          <button
            type="submit"
            className="btn-editar"
          >
            Editar
          </button>

          <label htmlFor="fazenda">
            Nome da Fazenda
          </label>

          <input
            type="text"
            id="fazenda"
          />

          <button
            type="submit"
            className="btn-editar"
          >
            Editar
          </button>

          <button
            type="submit"
            className="btn-salvar"
          >
            Salvar Alterações
          </button>

          <button
            type="submit"
            className="btn-cancelar"
          >
            Cancelar
          </button>


        </form>

      </section>

    </div>

            </>
  );
}