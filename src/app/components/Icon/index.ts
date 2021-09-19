import styled, { css } from "styled-components";
import { IconComponent } from "./Icon";

type IconProps = {
  secondary?: boolean;
};

export const Icon = styled(IconComponent)<IconProps>`
  color: ${(p) => p.theme.text};

  ${(p) =>
    p.secondary &&
    css`
      color: ${(p) => p.theme.textSecondary};
    `}
`;
