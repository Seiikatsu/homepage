import {useField} from '@rvf/react-router';
import {TextareaHTMLAttributes} from 'react';
import {commonFieldErrorStyles, commonFieldStyles} from './styles';
import {FieldProps} from './types';

export type FormTextareaFieldProps = FieldProps<string> & {
	rows?: TextareaHTMLAttributes<HTMLTextAreaElement>['rows'];
};

export const FormTextarea = (props: FormTextareaFieldProps) => {
	const {name, rows, label, required, ...formProps} = props;
	const field = useField(name);
	const error = field.error();

	const classNames = [commonFieldStyles];
	if (error) {
		classNames.push(commonFieldErrorStyles);
	}

	return (
		<textarea
			className={classNames.join(' ')}
			{...field.getInputProps({
				...formProps,
				rows,
				placeholder: `${required ? '* ' : ''}${label}`,
			})}
		/>
	);
};
