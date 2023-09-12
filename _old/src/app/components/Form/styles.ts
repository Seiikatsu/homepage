import {css} from "styled-components";
import {CommonFieldStateProps} from "./types";

export const commonFieldStyles = css<CommonFieldStateProps>`
  padding: 0.5em 1em;
  margin-bottom: 1em;

  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background}44;
  border: 1px solid ${(p) => p.theme.background}88;

  ${(p) =>
		  p.error &&
		  css`
			border-color: red; // TODO: error color
		  `}

  width: 100%;
  width: stretch;
`;
