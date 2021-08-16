import styled from "styled-components";
import { Container, Row, Col } from "../../../../components/Grid";
import { H2 } from "../../../../components/Text";
import { Section } from "../components/Section";
import background from "./background.jpg";
import { ProgressBar } from "./components/ProgressBar";
import { TimelineEntry, TimelineTree } from "./components/TimelineTree";

const testEntry1: TimelineEntry = {
  title: "Lorem ipsum",
  timeSpan: "August 2018 - something",
  description:
    "dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
};

const testEntry2: TimelineEntry = {
  title: "At vero",
  timeSpan: "Januar 2021 - now",
  description:
    "eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
};

const entries = [testEntry1, testEntry2];

export function SkillsSection() {
  return (
    <Section backgroundImage={background}>
      {/* https://www.pexels.com/photo/flatlay-display-of-electronics-next-to-eyeglases-3184454/ */}
      <RelativeContainer>
        <Row align="start">
          <Col columnSize={1}>
            <H2 primary>Education</H2>
            <TimelineTree entries={entries} />
          </Col>
          <Col columnSize={1}>
            <H2 primary>Experience</H2>
            <TimelineTree entries={entries} />
          </Col>
          <Col columnSize={2}>
            <H2 primary>My Skills</H2>
            <ProgressBarContainer>
              <ProgressBar title="Test-Skill" progress={60} />
              <ProgressBar title="Test-Skill 2" progress={20} />
              <ProgressBar title="Test-Skill 4" progress={40} />
              <ProgressBar title="Development" progress={100} />
              <ProgressBar title="Clean up apartment" progress={5} />
            </ProgressBarContainer>
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

const ProgressBarContainer = styled.div`
/** 1em (Timeline Container) + 1em (Li) + 6px (Title) */
  padding-block-start: calc(2em + 6px);
`;
