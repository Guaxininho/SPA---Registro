import styled from "styled-components";

export const StyledHomepage = styled.section`
  @keyframes entradaDePersonagem {
    0% {
      opacity: 0.9;
      right: -20%;
    }
    100% {
      opacity: 1;
      right: 0;
    }
  }
  // border: 1px solid red;
  display: grid;
  grid-template: auto 1fr / 1fr 60rem;
  gap: 2.4rem;
  position: relative;
  h1 {
    grid-column: 1/2;
    grid-row: 1/2;
    text-transform: uppercase;
    font-family: "Exo 2", sans-serif;
    font-weight: 400;
    font-size: 2rem;
  }
  p {
    font-family: "Exo 2", sans-serif;
    font-weight: 300;
    font-size: 2rem;
    grid-row: 2/3;
    line-height: 4rem;

    span {
      font-weight: 400;
    }
  }

  img {
    position: absolute;
    animation: entradaDePersonagem 1s;
    grid-column: 2/3;
    grid-row: 1/3;
    width: 60rem;
    justify-self: end;
    // border: 1px solid #4d4f4f;
    border-radius: 0.5rem;
  }

  @media (max-width: 1045px) {
    .conteudoInicial {
      grid-template: auto 1fr auto / 1fr;
      h1 {
        text-align: center;
        // display: none;
        grid-row: 1/2;
      }
      p {
        grid-row: 3/4;
      }
      img {
        grid-column: 1/2;
        grid-row: 2/3;
        width: 100%;
      }
    }
  }
`;
