import {ComponentProps, FC} from 'react';

// Replaces react-grid-system <Container>: centered, responsive max-width wrapper.
// Breakpoints/max-widths mirror react-grid-system defaults (see app/tailwind.css @theme).
export const Container: FC<ComponentProps<'div'>> = ({className, ...props}) => {
	const classNames = [
		'relative z-[1] mx-auto w-full px-4',
		'sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]',
	];
	if (className) {
		classNames.push(className);
	}

	return <div {...props} className={classNames.join(' ')}/>;
};
