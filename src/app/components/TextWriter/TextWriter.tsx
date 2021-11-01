import {TextWriterProps} from "./types";
import {B, Span} from "../Text";
import {useEffect, useRef, useState} from "react";
import styled from "styled-components";

const expandShrinkDelay = 3;
const nextWordDelay = 2000;
const widthPerCycle = 2;

function getNextText(currentText: string, texts: string[]) {
	if (texts.length === 0) {
		return '';
	}
	const currentTextIndex = texts.indexOf(currentText);
	if (currentTextIndex === -1 || currentTextIndex + 1 === texts.length) {
		return texts[0];
	}
	return texts[currentTextIndex + 1];
}


export function TextWriter(props: TextWriterProps) {
	const {staticText, children} = props;

	const [currentText, setCurrentText] = useState<string>(children[0]);
	const [currentWidth, setCurrentWidth] = useState<number>(0);
	const [intervalDelay, setIntervalDelay] = useState<number>(expandShrinkDelay);
	const [shrink, setShrink] = useState<boolean>(false);

	const textRef = useRef<HTMLElement>(null);

	useEffect(() => {
			let activeTextInterval: number | undefined;

			function update() {
				const textNode = textRef.current;
				if (textNode) {
					let newWidth: number = 0;
					if (shrink) {
						newWidth = currentWidth - widthPerCycle;
						setIntervalDelay(expandShrinkDelay);
						// below 0px, shrink is over!
						if (newWidth <= 0) {
							newWidth = 0;
							setCurrentText(getNextText(currentText, children));
							setShrink(false);
						}
					} else {
						if (textNode.scrollWidth > textNode.clientWidth) {
							// more scrollable content
							newWidth = currentWidth + widthPerCycle;
						} else {
							// text is expanded to maximum
							setShrink(true);
							setIntervalDelay(nextWordDelay);
							return;
						}
					}
					setCurrentWidth(newWidth);
				}
			}

			activeTextInterval = window.setInterval(update, intervalDelay);
			return () => window.clearInterval(activeTextInterval);
		}
	);

	return (
		<Container>
			<StaticTextElement primary>{staticText}</StaticTextElement>
			&nbsp;
			<CurrentTextElement primary style={{width: currentWidth}} ref={textRef}>
				{currentText}
			</CurrentTextElement>
		</Container>
	);
}

const Container = styled.div`
  display: inline-block;
  position: relative;

  &::after {
	content: '';
	position: absolute;
	height: 100%;

	margin-left: 5px;

	width: 1px;
	background-color: ${p => p.theme.text};
  }
`;

const StaticTextElement = styled(Span)`
  font-weight: normal;
  /* in safari the static and current text have a offset due to height of h1 element */
  vertical-align: middle;
`;

const CurrentTextElement = styled(B)`
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
`;
