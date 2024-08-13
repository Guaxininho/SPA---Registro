import { React, useState } from "react";
import { StyledNav } from "../styles/Nav.js";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Nav() {
  const [botaoEmDestaque, setBotaoEmDestaque] = useState(null);
  const [hambestado, setHambestado] = useState(false);
  const [alturaMenu, setAlturaMenu] = useState(0);
  const [mostrar, setMostrar] = useState("0rem");
  return (
    <StyledNav>
      <img src={logo} alt="logotipo" />
      <h1 onClick={() => setBotaoEmDestaque(null)}>
        <Link to="/">Registro</Link>
      </h1>
      <div
        className={`hamburguer btn ${hambestado}`}
        onClick={() => {
          setHambestado(!hambestado);
          if (hambestado === true) {
            setAlturaMenu("0");
            setMostrar("0rem");
          } else {
            setAlturaMenu("40");
            setTimeout(() => {
              setMostrar("2rem");
            }, 200);
          }
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="flexDeNavegacao">
        <button onClick={() => setBotaoEmDestaque("documentacao")}>
          <Link to="/artigos">Artigos</Link>
          <div
            className={botaoEmDestaque === "documentacao" ? "active" : ""}
          ></div>
        </button>
        <button onClick={() => setBotaoEmDestaque("ferramentas")}>
          <Link to="/ferramentas">Projetos</Link>
          <div
            className={botaoEmDestaque === "ferramentas" ? "active" : ""}
          ></div>
        </button>

        <button onClick={() => setBotaoEmDestaque("roadmap")}>
          <Link to="/roadmap">Ferramentas</Link>
          <div className={botaoEmDestaque === "roadmap" ? "active" : ""}></div>
        </button>
        <button onClick={() => setBotaoEmDestaque("contato")}>
          <Link to="/contato">Contato</Link>
          <div className={botaoEmDestaque === "contato" ? "active" : ""}></div>
        </button>
      </div>
      <div className="caixaMenu" style={{ height: `${alturaMenu}rem` }}>
        <Link
          to="/documentacao"
          onClick={() => {
            setHambestado(!hambestado);
            setAlturaMenu("0");
            setMostrar("0rem");
          }}
        >
          <button style={{ fontSize: mostrar }}>Documentação</button>
        </Link>

        <Link
          to="/ferramentas"
          onClick={() => {
            setHambestado(!hambestado);
            setAlturaMenu("0");
            setMostrar("0rem");
          }}
        >
          <button style={{ fontSize: mostrar }}>Ferramentas </button>
        </Link>

        <Link
          to="/certificados"
          onClick={() => {
            setHambestado(!hambestado);
            setAlturaMenu("0");
            setMostrar("0rem");
          }}
        >
          <button style={{ fontSize: mostrar }}>Certificados </button>
        </Link>

        <Link
          to="/portfolio"
          onClick={() => {
            setHambestado(!hambestado);
            setAlturaMenu("0");
            setMostrar("0rem");
          }}
        >
          <button style={{ fontSize: mostrar }}>Portfólio </button>
        </Link>

        <Link
          to="/roadmap"
          onClick={() => {
            setHambestado(!hambestado);
            setAlturaMenu("0");
            setMostrar("0rem");
          }}
        >
          <button style={{ fontSize: mostrar }}>Roadmap </button>
        </Link>

        <Link
          to="/contato"
          onClick={() => {
            setHambestado(!hambestado);
            setAlturaMenu("0");
            setMostrar("0rem");
          }}
        >
          <button style={{ fontSize: mostrar }}>Contato</button>
        </Link>
      </div>
    </StyledNav>
  );
}

export default Nav;
