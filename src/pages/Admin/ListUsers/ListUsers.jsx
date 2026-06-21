import { useNavigate } from "react-router-dom";
import "../Admin.css"; 
import "./ListUsers.css"; // Certifique-se de que o caminho do CSS local está correto
import BotaoMenu from "../../../components/MenuSusp";

export default function ListUsers() {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h2>Painel de Controle - Administrador</h2>

        <div className="Functions-Admin">
          <button className="voltar" onClick={() => navigate("/admin")}>Voltar</button>
          <button className="btn-logout" id="btn-logout" onClick={() => navigate("/")}>Sair</button>
        </div>
      </header>

      <main>
        <div className="admin-card-users">
          <div className="title">
            <h3 className="analise">Total de Usuários</h3>
            <p className="card-number">2</p> 
          </div>
          
          <div className="listagem">
            <div className="element">
              <table>
                <thead>
                  <tr>
                    <th>Telefone</th>
                    <th>Nome</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>(88)99999999</td>
                    <td>Cecilia Marinho de Paiva</td>
                    <td>Ativo</td>
                    <td>
                      {/* Cada linha chama o seu próprio menu independente */}
                      <BotaoMenu/>
                    </td>
                  </tr>
                  <tr>
                    <td>(88)99999999</td>
                    <td>Cecilia Marinho de Paiva</td>
                    <td>Ativo</td>
                    <td>
                      <BotaoMenu />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}