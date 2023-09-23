import {ComponentProps, FC} from 'react';
import {Container as ExternalContainer} from 'react-grid-system';

export const Container: FC<ComponentProps<typeof ExternalContainer>> = ({className, ...props}) => {

	const classNames = ['relative z-10'];
	if (className) {
		classNames.push(className);
	}

	return (
		// @ts-ignore
		<ExternalContainer {...props} className={classNames.join(' ')}/>);
};
