import { React, useState } from "react";
import { StyledBlocoAside } from "../styles/BlocoAside";
import seta from "../assets/seta.png";

function BlocoAside({ Titulo, itens }) {
  const [aberto, setAberto] = useState(false);
  return (
    <StyledBlocoAside>
      <li onClick={() => setAberto(!aberto)} className="tituloDoBloco">
        {itens && <img src={seta} alt="seta" />}
        {itens ? (
          <p>{Titulo}</p>
        ) : (
          <p style={{ marginLeft: "2rem" }}>{Titulo}</p>
        )}
      </li>
      {itens && (
        <ul
          className="dentroDoBloco"
          style={
            aberto ? { height: `${itens.length * 3.2}rem` } : { height: "0" }
          }
        >
          {itens.map((item) => {
            return <li>{item.nome}</li>;
          })}
        </ul>
      )}
    </StyledBlocoAside>
  );
}

export default BlocoAside;
