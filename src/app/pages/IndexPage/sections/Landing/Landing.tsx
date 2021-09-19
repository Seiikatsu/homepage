import styled from "styled-components";
import { H1, H2 } from "../../../../components/Text";
import background from "./background.jpeg";
import { TextWriter } from "../../../../components/TextWriter";
import { NextSectionArrow } from "./components/NextSectionArrow";
import { Section } from "../../components/Section";
import { Container, Row, Col } from "../../../../components/Grid";
import { HomeSectionInfo, AboutSectionInfo } from "../../../../SectionConstants";

export function Landing() {
  return (
    <LandingSection id={HomeSectionInfo.id} backgroundImage={background}>
      <FullHeightContainer>
        <Row align="center">
          <Col columnSize={1}>
            <H2 primary preventUnderline>
              Hello I'm Seikatsu
            </H2>
          </Col>
        </Row>
        <Row>
          <Col columnSize={1}>
            <H1Element primary preventUnderline>
              <TextWriter
                staticText="I am"
                children={["a Developer", "an Enthusiast"]}
              />
            </H1Element>
          </Col>
        </Row>
      </FullHeightContainer>
      <NextSectionArrow sectionId={AboutSectionInfo.id} />
    </LandingSection>
  );
}

const H1Element = styled(H1)`
  margin: 0;
`;

const LandingSection = styled(Section)`
  min-height: 100vh;

  // overwrite
  padding-block: 0;
`;

const FullHeightContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
