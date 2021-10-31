import styled from "styled-components";
import {TextProps} from "./types";
import {commonTextCss} from "./common";

export const P = styled.p<TextProps>`
  margin-block: 1em;
  ${commonTextCss};
`;
