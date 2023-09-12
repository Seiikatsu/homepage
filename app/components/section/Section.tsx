import {CSSProperties, FC} from 'react';
import {SectionProps} from '~/components/section/types';

export const Section: FC<SectionProps> = ({backgroundImage, className: additionalClassName, ...props}) => {

	const className: string[] = ['pt-[100px] pb-[100px]'];
	if (additionalClassName) {
		className.push(additionalClassName);
	}
	const style: CSSProperties = {};
	if (backgroundImage) {
		style.backgroundImage = backgroundImage;
		style.backgroundImage = `url("${backgroundImage}")`;
		style.backgroundAttachment = 'fixed';
		style.backgroundSize = 'cover';
		style.backgroundRepeat = 'no-repeat';
		style.backgroundPosition = 'center';
		style.position = 'relative';
	} else {
		className.push('bg-background-variant');
		className.push('after:content-[\'\']');
		className.push('after:absolute');
		className.push('after:w-full');
		className.push('after:h-full');
		className.push('after:top-0');
		className.push('after:left-0');
		className.push('after:z-10');
		className.push('after:bg-black');
		className.push('after:opacity-80');
	}

	return (
		<section {...props} style={style} className={className.join(' ')}>
		</section>
	);
};
