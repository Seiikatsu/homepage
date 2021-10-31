import styled, { css } from "styled-components";
import { commonTextCss } from "./common";
import { TextProps } from "./types";

type HeadlineProps = TextProps & {
  preventUnderline?: boolean;
};

const commonUnderlineCss = css`
  content: "";
  height: 1px;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const headlineCss = css<HeadlineProps>`
  ${commonTextCss};

  ${(p) =>
    !p.preventUnderline &&
    css`
      padding-bottom: 0.25em;
      position: relative;
      display: inline-block;

      &::before {
        ${commonUnderlineCss};
        width: 100%;
        background-color: ${(p) => p.theme.textSecondary};
      }

      &::after {
        ${commonUnderlineCss};
        width: 60px;
        background-color: ${(p) => p.theme.primary};
      }
    `}
`;

export const H1 = styled.h1<HeadlineProps>`
  margin-block: 0.67em;
  ${headlineCss};
`;

export const H2 = styled.h2<HeadlineProps>`
  margin-block: 0.83em;
  ${headlineCss};
`;

export const H3 = styled.h3<HeadlineProps>`
  margin-block: 1em;
  ${headlineCss};
`;

export const H4 = styled.h4<HeadlineProps>`
  margin-block: 1.33em;
  ${headlineCss};
`;

export const H5 = styled.h5<HeadlineProps>`
  margin-block: 1.67em;
  ${headlineCss};
`;

export const H6 = styled.h6<HeadlineProps>`
  margin-block: 2.33em;  
  ${headlineCss};
`;
