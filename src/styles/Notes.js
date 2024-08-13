import styled from "styled-components";

export const StyledNotes = styled.section`
  display: grid;
  position: relative;
  grid-template: 1fr / 48rem 1fr 50rem;
  gap: 4rem;

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

  .Lumina {
    position: absolute;
    animation: entradaDePersonagem 1s;
    right: 0;
    top: 0;

    max-width: 48rem;
  }
  p {
    max-width: 50rem;
    font-family: "Exo 2", sans-serif;
    font-weight: 300;
    font-size: 2rem;
    line-height: 4rem;
    span {
      font-weight: 400;
    }
    margin-bottom: 2rem;
  }
  .pesquisa {
    width: 80%;
  }
  .gradeDeArtigos {
    display: grid;
    grid-template: repeat(2, 45rem) / repeat(auto-fill, minmax(30rem, 1fr));
    gap: 2rem;
  }
  .MuiOutlinedInput-root {
    font-size: 2rem;
  }
`;
