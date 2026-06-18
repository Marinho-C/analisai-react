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

        <div className="Functions-Admin">
            <button>Cadastrar novos administradores</button>
            <button onClick={cadastroAdmin}>Visualizar usuários</button>
            <button id="btn-logout" onClick={() => navigate("/")}>
          Sair
        </button>
        </div>
      </header>

      <main className="admin-main">
        <p>Confira os principais dados do AnalisaAI</p>
        
        <div className="admin-grid">
          <div className="admin-card">
            <div className="title">
                <h3 className="analise">Total de Analises</h3>
                <p className="card-number">0</p>
            </div>
            <div className="listagem">
                <div className="element">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Planta Identificada</th>
                                <th>Hora de Registro</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody><tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody><tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody><tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody><tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody><tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
          
          <div className="admin-card">
            <div className="title">
                <h3 className="analise">Total de Analises</h3>
                <p className="card-number">0</p>
            </div>
            <div className="listagem">
                <div className="element">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody><tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody><tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody><tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody><tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody><tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>#09090</td>
                                <td>Samambaia</td>
                                <td>20/07/2025 - às 18h50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            

            {/*<button className="buttonDashboard">Conferir detalhes</button>*/}
          </div>
        </div>

<<<<<<< HEAD
        <div className="Functions-Admin">
            <button onClick={cadastroAdmin} >Cadastrar novos administradores</button>
            <button>Visualizar usuários</button>
        </div>
      </main> 
=======
        {/*<div className="Functions-Admin"*/}
            {/*<button>Cadastrar novos administradores</button>
            <button onClick={cadastroAdmin}>Visualizar usuários</button>
        </div>*/}
      </main>
>>>>>>> 647b1002c648a8bc4a5097905a0f52836b838d2d
    </div>
  );
}