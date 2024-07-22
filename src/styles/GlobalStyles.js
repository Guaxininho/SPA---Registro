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
}

html {
  font-size: 62.5%;
}

// DEFAULT TO HERE
body{
    width: 96%;
    background-color: #f2f2ee;
    margin: 0 auto;
}
`

export default GlobalStyles ;