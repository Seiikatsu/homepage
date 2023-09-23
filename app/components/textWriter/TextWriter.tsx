import {B, Span} from 'app/components/text';
import {useEffect, useRef, useState} from 'react';
import {TextWriterProps} from './types';

const TYPE_DELAY = 100;
const NEXT_WORD_DELAY = 2000;

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

	const textRef = useRef<HTMLElement>(null);

	const [phrase, setPhrase] = useState(children[0]);
	const [currentText, setCurrentText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
	const [reverse, setReverse] = useState(false);

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		if (!reverse && currentIndex < phrase.length) {
			timeout = setTimeout(() => {
				setCurrentText(prevText => prevText + phrase[currentIndex]);
				setCurrentIndex(prevIndex => prevIndex + 1);
			}, TYPE_DELAY);
		} else if (!reverse && currentIndex === phrase.length) {
			timeout = setTimeout(() => {
				setReverse(true);
			}, NEXT_WORD_DELAY);
		} else if (reverse && currentIndex >= 0) {
			timeout = setTimeout(() => {
				setCurrentText(prevText => prevText.slice(0, prevText.length - 1));
				setCurrentIndex(prevIndex => prevIndex - 1);
			}, TYPE_DELAY);
			if (currentIndex === 0) {
				setReverse(false);
				setCurrentIndex(0);
				setPhrase(getNextText(phrase, children));
			}
		}

		return () => clearTimeout(timeout);
	}, [currentText, currentIndex, reverse, phrase]);

	return (
		<div
			className="inline-block relative after:content-[''] after:absolute after:h-full after:ml-1.5 after:w-px after:bg-text">
			{/* in safari the static and current text have an offset due to height of h1 element */}
			<Span primary className="font-normal align-middle">{staticText}</Span>
			&nbsp;
			<B primary ref={textRef}
			   className="inline-block align-middle whitespace-nowrap overflow-hidden">
				{currentText}
			</B>
		</div>
	);
}
