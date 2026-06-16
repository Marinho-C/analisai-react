import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; // Adicionado o useState corretamente
import "./Resultado.css"; 
import MenuLateral from "../MenuLateral/MenuLateral"; 

import iconMenu from "../../assets/images/icon-menu.png";
import logo from "../../assets/images/Logo-AnalisaAI.png";
import iconPerson from "../../assets/images/icon-person.png";

import "../Home/Home.css";

export default function Resultado() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  // CORRIGIDO: Adicionado o estado para o Menu Lateral não crashar a página
  const [menuAberto, setMenuAberto] = useState(false); 
  const [planta, setPlanta] = useState(null);

  useEffect(() => {
    const plantasMockadas = [
      { id: 1, nome: "Samambaia", status: "Saudável", rega: "3x por semana", cuidado: "Evitar sol direto." },
      { id: 2, nome: "Suculenta", status: "Excesso de Água", rega: "1x a cada 15 dias", cuidado: "Mudar para vaso com melhor drenagem." },
      { id: 3, nome: "Manjericão", status: "Presença de Pragas", rega: "Diária", cuidado: "Aplicar óleo de Neem nas folhas." }
    ];

    // CORRIGIDO: Verificação mais segura (compara convertendo ambos para string para evitar falhas de tipo)
    const plantaEncontrada = plantasMockadas.find(p => String(p.id) === String(id));
    setPlanta(plantaEncontrada);
  }, [id]);

  // Se o ID não for 1, 2 ou 3 (dados do mock), avisa o usuário em vez de travar no "Carregando"
  if (!planta) {
    return (
      <div style={{ color: "#fff", padding: "20px", textAlign: "center" }}>
        <p>Análise não encontrada para o ID: {id}</p>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </div>
    );
  }

  return (
    <div id="resultado-container">
      <header>
        <div id="cabecalho">
          <img
            id="icon-menu"
            src={iconMenu}
            alt="Menu"
            onClick={() => setMenuAberto(true)} // Agora funciona porque criamos o estado!
          />
          <img id="logo" src={logo} alt="Logo" onClick={() => navigate("/historico")} style={{cursor: 'pointer'}} />
          <img id="icon-person" src={iconPerson} alt="Perfil" />
        </div>
      </header>

      <main id="detalhes-planta" style={{ padding: "20px", color: "#fff" }}>
        <button onClick={() => navigate(-1)} style={{ marginBottom: "20px", cursor: "pointer" }}>
          ⬅ Voltar ao Histórico
        </button>

        <h1>Análise de Detalhes (ID: {id})</h1>
        
        <div className="info-bloco">
          <h3>Planta Analisada:</h3>
          <p>{planta.nome}</p>
        </div>

        <div className="info-bloco">
          <h3>Status de Saúde:</h3>
          <span>{planta.status}</span>
        </div>

        <div className="info-bloco">
          <h3>Frequência de Rega Recomendada:</h3>
          <p>{planta.rega}</p>
        </div>

        <div className="info-bloco">
          <h3>Cuidados Necessários:</h3>
          <p>{planta.cuidado}</p>
        </div>
      </main>

      {/* Renderiza o menu lateral de verdade na tela */}
      <MenuLateral menuAberto={menuAberto} setMenuAberto={setMenuAberto} />
    </div>
  );
}