import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FC} from 'react';
import {IconProps} from '~/components/icon/types';

export const Icon: FC<IconProps> = ({type, clickable, className: additionalClassName, ...props}) => {

	const className: string[] = [];
	if (additionalClassName) {
		className.push(additionalClassName);
	}
	className.push(type === 'secondary' ? 'text-secondary' : 'text-text');
	if (clickable) {
		className.push('cursor-pointer');
	}

	// @ts-ignore font awesome is annoying, should replace it soon!
	return <FontAwesomeIcon {...props} className={className.join(' ')}/>;
};
