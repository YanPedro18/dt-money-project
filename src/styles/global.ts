import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

button {
 cursor: pointer;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
}

body {
    background-color: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-100']};
    -webkit-font-smootginh: antialiased;
}

body, input, textarea, button {
   font: 400 1rem Roboto, sans-serif;
}

`