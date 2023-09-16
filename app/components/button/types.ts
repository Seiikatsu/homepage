import {DetailedHTMLProps, HTMLAttributes} from 'react';

export type ButtonProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	primary?: boolean;
	isLoading?: boolean;
}
