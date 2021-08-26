import styled from "styled-components";
import {commonMaxWidthMedia} from "../../../styles/common";

export const Container = styled.div`
  margin-inline: auto;
  width: 100%;
  ${commonMaxWidthMedia};

  position: relative;
  z-index: 1;
`;
