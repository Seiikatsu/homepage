import { createGlobalStyle } from "styled-components";
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html {
	  word-break: unset;
    scroll-behavior: smooth;
  }

  html,
  body,
  #root {
	  line-height: 1.5;
  }

  body {
	  font-family: sans-serif;
	  background-color: ${(p) => p.theme.background};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  a {
    text-decoration: none;
  }

  * {
    // reset margin and padding on all elements per default
    margin: 0;
    padding: 0;
  }
`;
