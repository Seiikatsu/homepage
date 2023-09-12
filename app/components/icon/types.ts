import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIconProps} from '@fortawesome/react-fontawesome';

export type IconType = 'primary' | 'secondary';

export type IconProps = Omit<FontAwesomeIconProps, 'icon'> & {
	clickable?: boolean;
	type?: IconType;
	icon: IconDefinition;
};
