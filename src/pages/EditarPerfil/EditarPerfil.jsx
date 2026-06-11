import { useEffect, useState } from "react";
import "./EditarPerfil.css";
import MenuLateral from "../MenuLateral/MenuLateral";
import iconMenu from "../../assets/images/icon-menu.png";
import logo from "../../assets/images/Logo-AnalisaAI.png";
import iconPerson from "../../assets/images/icon-person.png";
import { BsPencil } from "react-icons/bs";

export default function EditarPerfil() {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((res) => res.json())
      .then((dados) => {
        const ordenados = dados.sort((a, b) => a.nome.localeCompare(b.nome));
        setEstados(ordenados);
      });
  }, []);

  useEffect(() => {
    if (!estadoSelecionado) return;
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
      .then((res) => res.json())
      .then((dados) => {
        setCidades(dados);
      });
  }, [estadoSelecionado]);

  return (
    <>
      <header>
        <div id="cabecalho">
          <img id="icon-menu" src={iconMenu} alt="Menu" onClick={() => setMenuAberto(true)} />
          <img id="logo" src={logo} alt="Logo" />
          <img id="icon-person" src={iconPerson} alt="Perfil" />
        </div>
      </header>

      <div className="editar-perfil-container">
        <h2>Meu Perfil - Dados Cadastrais</h2>

        <section className="secao-dados">
          <h3>Meus Dados</h3>

          <form className="formulario-perfil">
            <div className="colunas-2">

              {/* NOME */}
              <div className="campo-com-botao">
                <label htmlFor="nome">Nome</label>
                <div className="input-botao-wrapper">
                  <input type="text" id="nome" placeholder="Digite seu nome" />
                  <button type="button" className="btn-editar">✏️ Editar</button>
                </div>
              </div>

              {/* MUNICÍPIO/CIDADE */}
              <div className="campo-sem-botao">
                <label htmlFor="cidade">Município/Cidade</label>
                <select
                  id="cidade"
                  value={cidadeSelecionada}
                  onChange={(e) => setCidadeSelecionada(e.target.value)}
                >
                  <option value="">Selecione um município</option>
                  {cidades.map((cidade) => (
                    <option key={cidade.id} value={cidade.nome}>
                      {cidade.nome}
                    </option>
                  ))}
                </select>
              </div>

              {/* TELEFONE */}
              <div className="campo-com-botao">
                <label htmlFor="telefone">Telefone</label>
                <div className="input-botao-wrapper">
                  <input type="text" id="telefone" placeholder="(xx) xxxxx-xxxx" />
                  <button type="button" className="btn-editar">
                    <BsPencil /> Editar
                  </button>
                </div>
              </div>

              {/* LOCALIDADE */}
              <div className="campo-com-botao">
                <label htmlFor="localidade">Localidade</label>
                <div className="input-botao-wrapper">
                  <input type="text" id="localidade" placeholder="Nome da Localidade" />
                  <button type="button" className="btn-editar">✏️ Editar</button>
                </div>
              </div>

              {/* ESTADO */}
              <div className="campo-sem-botao">
                <label htmlFor="estado">Estado</label>
                <select
                  id="estado"
                  value={estadoSelecionado}
                  onChange={(e) => setEstadoSelecionado(e.target.value)}
                >
                  <option value="">Selecione um estado</option>
                  {estados.map((estado) => (
                    <option key={estado.id} value={estado.sigla}>
                      {estado.nome}
                    </option>
                  ))}
                </select>
              </div>

              {/* NOME DA FAZENDA */}
              <div className="campo-com-botao">
                <label htmlFor="fazenda">Nome da Fazenda</label>
                <div className="input-botao-wrapper">
                  <input type="text" id="fazenda" placeholder="Nome da Fazenda" />
                  <button type="button" className="btn-editar">✏️ Editar</button>
                </div>
              </div>

            </div>

            <div className="botoes-finais">
              <button type="button" className="btn-cancelar">Cancelar</button>
              <button type="submit" className="btn-salvar">Salvar Alterações</button>
            </div>
          </form>
        </section>
      </div>

      <MenuLateral menuAberto={menuAberto} setMenuAberto={setMenuAberto} />
    </>
  );
}