import {FC} from 'react';
import {TextComponent} from '~/components/Text/TextComponent';
import {TextProps} from './types';

export const B: FC<TextProps> = (props) => {
	return <TextComponent component="b" {...props} internalClassName="font-bold"/>;
};
