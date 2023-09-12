import _ from 'lodash';
import {useEffect, useRef, useState} from 'react';

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 */
export default function useOnFirstAppearance<T extends HTMLElement>(
	offset = 0
): [boolean, React.RefObject<T>] {
	const [appeared, setAppeared] = useState(false);
	const elementRef = useRef<T>(null);

	const checkAppeared = () => {
		if (!appeared && elementRef.current) {
			const top = elementRef.current.getBoundingClientRect().top;
			if (top + offset >= 0 && top - offset <= window.innerHeight) {
				setAppeared(true);
			}
		}
	};

	const onScroll = _.throttle(checkAppeared, 100);

	useEffect(() => {
		checkAppeared();
		document.addEventListener('scroll', onScroll, {passive: true});
		return () => {
			document.removeEventListener('scroll', onScroll);
		};
	});

	return [appeared, elementRef];
}
