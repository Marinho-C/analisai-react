import "./EditarPerfil.css";

export default function EditarPerfil() {
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

          <label htmlFor="telefone">
            Telefone
          </label>

          <input
            type="tel"
            id="telefone"
            placeholder="(00) 00000-0000"
          />

          <label htmlFor="estado">
            Estado
          </label>

          <input
            type="text"
            id="estado"
          />

          <label htmlFor="cidade">
            Município/Cidade
          </label>

          <input
            type="text"
            id="cidade"
          />

          <label htmlFor="localidade">
            Localidade
          </label>

          <input
            type="text"
            id="localidade"
          />

          <label htmlFor="fazenda">
            Nome da Fazenda
          </label>

          <input
            type="text"
            id="fazenda"
          />

          <button
            type="submit"
            className="btn-salvar"
          >
            Salvar Alterações
          </button>

        </form>

      </section>

    </div>
  );
}