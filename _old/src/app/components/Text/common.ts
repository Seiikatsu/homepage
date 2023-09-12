import {css} from "styled-components";
import {TextProps} from "./types";


export const commonTextCss = css<TextProps>`
  color: ${p => p.theme.textSecondary};

  ${p => p.primary && css`
    color: ${p => p.theme.text};
  `};

  ${p => p.active && css`
    color: ${p => p.theme.primary};
  `};
`;
