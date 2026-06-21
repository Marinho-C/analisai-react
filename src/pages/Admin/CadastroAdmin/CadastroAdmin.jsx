import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import "./CadastroAdmin.css";
import "../../Resultado/Resultado.css"
import "../Admin.css"; 
import "../ListUsers/ListUsers.css";

function BarraProgresso({ valor }) {
  return (
    <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "8px", height: "10px", marginBottom: "20px" }}>
      <div style={{ width: `${valor}%`, backgroundColor: "#4caf50", height: "100%", borderRadius: "8px", transition: "width 0.3s" }}></div>
    </div>
  );
}

export default function Cadastrar() {
  const navigate = useNavigate();
  const [ver, setVer] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
    email: ""
  });

  const { nome, telefone, senha, confirmarSenha, email } = formData;

  const camposPreenchidos =
    nome.trim() !== "" &&
    senha.trim() !== "" &&
    telefone.trim() !== "" &&
    confirmarSenha.trim() !== "";

  const senhasCoincidem = senha === confirmarSenha;
  const formularioValido = camposPreenchidos && senhasCoincidem;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formularioValido) {
      console.log("Avançando com:", formData);
      navigate("/admin");
    } else {
      alert("Por favor, preencha todos os campos obrigatórios e verifique as senhas.");
    }
  };

  return (
    <div className="cadastro-container">
      <BarraProgresso valor={50} />
      <h3>Faça o seu cadastro</h3>

      <button className="voltar" onClick={() => navigate("/admin")}>Voltar</button>

      <div className="campo">
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Digite o seu nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </div>

      <div className="campo">
        <label>Telefone</label>
        <input
          type="tel"
          name="telefone"
          placeholder="Digite o seu número"
          value={formData.telefone}
          onChange={handleChange}
        />
      </div>

      <div className="campo">
        <label>E-mail <span>(opcional)</span></label>
        <input
          type="email"
          name="email"
          placeholder="Digite o seu e-mail (opcional)"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="campo">
        <label>Senha</label>
        <div className="caixa-input">
          <input
            type={ver ? "text" : "password"}
            name="senha"
            placeholder="Digite a sua senha"
            value={formData.senha}
            onChange={handleChange}
          />
          <button type="button" onClick={() => setVer(!ver)} className="botao-olho">
            {ver ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>
      </div>

      <div className="campo">
        <label>Confirmar Senha</label>
        <div className="caixa-input">
          <input
            type={ver ? "text" : "password"}
            name="confirmarSenha"
            placeholder="Repita a senha"
            value={formData.confirmarSenha}
            onChange={handleChange}
          />
          <button type="button" onClick={() => setVer(!ver)} className="botao-olho">
            {ver ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>
      </div>

      {formData.confirmarSenha && !senhasCoincidem && (
        <p style={{ color: "red" }}>As senhas não coincidem, verifique as senhas.</p>
      )}

      <div className="campo-botao">
        <button onClick={handleSubmit}>
          Salvar
        </button>
      </div>
    </div>
  );
}