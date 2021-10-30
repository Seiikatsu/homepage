import styled, { css } from "styled-components";
import { Row as ExternalRow } from 'react-grid-system';

export type RowProps = {
  align?: "start" | "center";
};

export const Row = styled(ExternalRow)<RowProps>`
  ${(p) =>
    p.align === "center" &&
    css`
      align-items: center;
    `}
`;
