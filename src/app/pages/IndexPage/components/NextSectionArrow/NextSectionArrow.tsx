import styled from "styled-components";
import {Icon} from "../../../../components/Icon";
import {faChevronDown} from "../../../../icon";

export function NextSectionArrow() {

	return (
		<Container>
			<IconWrapper>
				<AnimatedIcon icon={faChevronDown}/>
			</IconWrapper>
		</Container>
	);
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  height: 30px;
  width: 30px;

  border-radius: 50%;
  background-color: ${p => p.theme.backgroundVariant};

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedIcon = styled(Icon)`
  @keyframes moveUpDown {
	0% {
	  transform: translateY(0px);
	}
	50% {
	  transform: translateY(5px);

	}
	100% {
	  transform: translateY(0px);
	}
  }

  animation: moveUpDown 2s infinite;
`;