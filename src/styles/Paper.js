import styled from "styled-components";

export const StyledPaper = styled.div`
  padding: 1rem;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  background-color: #f2f2ee;
  box-shadow: 2px 2px 0 0 #3c3c3c, 3px 3px 0 0 silver, 4px 4px 0 0 #3c3c3c,
    5px 5px 0 0 silver, 6px 6px 0 0 #3c3c3c, 7px 7px 0 0 silver;
  width: 30rem;
  height: 45rem;
  cursor: pointer;

  h2 {
    transform: rotate(-4deg);
    padding: 0.2rem 1rem;
    margin: 1.6rem 0.25rem 0.25rem 1.6rem;
    color: rgba(77, 79, 79, 0.9);
    outline: none;
    box-shadow: 1em 1.5em 1.5em -1em rgba(0, 0, 0, 0.5);
    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
    box-sizing: border-box;
    border: solid 0.2rem #4140344e;
    width: fit-content;
    font-size: 2.4rem;
    overflow: hidden;
    font-family: "Patrick Hand SC", cursive;
    letter-spacing: 0.1rem;
  }
  p {
    max-width: 24rem;
    align-self: center;
    font-size: 1.7rem;
    overflow-wrap: break-word;
    line-height: 3.2rem;
  }
  img {
    width: 10rem;
    align-self: center;
  }
`;
