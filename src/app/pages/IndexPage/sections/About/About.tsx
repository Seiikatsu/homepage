import {Col, Container, Row} from "../../../../components/Grid";
import {H2, P} from "../../../../components/Text";
import {Icon} from "../../../../components/Icon";
import {Button} from "../../../../components/Button";
import {Section} from "../components/Section";
import styled from "styled-components";
import {faGithub} from "../../../../icon/fa-brand";

export function AboutSection() {
	return (
		<Section>
			<Container>
				<Row>
					<Col columnSize={2}>
						<H2 primary>About me</H2>
						<P>
							I am Seikatsu. As for privacy reasons, I don’t want to put my full name / personal pictures
							on here.
							My passion is software development and those my motivation to keep learning and improving
							never ends.
						</P>
						<P>
							I’m an enthusiast about tech and programming. My interest started back when I was 14. I
							started to teach myself programming in Pascal. Always tried to expand my knowledge about
							computers, hardware and software. With time passing on I tried a lot of different
							programming languages, technologies and platforms. As well as different operating systems. I
							am familiar with windows, macOS and linux as daily os and linux for server applications.
						</P>
						<SocialIconContainer>
							<SocialIconWrapper href="https://github.com/Seiikatsu" target="_blank">
								<SocialIcon icon={faGithub}/>
							</SocialIconWrapper>
						</SocialIconContainer>
						<Button primary>Contact me</Button>
					</Col>
					<Col columnSize={3}/>
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
  color: ${p => p.theme.textSecondary};
  height: 30px;
  width: 30px;
  text-align: center;

  border: 1px solid ${p => p.theme.textSecondary};
  transition: border-color 0.5s;

  &:hover {
	background-color: ${p => p.theme.primary};
	border-color: ${p => p.theme.primary};
  }
`;

const SocialIcon = styled(Icon)`
  height: 100%;
`;
