import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

type Props = FontAwesomeIconProps;

export function IconComponent(props: Props) {
	return <FontAwesomeIcon {...props} />;
}
