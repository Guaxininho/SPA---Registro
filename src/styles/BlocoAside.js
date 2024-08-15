import styled from "styled-components";

export const StyledBlocoAside = styled.li`
  .tituloDoBloco {
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
    }
  }
  .dentroDoBloco {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
    margin-left: 3.2rem;
    transition: all 0.5s;

    li {
      cursor: pointer;
      &:first-child {
        margin-top: 1rem;
      }
    }
  }
`;
