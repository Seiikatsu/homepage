import {ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes} from 'react';

export type ButtonProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	primary?: boolean;
	disabled?: boolean;
	isLoading?: boolean;
}
