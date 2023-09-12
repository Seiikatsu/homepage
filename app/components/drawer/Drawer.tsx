import {DrawerProps} from '~/components/drawer/types';

export function Drawer(props: DrawerProps) {
	const {children, visible} = props;

	const className: string[] = ['h-0'];
	className.push('[&>*]:overflow-hidden [&>*]:transform [&>*]:scale-y-0 [&>*]:origin-top [&>*]:bg-background-variant [&>*]:transition-transform [&>*]:duration-150 [&>*]:ease-out');
	if (visible) {
		className.push('[&>*]:scale-y-100');
	}

	return (
		<div className={className.join(' ')}>
			{children}
		</div>
	);
}
