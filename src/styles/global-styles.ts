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
	height: 100vh;
	width: 100vw;
	line-height: 1.5;
  }

  body {
	font-family: sans-serif;
	background-color: ${(p) => p.theme.background};
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
  }
`;
