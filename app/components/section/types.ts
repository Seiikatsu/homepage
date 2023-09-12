import {PropsWithChildren} from 'react';

export type SectionProps = PropsWithChildren<{
	id: string;
	backgroundImage?: string;
	className?: string;
}>;
