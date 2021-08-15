import styled from "styled-components";
import { Container, Row, Col } from "../../../../components/Grid";
import { H2 } from "../../../../components/Text";
import { Section } from "../components/Section";
import background from "./background.jpg";
import { ProgressBar } from "./components/ProgressBar";

export function SkillsSection() {
  return (
    <Section backgroundImage={background}>
      {/* https://www.pexels.com/photo/flatlay-display-of-electronics-next-to-eyeglases-3184454/ */}
      <RelativeContainer>
        <Row align="start">
          <Col columnSize={1}>
            <H2 primary>Education</H2>
          </Col>
          <Col columnSize={1}>
            <H2 primary>Experience</H2>
          </Col>
          <Col columnSize={2}>
            <H2 primary>My Skills</H2>
            <ProgressBar title="Test-Skill" progress={60}/>
          </Col>
        </Row>
      </RelativeContainer>
    </Section>
  );
}

const RelativeContainer = styled(Container)`
  z-index: 2;
  position: relative;
`;
