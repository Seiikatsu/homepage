import {FC} from 'react';
import {InternalTextProps, TextComponent} from '~/components/text/TextComponent';
import {HeadlineProps} from './types';

const HeaderComponent: FC<HeadlineProps & InternalTextProps> = ({
	                                                                noUnderline,
	                                                                noMargin,
	                                                                internalClassName,
	                                                                ...textProps
                                                                }) => {
	const className: string[] = [];
	if (internalClassName) {
		className.push(internalClassName);
	}
	if (noMargin) {
		className.push('!mt-0 !mb-0');
	}

	if (!noUnderline) {
		className.push('pb-1 relative inline-block');
		className.push('before:content-[\'\'] before:h-[1px] before:absolute before:left-0 before:bottom-0');
		className.push('before:w-full before:bg-text-secondary');
		className.push('after:content-[\'\'] after:h-[1px] after:absolute after:left-0 after:bottom-0');
		className.push('after:w-[60px] after:bg-primary');
	}

	return <TextComponent {...textProps} internalClassName={className.join(' ')}/>;
};

export const H1: FC<HeadlineProps> = (props) => <HeaderComponent {...props} component="h1"
                                                                 internalClassName="mt-2.25 mb-2.25 text-4xl"/>;
export const H2: FC<HeadlineProps> = (props) => <HeaderComponent {...props} component="h2"
                                                                 internalClassName="mt-4 mb-4 text-2xl"/>;
export const H3: FC<HeadlineProps> = (props) => <HeaderComponent {...props} component="h3"
                                                                 internalClassName="mt-4 mb-4 text-2xl"/>;
export const H4: FC<HeadlineProps> = (props) => <HeaderComponent {...props} component="h4"
                                                                 internalClassName="mt-5 mb-5"/>;
export const H5: FC<HeadlineProps> = (props) => <HeaderComponent {...props} component="h5"
                                                                 internalClassName="mt-6 mb-6 text-sm"/>;
export const H6: FC<HeadlineProps> = (props) => <HeaderComponent {...props} component="h6"
                                                                 internalClassName="mt-9 mb-9 text-xs"/>;

