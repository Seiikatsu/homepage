import styled from "styled-components";
import {Button} from "../../components/button";
import {Col, Container, Row} from "../../components/grid";
import {Icon} from "../../components/icon";
import {H2, P} from "../../components/Text";
import {faEnvelope, faGithub, faLinkedin, faPaperPlane, faXing} from "../../icon";
import {AboutSectionInfo} from "../SectionConstants";
import {Section} from "~/components/section/Section";
import me from './me.jpg';

export function AboutSection() {
	return (
		<Section id={AboutSectionInfo.id}>
			<Container>
				<Row>
					<Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
						<H2 primary>{AboutSectionInfo.text}</H2>
						{/* overwrite inline padding */}
						<Container style={{paddingInline: 0}}>
							<Row>
								<Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
									<P>
										I am Maximilian Pluskat. My passion is software development and thus my
										motivation to keep learning and improving never ends.
									</P>
									<P>
										I’m an enthusiast about tech and programming. My interest started back when I
										was 11.
										I started to teach myself programming in Pascal. Over the years, I tried several
										languages like C#, Java, PHP and C++, with the goal to expand my knowledge about
										computers, hardware and software.<br/>
										After several years of trying languages, frameworks and tech stacks, I found my
										home with JS / TS. My focus is based around those for around 3 years now.
										I love modern technologies and have experience with some of the big known
										technologies.<br/>
										Just to name a few: React, Redux, GraphQL, Express, Redis, REST, Styled
										Components.
									</P>
									<P>
										As with programming languages, I tried out all big operating systems.
										Coming from windows, moved to linux for several years and using macos for about
										a year now.
										I am familiar with all of those as my daily os and linux for server applications
										/ administration.
									</P>
									<P>
										I love to work in a team. Especially with like-minded people who enjoy
										programming and
										teamwork. I like to learn from others, from your experiences and the knowledge
										you have
										already gathered, however I also like to share my knowledge with others. I am
										not afraid to
										talk to others about problems of any kind and find the best solution for
										everyone. Within
										the team, the cohesion and sympathy is crucial.
									</P>
								</Col>
								<Col xs={0} sm={0} md={4} lg={4} xl={4} xxl={4}>
									<P>
										<ImageContainer>
											<img src={me} alt="me" width="100%"/>
										</ImageContainer>
									</P>
								</Col>
							</Row>
						</Container>
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
								href="https://www.linkedin.com/in/maximilian-pluskat/"
								target="_blank"
								rel="noreferrer"
							>
								<SocialIcon icon={faLinkedin}/>
							</SocialIconWrapper>
							<SocialIconWrapper
								href="https://www.xing.com/profile/Maximilian_Pluskat/"
								target="_blank"
								rel="noreferrer"
							>
								<SocialIcon icon={faXing}/>
							</SocialIconWrapper>
							<SocialIconWrapper
								href="mailto:seikatsu@seikatsu.io"
								target="_blank"
								rel="noreferrer"
							>
								<SocialIcon icon={faEnvelope}/>
							</SocialIconWrapper>
							<SocialIconWrapper
								href="https://t.me/Seiikatsu"
								target="_blank"
								rel="noreferrer"
							>
								<SocialIcon icon={faPaperPlane}/>
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

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  > img {
	max-width: 250px;
  }
`;
