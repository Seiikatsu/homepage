import styled, { css } from "styled-components";
import image from "./spinner.svg";
import { ButtonProps } from "./types";

export const Button = styled.button<ButtonProps>`
  cursor: pointer;

  padding-inline: 1em;
  padding-block: 0.75em;

  color: ${(p) => p.theme.primary};
  background-color: transparent;
  border: 1px solid ${(p) => p.theme.primary};

  font-variant: small-caps;

  &:hover {
  }

  ${(p) =>
    p.primary &&
    css`
      color: ${(p) => p.theme.text};
      background-color: ${(p) => p.theme.primary};
      border: 1px solid ${(p) => p.theme.primary};
    `};

  ${(p) =>
    p.loading &&
    css`
      position: relative;

      // hide text
      color: transparent;
      user-select: none;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;

        height: 100%;
        width: 100%;

        background-color: ${(p) => p.theme.text};
        mask: url(${image}) no-repeat 50% 50%;

        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(359deg);
          }
        }
        animation: rotation 1.5s linear infinite;
      }
    `}
`;
