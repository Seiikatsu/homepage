import {Col, Container, Row} from '~/components/grid';
import {H1, H2} from '~/components/Text';
import {TextWriter} from '~/components/TextWriter';
import background from "./background.jpeg";
import { NextSectionArrow } from "./components/NextSectionArrow";
import { Section } from "~/components/section/Section";
import { HomeSectionInfo, AboutSectionInfo } from "../sectionConstants";

export const Landing = () => (
    <Section id={HomeSectionInfo.id} backgroundImage={background} className="pb-0 h-[calc(100vh-50px)]">
      <Container className="h-[90vh] flex flex-col justify-center items-center">
        <Row align="center">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <H2 primary noUnderline>
              Hello I'm Maximilian Pluskat
            </H2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <H1 primary noUnderline noMargin>
              <TextWriter
                  staticText="I am"
                  children={["a Developer", "an Enthusiast", "a Team player", "focused"]}
              />
            </H1>
          </Col>
        </Row>
      </Container>
      <NextSectionArrow sectionId={AboutSectionInfo.id}/>
    </Section>
);
