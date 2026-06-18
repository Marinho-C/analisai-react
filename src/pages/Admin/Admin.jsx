import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Admin.css"; 

export default function Admin() {
  const navigate = useNavigate();

    function cadastroAdmin(){
        navigate("/cadastroAdmin");
    }

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h2>Painel de Controle - Administrador</h2>
        <button className="btn-logout" onClick={() => navigate("/")}>
          Sair
        </button>
      </header>

      <main className="admin-main">
        <p>Confira os principais dados do AnalisaAI</p>
        
        <div className="admin-grid">
          <div className="admin-card">
            <h3>Total de Analises</h3>
            <p className="card-number">0</p>
            <button className="buttonDashboard">Conferir detalhes</button>
          </div>
          
          <div className="admin-card">
            <h3>Total de usuários</h3>
            <p className="card-number">0</p>
            <button className="buttonDashboard">Conferir detalhes</button>
          </div>
        </div>

        <div className="Functions-Admin">
            <button onClick={cadastroAdmin} >Cadastrar novos administradores</button>
            <button>Visualizar usuários</button>
        </div>
      </main> 
    </div>
  );
}