import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// CSS
import "./reset.scss";
import "./navegacao.scss";
import "./fonts.scss";
import "./conteudoInicial.scss";
import "./documentacao.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navegacao />
    <Routes>
      {/* Rotas da barra de navegação */}
      <Route path="/" exact element={<ConteudoInicial />} />
      <Route path="/documentacao" exact element={<Documentacao />} />
      <Route path="/ferramentas" exact element={<Documentacao />} />
      <Route path="/certificados" exact element={<Documentacao />} />
      <Route path="/portfolio" exact element={<Documentacao />} />
      <Route path="/roadmap" exact element={<Documentacao />} />
      <Route path="/contato" exact element={<Documentacao />} />

      {/* Subrotas da documentação */}
      <Route path="/documentacao/jsx" exact element={<ReactDoc />} />
      <Route path="/documentacao/css" exact element={<ReactDoc />} />
      <Route path="/documentacao/javascript" exact element={<ReactDoc />} />
      <Route path="/documentacao/react" exact element={<ReactDoc />} />
      <Route path="/documentacao/php" exact element={<ReactDoc />} />
      <Route path="/documentacao/python" exact element={<ReactDoc />} />
    </Routes>
  </BrowserRouter>
);

// VOU CRIAR TUDO AQUI E DEPOIS SEPARAR COMO COMPONENTES
function Navegacao() {
  return (
    <React.Fragment>
      <nav>
        <img src="./logo.png" alt="logo" />
        <h1>
          <Link to="/">Registro</Link>
        </h1>
        <div className="flexDeNavegacao">
          <button>
            <Link to="/documentacao">Documentação</Link>
          </button>
          <button>
            <Link to="/ferramentas">Ferramentas</Link>
          </button>
          <button>
            <Link to="/certificados">Certificados</Link>
          </button>
          <button>
            <Link to="/portfolio">Portfólio</Link>
          </button>
          <button>
            <Link to="/roadmap">Roadmap</Link>
          </button>
          <button>
            <Link to="/contato">Contato</Link>
          </button>
        </div>
      </nav>
    </React.Fragment>
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
      <div className="flexIconesDeDocumentacao">
        <button>
          <Link to="/documentacao/jsx">
            <img src="./jsx.png" alt="jsx" />
            <h3>JSX</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/css">
            <img src="./css.png" alt="css" />
            <h3>CSS</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/javascript">
            <img src="./javascript.png" alt="javascript" />
            <h3>Javascript</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/react">
            <img src="./react.png" alt="react" />
            <h3>React</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/php">
            <img src="./php.png" alt="php" />
            <h3>PHP</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/python">
            <img src="./python.png" alt="python" />
            <h3>Python</h3>
          </Link>
        </button>
      </div>
    </section>
  );
}

function ReactDoc() {
  return (
    <section className="ReactDoc">
      <h1>React</h1>
      <p>
        React é uma biblioteca JavaScript de código aberto com foco em criar
        interfaces de usuário em páginas web. É mantida pelo Facebook, Instagram
        e uma comunidade de desenvolvedores individuais e corporativos. É usada
        no Facebook para produzir interfaces de usuário, e Instagram foi o
        primeiro aplicativo móvel a usar React Native.
      </p>
    </section>
  );
}
