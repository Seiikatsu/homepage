import {ComponentProps, FC} from 'react';

type Align = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

type RowProps = ComponentProps<'div'> & {
	align?: Align;
};

const alignClass: Record<Align, string> = {
	start: 'items-start',
	center: 'items-center',
	end: 'items-end',
	stretch: 'items-stretch',
	baseline: 'items-baseline',
};

// Replaces react-grid-system <Row>: flex row with -mx-2 gutter, optional vertical align.
export const Row: FC<RowProps> = ({align, className, ...props}) => {
	const classNames = ['flex flex-wrap -mx-2'];
	if (align) {
		classNames.push(alignClass[align]);
	}
	if (className) {
		classNames.push(className);
	}

	return <div {...props} className={classNames.join(' ')}/>;
};
