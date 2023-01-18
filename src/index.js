import React, { useRef, useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import textos from "./components/textos.js";

// CSS
import "./reset.scss";
import "./navegacao.scss";
import "./fonts.scss";
import "./conteudoInicial.scss";
import "./documentacao.scss";
import "./doc.scss";
import "./secao.scss";
import "./navegacaoDeIndice.scss";

//Imagens
import logoimg from "./img/logo.png";
import fotoimg from "./img/foto.jpg";
import reactimg from "./img/react.png";
import cssimg from "./img/css.png";
import javascriptimg from "./img/javascript.png";
import jsximg from "./img/jsx.png";
import phpimg from "./img/php.png";
import pythonimg from "./img/python.png";

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
      <Route path="/documentacao/jsx" exact element={<Doc />} />
      <Route path="/documentacao/css" exact element={<Doc />} />
      <Route path="/documentacao/javascript" exact element={<Doc />} />
      <Route
        path="/documentacao/react"
        exact
        element={
          <Doc
            img={reactimg}
            titulo={textos.React.titulo}
            introducao={textos.React.introducao}
          />
        }
      />
      <Route path="/documentacao/php" exact element={<Doc />} />
      <Route path="/documentacao/python" exact element={<Doc />} />

      {/* Subrotas das doc's */}
      {/* React */}
      <Route
        path="/documentacao/react/estrutura"
        exact
        element={
          <React.Fragment>
            <Doc
              img={reactimg}
              titulo={textos.React.titulo}
              introducao={textos.React.introducao}
            />
            <Secao
              titulo="estrutura"
              li1="node_modules: é onde ficam as dependências do projeto"
              li2="public: é onde o index.html fica"
              li3="src: é onde fica o código do projeto"
            />
          </React.Fragment>
        }
      />

      <Route
        path="/documentacao/react/regras"
        exact
        element={
          <React.Fragment>
            <Doc
              img={reactimg}
              titulo={textos.React.titulo}
              introducao={textos.React.introducao}
            />
            <Secao
              titulo="regras"
              li1="para o react entender que é um componente, a função deve ter nome maiúsculo e retornar um JSX"
              li2="no react é obrigatório fechar a tag"
              codigo2={
                <BlocoDeCodigo codigo="&lt;h1&gt;Hello World!&lt;/h1&gt;" />
              }
              l2b="mas normalmente vemos a tag de fechamento omitida"
              codigo2b={<BlocoDeCodigo codigo="&lt;h1/&gt;" />}
              li3="isso incui tudo que no html não era fechado, como as tags img,
              input, br e etc. No React, TUDO, literalmente tudo tem que ser
              fechado."
              li4="JSX sempre deve retornar apenas um elemento, então se for mais de um elemento deve estar encapsulado em apenas um. Se não quiser que este elemento apareça no html, pode usar um react fragment"
              li5="Para usar javascript dentro do JSX, usa-se chaves"
              codigo5={<BlocoDeCodigo codigo="&lt;h1&gt;{1 + 1}&lt;/h1&gt;" />}
              li6="Para usar eventos no JSX, usa-se o camelCase"
              codigo6={
                <BlocoDeCodigo codigo="&lt;button onClick={funcao}&gt;Clique&lt;/button&gt;" />
              }
              li7="Para usar atributos (classes para CSS) no JSX, usa-se o camelCase e nome não é class, mas className"
              codigo7={
                <BlocoDeCodigo codigo="&lt;button className='botao'&gt;Clique&lt;/button&gt;" />
              }
            />
          </React.Fragment>
        }
      />

      <Route
        path="/documentacao/react/iniciando"
        exact
        element={
          <React.Fragment>
            <Doc
              img={reactimg}
              titulo={textos.React.titulo}
              introducao={textos.React.introducao}
            />
            <Secao
              titulo="iniciando"
              li1="escolha o diretório pelo terminal e use o comando"
              codigo1={
                <BlocoDeCodigo codigo="npx create-react-app nomedoprojeto" />
              }
              li2="mude para a pasta do projeto após a criação e use o comando"
              codigo2={<BlocoDeCodigo codigo="code ." />}
              li2b="para abrir o projeto no VSCode, em seguida use este comando para iniciar o server"
              codigo2b={<BlocoDeCodigo codigo="npm start" />}
              li3="exclua de dentro da pasta src: app.css, app.js, app.test.js, index.css, logo.svg, reportWebVitals.js e setupTests.js, deixando apenas o index.js"
              li4="no index.js, apague o import do 'index.css', o import App from './App' e o import reportWebVitals from './reportWebVitals', exclua também o componente <App /> e o reportWebVitals(), a partir daqui é possível criar o projeto do zero, criando seu componente dentro de <React.StrictMode>"
            />
          </React.Fragment>
        }
      />

      <Route
        path="/documentacao/react/componentes"
        exact
        element={
          <React.Fragment>
            <Doc
              img={reactimg}
              titulo={textos.React.titulo}
              introducao={textos.React.introducao}
            />
            <Secao
              titulo="componentes"
              li1="É possível definir variáveis fora e dentro do componente, mas se for definida dentro, só pode ser usada ali, e se for definida fora, pode ser usada em qualquer lugar do componente. Variáveis definidas fora do componente são globais, e variáveis definidas dentro do componente são locais."
              codigo1={
                <BlocoDeCodigo
                  codigo={`const nomeUm = 'João'; // variável global

                function App(){
                  const nome = 'Maria'; // variável local do componente
                  return(
                    <div>
                    <h1>Hello {nome}</h1> // vai sair HELLO MARIA
                    <h1>Hello {nomeUm}</h1> // vai sair HELLO JOAO
                    </div>
                )}`}
                />
              }
              li1b="Sempre é preciso retornar um valor, não é possível retornar uma definição de variável por exemplo. Se for preciso retornar uma variável, é preciso retornar o valor dela."
            />
          </React.Fragment>
        }
      />
    </Routes>
  </BrowserRouter>
);

// VOU CRIAR TUDO AQUI E DEPOIS SEPARAR COMO COMPONENTES
function Navegacao() {
  return (
    <React.Fragment>
      <nav className="NavegacaoPrincipal">
        <img src={logoimg} alt="logo" />
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

      <img src={fotoimg} alt="Foto do samuel" />
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
            <img src={jsximg} alt="jsx" />
            <h3>JSX</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/css">
            <img src={cssimg} alt="css" />
            <h3>CSS</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/javascript">
            <img src={javascriptimg} alt="javascript" />
            <h3>Javascript</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/react">
            <img src={reactimg} alt="react" />
            <h3>React</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/php">
            <img src={phpimg} alt="php" />
            <h3>PHP</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/python">
            <img src={pythonimg} alt="python" />
            <h3>Python</h3>
          </Link>
        </button>
      </div>
    </section>
  );
}

function Doc(props) {
  return (
    <section className="Doc">
      <NavegacaoDeIndice />
      <div className="DocFlexbox">
        <img className="Doclogo" src={props.img} alt="react" />
        <h1 className="DocTitulo">{props.titulo}</h1>
      </div>
      <p className="DocIntroducao">{props.introducao}</p>
    </section>
  );
}

function Secao(props) {
  const containerRef = useRef();

  useLayoutEffect(() => {
    const container = containerRef.current;
    const li = container.querySelectorAll("li");
    console.log(li.length);

    for (let i = 0; i < li.length; i++) {
      console.log(li[i].innerText);
      if (li[i].innerText === "") {
        li[i].style.display = "none";
      }
    }
  });

  return (
    <section className="Secao">
      <h2 className="TituloDaSecao">{props.titulo}</h2>
      <ul ref={containerRef} className="Uldoc">
        <li>
          {props.li1}
          {props.codigo1}
          {props.li1b}
          {props.codigo1b}
        </li>
        <li>
          {props.li2}
          {props.codigo2}
          {props.li2b}
          {props.codigo2b}
        </li>
        <li>
          {props.li3}
          {props.codigo3}
        </li>
        <li>
          {props.li4}
          {props.codigo4}
        </li>
        <li>
          {props.li5}
          {props.codigo5}
        </li>
        <li>
          {props.li6}
          {props.codigo6}
        </li>
        <li>
          {props.li7}
          {props.codigo7}
        </li>
        <li>
          {props.li8}
          {props.codigo8}
        </li>
        <li>
          {props.li9}
          {props.codigo9}
        </li>
        <li>
          {props.li10}
          {props.codigo10}
        </li>
      </ul>
    </section>
  );
}

function NavegacaoDeIndice(props) {
  return (
    <nav className="NavegacaoDeIndice">
      <button>
        <Link to="/documentacao/react/estrutura">Estrutura</Link>
      </button>
      <button>
        <Link to="/documentacao/react/regras">Regras</Link>
      </button>
      <button>
        <Link to="/documentacao/react/iniciando">Iniciando</Link>
      </button>
      <button>
        <Link to="/documentacao/react/componentes">Componentes</Link>
      </button>
      <button>Props</button>
      <button>CSS</button>
      <button></button>
      <button></button>
    </nav>
  );
}

function BlocoDeCodigo(props) {
  return (
    <pre className="BlocoDeCodigo">
      <code>{props.codigo}</code>
    </pre>
  );
}
