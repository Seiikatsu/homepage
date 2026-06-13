import {ComponentProps, FC} from 'react';

type ColSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColProps = ComponentProps<'div'> & {
	xs?: ColSize;
	sm?: ColSize;
	md?: ColSize;
	lg?: ColSize;
	xl?: ColSize;
	xxl?: ColSize;
};

// Static literal class tables so the Tailwind v4 scanner picks them up.
// Index = column span (0 = hidden at that breakpoint, 12 = full width).
const XS = ['hidden', 'block w-1/12', 'block w-2/12', 'block w-3/12', 'block w-4/12', 'block w-5/12', 'block w-6/12', 'block w-7/12', 'block w-8/12', 'block w-9/12', 'block w-10/12', 'block w-11/12', 'block w-full'];
const SM = ['sm:hidden', 'sm:block sm:w-1/12', 'sm:block sm:w-2/12', 'sm:block sm:w-3/12', 'sm:block sm:w-4/12', 'sm:block sm:w-5/12', 'sm:block sm:w-6/12', 'sm:block sm:w-7/12', 'sm:block sm:w-8/12', 'sm:block sm:w-9/12', 'sm:block sm:w-10/12', 'sm:block sm:w-11/12', 'sm:block sm:w-full'];
const MD = ['md:hidden', 'md:block md:w-1/12', 'md:block md:w-2/12', 'md:block md:w-3/12', 'md:block md:w-4/12', 'md:block md:w-5/12', 'md:block md:w-6/12', 'md:block md:w-7/12', 'md:block md:w-8/12', 'md:block md:w-9/12', 'md:block md:w-10/12', 'md:block md:w-11/12', 'md:block md:w-full'];
const LG = ['lg:hidden', 'lg:block lg:w-1/12', 'lg:block lg:w-2/12', 'lg:block lg:w-3/12', 'lg:block lg:w-4/12', 'lg:block lg:w-5/12', 'lg:block lg:w-6/12', 'lg:block lg:w-7/12', 'lg:block lg:w-8/12', 'lg:block lg:w-9/12', 'lg:block lg:w-10/12', 'lg:block lg:w-11/12', 'lg:block lg:w-full'];
const XL = ['xl:hidden', 'xl:block xl:w-1/12', 'xl:block xl:w-2/12', 'xl:block xl:w-3/12', 'xl:block xl:w-4/12', 'xl:block xl:w-5/12', 'xl:block xl:w-6/12', 'xl:block xl:w-7/12', 'xl:block xl:w-8/12', 'xl:block xl:w-9/12', 'xl:block xl:w-10/12', 'xl:block xl:w-11/12', 'xl:block xl:w-full'];
const XXL = ['2xl:hidden', '2xl:block 2xl:w-1/12', '2xl:block 2xl:w-2/12', '2xl:block 2xl:w-3/12', '2xl:block 2xl:w-4/12', '2xl:block 2xl:w-5/12', '2xl:block 2xl:w-6/12', '2xl:block 2xl:w-7/12', '2xl:block 2xl:w-8/12', '2xl:block 2xl:w-9/12', '2xl:block 2xl:w-10/12', '2xl:block 2xl:w-11/12', '2xl:block 2xl:w-full'];

// Replaces react-grid-system <Col>: 12-column flex child with px-2 gutter.
export const Col: FC<ColProps> = ({xs, sm, md, lg, xl, xxl, className, ...props}) => {
	const classNames = ['px-2'];
	if (xs !== undefined) classNames.push(XS[xs]);
	if (sm !== undefined) classNames.push(SM[sm]);
	if (md !== undefined) classNames.push(MD[md]);
	if (lg !== undefined) classNames.push(LG[lg]);
	if (xl !== undefined) classNames.push(XL[xl]);
	if (xxl !== undefined) classNames.push(XXL[xxl]);
	if (className) classNames.push(className);

	return <div {...props} className={classNames.join(' ')}/>;
};
