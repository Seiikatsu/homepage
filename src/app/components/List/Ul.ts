import styled, { css } from "styled-components";
import { Li } from ".";

type UlProps = {
  orientation?: 'horizontal' | 'vertical';
}

export const Ul = styled.ul<UlProps>`
  // reset
  list-style: none;

  display: flex;
  gap: 0.5rem;

  ${p => p.orientation === 'vertical' && css`
    width: 100%;
    flex-direction: column;
  
    > ${Li} {
      display: block;
      margin-block: 0;
      padding-block: 0;
    }
  `}
`;
