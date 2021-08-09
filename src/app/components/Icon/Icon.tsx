import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

type Props = {
	icon: IconDefinition;
};

export function IconComponent(props: Props) {
	return <FontAwesomeIcon {...props} />;
}
