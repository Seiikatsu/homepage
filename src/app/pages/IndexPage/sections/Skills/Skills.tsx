import styled from "styled-components";
import { Container, Row, Col } from "../../../../components/Grid";
import { H2 } from "../../../../components/Text";
import { Section } from "../components/Section";
import background from "./background.jpg";
import { ProgressBar } from "./components/ProgressBar";
import { TimelineTree } from "./components/TimelineTree";
import { EDUCATION } from "./education";
import { EXPERIENCE } from "./experience";

export function SkillsSection() {
  return (
    <Section backgroundImage={background}>
      {/* https://www.pexels.com/photo/flatlay-display-of-electronics-next-to-eyeglases-3184454/ */}
      <Container>
        <Row align="start">
          <Col columnSize={1}>
            <H2 primary>Education</H2>
            <TimelineTree entries={EDUCATION} />
          </Col>
          <Col columnSize={1}>
            <H2 primary>Experience</H2>
            <TimelineTree entries={EXPERIENCE} />
          </Col>
          <Col columnSize={2}>
            <H2 primary>My Skills</H2>
            <ProgressBarContainer>
              <ProgressBar title="Java" progress={100} />
              <ProgressBar title="JavaScript" progress={100} />
              <ProgressBar title="HTML" progress={90} />
              <ProgressBar title="TypeScript" progress={80} />
              <ProgressBar title="CSS" progress={70} />
            </ProgressBarContainer>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

const ProgressBarContainer = styled.div`
  /** 1em (Timeline Container) + 1em (Li) + 6px (Title) */
  padding-block-start: calc(2em + 6px);
`;
