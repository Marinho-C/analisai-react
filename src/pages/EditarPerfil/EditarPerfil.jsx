import { useEffect, useState } from "react";
import "./EditarPerfil.css";

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

  return (
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
  );
}