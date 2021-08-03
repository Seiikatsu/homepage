import {createGlobalStyle} from 'styled-components';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html {
	word-break: unset;
  }

  html,
  body,
  #root {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	line-height: 1.5;
  }

  body {
	font-family: sans-serif;
	background-color: ${p => p.theme.background};
  }
`;
