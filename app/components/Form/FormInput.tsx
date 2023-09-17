import {InputHTMLAttributes} from 'react';
import {useField} from 'remix-validated-form';
import {commonFieldErrorStyles, commonFieldStyles} from './styles';
import {FieldProps} from './types';

export type FormInputFieldProps = FieldProps<string> & {
	type?: InputHTMLAttributes<HTMLInputElement>['type'];
};

export const FormInput = (props: FormInputFieldProps) => {
	const {name, type, label, required, ...formProps} = props;
	const {getInputProps, error, touched} = useField(name);

	const classNames = [commonFieldStyles, 'h-[32px]'];
	if (touched && error) {
		classNames.push(commonFieldErrorStyles);
	}

	return (
		<input
			className={classNames.join(' ')}
			{...getInputProps(formProps)}
			placeholder={`${required ? '* ' : ''}${label}`}
			type={type}
		/>
	);
};
