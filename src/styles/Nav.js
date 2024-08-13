import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  /* border-bottom: 0.15rem solid #4d4f4f; */
  align-items: center;
  margin-bottom: 5rem;
  height: 7.2rem;

  @keyframes linha {
    0% {
      width: 0%;
      opacity: 0.4;
    }
    100% {
      width: 100%;
      opacity: 0.7;
    }
  }
  img {
    height: 3rem;
    margin-right: 1rem;
  }
  h1 {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 2.4rem;
    font-weight: 500;
    color: #4d4f4f;
    margin-right: auto;
    cursor: pointer;
    a {
      color: #4d4f4f;
      text-decoration: none;
    }
  }

  .flexDeNavegacao {
    width: 60%;

    display: flex;
    // border: 1px solid blue;
    justify-content: space-between;

    button {
      position: relative;
      border: none;
      background-color: transparent;
      font-family: "Exo 2", sans-serif;
      font-size: 1.5rem;
      font-weight: 300;
      cursor: pointer;
      letter-spacing: 0.16rem;

      a {
        color: #4d4f4f;
        text-decoration: none;
      }
    }

    .active {
      animation: linha 0.5s forwards;
      background-color: #4d4f4f;
      height: 0.1rem;
      width: 100%;
      position: absolute;
      bottom: -25%;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 0.5rem;
    }
  }
  .caixaMenu {
    display: none;
  }
  .hamburguer {
    display: none;
  }
  .btn {
    width: 3.5rem;
    cursor: pointer;
  }

  span {
    display: block;
    width: 100%;
    border-radius: 3px;
    height: 2px;
    background: #4d4f4fc3;
    transition: all 0.3s;
    position: relative;
  }
  span + span {
    margin-top: 0.7rem; // espaçamento entre as barras
  }

  .true span:nth-child(1) {
    animation: ease 0.5s top forwards;
  }

  .false span:nth-child(1) {
    animation: ease 0.5s top-2 forwards;
  }

  .true span:nth-child(2) {
    animation: ease 0.5s scaled forwards;
  }

  .false span:nth-child(2) {
    animation: ease 0.5s scaled-2 forwards;
  }

  .true span:nth-child(3) {
    animation: ease 0.5s bottom forwards;
  }

  .false span:nth-child(3) {
    animation: ease 0.5s bottom-2 forwards;
  }

  @keyframes top {
    0% {
      top: 0;
      transform: rotate(0);
    }
    50% {
      top: 9px;
      transform: rotate(0);
    }
    100% {
      top: 9px;
      transform: rotate(45deg);
    }
  }

  @keyframes top-2 {
    0% {
      top: 9px;
      transform: rotate(45deg);
    }
    50% {
      top: 9px;
      transform: rotate(0deg);
    }
    100% {
      top: 0;
      transform: rotate(0deg);
    }
  }

  @keyframes bottom {
    0% {
      bottom: 0;
      transform: rotate(0);
    }
    50% {
      bottom: 9px;
      transform: rotate(0);
    }
    100% {
      bottom: 9px;
      transform: rotate(135deg);
    }
  }

  @keyframes bottom-2 {
    0% {
      bottom: 9px;
      transform: rotate(135deg);
    }
    50% {
      bottom: 9px;
      transform: rotate(0);
    }
    100% {
      bottom: 0;
      transform: rotate(0);
    }
  }

  @keyframes scaled {
    50% {
      transform: scale(0);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes scaled-2 {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 821px) {
    .flexDeNavegacao {
      display: none;
    }
    .hamburguer {
      display: block;
    }
    .caixaMenu {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 5rem;
      left: calc(98%);
      transform: translateX(-100%);
      width: 40%;
      z-index: 999;
      background-color: #f2f2ee;
      box-shadow: -2px 0px 4px -1px rgba(77, 79, 79, 1);
      transition: all 0.5s;
      min-width: 18.2rem;

      a {
        // border: 1px solid red;
        color: #4d4f4f;
        text-decoration: none;
        width: 100%;
        height: 100%;
        &:hover {
          background-color: #e6e6e4;
        }
        button {
          // border: 1px solid blue;
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: block;
          border: none;
          background-color: transparent;
          font-family: "Exo 2", sans-serif;
          font-size: 1.5rem;
          font-weight: 300;
          cursor: pointer;
          letter-spacing: 0.07rem;
          text-align: justify;
          width: 15rem;
          // margin: auto;
        }
      }
    }
  }
`;
