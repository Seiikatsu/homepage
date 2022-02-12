import styled from "styled-components";
import {Button} from "../../../../components/Button";
import {Col, Container, Row} from "../../../../components/Grid";
import {Icon} from "../../../../components/Icon";
import {H2, P} from "../../../../components/Text";
import {faEnvelope, faGithub, faPaperPlane} from "../../../../icon";
import {AboutSectionInfo} from "../../../../SectionConstants";
import {Section} from "../../components/Section";

export function AboutSection() {
	return (
		<Section id={AboutSectionInfo.id}>
			<Container>
				<Row>
					<Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={6}>
						<H2 primary>{AboutSectionInfo.text}</H2>
						<P>
							I am Maximilian Pluskat. My passion is software
							development and those my motivation to keep learning and improving
							never ends.
						</P>
						<P>
							I’m an enthusiast about tech and programming. My interest started
							back when I was 11. I started to teach myself programming in
							Pascal. Always tried to expand my knowledge about computers,
							hardware and software. With time passing on I tried a lot of
							different programming languages, technologies and platforms. As
							well as different operating systems. I am familiar with windows,
							macOS and linux as daily os and linux for server applications.
						</P>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
						<SocialIconContainer>
							<SocialIconWrapper
								href="https://github.com/Seiikatsu"
								target="_blank"
								rel="noreferrer"
							>
								<SocialIcon icon={faGithub}/>
							</SocialIconWrapper>
							<SocialIconWrapper
								href="https://t.me/Seiikatsu"
								target="_blank"
								rel="noreferrer"
							>
								<SocialIcon icon={faPaperPlane}/>
							</SocialIconWrapper>
							<SocialIconWrapper
								href="mailto:seikatsu@seikatsu.io"
								target="_blank"
								rel="noreferrer"
							>
								<SocialIcon icon={faEnvelope}/>
							</SocialIconWrapper>
						</SocialIconContainer>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
						<a href="#contact">
							<Button primary>Contact me</Button>
						</a>
					</Col>
				</Row>
			</Container>
		</Section>
	);
}

const SocialIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25em;

  margin-block-end: 30px;
`;

const SocialIconWrapper = styled.a`
  color: ${(p) => p.theme.textSecondary};
  height: 30px;
  width: 30px;
  text-align: center;

  border: 1px solid ${(p) => p.theme.textSecondary};
  transition: border-color 0.5s;

  &:hover {
	background-color: ${(p) => p.theme.primary};
	border-color: ${(p) => p.theme.primary};
  }
`;

const SocialIcon = styled(Icon)`
  height: 100%;
  width: 1em;
`;
