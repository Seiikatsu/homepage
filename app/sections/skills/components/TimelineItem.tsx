import {PropsWithChildren} from 'react';
import useOnFirstAppearance from '~/hooks/useOnFirstAppearance';

export const TimelineItem = (props: PropsWithChildren<{}>) => {
	const {children} = props;
	const [appeared, ref] = useOnFirstAppearance<HTMLLIElement>();

	const classNames: string[] = ['ml-[var(--item-inline-margin-start)] py-4 transition-all ease-in duration-500 origin-top-left transform scale-y-0'];
	if (appeared) {
		classNames.push('scale-y-100');
	}

	return <li className={classNames.join(' ')} ref={ref}>{children}</li>;
};
