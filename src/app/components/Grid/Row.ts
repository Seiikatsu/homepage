import styled, { css } from "styled-components";

export type RowProps = {
  align?: "start" | "center";
};

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: center;
  gap: 1em;

  ${(p) =>
    p.align === "start" &&
    css`
      align-items: start;
    `}
`;
