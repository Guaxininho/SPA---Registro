import React from "react";
import automatoOne from "../assets/automatoOne.png";
import automatoTwo from "../assets/automatoTwo.png";
import { StyledAutomatos } from "../styles/Automatos";
import BlocoAside from "../ui/BlocoAside";

const midjourneyList = [
  {
    nome: "Instalação",
  },
  {
    nome: "Utilizando imagine",
  },
];

function Automatos() {
  return (
    <StyledAutomatos>
      <aside>
        <ul className="ulGeral">
          <BlocoAside Titulo={"Introdução a sala de autômatos"} />

          <BlocoAside Titulo={"Midjourney"} itens={midjourneyList} />
        </ul>
      </aside>
      <article>
        <h2>Introdução a sala de autômatos</h2>
        <p>
          <span>Grimória:</span> Bem-vindo à Sala dos Autômatos, um lugar onde a
          magia e a ciência se encontram em perfeita harmonia. Aqui, os segredos
          das <span>inteligências artificiais</span> ganham forma, alimentados
          pelo conhecimento arcano e pela lógica precisa das máquinas. <br />
          <br />
          Nesta sala, você aprenderá passo a passo como construir seu autômato,
          desde a imagem, peças e falas. Eu estudei esses autômatos e suas
          habilidades com grande fascínio, desvendando os mistérios por trás de
          sua criação e funcionamento. Através deles, aprendi que a inteligência
          pode existir em muitas formas, e que, com o conhecimento certo, até
          mesmo máquinas podem adquirir um toque de magia. <br />
          <br />
          Explore cada um desses conceitos com cuidado e curiosidade, pois o que
          está guardado aqui não é apenas informação, mas a chave para entender
          e moldar o futuro. E lembre-se, assim como com qualquer magia
          poderosa, o verdadeiro poder da I.A. está em como você escolhe usá-la!
        </p>
      </article>
      <div className="flexAutomatos">
        <img className="automatoOne" src={automatoOne} alt="automato 1" />
        <img className="automatoTwo" src={automatoTwo} alt="automato 2" />
      </div>
    </StyledAutomatos>
  );
}

export default Automatos;
