import styled, { css } from "styled-components";
import { IconComponent } from "./Icon";

type IconType = 'primary' | 'secondary';

type IconProps = {
  clickable?: boolean;
  type?: IconType;
};

export const Icon = styled(IconComponent)<IconProps>`
  color: ${(p) => p.theme.text};

  ${(p) =>
    'secondary' === p.type &&
    css`
      color: ${(p) => p.theme.textSecondary};
    `}

    ${(p) => p.clickable && css`
      cursor: pointer;
    `}
`;
