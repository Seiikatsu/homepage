import { Col, Container, Row } from '../../../../components/Grid';
import styled from "styled-components";
import { H2 } from "../../../../components/Text";
import { SkillsSectionInfo } from "../../../../SectionConstants";
import { Section } from "../../components/Section";
import background from "./background.jpg";
import { ProgressBar } from "./components/ProgressBar";
import { TimelineTree } from "./components/TimelineTree";
import { EDUCATION } from "./education";
import { EXPERIENCE } from "./experience";

export function SkillsSection() {
  return (
    <Section id={SkillsSectionInfo.id} backgroundImage={background}>
      {/* https://www.pexels.com/photo/flatlay-display-of-electronics-next-to-eyeglases-3184454/ */}
      <Container>
        <Row align="start">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={4}>
            <H2 primary>Education</H2>
            <TimelineTree entries={EDUCATION} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={4}>
            <H2 primary>Experience</H2>
            <TimelineTree entries={EXPERIENCE} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={4}>
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
