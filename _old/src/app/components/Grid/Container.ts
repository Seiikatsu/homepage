import {Container as ExternalContainer, ContainerProps} from 'react-grid-system';
import styled from "styled-components";

export const Container = styled(ExternalContainer)<ContainerProps>`
  position: relative;
  z-index: 1;
`;
