import { Formik, Form as FormikForm, FormikValues, FormikConfig } from "formik";
import { PropsWithChildren } from "react";

export type FormProps<V extends FormikValues> = PropsWithChildren<{
  initialValues: FormikConfig<V>["initialValues"];
  onSubmit: FormikConfig<V>["onSubmit"];
  validationSchema: FormikConfig<V>['validationSchema'];
}>;

export function Form<V extends FormikValues>(props: FormProps<V>) {
  const { initialValues, onSubmit, validationSchema, children } = props;

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
}
