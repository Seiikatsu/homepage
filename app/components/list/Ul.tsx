import {FC} from 'react';
import {UlProps} from '~/components/list/types';

export const Ul: FC<UlProps> = ({
	                                orientation,
	                                ...props
                                }) => {
	const className: string[] = ['list-none flex gap-2'];
	if (orientation === 'vertical') {
		className.push('w-full flex-col');
		className.push('[&>li]:block [&>li]:m-0 [&>li]:p-0');
	}
	return <ul {...props} className={className.join(' ')}/>;
};
