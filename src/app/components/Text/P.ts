import styled from "styled-components";
import {TextProps} from "./types";
import {commonTextCss} from "./common";

export const P = styled.p<TextProps>`
  ${commonTextCss};
`;
