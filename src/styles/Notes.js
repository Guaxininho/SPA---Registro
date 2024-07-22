import styled from "styled-components";

export const StyledNotes = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
  
    h1 {
      text-align: center;
      text-transform: uppercase;
      font-family: "Exo 2", sans-serif;
      font-weight: 200;
      font-size: 1.8rem;
      letter-spacing: 0.2rem;
      padding: 0 3rem;
      line-height: 3.2rem;
    }
    .flexIconesDeDocumentacao {
      display: flex;
      justify-content: space-evenly;
      button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        img {
          width: 5rem;
          margin-bottom: 1rem;
        }
        h3 {
          font-size: 1.6rem;
          font-family: "Exo 2", sans-serif;
          font-weight: 300;
        }
        a {
          color: #212529;
          text-decoration: none;
        }
      }
    }
  
  @media (max-width: 497px) {
    
      .flexIconesDeDocumentacao {
        display: grid;
        grid-template: 1fr 1fr / repeat(3, 1fr);
        row-gap: 3rem;
      }
  }
`