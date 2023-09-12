import {createElement, FC, ReactHTML} from 'react';
import {TextProps} from '~/components/Text/types';

export type InternalTextProps = TextProps & {
	component: 'span' | 'p' | 'b' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	internalClassName?: string;
}

export const TextComponent: FC<InternalTextProps> = ({children, primary, active, component, internalClassName, className: additionalClassName}) => {

	const className: string[] = [];
	if (internalClassName) {
		className.push(internalClassName);
	}
	if (additionalClassName) {
		className.push(additionalClassName);
	}
	if (primary) {
		className.push('text-text');
	} else if (active) {
		className.push('text-primary');
	} else {
		className.push('text-text-secondary');
	}

	return createElement(component, {
		children,
		className: className.join(' '),
	});
};
