import {css} from "styled-components";
import {media} from "./media";


export const commonMaxWidthMedia = css`
  ${media.small`
  max-width: 600px;
  `}

  ${media.medium`
  max-width: 1024px;
  `}

  ${media.large`
  max-width: 1440px;
  `}

  ${media.xlarge`
  max-width: 1920px;
  `}`;