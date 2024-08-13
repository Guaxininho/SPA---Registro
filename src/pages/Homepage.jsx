import React from "react";
import Grimora from "../assets/Grimora.png";
import { StyledHomepage } from "../styles/Homepage";

function Homepage() {
  return (
    <StyledHomepage>
      <p>
        <span>Grimória:</span> "Ah, vejo que você encontrou o Registro! Deixe-me
        contar um pouco sobre o que é este espaço mágico. <br /> <br /> Quem
        nunca desejou ter um lugar seguro para armazenar o que aprendeu? Quem
        sabe guardar aquelas ferramentas preciosas que fizeram a diferença?
        Cadernos e anotações comuns? Ora, sempre foram um caos e difíceis de
        encontrar quando mais se precisa. Por isso, este espaço foi criado.
        <br />
        Embora ainda tenha anotações comuns, eu, Grimória e outras criaturas
        mágicas, utilizamos um pouco de magia para organizar tudo e encontrar o
        que você precisa rapidamente. Hahrm... <br />
        <br />
        Seja bem-vindo à Biblioteca Registro, onde cada pedaço de conhecimento é
        mantido em ordem e à sua disposição!"
      </p>
      <img src={Grimora} alt="Foto do samuel" />
    </StyledHomepage>
  );
}

export default Homepage;
