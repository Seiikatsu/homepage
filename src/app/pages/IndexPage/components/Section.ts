import styled, { css } from "styled-components";

export type SectionProps = {
  backgroundImage?: string;
  opacity?: number;
};

export const Section = styled.section<SectionProps>`
  padding-block: 100px;

  ${(p) =>
    !p.backgroundImage &&
    css`
      background-color: ${(p) => p.theme.backgroundVariant};
    `}

  ${(p) =>
    p.backgroundImage &&
    css`
      background-image: url("${p.backgroundImage}");
      background-attachment: fixed;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: #000;
        opacity: 0.8;
      }
    `}
`;
