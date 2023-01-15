import React from "react";
import ReactDOM from "react-dom";
import "./reset.scss";
import "./navegacao.scss";
import "./fonts.scss";
import "./conteudoInicial.scss";

import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navegacao />
    <ConteudoInicial />
  </React.StrictMode>
);

// VOU CRIAR TUDO AQUI E DEPOIS SEPARAR COMO COMPONENTES
function Navegacao() {
  const [documentacao, setDocumentacao] = useState(false);
  return (
    <nav>
      <img src="logo.png" alt="logo" />
      <h1>Registro</h1>
      <div className="flexDeNavegacao">
        <button
          onClick={() => {
            if (documentacao) {
              setDocumentacao(false);
            } else {
              setDocumentacao(true);
            }
          }}
        >
          Documentação
        </button>
        <button>Ferramentas</button>
        <button>Certificados</button>
        <button>Portfólio</button>
        <button>Roadmap</button>
        <button>Contato</button>
      </div>
    </nav>
  );
}

function ConteudoInicial() {
  return (
    <div className="conteudoInicial">
      <h1>Como era mesmo aquela sintaxe?</h1>
      <p>
        Quem nunca sentiu a necessidade de ter registrado algo que aprendeu? Ou
        de ter guardado uma ferramenta que usou e gostou? A verdade é que eu
        sempre tive essa necessidade, mas cadernos e anotações sempre foram
        muito bagunçados para mim e difíceis de consultar em qualquer lugar.
        <br />
        <br />
        Por isso decidi registrar tudo isso em um site que eu possa acessar de
        onde eu estiver e possa organizar de uma forma que eu possa consultar
        com facilidade. Bem vindo ao meu site de registro!
      </p>

      <img src="./foto.jpg" alt="Foto do samuel" />
    </div>
  );
}

function Documentacao() {
  return (
    <section className="Documentacao">
      <h1>Escolha qual tecnologia você quer acessar</h1>
    </section>
  );
}
