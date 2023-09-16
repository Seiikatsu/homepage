import {CSSProperties, FC} from 'react';
import image from './spinner.svg';
import {ButtonProps} from './types';

export const Button: FC<ButtonProps> = ({primary, isLoading, ...buttonProps}) => {

	const classNames: string[] = ['cursor-pointer px-4 py-3 text-primary bg-transparent border border-primary'];
	const style: CSSProperties = {
		fontVariant: 'small-caps',
	};

	if (primary) {
		classNames.push('!text-gray-text !bg-primary border !border-primary');
	}

	if (isLoading) {
		classNames.push('relative text-transparent select-none before:content-[\'\'] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-text before:animate-[rotation_1.5s_linear_infinite]');
		style.mask = `url(${image}) no-repeat 50% 50%;`;
	}

	return <button {...buttonProps} className={classNames.join(' ')} style={style}/>;
};
