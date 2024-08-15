import styled from "styled-components";

export const StyledAutomatos = styled.section`
  display: flex;
  gap: 8rem;
  aside {
    min-width: 26rem;
    border-right: 2px solid #4d4f4f;

    ul {
      li {
        margin-bottom: 0.7rem;
        list-style: none;
        font-family: "Exo 2", sans-serif;
        font-weight: 300;
        font-size: 1.6rem;
        cursor: pointer;
      }
      .ulSecundária {
        margin-left: 2rem;
        li {
          margin-bottom: 0.5rem;
          &:first-child {
            margin-top: 0.5rem;
          }
        }
      }
    }
  }
  article {
    span {
      font-family: "Exo 2", sans-serif;
      font-weight: 400;
    }
    h2 {
      font-family: "Exo 2", sans-serif;
      font-weight: 400;
      font-size: 2rem;
      line-height: 4rem;
      text-align: center;
      margin-bottom: 2rem;
    }
    p {
      font-family: "Exo 2", sans-serif;
      font-weight: 300;
      font-size: 2rem;
      line-height: 4rem;
    }
  }
  .flexAutomatos {
    display: flex;
    flex-direction: column;
    min-width: 65rem;
    gap: 1rem;

    img {
      width: 50rem;
    }

    .automatoOne {
      align-self: flex-start;
    }
    .automatoTwo {
      align-self: flex-end;
    }
  }
`;
