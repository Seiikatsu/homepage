import {FC} from 'react';
import {Icon} from '~/components/icon';
import {faSpinner} from '~/icon';
import {ButtonProps} from './types';

export const Button: FC<ButtonProps> = ({primary, isLoading, children, ...buttonProps}) => {

  const classNames: string[] = ['button'];

  if (primary) {
    classNames.push('primary');
  }

  let childs = children;
  if (isLoading) {
    classNames.push('loading');
    childs = <Icon icon={faSpinner}/>;
  }

  return <button {...buttonProps} className={classNames.join(' ')}>{childs}</button>;
};
