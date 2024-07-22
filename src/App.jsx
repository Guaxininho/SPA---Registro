import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Homepage from './pages/Homepage/Homepage';
import Notes from './pages/Notes/Notes';
import Tools from './pages/Tools/Tools';
import Courses from './pages/Courses/Courses';
import Construction from './pages/Construction/Construction';
import GlobalStyles from './styles/GlobalStyles';
import Nav from './ui/Nav/Nav';
import Article from './pages/ReactDoc/Article';

function App() {
  return (
    <>
    <GlobalStyles/>
    <BrowserRouter>
        <Nav />
        <Routes>
        {/* Rotas da barra de navegação */}
        <Route path="/" exact element={<Homepage />} />
        <Route path="/documentacao" exact element={<Notes />} />
        <Route path="/ferramentas" exact element={<Tools />} />
        <Route path="/certificados" exact element={<Courses />} />
        <Route path="/portfolio" exact element={<Construction />} />
        <Route path="/roadmap" exact element={<Construction />} />
        <Route path="/contato" exact element={<Construction />} />
        {/* Subrotas da documentação */}
        <Route path="/documentacao/jsx" exact element={<Construction />} />
        <Route path="/documentacao/css" exact element={<Construction />} />
        <Route path="/documentacao/javascript" exact element={<Construction />} />
        <Route path="/documentacao/react" exact element={<Article/>} />
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
  </BrowserRouter>
  </>
  )
}

export default App