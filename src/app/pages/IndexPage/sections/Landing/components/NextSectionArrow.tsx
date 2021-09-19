import styled from "styled-components";
import { Icon } from "../../../../../components/Icon";
import { faChevronDown } from "../../../../../icon";

type NextSectionArrowProps = {
  sectionId: string;
};

export function NextSectionArrow(props: NextSectionArrowProps) {
  const { sectionId } = props;
  return (
    <Container>
      <a href={`#${sectionId}`}>
        <IconWrapper>
          <AnimatedIcon icon={faChevronDown} />
        </IconWrapper>
      </a>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5vh;

  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  height: 30px;
  width: 30px;

  border-radius: 50%;
  background-color: ${(p) => p.theme.backgroundVariant};

  cursor: pointer;

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedIcon = styled(Icon)`
  @keyframes moveUpDown {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(3px);
    }
  }

  animation: moveUpDown 2s infinite;
`;
