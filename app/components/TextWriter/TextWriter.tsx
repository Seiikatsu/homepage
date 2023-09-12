import {useEffect, useRef, useState} from 'react';
import {B, Span} from '~/components/Text';
import {TextWriterProps} from './types';

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
		<div
			className="inline-block relative after:content-[''] after:absolute after:h-full after:ml-1.5 after:w-px after:bg-text">
			{/* in safari the static and current text have a offset due to height of h1 element */}
			<Span primary className="font-normal align-middle">{staticText}</Span>
			&nbsp;
			<B primary style={{width: currentWidth}} ref={textRef}
			   className="inline-block align-middle whitespace-nowrap overflow-hidden">
				{currentText}
			</B>
		</div>
	);
}
