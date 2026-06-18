import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/images/Logo-AnalisaAI.png";


export default function Login() {
  const navigate = useNavigate();
  const [ver, setVer] = useState(false);
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");

  function entrar() {
    if(telefone === "0000" && password === "0000"){
      navigate("/admin");
    } else {navigate("/home"); }
  }

  function cadastrar() {
    navigate("/cadastro");
  }

  return (
    <>
      <div id="login-container">
        <div id="logo">
          <img src={logo} alt="Logo AnalisaAI" />
        </div>

        <div className="textos">
          <h2>Realize seu acesso</h2>
        </div>

        <div id="inputs">
          <div id="telefone">
            <label>Telefone</label>
            <input
              id="inputTelefone"
              type="tel"
              placeholder="Digite seu telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div id="senha">
            <label>Senha</label>
            <div className="caixa-input">
              <input
                id="inputSenha"
                type={ver ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setVer(!ver)}
                className="botao-olho"
              >
                {ver ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          {/*<a href="#">Esqueceu a senha?</a>*/} 
        </div>

        <div id="buttons">
          <button id="entrar" onClick={entrar}>
            Entrar
          </button>
          <button id="cadastrar" onClick={cadastrar}>
            Cadastrar-se
          </button>
        </div>
      </div>
    </>
  );
}