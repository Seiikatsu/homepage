import {CSSProperties, PropsWithChildren, Ref} from 'react';

export type TextProps = PropsWithChildren<{
	primary?: boolean;
	active?: boolean;
	className?: string;
	style?: CSSProperties;
	ref?: Ref<HTMLElement>;
}>;

export type HeadlineProps = TextProps & {
	noMargin?: boolean;
	noUnderline?: boolean;
};
