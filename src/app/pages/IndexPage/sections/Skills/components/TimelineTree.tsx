import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { P } from "../../../../../components/Text";
import useOnFirstAppearance from "../../../../../hooks/useOnFirstAppearance";

export type TimelineEntry = {
  title: string;
  timeSpan: string;
  description: string;
};

export type TimelineTreeProps = {
  entries: TimelineEntry[];
};

export function TimelineTree(props: TimelineTreeProps) {
  const { entries } = props;

  return (
    <TimelineComponent>
      {entries.map((entry, idx) => (
        <TimelineItem key={idx}>
          <TimelineItemContainer>
            <TimelineItemTitleContainer>
              <TimelineItemTitle>{entry.title}</TimelineItemTitle>
              <TimelineItemDate>{entry.timeSpan}</TimelineItemDate>
            </TimelineItemTitleContainer>
            <TimelineItemDescription>
              {entry.description}
            </TimelineItemDescription>
          </TimelineItemContainer>
        </TimelineItem>
      ))}
    </TimelineComponent>
  );
}

const TimelineComponent = styled.ul`
  position: relative;
  width: 330px;
  margin: 0;
  padding-block: 1em;
  padding-inline: 0;
  list-style-type: none;

  &::before {
    /* vertical timeline bar */
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 6px;
    height: 100%;
    background-image: linear-gradient(
      ${(p) => p.theme.backgroundVariant}00 0%,
      ${(p) => p.theme.backgroundVariant} 5%,
      ${(p) => p.theme.backgroundVariant} 85%,
      ${(p) => p.theme.backgroundVariant}00 100%
    );
  }
`;

function TimelineItem(props: PropsWithChildren<{}>) {
  const { children } = props;
  const [appeared, ref] = useOnFirstAppearance<HTMLLIElement>();

  return <TimelineItemComponent ref={ref} appeared={appeared}>{children}</TimelineItemComponent>;
}

type TimelineItemComponentProps = {
    appeared: boolean;
};

const TimelineItemComponent = styled.li<TimelineItemComponentProps>`
  margin-inline-start: 2.5em;
  padding-block: 1em;

  transition: all 0.5s ease-in;
  transform-origin: left top;
  transform: scaleY(0);

  ${(p) =>
    p.appeared &&
    css`
      transform: scaleY(1);
    `}
`;

const TimelineItemContainer = styled.div`
  max-width: 300px;
`;

const TimelineItemTitleContainer = styled.div`
  display: flex;
  align-items: start;
`;

const TimelineItemTitle = styled.h3`
  position: relative;
  display: inline;

  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.backgroundVariant};

  margin: 0;
  padding: 6px 10px;
  border-radius: 5px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: calc(-1 * (2.5em - 2px));

    display: block;
    width: 16px;
    height: 16px;
    margin-block-start: -10px;

    background-color: ${(p) => p.theme.primary};
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    right: 100%;
    top: 50%;

    height: 0;
    width: 0;

    margin-block-start: -8px;

    border: 8px solid transparent;
    border-right-color: ${(p) => p.theme.backgroundVariant};
  }
`;

const TimelineItemDate = styled.h6`
  display: inline;

  margin: 0;
  margin-block-start: 5px;
  padding: 4px 6px;

  color: ${(p) => p.theme.primary};
  background-color: ${(p) => p.theme.backgroundVariant};
`;

const TimelineItemDescription = styled(P)`
  margin-inline-start: 10px;
`;
