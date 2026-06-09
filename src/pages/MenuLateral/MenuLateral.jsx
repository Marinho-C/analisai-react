import { Link } from "react-router-dom";

// Importações de imagens necessárias apenas para o Menu
import logo from "../../assets/images/Logo AnalisaAI.png";
import iconMenu from "../../assets/images/icon-menu.png";
import iconHome from "../../assets/images/icon-home.png";
import iconEdit from "../../assets/images/icon-edit-person.png";

export default function MenuLateral({ menuAberto, setMenuAberto }) {
  return (
    <nav
      id="menu-lateral"
      className={menuAberto ? "menu-aberto" : "menu-fechado"}
    >
      <div className="menu-header">
        <div className="menu-logo-container">
          <img className="menu-logo" src={logo} alt="Logo" />
        </div>

        <img
          className="menu-fechar"
          src={iconMenu}
          alt="Fechar"
          onClick={() => setMenuAberto(false)} // Fecha o menu
        />
      </div>

      <p className="menu-titulo">Menu</p>

      <ul className="menu-opcoes">
        <li className="opcao-item">
          <img className="menu-icon" src={iconHome} alt="Home" />
          <Link to="/home">Início</Link>
        </li>

        <li className="opcao-item">
          <img className="menu-icon" src={iconEdit} alt="Editar Perfil" />
          <Link to="/editar-perfil">Editar Perfil</Link>
        </li>

        <li className="opcao-item">
          <img className="menu-icon" src={iconEdit} alt="Histórico" />
          <Link to="/historico">Histórico</Link>
        </li>
      </ul>
    </nav>
  );
}