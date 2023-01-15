import React from "react";
import ReactDOM from "react-dom";
import "./reset.scss";
import "./navegacao.scss";
import "./fonts.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navegacao />
  </React.StrictMode>
);

// VOU CRIAR TUDO AQUI E DEPOIS SEPARAR COMO COMPONENTES
function Navegacao() {
  return (
    <nav>
      <img src="logo.png" alt="logo" />
      <h1>Registro</h1>
      <div className="flexDeNavegacao">
        <button>Documentação</button>
        <button>Ferramentas</button>
        <button>Certificados</button>
        <button>Portfólio</button>
        <button>Roadmap</button>
        <button>Contato</button>
      </div>
    </nav>
  );
}
