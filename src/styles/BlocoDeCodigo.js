import styled from "styled-components";

export const StyledBlocoDeCodigo = styled.section`
  position: relative;
  margin-top: 0.5rem;
  background-color: #212529;
  color: #f2f2ee;
  margin: 0.5rem 0;
  padding: 1rem 1rem;
  // padding-right: 20rem;
  left: -1%;
  white-space: pre-wrap;
  // border: 1px solid blue;

  code {
    overflow: hidden;
    // border: 1px solid red;
  }
  button {
    position: absolute;
    left: 99%;
    top: 0.5rem;
    transform: translateX(-100%);
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 2rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

`