import styled from "styled-components/macro";

export type ColumnProps = {
	columnSize: number;
}

export const Col = styled.div<ColumnProps>`
  flex: ${p => p.columnSize};
`;
