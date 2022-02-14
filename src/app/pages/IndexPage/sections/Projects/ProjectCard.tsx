import languageColors from "gh-language-colors";
import {useMemo} from "react";
import styled from "styled-components";
import {Icon} from "../../../../components/Icon";
import {H3, P, Span} from "../../../../components/Text";
import {faBalanceScale, faCodeBranch, faStar} from "../../../../icon";
import {ProjectInfo} from "./types";

const colors: { [lang: string]: string } = languageColors;

export function ProjectCard(props: ProjectInfo) {
	const {title, description, language, stars, forks, license, url} = props;

	const color = useMemo(() => {
		return language && (
			<Span>
				<ColorSvg>
					<circle cx="6" cy="6" r="6" stroke="none" fill={`${colors[language]}`}/>
				</ColorSvg>
				{language}
			</Span>
		);
	}, [language]);

	return (
		<CardContainer>
			<CardTitleLink href={url} target="_blank" rel="noreferrer">
				<CardTitle preventUnderline>
					{title}
				</CardTitle>
			</CardTitleLink>
			{description && <P>{description}</P>}
			<MiscContainer>
				{color}
				<Span>
					<IconWithMargin icon={faStar} type="secondary"/>
					{stars}
				</Span>
				<Span>
					<IconWithMargin icon={faCodeBranch} type="secondary"/>
					{forks}
				</Span>
				{license && (
					<Span>
						<IconWithMargin icon={faBalanceScale} type="secondary"/>
						{license}
					</Span>
				)}
			</MiscContainer>
		</CardContainer>
	);
}

const CardContainer = styled.div`
  border: 1px solid ${(p) => p.theme.border};
  background-color: ${(p) => p.theme.background};

  height: 100%;
  padding-inline: 1em;
  padding-block-end: 0.5em;
`;

const ColorSvg = styled.svg`
  height: 12px;
  width: 12px;
  margin-inline-end: 0.25em;
  vertical-align: baseline;
`;

const MiscContainer = styled.div`
  display: flex;
  gap: 1em;
`;

const IconWithMargin = styled(Icon)`
  margin-inline-end: 0.25em;
`;

const CardTitleLink = styled('a')`
	&:hover ${H3} {
	  color: ${p => p.theme.text};
	}
`;

const CardTitle = styled(H3)`
	word-break: break-word;
`;