export type FieldProps<V = any> = {
	name: string;
	onChange?: ((...args: any[]) => void) | undefined;
	onBlur?: ((...args: any[]) => void) | undefined;
	label: string;
	required?: boolean;
};

export type CommonFieldStateProps = {
	error?: boolean;
}
