import {FC} from 'react';
import {TextComponent} from '~/components/Text/TextComponent';
import {TextProps} from './types';

export const Span: FC<TextProps> = (props) => {
  return <TextComponent component="span" {...props} />;
};
