import { FieldConfig } from "formik";

export type FieldProps<V = any> = FieldConfig<V> & {
  label: string;
  required?: boolean;
};

export type CommonFieldStateProps = {
  error?: boolean;
}
