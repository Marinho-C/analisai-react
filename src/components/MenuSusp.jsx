import { useState } from "react";
import "./MenuSusp.css"; 

export default function BotaoMenu() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    // inline-block impede que a div ocupe a largura total da célula da tabela
    <div className="dropdown-container" style={{ position: "relative", display: "inline-block" }}>
      
      {/* Botão Gatilho: usa a sua classe padrão de edição */}
      <button className="button-edit" onClick={alternarMenu}>
        Editar {menuAberto ? "▴" : "▾"}
      </button>

      {/* O menu flutuante só aparece se menuAberto for true */}
      {menuAberto && (
        <div className="menu-suspenso">
          <button onClick={() => { alert("Bloqueado!"); setMenuAberto(false); }}>
            Bloquear
          </button>
          <button onClick={() => { alert("Desbloqueado!"); setMenuAberto(false); }}>
            Desbloquear
          </button>
          <button className="btn-fechar-interno" onClick={() => setMenuAberto(false)}>
            Fechar ✕
          </button>
        </div>
      )}
    </div>
  );
}