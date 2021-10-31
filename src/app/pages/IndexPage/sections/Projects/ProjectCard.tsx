import styled from "styled-components";
import { H3, P, Span } from "../../../../components/Text";
import { ProjectInfo } from "./types";
import languageColors from "gh-language-colors";
import { Icon } from "../../../../components/Icon";
import { faCodeBranch, faStar, faBalanceScale } from "../../../../icon";

const colors: { [lang: string]: string } = languageColors;

export function ProjectCard(props: ProjectInfo) {
  const { title, description, language, stars, forks, license, url } = props;

  const color = colors[language];

  return (
    <CardContainer>
      <a href={url} target="_blank" rel="noreferrer">
        <H3 active preventUnderline>
          {title}
        </H3>
      </a>
      {description && <P>{description}</P>}
      <MiscContainer>
        <Span>
          {color && (
            <ColorSvg>
              <circle cx="6" cy="6" r="6" stroke="none" fill={`${color}`} />
            </ColorSvg>
          )}
          {language}
        </Span>
        <Span>
          <IconWithMargin icon={faStar} type="secondary" />
          {stars}
        </Span>
        <Span>
          <IconWithMargin icon={faCodeBranch} type="secondary" />
          {forks}
        </Span>
        {license && (
          <Span>
            <IconWithMargin icon={faBalanceScale} type="secondary" />
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

  min-width: 250px;
  width: 100%;
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
