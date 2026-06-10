import { useNavigate } from "react-router-dom";
import "./Login.css";

import logo from "../../assets/images/Logo-AnalisaAI.png";

export default function Login() {
  const navigate = useNavigate();

  function entrar() {
    navigate("/home");
  }

  return (
    <>
      <div id="logo">
        <img src={logo} alt="Logo AnalisaAI" />
      </div>

      <div id="title">
        <h2>Realize seu acesso</h2>
      </div>

      <div id="inputs">

        <div id="telefone">
          <label>Telefone</label>

          <input
            id="inputTelefone"
            type="tel"
            placeholder="Digite seu telefone"
          />
        </div>

        <div id="senha">
          <label>Senha</label>

          <input
            id="inputSenha"
            type="password"
            placeholder="Digite sua senha"
          />
        </div>

      </div>

      <div id="buttons">

        <button id="entrar" onClick={entrar}>
          Entrar
        </button>

        <button id="cadastrar">
          Cadastrar-se
        </button>

      </div>
    </>
  );
}