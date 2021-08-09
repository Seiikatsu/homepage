import styled from "styled-components";
import {commonTextCss} from "./common";
import {TextProps} from "./types";

export const H1 = styled.h1<TextProps>`
  ${commonTextCss};
`;
export const H2 = styled.h2<TextProps>`
  ${commonTextCss};
`;
export const H3 = styled.h3<TextProps>`
  ${commonTextCss};
`;
export const H4 = styled.h4<TextProps>`
  ${commonTextCss};
`;
export const H5 = styled.h5<TextProps>`
  ${commonTextCss};
`;

export const H6 = styled.h6<TextProps>`
  ${commonTextCss};
`;
