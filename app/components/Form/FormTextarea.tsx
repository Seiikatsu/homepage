import {TextareaHTMLAttributes} from 'react';
import {useField} from 'remix-validated-form';
import {commonFieldErrorStyles, commonFieldStyles} from './styles';
import {FieldProps} from './types';

export type FormTextareaFieldProps = FieldProps<string> & {
	rows?: TextareaHTMLAttributes<HTMLTextAreaElement>['rows'];
};

export const FormTextarea = (props: FormTextareaFieldProps) => {
	const {name, rows, label, required, ...formProps} = props;
	const {getInputProps, error, touched} = useField(name);

	const classNames = [commonFieldStyles, 'h-[32px]'];
	if (touched && error) {
		classNames.push(commonFieldErrorStyles);
	}

	return (
		<textarea
			className={classNames.join(' ')}
			{...getInputProps(formProps)}
			placeholder={`${required ? '* ' : ''}${label}`}
			rows={rows}
		/>
	);
};
