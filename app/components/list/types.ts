import {DetailedHTMLProps, HTMLAttributes, LiHTMLAttributes} from 'react';

export type UlProps =
	Omit<DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>, 'className'>
	& {
	orientation?: 'horizontal' | 'vertical';
};

export type LiProps = Omit<DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, 'className'>;
