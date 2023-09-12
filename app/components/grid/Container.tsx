import {ComponentProps, FC} from 'react';
import {Container as ExternalContainer} from 'react-grid-system';

export const Container: FC<ComponentProps<typeof ExternalContainer>> = (props) => (
// @ts-ignore
	<ExternalContainer {...props} className="relative z-10"/>);
