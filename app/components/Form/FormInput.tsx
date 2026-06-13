import {useField} from '@rvf/react-router';
import {InputHTMLAttributes} from 'react';
import {commonFieldErrorStyles, commonFieldStyles} from './styles';
import {FieldProps} from './types';

export type FormInputFieldProps = FieldProps<string> & {
	type?: InputHTMLAttributes<HTMLInputElement>['type'];
};

export const FormInput = (props: FormInputFieldProps) => {
	const {name, type, label, required, ...formProps} = props;
	const field = useField(name);
	const error = field.error();

	const classNames = [commonFieldStyles, 'h-[32px]'];
	if (error) {
		classNames.push(commonFieldErrorStyles);
	}

	return (
		<input
			className={classNames.join(' ')}
			{...field.getInputProps({
				...formProps,
				type,
				placeholder: `${required ? '* ' : ''}${label}`,
			})}
		/>
	);
};
