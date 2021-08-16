import styled from "styled-components";
import useOnFirstAppearance from "../../../../../hooks/useOnFirstAppearance";

export type ProgressBarProps = {
  title: string;
  progress: number;
};

export function ProgressBar(props: ProgressBarProps) {
  const { title, progress } = props;
  const [appeared, ref] = useOnFirstAppearance<HTMLDivElement>();
  return (
    <Container>
      <ProgressTitle>{title}</ProgressTitle>
      <ProgressContainer ref={ref}>
        <CurrentProgress>{progress}%</CurrentProgress>
        <ProgressMeter
          style={{ width: appeared ? `${progress}%` : undefined }}
        ></ProgressMeter>
      </ProgressContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-block-end: 1.5em;
`;

const ProgressContainer = styled.div`
  position: relative;
  height: 6px;
  background-color: ${(p) => p.theme.backgroundVariant};
`;

const ProgressTitle = styled.h3`
  margin: 0;
  margin-block-end: 0.5em;
  color: ${(p) => p.theme.text};
`;

const CurrentProgress = styled.h6`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  margin-block-end: 6px; // height of ProgressContainer
  padding-block: 0.1em;
  padding-inline: 0.75em;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.backgroundVariant};
`;

const ProgressMeter = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 1%; // this is necessary for the transition to work!
  background-color: ${(p) => p.theme.primary};
  transition: all 1s;
`;
