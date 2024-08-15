import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import Notes from "./pages/Notes";
import Tools from "./pages/Tools";
import Courses from "./pages/Courses";
import Construction from "./pages/Construction";
import GlobalStyles from "./styles/GlobalStyles";
import Nav from "./ui/Nav";
import Article from "./pages/Article";
import Automatos from "./pages/Automatos";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <main>
          <Nav />
          <Routes>
            {/* Rotas da barra de navegação */}
            <Route path="/" exact element={<Homepage />} />
            <Route path="/artigos" exact element={<Notes />} />
            <Route path="/automatos/introducao" exact element={<Automatos />} />
            <Route path="/certificados" exact element={<Courses />} />
            <Route path="/portfolio" exact element={<Construction />} />
            <Route path="/roadmap" exact element={<Construction />} />
            <Route path="/contato" exact element={<Construction />} />
            {/* Subrotas da documentação */}
            <Route path="/documentacao/jsx" exact element={<Construction />} />
            <Route path="/documentacao/css" exact element={<Construction />} />
            <Route
              path="/documentacao/javascript"
              exact
              element={<Construction />}
            />
            <Route path="/documentacao/react" exact element={<Article />} />
            {/* <Route path="/documentacao/react" exact element={<DocReact />} />
        <Route path="/documentacao/php" exact element={<Construction />} />
        <Route path="/documentacao/python" exact element={<DocPython />} /> */}
            <Route path="*" exact element={<PageNotFound />} />
            {/* Subrotas da certificados */}
            {/* <Route
            path="/certificados/htmlandcss"
            exact
            element={<Certificadohorizontal />}
        /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
