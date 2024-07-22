// import React, { useRef, useLayoutEffect } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import textos from "./components/textos.js";
// import { useState } from "react";

// // CSS
// import "./reset.scss";
// import "./fonts.scss";
// import "./components/Navegacao/navegacao.scss";
// import "./components/ConteudoInicial/conteudoInicial.scss";
// import "./components/Documentacao/documentacao.scss";
// import "./components/NavegacaoDeIndice/navegacaoDeIndice.scss";
// import "./components/Documentacao/Introdoc/IntroDoc.scss";
// import "./components/Documentacao/Secao/secao.scss";
// import "./components/Documentacao/BlocoDeCodigo/BlocoDeCodigo.scss";
// import "./components/Ferramentas/Introducao/introducao.scss";
// import "./components/Ferramentas/BloquinhoImgTexto/BloquinhoImgTexto.scss";
// import "./components/Navegacao/Hamburguer/hamburguer.scss";
// import "./components/Certificados/Curso/curso.scss";
// import "./components/Certificados/certificado.scss";

// //Imagens
// import logoimg from "./img/logo.png";
// import fotoimg from "./img/foto.jpg";
// import reactimg from "./img/react.png";
// import cssimg from "./img/css.png";
// import javascriptimg from "./img/javascript.png";
// import jsximg from "./img/jsx.png";
// import phpimg from "./img/php.png";
// import pythonimg from "./img/python.png";
// import GoogleFonts from "./img/googlefonts.png";
// import Icons8 from "./img/icons8.png";
// import RealFavicon from "./img/realfavicon.png";
// import Netlify from "./img/netlify.png";
// import AdobeColor from "./img/adobecolor.png";
// import clippath from "./img/clippath.png";
// import event from "./img/event.png";
// import dommanipulation from "./img/dommanipulation.png";
// import keyboardIcon from "./img/keyboardIcon.png";
// import manualIcon from "./img/manualIcon.png";
// import OpenColor from "./img/opencolor.png";
// import colorhunt from "./img/colorhunt.png";
// import lolcolors from "./img/lolcolors.png";
// import uigradients from "./img/uigradients.png";
// import tintandshade from "./img/tintandshade.png";
// import image1 from "./img/image1.png";
// import image2 from "./img/image2.png";
// import image3 from "./img/image3.png";
// import image4 from "./img/image4.png";
// import icon1 from "./img/icon1.png";
// import icon2 from "./img/icon2.png";
// import icon3 from "./img/icon3.png";
// import squoosh from "./img/squoosh.png";
// import htmlvalidator from "./img/htmlvalidator.png";
// import cssvalidator from "./img/cssvalidator.png";
// import checklistfront from "./img/checklistfront.png";
// import woorank from "./img/woorank.png";
// import g4 from "./img/g4.png";
// import hover from "./img/hover.png";
// import esquerda from "./img/esquerda.png";
// import direita from "./img/direita.png";
// import shadow from "./img/shadow.png";
// import components from "./img/components.png";
// import construcao from "./img/construcao.png";
// import testecurso from "./img/testecurso.jpeg";
// import copiarIMG from "./img/clipboardIMG.png";
// import copiarIMGcheck from "./img/clipboardIMGcheck.png";
// import crashCurso from "./img/cursos/crash.jpg";
// import phpCurso from "./img/cursos/php.jpg";
// import javascriptCurso from "./img/cursos/javascript.jpg";
// import advancedcss from "./img/cursos/advancedcss.jpg";
// import gitCurso from "./img/cursos/git.jpg";
// import angularCurso from "./img/cursos/angular.jpg";
// import nodeCurso from "./img/cursos/node.jpg";
// import logicaUmCurso from "./img/cursos/logicaUm.jpg";
// import logicaDoisCurso from "./img/cursos/logicaDois.jpg";
// import timer from "./img/timer.png";
// import timer2 from "./img/timer2.png";
// import arquiteturaCurso from "./img/cursos/arquitetura.jpg";
// import linuxUm from "./img/cursos/linuxUm.jpg";
// import htmlCurso from "./img/cursos/html.jpg";
// import jsweb from "./img/cursos/jsweb.jpg";
// import gitgithub from "./img/cursos/gitgithub.jpg";
// import arqcss from "./img/cursos/arqcss.jpg";
// import jsarr from "./img/cursos/jsarr.jpg";
// import jsobj from "./img/cursos/jsobj.jpg";
// import jstype from "./img/cursos/jstype.jpg";
// import layoutR from "./img/cursos/layoutR.jpg";
// import Pyinicio from "./img/cursos/Pyinicio.jpg";
// import sasssint from "./img/cursos/sasssint.jpg";



//   // CONTROLE DE ROTAS - AQUI É ONDE AS ROTAS PRINCIPAIS SÃO CONTROLADAS
//   <BrowserRouter>
//     <Navegacao />
//     <Routes>
//       {/* Rotas da barra de navegação */}
//       <Route path="/" exact element={<ConteudoInicial />} />
//       <Route path="/documentacao" exact element={<Documentacao />} />
//       <Route path="/ferramentas" exact element={<Ferramentas />} />
//       <Route path="/certificados" exact element={<Certificados />} />
//       <Route path="/portfolio" exact element={<Construcao />} />
//       <Route path="/roadmap" exact element={<Construcao />} />
//       <Route path="/contato" exact element={<Construcao />} />
//       {/* Subrotas da documentação */}
//       <Route path="/documentacao/jsx" exact element={<Construcao />} />
//       <Route path="/documentacao/css" exact element={<Construcao />} />
//       <Route path="/documentacao/javascript" exact element={<Construcao />} />
//       <Route path="/documentacao/react" exact element={<DocReact />} />
//       <Route path="/documentacao/php" exact element={<Construcao />} />
//       <Route path="/documentacao/python" exact element={<DocPython />} />
//       {/* Subrotas da certificados */}
//       <Route
//         path="/certificados/htmlandcss"
//         exact
//         element={<Certificadohorizontal />}
//       />
//     </Routes>
//   </BrowserRouter>
// );

// // PRETENDO SEPARAR ISSO EM OUTROS ARQUIVOS, MAS POR AGORA PARA MELHOR APRENDIZADO ESTÁ AQUI, ESTA EM ORDEM:
// function Navegacao() {
//   // COMPONENTE RESPONSÁVEL PELA NAVEGAÇÃO PRINCIPAL
//   const [hambestado, setHambestado] = useState(false);
//   const [alturaMenu, setAlturaMenu] = useState(0);
//   const [mostrar, setMostrar] = useState("0rem");
//   return (
//     <React.Fragment>
//       <nav className="NavegacaoPrincipal">
//         <img src={logoimg} alt="logo" />
//         <h1>
//           <Link to="/">Registro</Link>
//         </h1>
//         <div
//           className={`hamburguer btn ${hambestado}`}
//           onClick={() => {
//             setHambestado(!hambestado);
//             if (hambestado === true) {
//               setAlturaMenu("0");
//               setMostrar("0rem");
//             } else {
//               setAlturaMenu("40");
//               setTimeout(() => {
//                 setMostrar("2rem");
//               }, 200);
//             }
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//         <div className="flexDeNavegacao">
//           <button>
//             <Link to="/documentacao">Documentação</Link>
//           </button>
//           <button>
//             <Link to="/ferramentas">Ferramentas</Link>
//           </button>
//           <button>
//             <Link to="/certificados">Cursos</Link>
//           </button>
//           <button>
//             <Link to="/portfolio">Portfólio</Link>
//           </button>
//           <button>
//             <Link to="/roadmap">Roadmap</Link>
//           </button>
//           <button>
//             <Link to="/contato">Contato</Link>
//           </button>
//         </div>
//       </nav>
//       <div className="caixaMenu" style={{ height: `${alturaMenu}rem` }}>
//         <Link
//           to="/documentacao"
//           onClick={() => {
//             setHambestado(!hambestado);
//             setAlturaMenu("0");
//             setMostrar("0rem");
//           }}
//         >
//           <button style={{ fontSize: mostrar }}>Documentação</button>
//         </Link>

//         <Link
//           to="/ferramentas"
//           onClick={() => {
//             setHambestado(!hambestado);
//             setAlturaMenu("0");
//             setMostrar("0rem");
//           }}
//         >
//           <button style={{ fontSize: mostrar }}>Ferramentas </button>
//         </Link>

//         <Link
//           to="/certificados"
//           onClick={() => {
//             setHambestado(!hambestado);
//             setAlturaMenu("0");
//             setMostrar("0rem");
//           }}
//         >
//           <button style={{ fontSize: mostrar }}>Certificados </button>
//         </Link>

//         <Link
//           to="/portfolio"
//           onClick={() => {
//             setHambestado(!hambestado);
//             setAlturaMenu("0");
//             setMostrar("0rem");
//           }}
//         >
//           <button style={{ fontSize: mostrar }}>Portfólio </button>
//         </Link>

//         <Link
//           to="/roadmap"
//           onClick={() => {
//             setHambestado(!hambestado);
//             setAlturaMenu("0");
//             setMostrar("0rem");
//           }}
//         >
//           <button style={{ fontSize: mostrar }}>Roadmap </button>
//         </Link>

//         <Link
//           to="/contato"
//           onClick={() => {
//             setHambestado(!hambestado);
//             setAlturaMenu("0");
//             setMostrar("0rem");
//           }}
//         >
//           <button style={{ fontSize: mostrar }}>Contato</button>
//         </Link>
//       </div>
//     </React.Fragment>
//   );
// }

// function ConteudoInicial() {
//   // COMPONENTE RESPONSÁVEL PELA PRIMEIRA PÁGINA DO SITE
//   return (
//     <div className="conteudoInicial">
//       <h1>Como era mesmo aquela sintaxe?</h1>
//       <p>
//         Quem nunca sentiu a necessidade de ter registrado algo que aprendeu? Ou
//         de ter guardado uma ferramenta que usou e gostou? A verdade é que eu
//         sempre tive essa necessidade, mas cadernos e anotações sempre foram
//         muito bagunçados para mim e difíceis de consultar em qualquer lugar.
//         <br />
//         <br />
//         Por isso decidi registrar tudo isso em um site que eu possa acessar de
//         onde eu estiver e possa organizar de uma forma que eu possa consultar
//         com facilidade. Bem vindo ao meu site de registro!
//       </p>

//       <img src={fotoimg} alt="Foto do samuel" />
//     </div>
//   );
// }

// function Documentacao() {
//   // COMPONENTE RESPONSÁVEL PELA ABA DOCUMENTAÇÃO
//   return (
//     <section className="Documentacao">
//       <h1>Escolha qual tecnologia você quer acessar</h1>
//       <div className="flexIconesDeDocumentacao">
//         <button>
//           <Link to="/documentacao/jsx">
//             <img src={jsximg} alt="jsx" />
//             <h3>JSX</h3>
//           </Link>
//         </button>
//         <button>
//           <Link to="/documentacao/css">
//             <img src={cssimg} alt="css" />
//             <h3>CSS</h3>
//           </Link>
//         </button>
//         <button>
//           <Link to="/documentacao/javascript">
//             <img src={javascriptimg} alt="javascript" />
//             <h3>Javascript</h3>
//           </Link>
//         </button>
//         <button>
//           <Link to="/documentacao/react">
//             <img src={reactimg} alt="react" />
//             <h3>React</h3>
//           </Link>
//         </button>
//         <button>
//           <Link to="/documentacao/php">
//             <img src={phpimg} alt="php" />
//             <h3>PHP</h3>
//           </Link>
//         </button>
//         <button>
//           <Link to="/documentacao/python">
//             <img src={pythonimg} alt="python" />
//             <h3>Python</h3>
//           </Link>
//         </button>
//       </div>
//     </section>
//   );
// }

// function DocReact() {
//   // COMPONENTE RESPONSÁVEL PELA ABA DOCUMENTAÇÃO > REACT
//   return (
//     <NavegacaoDeIndice
//       default="react"
//       nome1="introdução"
//       rota1="/documentacao/react"
//       nome2="estrutura"
//       rota2="/documentacao/react/estrutura"
//       nome3="regras"
//       rota3="/documentacao/react/regras"
//       nome4="iniciando"
//       rota4="/documentacao/react/iniciando"
//       nome5="componentes"
//       rota5="/documentacao/react/componentes"
//       nome6="props"
//       rota6="/documentacao/react/props"
//       nome7="css"
//       rota7="/documentacao/react/css"
//       nome8="routes"
//       rota8="/documentacao/react/routes"
//     />
//   );
// }

// // COMPONENTES DE CONTEÚDO DA ABA DOCUMENTACAO > REACT

// function ReactIntroducao() {
//   return (
//     <Introdoc
//       img={reactimg}
//       titulo={textos.React.titulo}
//       introducao={textos.React.introducao}
//     />
//   );
// }

// function ReactEstrutura() {
//   return (
//     <Secao
//       titulo="estrutura"
//       li1="node_modules: é onde ficam as dependências do projeto"
//       li2="public: é onde o index.html fica"
//       li3="src: é onde fica o código do projeto"
//     />
//   );
// }

// function ReactRegras() {
//   return (
//     <Secao
//       titulo="regras"
//       li1="para o react entender o que é um componente, a função deve ter nome maiúsculo e retornar um JSX. Exemplo:"
//       codigo1={<BlocoDeCodigo codigo={`<App></App>`} />}
//       li2="no react é obrigatório fechar a tag"
//       codigo2={<BlocoDeCodigo codigo="&lt;h1&gt;Hello World!&lt;/h1&gt;" />}
//       li2b="mas normalmente vemos a tag de fechamento omitida"
//       codigo2b={<BlocoDeCodigo codigo="&lt;h1/&gt;" />}
//       li2c="a regra se aplica para tudo que no html não era fechado, como as tags img, input, br e etc. No React, TUDO, literalmente tudo tem que ser fechado."
//       li3="JSX sempre deve retornar apenas um elemento, então se for mais de um elemento deve estar encapsulado em apenas um. Se não quiser que este elemento apareça no html, pode usar um react fragment"
//       codigo3={
//         <BlocoDeCodigo
//           codigo={`<section>
//   <h1>Titulo</h1>
//   <p>Neste exemplo o que envolve tudo é uma section</p>
// </section>`}
//         />
//       }
//       li5="Para usar javascript dentro do JSX, usa-se chaves"
//       codigo5={<BlocoDeCodigo codigo="&lt;h1&gt;{1 + 1}&lt;/h1&gt;" />}
//       li6="Para usar eventos no JSX, usa-se o camelCase e se não quiser que ele seja executado assim que a página é renderizada, é necessário usar uma callback function"
//       codigo6={
//         <BlocoDeCodigo
//           codigo={`<button onClick={
// ()=>{alert("voce me clicou")}>
//   Clique
// </button>}`}
//         />
//       }
//       li7="Para usar atributos (classes para CSS) no JSX, usa-se o camelCase e nome não é class, mas className"
//       codigo7={
//         <BlocoDeCodigo codigo="&lt;button className='botao'&gt;Clique&lt;/button&gt;" />
//       }
//     />
//   );
// }

// function ReactIniciando() {
//   return (
//     <Secao
//       titulo="iniciando"
//       li1="escolha o diretório pelo terminal e use o comando"
//       codigo1={<BlocoDeCodigo codigo="npx create-react-app nomedoprojeto" />}
//       li2="mude para a pasta do projeto após a criação e use code . para abrir o projeto no VSCode, assim:"
//       codigo2={<BlocoDeCodigo codigo="code ." />}
//       li3="em seguida use este comando para iniciar o server"
//       codigo3={<BlocoDeCodigo codigo="npm start" />}
//       li4="exclua de dentro da pasta src: app.css, app.js, app.test.js, index.css, logo.svg, reportWebVitals.js e setupTests.js, deixando apenas o index.js"
//       li5="no index.js, apague o import do 'index.css', o import App from './App' e o import reportWebVitals from './reportWebVitals', exclua também o componente <App /> e o reportWebVitals(), a partir daqui é possível criar o projeto do zero, criando seu componente dentro de <React.StrictMode>"
//     />
//   );
// }

// function ReactComponentes() {
//   return (
//     <Secao
//       titulo="componentes"
//       li1="É possível definir variáveis fora e dentro do componente, mas se for definida dentro, só pode ser usada ali, e se for definida fora, pode ser usada em qualquer lugar do componente. Variáveis definidas fora do componente são globais, e variáveis definidas dentro do componente são locais."
//       codigo1={
//         <BlocoDeCodigo
//           codigo={`const nomeUm = "João";

// function App() {
//   const nomeDois = "Maria";
//   return (
//     <div>
//       <h1>Hello {nomeUm}</h1>
//       <h1>Hello {nomeDois}</h1>
//     </div>
//   );
// }`}
//         />
//       }
//       li1b="Neste exemplo, nomeUm é uma variável global e nomeDois uma variável local. Lembrando que sempre é preciso retornar um valor, não é possível retornar uma definição de variável por exemplo. Se for preciso retornar uma variável, é preciso retornar o valor dela."
//     />
//   );
// }

// function ReactProps() {
//   return (
//     <Secao
//       titulo="props"
//       li1="props é passado como parâmetro da função do componente, e é um objeto. Portanto, quando você usa a contação de . você está criando uma chave que receberá um valor:"
//       codigo1={
//         <BlocoDeCodigo
//           codigo={`<App nome="Maria" />

// function App(props){
//   return(
//     <div>
//       <h1>Hello {props.nome}</h1>
//     </div>
//   );
// }`}
//         />
//       }
//       li1b="Neste exemplo a saída será: Hello Maria. Para ficar mais fácil a vizualização você pode vizualizar assim:"
//       codigo1b={
//         <BlocoDeCodigo
//           codigo="{
//         nome: Maria
//       }"
//         />
//       }
//       li2="Além da props, existe a props.children. A props.children é tudo que renderiza entre a abertura e fechamento do componente, não são as propriedades, mas o que realmente vem dentro do componente. Exemplo:"
//       codigo2={<BlocoDeCodigo codigo={`<App>Samuel</App>`} />}
//     />
//   );
// }

// function ReactCss() {
//   return (
//     <Secao
//       titulo="css"
//       li1="Para entrar no javascript precisamos usar {} no JSX, então, quando se trata de passar propriedades em javascript para um css inline, visto que é um objeto do javascript também precisamos das chaves do objeto {}, então fica {{}}, como no exemplo a seguir:"
//       codigo1={<BlocoDeCodigo codigo={`style={{color: 'red'}};`} />}
//       li1b="Já o background-color não funciona com este nome, pois é uma propriedade do css, e não do js. Então, para usar o background-color inline, precisamos usar o camelCase, backgroundColor como chave, e a cor como valor já que é um objeto. Exemplo:"
//       codigo1b={<BlocoDeCodigo codigo={`style={{backgroundColor = 'red'}};`} />}
//       li2="É importante ressaltar também que inline é mais forte que o css externo, então, se tivermos um background-color no css externo, e um backgroundColor no inline css, o inline vai prevalecer. Usando livrarias externas é normal vir inline no código, então é importante reforçar isso."
//     />
//   );
// }

// function ReactRoutes() {
//   return (
//     <Secao
//       titulo="routes"
//       li1="Para controlar rotas de maneira simples no react usamos conferências de statements e useState. Se a variável é true, renderiza o componente, se não, não renderiza. Exemplo:"
//       codigo1={
//         <BlocoDeCodigo
//           codigo={`const[Inicial, setInicial] = useState(true);

// {Inicial ? <ConteudoInicial /> : null}`}
//         />
//       }
//       li1b="se inicial for true renderiza o componente <ConteudoInicial/> se não, não renderiza nada. E podemos setar o valor da variável com um botão, por exemplo:"
//       codigo1b={
//         <BlocoDeCodigo
//           codigo={`<button Onclick={()=>{setInicial(!Inicial)}}>Mostrar/Ocultar</button>`}
//         />
//       }
//       li2="Porém, no longo prazo isso pode ficar muito verboso, então, para facilitar, usamos a biblioteca react-router-dom. Ela é uma biblioteca que facilita a criação de rotas no react. Para instalar, basta rodar o comando:"
//       codigo2={<BlocoDeCodigo codigo={`npm install react-router-dom`} />}
//       li2b="Para usar, basta importar o BrowserRouter, Routes e Route do react-router-dom:"
//       codigo2b={
//         <BlocoDeCodigo
//           codigo={`import { BrowserRouter, Routes, Route } from 'react-router-dom';`}
//         />
//       }
//       li3="O BrowserRouter é o componente que envolve toda a aplicação,
//               e o Routes é o componente que envolve todas as rotas. E por último o Route é o componente que renderiza o componente que queremos. No Route é onde escolhemos o caminho com a propriedade path e qual componente será renderizado naquele caminho, com a propriedade element. Exemplo:"
//       codigo3={
//         <BlocoDeCodigo
//           codigo={`<BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/sobre" element={<Sobre />} />
//   </Routes>
// </BrowserRouter>`}
//         />
//       }
//       li4="O Route também pode receber uma propriedade chamada exact, que faz com que a rota só seja renderizada se o caminho for exatamente igual ao path. Exemplo:"
//       codigo4={
//         <BlocoDeCodigo codigo={`<Route path="/" exact element={<Home />} />`} />
//       }
//       li5="Para ir para essas rotas, basta usar o componente Link do react-router-dom. Exemplo:"
//       codigo5={
//         <BlocoDeCodigo codigo={`<button><Link to="/">Home</Link></button>`} />
//       }
//     />
//   );
// }

// function DocPython() {
//   return (
//     <NavegacaoDeIndice
//       default="python"
//       nome1="introdução"
//       rota1="/documentacao/python"
//       nome2="vs code"
//       rota2="/documentacao/python/vscode"
//       nome3="nomenclaturas"
//       rota3="/documentacao/python/nomenclaturas"
//       nome4="tipos de dados"
//       rota4="/documentacao/python/tiposdedados"
//       nome5="operadores"
//       rota5="/documentacao/python/operadores"
//       nome6="loops"
//       rota6="/documentacao/python/loops"
//       nome7="statement"
//       rota7="/documentacao/python/statement"
//       nome8="string interpolation"
//       rota8="/documentacao/python/stringinterpolation"
//       nome9="Boas práticas"
//       rota9="/documentacao/python/boaspraticas"
//       nome10="Funções"
//       rota10="/documentacao/python/funcoes"
//     />
//   );
// }

// // COMPONENTES DE CONTEÚDO DA ABA DOCUMENTACAO > PYTHON

// function PythonIntroducao() {
//   return (
//     <Introdoc
//       img={pythonimg}
//       titulo={textos.Python.titulo}
//       introducao={textos.Python.introducao}
//     />
//   );
// }

// function PythonVsCode() {
//   return (
//     <Secao
//       titulo="Extensões para VS code"
//       li1="Python - Auto complete, é possível através dele alterar o interpretador que está sendo usado, por exemplo python 2, 3 e etc. É possível deixar o mouse em cima de um objeto e ele já traz a documentação do objeto, além de outras funcionalidades."
//       li2='Python Preview - Representação visual do código, é possível ver o código em forma de árvore, por exemplo. De onde veio a variável, para onde ela vai, etc. Para usar é só clicar com o botão direito do mouse e selecionar "Python Preview: Show Python Preview to the Side" ou "Python Preview: Show Python Preview Below".'
//       li3='Autodocstring - Com isso é possível criar documentação para funções e trechos de código explicando como se usa e etc. Para usar é só clicar com o botão direito do mouse e selecionar "Autodocstring: Generate Docstring" ou "Autodocstring: Generate Docstring for Class", ou usar 3 aspas duplas e apertar enter.'
//       li4='Autopep8: Formata o código de acordo com o padrão pep8, para usar é só clicar com o botão direito do mouse e selecionar "Format Document" ou "Format Selection". Mas é possível configurar para usar sempre que salvar. Caso já possua um padrão para outras lingugagens que era o meu caso, a forma de conseguir isso é inserindo esse trecho de código no F1 > Preferences: Open Settings (JSON):'
//       codigo4={
//         <BlocoDeCodigo
//           codigo='"[python]": {
//         "editor.defaultFormatter": "ms-python.python"
//       }'
//         />
//       }
//     />
//   );
// }

// function PythonNomenclatura() {
//   return (
//     <Secao
//       titulo="Nomenclaturas"
//       li1="PIP - Instalador de pacotes do python (Python Installer Package)"
//     />
//   );
// }
// function PythonTiposDeDados() {
//   return (
//     <Secao
//       titulo="Tipos de Dados"
//       li1="Para criar variável no python é só digitar o nome da variável e depois o sinal de igual e o valor da variável, exemplo:"
//       codigo1={<BlocoDeCodigo codigo='nome = "João"' />}
//       li1b="A tipagem é dinâmica, ou seja, o tipo do dado já é definido automaticamente quando atribuimos um valor, não é preciso dizer se é uma string, um int ou um float, por exemplo. Para saber o tipo de dado de uma variável, basta usar a função type(), exemplo:"
//       codigo1b={<BlocoDeCodigo codigo="print(type(nome))" />}
//       li2="Dentre os tipos possíveis, temos, int para números inteiros:"
//       codigo2={<BlocoDeCodigo codigo="idade = 20" />}
//       li2b="Float para números flutuantes ou decimais:"
//       codigo2b={<BlocoDeCodigo codigo="altura = 1.80" />}
//       li2c="Strings para nomes:"
//       codigo2c={<BlocoDeCodigo codigo='nome = "João"' />}
//       li2d="Bool para booleanos, são valores que podem ser verdadeiro ou falso, exemplo:"
//       codigo2d={<BlocoDeCodigo codigo="ativo = True" />}
//       li2e="Listas para sequências, que são usadas com colchete, exemplo:"
//       codigo2e={<BlocoDeCodigo codigo="[1,2,3,4,5]" />}
//       li2f="esta é uma lista de números, porém elas não são as únicas sequências no python, as strings se encaixam como sequência e usam muitos dos métodos de listas, a tupla também, que é uma lista que não pode ser alterada, nela usamos parênteses:"
//       codigo2f={<BlocoDeCodigo codigo="(1,2,3,4,5)" />}
//       li2g="Lembrando que é possível converter de lista para tupla e vice-versa, para isso é só usar o tuple() e o list(), onde no parâmetro entra o que quer converter, exemplo:"
//       codigo2g={
//         <BlocoDeCodigo
//           codigo="variavel_lista = [1,2,3,4,5]
// tuple(variavel_lista)"
//         />
//       }
//     />
//   );
// }

// function PythonOperadores() {
//   return (
//     <Secao
//       titulo="Operadores"
//       li1="Operadores aritméticos - São operadores que fazem operações matemáticas, exemplo:"
//       codigo1={
//         <BlocoDeCodigo
//           codigo={`+ soma 
// - subtração
// * multiplicação 
// / divisão
// ** potenciação 
// // divisão inteira
// % resto da divisão`}
//         />
//       }
//       li2="Operadores de comparação - São operadores que fazem comparações, exemplo"
//       codigo2={
//         <BlocoDeCodigo
//           codigo={`== (igual a)
// != (diferente de)
// > (maior que)
// < (menor que)
// >= (maior ou igual a)
// <= (menor ou igual a)`}
//         />
//       }
//       li3="Operadores lógicos - São operadores que fazem comparações lógicas, exemplo:"
//       codigo3={
//         <BlocoDeCodigo
//           codigo={`and (e)
// or (ou)
// not (não)`}
//         />
//       }
//       li4="Operadores de atribuição - São operadores que atribuem valores, exemplo:"
//       codigo4={
//         <BlocoDeCodigo
//           codigo={`= (atribuição)
// += (soma e atribuição)
// -= (subtração e atribuição)
// *= (multiplicação e atribuição)
// /= (divisão e atribuição)
// **= (potenciação e atribuição)
// %= (resto da divisão e atribuição`}
//         />
//       }
//       li5="Operadores de identidade - São operadores que verificam se os valores são iguais, exemplo:"
//       codigo5={
//         <BlocoDeCodigo
//           codigo="is (igual a)
// is not (diferente de)"
//         />
//       }
//       li6="Operadores de associação - São operadores que verificam se um valor está contido em outro, exemplo:"
//       codigo6={
//         <BlocoDeCodigo
//           codigo="in (está contido)
// not in (não está contido)"
//         />
//       }
//     />
//   );
// }

// function PythonLoops() {
//   return (
//     <Secao
//       titulo="Loops"
//       li1="while - enquanto for verdadeiro, faça isso, exemplo:"
//       codigo1={
//         <BlocoDeCodigo
//           codigo={`while True:
//     print("Vai travar o computador de tanto repetir")`}
//         />
//       }
//       li2="for range in: - é possível definir um range com os 2 primeiros paramêtros e o número não chega ao segundo parâmetro. de 0 a 10 chegaria a 9. Ainda é possível definir um terceiro parâmetro que é o passo, se quiser de 2 em 2 por exemplo, é só colocar 2 no terceiro parâmetro"
//       codigo2={
//         <BlocoDeCodigo
//           codigo={`for i in range(0, 10, 2):
//     print(i)`}
//         />
//       }
//       li2b="a saída seria, 0, 2, 4, 6, 8"
//       li3="continue - pula para a próxima iteração, exemplo:"
//       codigo3={
//         <BlocoDeCodigo
//           codigo={`for i in range(0, 10):
//     if i == 5:
//         continue
//         print(i)`}
//         />
//       }
//       li3b="a saída seria, 0, 1, 2, 3, 4, 6, 7, 8, 9"
//       li4="break - para o loop, exemplo:"
//       codigo4={
//         <BlocoDeCodigo
//           codigo={`for i in range(0, 10):
//     if i == 5:
//         break
//         print(i)`}
//         />
//       }
//       li4b="a saída seria, 0, 1, 2, 3, 4"
//     />
//   );
// }

// function PythonStatement() {
//   return (
//     <Secao
//       titulo="Statement"
//       li1="
//   if - se for verdadeiro, faça isso, exemplo:"
//       codigo1={
//         <BlocoDeCodigo
//           codigo={`if True:
//     print('Vai imprimir isso')`}
//         />
//       }
//       li1b="a saída seria: 'Vai imprimir isso'. E não é preciso parênteses para o if"
//       li2="
//   elif - o mesmo que else if, se não for aquilo, mas for isso faça isso, exemplo:"
//       codigo2={
//         <BlocoDeCodigo
//           codigo={`if (0 > 10):
//     print('0 é maior que 10')
// elif (10 > 0):
//     print('10 é maior que 0')`}
//         />
//       }
//       li2b="a saída seria: '10 é maior que 0'"
//       li3=" else - se não for aquilo, faça isso, exemplo:"
//       codigo3={
//         <BlocoDeCodigo
//           codigo={`if (0 >10):
//     print('0 é maior que 10')
// else:
//     print('10 é maior que 0')`}
//         />
//       }
//       li3b="a saída seria: '10 é maior que 0'"
//     />
//   );
// }

// function PythonInterpolation() {
//   return (
//     <Secao
//       titulo="String Interpolation"
//       li1="
//   f-string - é uma forma de interpolar strings, exemplo:"
//       codigo1={
//         <BlocoDeCodigo
//           codigo="nome = 'João'
// idade = 20 
// print(f'Olá, meu nome é {nome} e tenho {idade} anos')"
//         />
//       }
//       li1b="a saída seria: 'Olá, meu nome é João e tenho 20 anos'"
//       li2="
//   format - é uma forma de interpolar strings, exemplo:"
//       codigo2={
//         <BlocoDeCodigo
//           codigo="nome = 'João'
// idade = 20
// print('Olá, meu nome é {} e tenho {} anos'.format(nome, idade))"
//         />
//       }
//       li2b="a saída seria: 'Olá, meu nome é João e tenho 20 anos'"
//       li3="é possível alterar a ordem dos parâmetros usando o número de índice, exemplo:"
//       codigo3={
//         <BlocoDeCodigo
//           codigo="nome = 'João'
// idade = 20 
// print('Olá, meu nome é {1} e tenho {0} anos'.format(nome, idade))"
//         />
//       }
//       li3b="a saída seria: 'Olá, meu nome é 20 e tenho João anos'"
//     />
//   );
// }

// function PythonBoasPraticas() {
//   return (
//     <Secao
//       titulo="Boas práticas"
//       li1="Nome de variáveis no python normalmente usam o padrão snake_case, ou seja, letras minúsculas e separadas por underline, exemplo:"
//       codigo1={<BlocoDeCodigo codigo="nome_completo, nome, peso_do_aluno." />}
//     />
//   );
// }

// function PythonFuncoes() {
//   return (
//     <Secao
//       li1="No python existem funções built in e módulos, as funções built in já vem com a linguagem e podem ser usadas normalmente, já os métodos devem ser importados. Exemplo de built in:"
//       codigo1={<BlocoDeCodigo codigo="input('Digite seu nome:')" />}
//       li1b="A função input já está no python e não precisa ser importada, ela retorna uma string com o que for preenchido nela quando o programa rodar. Já um módulo deve ser importado, exemplo:"
//       codigo1b={
//         <BlocoDeCodigo
//           codigo={`import random

// print(random.randrange(1, 11))`}
//         />
//       }
//       li1c="Já o método random gera números pseudo aleatórios e só funciona se for importado."
//     />
//   );
// }

// function Ferramentas() {
//   // COMPONENTE RESPONSÁVEL PELA ABA FERRAMENTAS

//   return (
//     <NavegacaoDeIndice
//       default="introdução"
//       nome1="introdução"
//       rota1="/ferramentas"
//       nome2="uso frequente"
//       rota2="/ferramentas/uso-frequente"
//       nome3="css"
//       rota3="/ferramentas/css"
//       nome4="javascript"
//       rota4="/ferramentas/javascript"
//       nome5="cores"
//       rota5="/ferramentas/cores"
//       nome6="imagens"
//       rota6="/ferramentas/imagens"
//       nome7="ícones"
//       rota7="/ferramentas/icones"
//       nome8="Testes e SEO"
//       rota8="/ferramentas/testes-e-seo"
//     />
//   );
// }

// function Introducao() {
//   // COMPONENTE RESPONSÁVEL PELA ABA FERRAMENTAS>INTRODUÇÃO
//   return (
//     <section className="IntroducaoFerramentas">
//       <p>
//         Bem vindo a minha lista pessoal de ferramentas para desenvolvimento web.
//         Aqui você vai encontrar uma lista de ferramentas que eu uso no meu dia a
//         dia, e que eu recomendo para quem desenvolve sites e aplicativos. A
//         lista como todo o site continuará em constante mudança, para navegar por
//         ela é só usar o menu acima.
//       </p>
//     </section>
//   );
// }

// function UsoFrequente() {
//   // COMPONENTE RESPONSÁVEL PELA ABA FERRAMENTAS>USO FREQUENTE

//   return (
//     <div className="ferramentasFlex">
//       <BloquinhoImgTexto
//         img={GoogleFonts}
//         alt="google fonts logo"
//         titulo="Google Fonts"
//         texto="A melhor fonte de fontes"
//         a="https://fonts.google.com/"
//       />
//       <BloquinhoImgTexto
//         img={Icons8}
//         alt="Icons8 logo"
//         titulo="Icons8"
//         texto="Meu acervo de ícones preferido"
//         a="https://icons8.com/"
//       />
//       <BloquinhoImgTexto
//         img={RealFavicon}
//         alt="RealFavicon logo"
//         titulo="Real favicon"
//         texto="Gerador de favicons"
//         a="https://realfavicongenerator.net/"
//       />
//       <BloquinhoImgTexto
//         img={Netlify}
//         alt="Netilify logo"
//         titulo="Netlify"
//         texto="Hospedagem de sites estáticos"
//         a="https://www.netlify.com/"
//       />
//       <BloquinhoImgTexto
//         img={AdobeColor}
//         alt="Adobe Color logo"
//         titulo="Adobe color"
//         texto="Extração de cores de imagens, paletas, etc"
//         a="https://color.adobe.com/pt/create/color-wheel"
//       />
//     </div>
//   );
// }

// function Css() {
//   // COMPONENTE RESPONSÁVEL PELA ABA FERRAMENTAS>CSS
//   return (
//     <div className="ferramentasFlex">
//       <BloquinhoImgTexto
//         img={clippath}
//         alt="ClipPath logo"
//         titulo="CP Maker"
//         texto="Gerador de clip-path"
//         a="https://bennettfeely.com/clippy/"
//       />
//       <BloquinhoImgTexto
//         img={shadow}
//         alt="Box shadow logo"
//         titulo="Box shadow generator"
//         texto="box-shadow com maior precisão"
//         a="https://www.cssmatic.com/box-shadow"
//       />
//       <BloquinhoImgTexto
//         img={components}
//         alt="Free front-end logo"
//         titulo="Free front-end"
//         texto="Diversos componentes de css"
//         a="https://freefrontend.com/"
//       />
//     </div>
//   );
// }

// function Javascript() {
//   // COMPONENTE RESPONSÁVEL PELA ABA FERRAMENTAS>JAVASCRIPT
//   return (
//     <div className="ferramentasFlex">
//       <BloquinhoImgTexto
//         img={event}
//         alt="event logo"
//         titulo="Lista de eventos"
//         texto="de acordo com o que procura"
//         a="https://developer.mozilla.org/en-US/docs/Web/Events"
//       />
//       <BloquinhoImgTexto
//         img={dommanipulation}
//         alt="dom manipulation logo"
//         titulo="Controle do DOM"
//         texto="todas as sintaxes de manipulação do DOM"
//         a="https://youmightnotneedjquery.com/"
//       />
//       <BloquinhoImgTexto
//         img={keyboardIcon}
//         alt="keyboard logo"
//         titulo="Teclas em JS"
//         texto="todas as teclas em código JS"
//         a="https://www.toptal.com/developers/keycode"
//       />
//       <BloquinhoImgTexto
//         img={manualIcon}
//         alt="manual logo"
//         titulo="Manual JS"
//         texto="boas práticas de JS em pt-br"
//         a="https://github.com/rwaldron/idiomatic.js/tree/master/translations/pt_BR"
//       />
//     </div>
//   );
// }

// function Cores() {
//   // COMPONENTE RESPONSÁVEL PELA ABA FERRAMENTAS>CORES
//   return (
//     <div className="ferramentasFlex">
//       <BloquinhoImgTexto
//         img={OpenColor}
//         alt="opencolor logo"
//         titulo="Open Color"
//         texto="boas tonalidades padrões"
//         a="https://yeun.github.io/open-color/"
//       />
//       <BloquinhoImgTexto
//         img={colorhunt}
//         alt="colorhunt logo"
//         titulo="Color hunt"
//         texto="Paletas prontas"
//         a="https://www.colorhunt.co/"
//       />
//       <BloquinhoImgTexto
//         img={lolcolors}
//         alt="lolcolors logo"
//         titulo="LOL Colors"
//         texto="meu site preferido em escolha de paletas"
//         a="https://www.webdesignrankings.com/resources/lolcolors/"
//       />
//       <BloquinhoImgTexto
//         img={uigradients}
//         alt="UI gradients logo"
//         titulo="UI Gradients"
//         texto="gradientes prontos"
//         a="https://uigradients.com/#SiriusTamed"
//       />
//       <BloquinhoImgTexto
//         img={tintandshade}
//         alt="Tint and Shade logo"
//         titulo="Tint and Shade"
//         texto="gerador de cores para sombras e efeitos"
//         a="https://maketintsandshades.com/"
//       />
//     </div>
//   );
// }

// function Imagens() {
//   // COMPONENTE RESPONSÁVEL PELA ABA FERRAMENTAS>IMAGENS
//   return (
//     <div className="ferramentasFlex">
//       <BloquinhoImgTexto
//         img={image1}
//         alt="unplash logo"
//         titulo="Unplash"
//         texto="1° Acervo de imagens gratuitas"
//         a="https://unsplash.com/pt-br"
//       />
//       <BloquinhoImgTexto
//         img={image2}
//         alt="Pexels logo"
//         titulo="Pexels"
//         texto="2° Acervo de imagens gratuitas"
//         a="https://www.pexels.com/pt-br/"
//       />
//       <BloquinhoImgTexto
//         img={image3}
//         alt="Pixabay logo"
//         titulo="Pixabay"
//         texto="3° Acervo de imagens gratuitas"
//         a="https://pixabay.com/pt/"
//       />
//       <BloquinhoImgTexto
//         img={image4}
//         alt="Freepik logo"
//         titulo="Freepik"
//         texto="4° Acervo de imagens gratuitas"
//         a="https://br.freepik.com/"
//       />
//     </div>
//   );
// }

// function Icones() {
//   // COMPONENTE RESPONSÁVEL PELA ABA FERRAMENTAS>ÍCONES
//   return (
//     <div className="ferramentasFlex">
//       <BloquinhoImgTexto
//         img={icon1}
//         alt="flaticon logo"
//         titulo="Flaticon"
//         texto="1° Acervo de ícones gratuitos"
//         a="https://www.flaticon.com/br/"
//       />
//       <BloquinhoImgTexto
//         img={icon2}
//         alt="iconfinder logo"
//         titulo="Iconfinder"
//         texto="2° Acervo de ícones gratuitos"
//         a="https://www.iconfinder.com/"
//       />
//       <BloquinhoImgTexto
//         img={icon3}
//         alt="iconscout logo"
//         titulo="Iconscout"
//         texto="3° Acervo de ícones gratuitos"
//         a="https://iconscout.com/"
//       />
//     </div>
//   );
// }

// function Testeseseo() {
//   return (
//     <div className="ferramentasFlex">
//       <BloquinhoImgTexto
//         img={squoosh}
//         alt="squoosh logo"
//         titulo="Squoosh"
//         texto="Compressor de imagens"
//         a="https://squoosh.app/"
//       />
//       <BloquinhoImgTexto
//         img={htmlvalidator}
//         alt="html validator logo"
//         titulo="HTML Validator"
//         texto="teste de validação do html"
//         a="https://validator.w3.org/"
//       />
//       <BloquinhoImgTexto
//         img={cssvalidator}
//         alt="css validator logo"
//         titulo="CSS Validator"
//         texto="teste de validação do css"
//         a="https://jigsaw.w3.org/css-validator/"
//       />
//       <BloquinhoImgTexto
//         img={checklistfront}
//         alt="checklistfront logo"
//         titulo="The Front-End"
//         texto="checklist de otimização do front"
//         a="https://frontendchecklist.io/"
//       />
//       <BloquinhoImgTexto
//         img={woorank}
//         alt="woorank logo"
//         titulo="Woorank"
//         texto="teste de SEO"
//         a="https://www.woorank.com/pt/"
//       />
//       <BloquinhoImgTexto
//         img={g4}
//         alt="g4 logo"
//         titulo="Google Analytics"
//         texto="Análise de conversões e visitas"
//         a="https://analytics.google.com/analytics/web/"
//       />
//       <BloquinhoImgTexto
//         img={hover}
//         alt="hover logo"
//         titulo="Hover"
//         texto="compra de domínios"
//         a="https://www.hover.com/"
//       />
//     </div>
//   );
// }
// // Componentes pequenos:

// function Introdoc(props) {
//   // COMPONENTE RESPONSÁVEL PELA INTRODUÇÃO DE PÁGINAS DOC, COMO JSX, CSS, JAVASCRIPT, PHP E PYTHON (RECEBE TEXTOS DE TEXTOS.JS)

//   return (
//     <section className="Doc">
//       <div className="DocFlexbox">
//         <img className="Doclogo" src={props.img} alt="react" />
//         <h1 className="DocTitulo">{props.titulo}</h1>
//       </div>
//       <p className="DocIntroducao">{props.introducao}</p>
//     </section>
//   );
// }

// function Secao(props) {
//   // COMPONENTE RESPONSÁVEL PELAS SEÇÕES DE DOCUMENTAÇÃO

//   const containerRef = useRef();

//   useLayoutEffect(() => {
//     // manipulação do DOM para esconder os itens vazios
//     const container = containerRef.current;
//     const li = container.querySelectorAll("li");

//     for (let i = 0; i < li.length; i++) {
//       if (li[i].innerText === "") {
//         li[i].style.display = "none";
//       }
//     }
//   });

//   return (
//     <section className="Secao">
//       <h2 className="TituloDaSecao">{props.titulo}</h2>
//       <ul ref={containerRef} className="Uldoc">
//         <li>
//           {props.li1}
//           {props.codigo1}
//           {props.li1b}
//           {props.codigo1b}
//           {props.li1c}
//           {props.codigo1c}
//         </li>
//         <li>
//           {props.li2}
//           {props.codigo2}
//           {props.li2b}
//           {props.codigo2b}
//           {props.li2c}
//           {props.codigo2c}
//           {props.li2d}
//           {props.codigo2d}
//           {props.li2e}
//           {props.codigo2e}
//           {props.li2f}
//           {props.codigo2f}
//           {props.li2g}
//           {props.codigo2g}
//         </li>
//         <li>
//           {props.li3}
//           {props.codigo3}
//           {props.li3b}
//           {props.codigo3b}
//         </li>
//         <li>
//           {props.li4}
//           {props.codigo4}
//           {props.li4b}
//           {props.codigo4b}
//         </li>
//         <li>
//           {props.li5}
//           {props.codigo5}
//         </li>
//         <li>
//           {props.li6}
//           {props.codigo6}
//         </li>
//         <li>
//           {props.li7}
//           {props.codigo7}
//         </li>
//         <li>
//           {props.li8}
//           {props.codigo8}
//         </li>
//         <li>
//           {props.li9}
//           {props.codigo9}
//         </li>
//         <li>
//           {props.li10}
//           {props.codigo10}
//         </li>
//       </ul>
//     </section>
//   );
// }

// function NavegacaoDeIndice(props) {
//   // COMPONENTE RESPONSÁVEL PELA SUBNAVEGAÇÃO DE ÍNDICES DE TODAS AS PÁGINAS

//   let tamanhoDoMenu = (Object.keys(props).length - 1) / 2;

//   const [rota, setRota] = useState(props.default);
//   const [slotNome1, setSlotNome1] = useState(props.nome1);
//   const [slotNome2, setSlotNome2] = useState(props.nome2);
//   const [slotNome3, setSlotNome3] = useState(props.nome3);
//   const [slotNome4, setSlotNome4] = useState(props.nome4);

//   const [slotRota1, setSlotRota1] = useState(props.rota1);
//   const [slotRota2, setSlotRota2] = useState(props.rota2);
//   const [slotRota3, setSlotRota3] = useState(props.rota3);
//   const [slotRota4, setSlotRota4] = useState(props.rota4);

//   const containerRef = useRef();
//   useLayoutEffect(() => {
//     const container = containerRef.current;
//     const botoes = container.querySelectorAll(".botaoSubMenu");

//     for (let i = 0; i < botoes.length; i++) {
//       if (botoes[i].innerText === "") {
//         botoes[i].style.display = "none";
//       } else {
//         botoes[i].style.display = "block";
//       }
//     }
//   });

//   return (
//     <>
//       <nav className="NavegacaoDeIndice" ref={containerRef}>
//         <button
//           onClick={() => {
//             console.log(tamanhoDoMenu);
//             if (slotNome1 === props.nome1) {
//               let categoria = tamanhoDoMenu / 4;
//               if (categoria > 2 && categoria <= 3) {
//                 setSlotNome1(props.nome9);
//                 setSlotNome2(props.nome10);
//                 setSlotNome3(props.nome11);
//                 setSlotNome4(props.nome12);

//                 setSlotRota1(props.rota9);
//                 setSlotRota2(props.rota10);
//                 setSlotRota3(props.rota11);
//                 setSlotRota4(props.rota12);
//               } else if (categoria > 1 && categoria <= 2) {
//                 setSlotNome1(props.nome5);
//                 setSlotNome2(props.nome6);
//                 setSlotNome3(props.nome7);
//                 setSlotNome4(props.nome8);

//                 setSlotRota1(props.rota5);
//                 setSlotRota2(props.rota6);
//                 setSlotRota3(props.rota7);
//                 setSlotRota4(props.rota8);
//               } else if (categoria <= 1) {
//                 setSlotNome1(props.nome1);
//                 setSlotNome2(props.nome2);
//                 setSlotNome3(props.nome3);
//                 setSlotNome4(props.nome4);

//                 setSlotRota1(props.rota1);
//                 setSlotRota2(props.rota2);
//                 setSlotRota3(props.rota3);
//                 setSlotRota4(props.rota4);
//               }
//             } else if (slotNome1 === props.nome5) {
//               // 2 fileira voltando
//               setSlotNome1(props.nome1);
//               setSlotNome2(props.nome2);
//               setSlotNome3(props.nome3);
//               setSlotNome4(props.nome4);

//               setSlotRota1(props.rota1);
//               setSlotRota2(props.rota2);
//               setSlotRota3(props.rota3);
//               setSlotRota4(props.rota4);
//             } else if (slotNome1 === props.nome9) {
//               // 3 fileira voltando
//               setSlotNome1(props.nome5);
//               setSlotNome2(props.nome6);
//               setSlotNome3(props.nome7);
//               setSlotNome4(props.nome8);

//               setSlotRota1(props.rota5);
//               setSlotRota2(props.rota6);
//               setSlotRota3(props.rota7);
//               setSlotRota4(props.rota8);
//             }
//           }}
//         >
//           <img src={esquerda} alt="seta esquerda" />
//         </button>
//         <button
//           className="botaoSubMenu"
//           onClick={() => {
//             setRota(slotRota1);
//           }}
//         >
//           {slotNome1}
//         </button>
//         <button
//           className="botaoSubMenu"
//           onClick={() => {
//             setRota(slotRota2);
//           }}
//         >
//           {slotNome2}
//         </button>
//         <button
//           className="botaoSubMenu"
//           onClick={() => {
//             setRota(slotRota3);
//           }}
//         >
//           {slotNome3}
//         </button>
//         <button
//           className="botaoSubMenu"
//           onClick={() => {
//             setRota(slotRota4);
//           }}
//         >
//           {slotNome4}
//         </button>

//         <button
//           onClick={() => {
//             if (slotNome1 === props.nome1) {
//               // se o nome do slot 1 for igual ao nome 1, então a próxima categoria é a 5
//               setSlotNome1(props.nome5);
//               setSlotNome2(props.nome6);
//               setSlotNome3(props.nome7);
//               setSlotNome4(props.nome8);

//               setSlotRota1(props.rota5);
//               setSlotRota2(props.rota6);
//               setSlotRota3(props.rota7);
//               setSlotRota4(props.rota8);
//             }
//             if (slotNome1 === props.nome5 && props.nome9 === undefined) {
//               // Se já estiver na categoria 2, e a 3 não existir a próxima é a 1
//               setSlotNome1(props.nome1);
//               setSlotNome2(props.nome2);
//               setSlotNome3(props.nome3);
//               setSlotNome4(props.nome4);

//               setSlotRota1(props.rota1);
//               setSlotRota2(props.rota2);
//               setSlotRota3(props.rota3);
//               setSlotRota4(props.rota4);
//             }
//             if (slotNome1 === props.nome5 && props.nome9 !== undefined) {
//               // Se já estiver na categoria 2, e a 3 existir a próxima é a 3
//               setSlotNome1(props.nome9);
//               setSlotNome2(props.nome10);
//               setSlotNome3(props.nome11);
//               setSlotNome4(props.nome12);

//               setSlotRota1(props.rota9);
//               setSlotRota2(props.rota10);
//               setSlotRota3(props.rota11);
//               setSlotRota4(props.rota12);
//             }
//             if (slotNome1 === props.nome9 && props.nome13 === undefined) {
//               // Se já estiver na categoria 3, e a 4 não existir a próxima é a 1
//               setSlotNome1(props.nome1);
//               setSlotNome2(props.nome2);
//               setSlotNome3(props.nome3);
//               setSlotNome4(props.nome4);

//               setSlotRota1(props.rota1);
//               setSlotRota2(props.rota2);
//               setSlotRota3(props.rota3);
//               setSlotRota4(props.rota4);
//             }
//           }}
//         >
//           <img src={direita} alt="seta direita" />
//         </button>
//       </nav>

//       {/* ROTAS DA ABA FERRAMENTAS */}
//       {rota === "introdução" && <Introducao />}
//       {rota === "/ferramentas" && <Introducao />}
//       {rota === "/ferramentas/uso-frequente" && <UsoFrequente />}
//       {rota === "/ferramentas/css" && <Css />}
//       {rota === "/ferramentas/javascript" && <Javascript />}
//       {rota === "/ferramentas/cores" && <Cores />}
//       {rota === "/ferramentas/imagens" && <Imagens />}
//       {rota === "/ferramentas/icones" && <Icones />}
//       {rota === "/ferramentas/testes-e-seo" && <Testeseseo />}

//       {/* ROTAS DA ABA DOCUMENTACAO > REACT */}
//       {rota === "react" && <ReactIntroducao />}
//       {rota === "/documentacao/react" && <ReactIntroducao />}
//       {rota === "/documentacao/react/estrutura" && <ReactEstrutura />}
//       {rota === "/documentacao/react/regras" && <ReactRegras />}
//       {rota === "/documentacao/react/iniciando" && <ReactIniciando />}
//       {rota === "/documentacao/react/componentes" && <ReactComponentes />}
//       {rota === "/documentacao/react/props" && <ReactProps />}
//       {rota === "/documentacao/react/css" && <ReactCss />}
//       {rota === "/documentacao/react/routes" && <ReactRoutes />}
//       {/* ROTAS DA ABA DOCUMENTACAO > PYTHON */}
//       {rota === "python" && <PythonIntroducao />}
//       {rota === "/documentacao/python" && <PythonIntroducao />}
//       {rota === "/documentacao/python/vscode" && <PythonVsCode />}
//       {rota === "/documentacao/python/nomenclaturas" && <PythonNomenclatura />}
//       {rota === "/documentacao/python/tiposdedados" && <PythonTiposDeDados />}
//       {rota === "/documentacao/python/operadores" && <PythonOperadores />}
//       {rota === "/documentacao/python/loops" && <PythonLoops />}
//       {rota === "/documentacao/python/statement" && <PythonStatement />}
//       {rota === "/documentacao/python/stringinterpolation" && (
//         <PythonInterpolation />
//       )}
//       {rota === "/documentacao/python/boaspraticas" && <PythonBoasPraticas />}
//       {rota === "/documentacao/python/funcoes" && <PythonFuncoes />}
//     </>
//   );
// }

// function BlocoDeCodigo(props) {
//   let [botaoClip, setBotaoclip] = useState(copiarIMG);
//   let [valor, setValor] = useState(props.codigo);
//   return (
//     <pre className="BlocoDeCodigo">
//       <code className="codigoInterno">{props.codigo}</code>
//       <button
//         onClick={() => {
//           navigator.clipboard.writeText(valor);
//           setBotaoclip(copiarIMGcheck);
//           setTimeout(() => {
//             setBotaoclip(copiarIMG);
//           }, 500);
//         }}
//       >
//         <img src={botaoClip} />
//       </button>
//     </pre>
//   );
// }

// function BloquinhoImgTexto(props) {
//   // COMPONENTE RESPONSÁVEL PELOS BLOQUINHOS DE IMAGEM E TEXTO
//   return (
//     <a href={props.a} target="_blank" className="BloquinhoImgTexto">
//       <img src={props.img} alt={props.alt} />
//       <h3>{props.titulo}</h3>
//       <p>{props.texto}</p>
//     </a>
//   );
// }

// function Construcao() {
//   return (
//     <div className="Construcao">
//       <h1>Em construção, por favor aguarde...</h1>
//       <img src={construcao} />;
//     </div>
//   );
// }

// function Certificados() {
//   return (
//     <div className="Certificados">
//       <Curso
//         img={testecurso}
//         titulo="Build Responsive Real-World Websites with HTML and CSS"
//         autor="Jonas Schmedtmann"
//         completo="100"
//         hora="37.5"
//         concluido="sim"
//       />
//       <Curso
//         img={crashCurso}
//         titulo="Crash Course: Build a Full-Stack Web App in a Weekend!"
//         autor="Jonas Schmedtmann"
//         completo="65"
//         hora="12.5"
//       />
//       <Curso
//         img={phpCurso}
//         titulo="PHP for Beginners - Become a PHP Master - CMS Project"
//         autor="Edwin Diaz"
//         completo="10"
//         hora="37"
//       />
//       <Curso
//         img={javascriptCurso}
//         titulo="The Complete JavaScript Course 2023: From Zero to Expert!"
//         autor="Jonas Schmedtmann"
//         completo="100"
//         hora="69"
//       />
//       <Curso
//         img={advancedcss}
//         titulo="Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
//         autor="Jonas Schmedtmann"
//         completo="45"
//         hora="28"
//       />
//       <Curso
//         img={gitCurso}
//         titulo="Git e GitHub do básico ao avançado (c/ gist e GitHub Pages)"
//         autor="Matheus Battisti"
//         completo="25"
//         hora="8.5"
//       />
//       <Curso
//         img={angularCurso}
//         titulo="Angular - The Complete Guide (2023 Edition)"
//         autor="Maximilian Schwarzmüller"
//         completo="5"
//         hora="34.5"
//       />
//       <Curso
//         img={nodeCurso}
//         titulo="Node.js, Express, MongoDB & More: The Complete Bootcamp 2023"
//         autor="Jonas Schmedtmann"
//         completo="5"
//         hora="42"
//       />
//       <Curso
//         img={logicaUmCurso}
//         titulo="Lógica de programação: comece em lógica com o jogo Pong e Javascript"
//         autor="Guilherme Lima"
//         completo="100"
//         hora="6"
//       />

//       <Curso
//         img={logicaDoisCurso}
//         titulo="Lógica de programação: laços e listas com Javascript"
//         autor="Guilherme Lima"
//         completo="100"
//         hora="4"
//       />
//       <Curso
//         img={arquiteturaCurso}
//         titulo="Arquitetura de computadores: por trás de como seu programa funciona"
//         autor="Andrew Ijano Lopes"
//         completo="100"
//         hora="8"
//       />
//       <Curso
//         img={htmlCurso}
//         titulo="HTML5 e CSS3 parte 1: crie uma página da Web"
//         autor="Pedro Marins"
//         completo="100"
//         hora="8"
//       />
//       <Curso
//         img={htmlCurso}
//         titulo="HTML5 e CSS3 parte 2: posicionamento, listas e navegação"
//         autor="Pedro Marins"
//         completo="100"
//         hora="8"
//       />
//       <Curso
//         img={htmlCurso}
//         titulo="HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas"
//         autor="Pedro Marins"
//         completo="100"
//         hora="8"
//       />
//       <Curso
//         img={htmlCurso}
//         titulo="HTML5 e CSS3 parte 4: avançando no CSS"
//         autor="Pedro Marins"
//         completo="100"
//         hora="8"
//       />
//       <Curso
//         img={jsweb}
//         titulo="JavaScript para Web: Crie páginas dinâmicas"
//         autor="Vanessa Me Tonini"
//         completo="100"
//         hora="10"
//       />
//       <Curso
//         img={gitgithub}
//         titulo="Git e GitHub: repositório, commit e versões"
//         autor="Guilherme Lima"
//         completo="100"
//         hora="8"
//       />
//       <Curso
//         img={arqcss}
//         titulo="Arquitetura CSS: descomplicando os problemas"
//         autor="Matheus Castiglioni"
//         completo="100"
//         hora="8"
//       />
//       <Curso
//         img={linuxUm}
//         titulo="Linux I: conhecendo e utilizando o terminal"
//         autor="Guilherme Silveira"
//         completo="100"
//         hora="4"
//       />
//       <Curso
//         img={jsarr}
//         titulo="JavaScript: Arrays"
//         autor="Juliana Amoasei e Leonardo Sartorello"
//         completo="100"
//         hora="10"
//       />
//       <Curso
//         img={jsobj}
//         titulo="JavaScript: objetos"
//         autor="André Bessa e Juliana Amoasei"
//         completo="100"
//         hora="10"
//       />
//       <Curso
//         img={jstype}
//         titulo="JavaScript: tipos, variáveis e funções"
//         autor="Juliana Amoasei e Leonardo Sartorello"
//         completo="100"
//         hora="12"
//       />
//       <Curso
//         img={layoutR}
//         titulo="Layouts Responsivos: trabalhando com layouts mobile"
//         autor="Matheus Alberto"
//         completo="100"
//         hora="7"
//       />
//       <Curso
//         img={Pyinicio}
//         titulo="Python: começando com a linguagem"
//         autor="Nico Steppat"
//         completo="100"
//         hora="12"
//       />
//       <Curso
//         img={sasssint}
//         titulo="SASS: CSS sintaticamente espetacular"
//         autor="Guilherme Lima"
//         completo="100"
//         hora="8"
//       />
//     </div>
//   );
// }

// function Curso(props) {
//   let [background, setBackground] = useState("#f2f2ee");
//   let [colored, setColored] = useState("#4d4f4f");
//   let [timerIMG, setTimerIMG] = useState(timer);

//   return (
//     <a className="boxCurso">
//       <img src={props.img} />
//       <div
//         onLoad={() => {
//           if (props.completo === "100") {
//             setBackground("#2b8a3e");
//             setColored("#f2f2ee");
//             setTimerIMG(timer2);
//           }
//         }}
//         style={{ backgroundColor: background }}
//         className="FlexHora"
//       >
//         <img src={timerIMG} />
//         <p style={{ color: colored }}>{`${props.hora} horas`}</p>
//       </div>
//       <h1>{props.titulo}</h1>
//       <h4>{props.autor}</h4>
//       <figure className="barravazia">
//         <figure
//           className="barracheia"
//           style={{ width: `${props.completo}%`, backgroundColor: background }}
//         ></figure>
//       </figure>
//       <div className="FlexP">
//         <p>{`${props.completo}% concluído`}</p>
//       </div>
//     </a>
//   );
// }

// function Certificadohorizontal(props) {
//   return (
//     <div className="Certificadohorizontal">
//       <embed src={props.pdf} type="application/pdf" />
//     </div>
//   );
// }
