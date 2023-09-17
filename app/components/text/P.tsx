import {FC} from 'react';
import {TextComponent} from '~/components/text/TextComponent';
import {TextProps} from './types';

export const P: FC<TextProps> = (props) => {
	return <TextComponent component="p" {...props} internalClassName="mt-4 mb-4"/>;
};
