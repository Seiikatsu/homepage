import {CSSProperties, FC} from 'react';
import {SectionProps} from '~/components/section/types';

export const Section: FC<SectionProps> = ({backgroundImage, className: additionalClassName, ...props}) => {

	const classNames: string[] = ['section'];
	if (additionalClassName) {
		classNames.push(additionalClassName);
	}
	const style: CSSProperties = {};
	if (backgroundImage) {
		classNames.push('image');
		style.backgroundImage = `url("${backgroundImage}")`;
	} else {
		classNames.push('bg-background-variant');
	}

	return (
		<section {...props} style={style} className={classNames.join(' ')}/>
	);
};
