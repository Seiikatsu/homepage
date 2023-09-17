import {forwardRef} from 'react';
import {TextComponent} from '~/components/text/TextComponent';
import {TextProps} from './types';

export const B = forwardRef<HTMLElement, TextProps>((props, ref) => {
	return <TextComponent component="b" internalClassName="font-bold" {...props} ref={ref}/>;
});
