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
    <LandingSection id={HomeSectionInfo.id} backgroundImage={background} minHeight="100vh">
      <FullHeightContainer>
        <Row align="center">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <H2 primary preventUnderline>
              Hello I'm Maximilian Pluskat
            </H2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
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
  // overwrite
  padding-block: 0;

  // subtract header
  height: calc(100vh - 50px);
`;

const FullHeightContainer = styled(Container)`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
