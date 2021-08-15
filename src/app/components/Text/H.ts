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
  ${headlineCss};
`;

export const H2 = styled.h2<HeadlineProps>`
  ${headlineCss};
`;

export const H3 = styled.h3<HeadlineProps>`
  ${headlineCss};
`;

export const H4 = styled.h4<HeadlineProps>`
  ${headlineCss};
`;

export const H5 = styled.h5<HeadlineProps>`
  ${headlineCss};
`;

export const H6 = styled.h6<HeadlineProps>`
  ${headlineCss};
`;
