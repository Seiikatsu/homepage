import { InputHTMLAttributes } from "react";
import { useField } from "formik";
import { CommonFieldStateProps, FieldProps } from "./types";
import styled from "styled-components";
import { commonFieldStyles } from "./styles";

export type FormInputFieldProps = FieldProps<string> & {
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
};

export const FormInput = (props: FormInputFieldProps) => {
  const { type, label, required, ...formikProps } = props;
  const [field, meta] = useField(formikProps);

  return (
    <>
      <Input
        placeholder={`${required ? "* " : ""}${label}`}
        type={type}
        error={meta.error}
        {...field}
        {...props}
      />
    </>
  );
};

const Input = styled.input<CommonFieldStateProps>`
  height: 32px;

  ${commonFieldStyles};
`;
