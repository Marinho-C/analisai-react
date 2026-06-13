import { useState } from "react";
import "./Home.css";

// Importação dos componentes
import MenuLateral from "../MenuLateral/MenuLateral";
import Loading from "../../components/Loading";

import logo from "../../assets/images/Logo-AnalisaAI.png";
import iconMenu from "../../assets/images/icon-menu.png";
import iconPerson from "../../assets/images/icon-person.png";
import iconSelecionar from "../../assets/images/icon-selecionar.png";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [imagemPreview, setImagemPreview] = useState(null);
  
  // NOVO: Estado para controlar a exibição do Spinner de carregamento
  const [carregando, setCarregando] = useState(false);

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

  // MODIFICADO: Função ativa o loading e simula o envio
  const confirmarEnvio = () => {
    setCarregando(true); // Ativa a tela de carregamento imediatamente

    // Simulando uma espera de 3 segundos (tempo que a IA levaria para responder)
    setTimeout(() => {
      setCarregando(false); // Desativa o loading
      alert("Planta analisada com sucesso pelo AnalisaAI!");
      
      // Aqui, futuramente, você usaria o useNavigate() para mandar o usuário 
      // direto para a página de resultados daquela análise.
    }, 3000);
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
          
          {/* 1. SE estiver carregando, mostra APENAS o componente de Loading */}
          {carregando ? (
            <Loading />
          ) : (
            /* 2. CASO CONTRÁRIO (não está carregando), segue o fluxo normal das suas duas telas */
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