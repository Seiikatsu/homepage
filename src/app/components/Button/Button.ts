import styled, {css} from "styled-components";
import {ButtonProps} from "./types";


export const Button = styled.button<ButtonProps>`
  cursor: pointer;

  padding-inline: 1em;
  padding-block: 0.75em;

  color: ${p => p.theme.primary};
  background-color: transparent;
  border: 1px solid ${p => p.theme.primary};

  &:hover {

  }

  ${p => p.primary && css`
	color: ${p => p.theme.text};
	background-color: ${p => p.theme.primary};
	border: 1px solid ${p => p.theme.primary};
  `};
`;