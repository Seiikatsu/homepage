import {FC} from 'react';
import {LiProps} from '~/components/list/types';

export const Li: FC<LiProps> = (props) => {
	return <li {...props} className="p-2 cursor-pointer"/>;
};
