import { TextareaHTMLAttributes } from "react";
import { useField } from "formik";
import { FieldProps } from "./types";
import styled from "styled-components";
import { commonFieldStyles } from "./styles";

export type FormTextareaFieldProps = FieldProps<string> & {
  rows?: TextareaHTMLAttributes<HTMLTextAreaElement>['rows'];
};

export const FormTextarea = (props: FormTextareaFieldProps) => {
  const { rows, label, required, ...formikProps } = props;
  const [field, meta] = useField(formikProps);

  return (
    <>
      <Textarea
        placeholder={`${required ? '* ' : ''}${label}`}
        rows={rows}
        error={meta.error}
        {...field}
        {...props}
      />
    </>
  );
};

const Textarea = styled.textarea`
  ${commonFieldStyles};
`;
