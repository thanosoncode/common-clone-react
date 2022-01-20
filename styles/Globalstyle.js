import { createGlobalStyle } from "styled-components";

export const theme = {
  color: "#D34D35",
  colorDark: "#a93e2a",
};

export const GlobalStyle = createGlobalStyle`


  * , *::after, *::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body {
    font-family: 'Neuton', serif;
  }
`;
