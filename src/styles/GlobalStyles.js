import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
// DEFAULT RESET
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  box-sizing: border-box;
  background-color: #e9ecef;
}

html {
  font-size: 62.5%;
}

// DEFAULT TO HERE
main{
    width: 95%;
    
    margin: 0 auto;
}
`;

export default GlobalStyles;
