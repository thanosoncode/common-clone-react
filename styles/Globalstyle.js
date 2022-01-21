import { createGlobalStyle } from "styled-components";

export const theme = {
  color: "#D34D35",
  colorDark: "#a93e2a",
};

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

  * , *::after, *::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`;
