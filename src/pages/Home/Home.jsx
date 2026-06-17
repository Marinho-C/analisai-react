import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Home.css";

// Importação dos componentes
import MenuLateral from "../MenuLateral/MenuLateral";
import Loading from "../../components/Loading";

// Imagens do projeto
import logo from "../../assets/images/Logo-AnalisaAI.png";
import iconMenu from "../../assets/images/icon-menu.png";
import iconPerson from "../../assets/images/icon-person.png";
import iconSelecionar from "../../assets/images/icon-selecionar.png";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [imagemPreview, setImagemPreview] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();

  const aoSelecionarFoto = (event) => {
    const arquivo = event.target.files[0];
    if (arquivo) {
      const urlTemporaria = URL.createObjectURL(arquivo);
      setImagemPreview(urlTemporaria);
    }
  };

  const escolherOutraFoto = () => {
    setImagemPreview(null);
  };

  const confirmarEnvio = () => {
    setCarregando(true); // Ativa o spinner de carregamento

    // Simula a requisição ao Back-end durando exatamente 2 segundos
    setTimeout(() => {
      setCarregando(false); 

      // ID simulado que viria do banco de dados após salvar a análise
      const idDaAnalise = 1;

      // ATUALIZADO: Agora passamos a imagemPreview dentro do objeto state!
      navigate(`/retorno/${idDaAnalise}`, { 
        state: { imagemUrl: imagemPreview } 
      });
    }, 2000);
  };

  return (
    <>
      <header>
        <div id="cabecalho">
          <img
            id="icon-menu"
            src={iconMenu}
            alt="Menu"
            onClick={() => setMenuAberto(true)}
          />
          <img id="logo" src={logo} alt="Logo" />
          <img id="icon-person" src={iconPerson} alt="Perfil" />
        </div>
      </header>

      <MenuLateral menuAberto={menuAberto} setMenuAberto={setMenuAberto} />

      <main>
        <div id="corpo">
          
          {carregando ? (
            <Loading />
          ) : (
            <>
              {!imagemPreview ? (
                <div id="container-selecao">
                  <h2>Envie uma foto agora mesmo e analise a sua planta</h2>

                  <div id="selecionar">
                    <img
                      id="photo-selection"
                      src={iconSelecionar}
                      alt="Selecionar"
                    />

                    <input
                      type="file"
                      id="gerenciadorArquivos"
                      accept=".jpg, .jpeg, .png"
                      style={{ display: "none" }}
                      onChange={aoSelecionarFoto} 
                    />

                    <label htmlFor="gerenciadorArquivos" id="arquivo" style={{ cursor: "pointer" }}>
                      Selecionar arquivo
                    </label>
                  </div>

                  <div id="recomendacao">
                    <li>Envie uma foto com iluminação clara</li>
                  </div>
                </div>
              ) : (
                <div id="container-confirmacao">
                  <h2>Sua foto ficou assim:</h2>
                  
                  <div className="preview-box">
                    <img id="preview-foto" src={imagemPreview} alt="Sua planta" />
                  </div>

                  <div className="botoes-confirmacao">
                    <button id="btn-confirmar" onClick={confirmarEnvio}>Analisar Planta</button>
                    <button id="btn-alterar" onClick={escolherOutraFoto}>Escolher Outra</button>
                  </div>
                </div>
              )}
            </>
          )}

        </div>
      </main>
    </>
  );
}