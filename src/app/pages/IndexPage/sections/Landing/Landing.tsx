import styled from "styled-components";
import {H1, H2} from "../../../../components/Text";
import background from './background.jpeg';
import {commonMaxWidthMedia} from "../../../../../styles/common";
import {TextWriter} from "../../../../components/TextWriter";
import {NextSectionArrow} from "./components/NextSectionArrow";

export function Landing() {
	return (
		<Background>
			<ContentContainer>
				<H2 primary preventUnderline>Hello I'm Seikatsu</H2>
				<H1Element primary preventUnderline>
					<TextWriter
						staticText="I am"
						children={['a Developer', 'an Enthusiast']}
					/>
				</H1Element>
			</ContentContainer>
			<NextSectionArrow/>
		</Background>
	);
}

const Background = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  // move to bottom of the stacking context so it does not collide with other elements inside
  position: relative;
  z-index: -1;

  // source: https://www.pexels.com/photo/a-person-sitting-on-wooden-planks-across-the-lake-scenery-747964/
  background-image: url(${background});
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  // half transparent layer to make a background image 'darker'
  &::before {
	content: '';
	z-index: -1; // same as background element!

	position: absolute;
	height: 100%;
	width: 100%;

	background-color: rgba(0, 0, 0, 0.5);
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${commonMaxWidthMedia};
`;

const H1Element = styled(H1)`
  margin: 0;
`;